# Portfolio Design System: Fluent UI 2 / Windows 11 "Frosty" Edition

> **Target Audience:** AI Agents & UI Designers determining the aesthetic direction of new features.
> **Philosophy:** Super elegant, luxurious, minimalist, and deeply readable.
> **Core Aesthetic:** "Frosted Glass" (Mica/Acrylic), Noise Textures, Thin Strokes, and Lavender Accents.

---

## 1. Core Design Principles

1.  **Materiality (Mica & Acrylic):**
    *   Surfaces are never flat colors; they are "materials".
    *   **Mica:** The base background. It captures the "personality" of the desktop wallpaper (simulated via color blending).
    *   **Noise:** A subtle noise texture (`opacity: 0.035`) is **MANDATORY** on the base Mica surface to give it a premium, tactile feel.
    *   **Layering:** Content floats on `bg-layer` (semi-transparent white/black) above the Mica base.

2.  **Typography (Segoe UI Variable / Inter):**
    *   **Primary:** `Segoe UI Variable` (Windows) -> `Inter` (Fallback).
    *   **Weight:** Lean towards lighter weights (300/400) for body, 600 for headings.
    *   **Hierarchy:** Use opacity (`text-secondary`, `text-tertiary`) rather than size to distinguish importance.

3.  **Motion & Fluidity:**
    *   **Easing:** `cubic-bezier(0.16, 1, 0.3, 1)` (The "Fluent" Decelerate).
    *   **Duration:** Fast (100ms), Normal (200ms), Slow (400ms).
    *   **Micro-interactions:** Hover states should be subtle (`scale(0.98)`, `y: -1px`), never jarring.

4.  **The "Lavender" Accent:**
    *   A distinct, soft purple (`#8764B8`) represents the brand.
    *   Use abundantly for focus rings, active states, and subtle glows.
    *   **Never** use it for large backgrounds (it becomes overwhelming).

---

## 2. Design Tokens (The "DNA")

### Colors (CSS Variables)

| Token | Dark Mode (Default) | Light Mode | Usage |
| :--- | :--- | :--- | :--- |
| `--accent-color` | `#8764B8` (Lavender) | `#8764B8` | Primary Brand Color |
| `--bg-mica` | `#242424` | `#f5f5f5` | App Background (Base) |
| `--bg-solid` | `#1a1a1a` | `#ffffff` | Solid fallback |
| `--layer-default` | `rgba(255, 255, 255, 0.045)` | `rgba(255, 255, 255, 0.7)` | Standard Card Background |
| `--layer-alt` | `rgba(255, 255, 255, 0.06)` | `rgba(255, 255, 255, 0.5)` | Secondary Card Background |
| `--stroke-card` | `rgba(255, 255, 255, 0.0837)` | `rgba(0, 0, 0, 0.0578)` | Card Borders |
| `--stroke-divider`| `rgba(255, 255, 255, 0.0803)` | `rgba(0, 0, 0, 0.0803)` | Separators |
| `--text-primary` | `#ffffff` | `#1a1a1a` | Headings, Body |
| `--text-secondary`| `rgba(255, 255, 255, 0.786)` | `rgba(0, 0, 0, 0.706)` | Subtitles, Descriptions |
| `--text-tertiary` | `rgba(255, 255, 255, 0.544)` | `rgba(0, 0, 0, 0.5)` | Metadata, Captions |

### Iconography (Lucide React)

*   **Family:** `lucide-react`
*   **Stroke Width:** `1.5px` (Thin, elegant).
*   **Size:** Standard `16px` (w-4 h-4) or `18px`.
*   **Color:** Inherits text color (`text-tertiary` by default, `text-primary` on hover).

### Elevation (Shadows)

*   **Focus Ring:** `2px` solid `var(--accent-default)` with `2px` offset.
*   **Depth:** Use `--shadow-lg` (`0 8px 32px rgba(0,0,0,0.48)`) for floating modals combined with `backdrop-filter: blur(20px)`.

---

## 3. Component & Layout Recipes

### A. The "Mica" Background (Essential Setup)

Every page **MUST** start with this structure to achieve the "Frosty" look:

```tsx
<div className="min-h-screen bg-mica text-text-primary overflow-x-hidden relative">
  {/* Noise Texture Overlay - CRITICAL for aesthetics */}
  <div className="fixed inset-0 pointer-events-none opacity-[0.035] z-0 mix-blend-overlay"
       style={{ backgroundImage: `url("data:image/svg+xml,...")` }} />
  
  {/* Content (z-10 to sit above noise) */}
  <div className="relative z-10">
    {children}
  </div>
</div>
```

### B. "Glass" Cards

Cards should look like thin sheets of glass floating on the mica surface.

```tsx
<div className="
  group relative p-5 rounded-xl
  bg-layer border border-stroke
  hover:bg-layer-hover hover:border-stroke-hover
  transition-all duration-200
">
  {/* Content */}
</div>
```

*   **Corner Radius:** `rounded-xl` (12px) for cards, `rounded-lg` (8px) for buttons/inputs.
*   **Borders:** `1px` solid `border-stroke`. NEVER transparent borders.

### C. Sidebar Navigation

*   **Width:** `w-64` (Desktop), `w-full` (Mobile Sheet).
*   **Style:** `bg-mica` (Solid/Opaque look relative to content) + `border-r border-divider`.
*   **Active State:** `bg-accent-subtle` + `text-primary`.
*   **Inactive State:** `text-text-secondary` + `hover:bg-layer-hover`.

### D. Inputs & Forms

*   **Style:** `bg-layer` (Input field) + `border-stroke`.
*   **Focus:** DO NOT use default blue ring. Use the **Bottom Glow** technique:
    *   An animated `::after` pseudo-element that expands from center (`width: 0% -> 100%`) with `bg-accent`.

---

## 4. Typography & Readability Guidelines

1.  **Headings:**
    *   `font-semibold` (600).
    *   `text-text-primary`.
    *   Keep them small! A page title should be `text-2xl` or `text-lg`. Avoid massive headers.

2.  **Body Text:**
    *   `text-sm` (14px) or `text-[15px]`.
    *   `leading-relaxed` (1.625) for high readability.
    *   `text-text-secondary`. **NEVER** use pure white for body text; it causes eye strain.

3.  **Metadata/Captions:**
    *   `text-xs` (12px) or `text-[10px]`.
    *   `uppercase tracking-wider`.
    *   `font-medium text-text-tertiary`.

---

## 5. Animation Library (Framer Motion)

The interface must feel "alive".

*   **Entrance:** `initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}`.
*   **Lists:** `staggerChildren: 0.05`.
*   **Hover:** `whileHover={{ y: -2 }}` (Subtle float).
*   **Tap:** `whileTap={{ scale: 0.98 }}`.

## 6. "Do's and Don'ts" for AI

| DO | DON'T |
| :--- | :--- |
| **DO** use the `bg-mica` + noise texture combo. | **DON'T** use flat `#000000` backgrounds. |
| **DO** use `border-stroke` (approx 5-8% opacity). | **DON'T** use thick or high-contrast borders. |
| **DO** use the Lavender accent sparingly. | **DON'T** flood the UI with purple buttons. |
| **DO** use `1.5px` stroke icons. | **DON'T** use filled icons (unless active state). |
| **DO** align text to the left. | **DON'T** justify text (readability killer). |

---

> **Final Note:** The goal is a UI that feels like a native Windows 11 application but clearer, more refined, and tailored for a portfolio. It should feel "expensive."
