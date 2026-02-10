import { createContext, useContext, useEffect, useState, type ReactNode } from "react";

export type ThemeMode = "light" | "dark" | "system";

export type AccentColor = {
  name: string;
  value: string;
  hsl: string;
};

export const accentColors: AccentColor[] = [
  { name: "Lavender", value: "#8764B8", hsl: "265 40% 56%" },
  { name: "Storm", value: "#7A7AE6", hsl: "240 65% 69%" },
  { name: "Teal", value: "#0EA5A5", hsl: "180 87% 35%" },
  { name: "Rose", value: "#D4729C", hsl: "335 52% 64%" },
  { name: "Copper", value: "#C68B59", hsl: "30 48% 56%" },
  { name: "Sage", value: "#6B9E78", hsl: "135 22% 52%" },
  { name: "Sky", value: "#60A5FA", hsl: "217 91% 68%" },
  { name: "Slate", value: "#8B9EB3", hsl: "214 20% 62%" },
];

interface ThemeContextType {
  mode: ThemeMode;
  setMode: (mode: ThemeMode) => void;
  resolvedMode: "light" | "dark";
  accent: AccentColor;
  setAccent: (accent: AccentColor) => void;
}

const ThemeContext = createContext<ThemeContextType | null>(null);

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [mode, setMode] = useState<ThemeMode>(() => {
    if (typeof window !== "undefined") {
      return (localStorage.getItem("theme-mode") as ThemeMode) || "dark";
    }
    return "dark";
  });

  const [accent, setAccent] = useState<AccentColor>(() => {
    if (typeof window !== "undefined") {
      const saved = localStorage.getItem("theme-accent");
      if (saved) {
        const found = accentColors.find((c) => c.name === saved);
        if (found) return found;
      }
    }
    // Default to Copper - warm, earthy, and elegant
    return accentColors.find(c => c.name === "Copper") || accentColors[4];
  });

  const [systemDark, setSystemDark] = useState(() => {
    if (typeof window !== "undefined") {
      return window.matchMedia("(prefers-color-scheme: dark)").matches;
    }
    return true;
  });

  const resolvedMode = mode === "system" ? (systemDark ? "dark" : "light") : mode;

  // Listen for system preference changes
  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    const handler = (e: MediaQueryListEvent) => setSystemDark(e.matches);
    mediaQuery.addEventListener("change", handler);
    return () => mediaQuery.removeEventListener("change", handler);
  }, []);

  // Persist and apply theme
  useEffect(() => {
    localStorage.setItem("theme-mode", mode);
    document.documentElement.setAttribute("data-theme", resolvedMode);
    document.documentElement.style.setProperty("--accent-hsl", accent.hsl);
    document.documentElement.style.setProperty("--accent-color", accent.value);
  }, [mode, resolvedMode, accent]);

  // Persist accent
  useEffect(() => {
    localStorage.setItem("theme-accent", accent.name);
  }, [accent]);

  return (
    <ThemeContext.Provider value={{ mode, setMode, resolvedMode, accent, setAccent }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
}
