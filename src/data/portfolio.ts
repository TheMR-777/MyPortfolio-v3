export const portfolioData = {
  personal: {
    name: "Muhammad Ammar Khan",
    role: "Software Architect & Security Engineer",
    location: "Jhelum, Punjab, Pakistan",
    email: "m.shahzad.ms72@gmail.com",
    phone: "+92 314 5401405",
    dob: "April 1, 2001",
    nationality: "Pakistani",
    profileImage: "https://i.imgur.com/c9vQr7Y.png",
    taglines: [
      "Creating What Hasn't Been Built Before",
      "Software Architect & Security Engineer",
      "C++ Expert & Cryptography Specialist",
      "AI-Powered Innovation Engineer"
    ],
    about: "A lifelong journey of innovation and engineering excellence, from age 3 to industry leader. I blend low-level mastery (C++, Cryptography) with high-level architecture (.NET, AI) to solve problems others consider impossible.",
    philosophy: "I don't accept 'because that's how it's done' as an answer. True mastery shows in making complex things simple, not simple things complex. Each problem deserves a solution tailored to its unique constraints.",
    social: {
      github: "https://github.com/TheMR-777",
      linkedin: "https://www.linkedin.com/in/777-ammar",
      website: "https://TheMR-777.github.io/",
      whatsapp: "https://wa.me/923145401405",
      nullbyte: "https://creator.wonderhowto.com/h4ck3r_777/"
    },
    stats: {
      experience: "5+ Years",
      projects: "20+",
      productivity: "200%",
      cgpa: "3.73"
    },
    languages: {
      urdu: "Native",
      english: "IELTS 7.5 (L:8.5, R:7.0, W:7.0, S:7.0)"
    },
    interests: [
      {
        name: "Astronomy",
        description: "Second-largest passion after computing. I study the cosmos to build intuition about black holes, stellar evolution, and cosmic structure."
      },
      {
        name: "Physics",
        description: "A late-blooming love that became a core lens. I reason about electromagnetism, chip fabrication, GPUs, and hardware architectures."
      },
      {
        name: "Psychology",
        description: "Nurtured by my psychologist mother. I study cognitive biases and social dynamics to design humane products and lead better teams."
      }
    ]
  },

  journey: {
    genesis: {
      title: "The Genesis (Age 3-10)",
      period: "1994 - 2011",
      description: "My journey began at age 3, influenced by my uncle who ran a computer lab in Rawalpindi. Early exposure through games like GTA Vice City and SEGA Master Collection wasn't just entertainment—it was the foundation of my lifelong passion. When gifted a high-spec PC with Windows XP, limited access became my greatest teacher. I learned to troubleshoot independently, often finding myself more capable than local tech experts."
    },
    awakening: {
      title: "The Awakening (Teenage Years)",
      period: "2017 - 2019",
      description: "Watching 'Inkeshaaf' on 24 News sparked my passion for ethical hacking. I set an ambitious goal: hack my Android phone from another Android—a challenge many considered impossible. Over a year, I mastered Linux, Python, networking, and pioneered mobile-to-mobile penetration testing. My article became the second most-read on Null Byte (2018-2020), and I founded an international cybersecurity community spanning 6 countries."
    },
    academic: {
      title: "Academic Excellence (2019-2023)",
      period: "2019 - 2023",
      description: "At University of the Punjab, I achieved a 3.73 CGPA while going far beyond curriculum. Became an unofficial C++ teaching assistant in my second semester, served as deputy class representative during COVID-19, and was the first team to complete both FYP and research papers simultaneously."
    },
    professional: {
      title: "Professional Evolution (2023-Present)",
      period: "2023 - Present",
      description: "My industry transition was strategic. Selected immediately by ACE's CTO, I now serve as .NET Developer & Architecture Consultant, transforming enterprise systems. The defining achievement: devoting an entire year to the Employee Monitoring Suite—a system I consider a professional masterpiece."
    }
  },

  skills: {
    languages: [
      { name: "C++", level: "Expert", years: "6+", note: "Modern C++23/26, Template Metaprogramming, STL" },
      { name: "C# / .NET", level: "Advanced", years: "3+", note: ".NET 9, LINQ, Async/Await, Performance" },
      { name: "Python", level: "Intermediate", years: "5+", note: "Scientific Computing, Automation, ML" },
      { name: "TypeScript", level: "Intermediate", years: "2+", note: "Angular, Node.js, Modern ES6+" },
      { name: "SQL", level: "Advanced", years: "4+", note: "Complex Queries, Optimization" },
      { name: "Dart", level: "Proficient", years: "3+", note: "Flutter, State Management" }
    ],
    frameworks: [
      { name: ".NET Core / Blazor", category: "Backend" },
      { name: "Angular 20", category: "Frontend" },
      { name: "Flutter", category: "Mobile" },
      { name: "AvaloniaUI / WPF", category: "Desktop" },
      { name: "SignalR / gRPC", category: "Real-time" },
      { name: "GraphQL", category: "API" }
    ],
    core: [
      { name: "System Architecture", description: "Microservices, Event-Driven, Multi-tenant, DDD" },
      { name: "Cryptography", description: "AES-256, RSA-4096, ECC, Key Management" },
      { name: "Performance Engineering", description: "Optimization, Profiling, Low-latency systems" },
      { name: "Security Engineering", description: "Penetration Testing, Zero-Trust, Secure Design" },
      { name: "AI Integration", description: "Prompt Engineering, LLM Integration, Copilot workflows" }
    ],
    tools: ["Docker", "Git", "Azure DevOps", "PostgreSQL", "Redis", "OpenSSL", "VS Code", "IntelliJ IDEA"]
  },

  experience: [
    {
      company: "ACE Money Transfer",
      role: ".NET Developer & Architecture Consultant",
      period: "Jun 2023 — Present",
      location: "Remote/Hybrid",
      summary: "Transforming enterprise systems into multi-tenant SaaS platforms. Single-handedly engineered the Employee Monitoring Suite achieving 200% productivity boost with zero defects at launch.",
      description: "Progressed from UI/UX to leading core platform modules and multi-tenant migration decisions. Focus on building reusable primitives that power every business module.",
      highlights: [
        "Architected Employee Monitoring Suite solo — zero defects at launch",
        "Designed 'ACE Password Vault' with multi-layered cryptography",
        "Led ERP Platform Engineering: Rules, Approvals, Rights, Notifications",
        "Integrated Mastercard, HBL, and PNB payment services",
        "Received direct commendation from CTO for architectural innovations"
      ],
      modules: [
        {
          name: "Composable Permissions",
          description: "Tenant-aware, module-agnostic access control. Designed for seamless integration across the entire ERP suite without modification.",
          impact: "Eliminated redundant auth code across 5+ modules"
        },
        {
          name: "Approvals Orchestration Engine",
          description: "Generic plug-in workflow layer supporting approve/reject/escalate flows. Any module can integrate approvals with minimal configuration.",
          impact: "Reduced approval implementation time by 80%"
        },
        {
          name: "Rules + Thresholds Framework",
          description: "Centralized policy engine driving business logic. Handles approvals, restrictions, escalations, and notifications through declarative rules.",
          impact: "Enabled non-developer policy changes"
        },
        {
          name: "Notifications & Template Center",
          description: "Multi-channel delivery (Email/In-App/Push/WhatsApp) with runtime-managed, localizable templates.",
          impact: "Unified notification logic, 60% less code"
        },
        {
          name: "Dynamic JSON Form Engine",
          description: "Schema-driven UI generation in TypeScript. Theme-compliant, reusable across modules, eliminates form boilerplate.",
          impact: "Cut form development time by 70%"
        },
        {
          name: "Command Palette",
          description: "Rights-compliant navigation with fuzzy search and score-based ranking. VS Code/Spotlight-style UX for enterprise applications.",
          impact: "Improved navigation efficiency 3x"
        }
      ],
      impact: [
        "200% productivity increase via Employee Monitoring Suite",
        "35% reduction in unauthorized breaks",
        "5+ major modules standardized on new platform",
        "Multi-tenant architecture enabling SaaS transformation"
      ],
      tech: [".NET 9", "Blazor", "Angular", "GraphQL", "SignalR", "PostgreSQL"]
    },
    {
      company: "MIMOS Berhad (Malaysia)",
      role: "Lead Developer & System Architect",
      period: "Dec 2024 — Jul 2025",
      location: "Remote",
      summary: "Built sophisticated UWB Indoor Positioning Simulation System as a solo project, eliminating the need for costly physical testing.",
      description: "Pioneered accurate indoor positioning simulation without physical hardware. Developed proprietary algorithms for signal propagation and created multi-layered visualization systems.",
      highlights: [
        "First-principles simulation without physical hardware",
        "Real-time heatmap visualization with NumPy/SciPy",
        "Material-specific signal attenuation modeling",
        "Received exceptional praise for accuracy and attention to detail"
      ],
      modules: [
        {
          name: "Simulation Engine",
          description: "C# 13 and .NET 9 core modeling signal attenuation, reflection, and geometric constraints with high precision.",
          impact: "Matched physical test results within 5% margin"
        },
        {
          name: "Signal Processing Pipeline",
          description: "Python 3.13 modules using NumPy/SciPy for computational geometry and heatmap generation.",
          impact: "Real-time updates for large floorplans"
        },
        {
          name: "Visualization Layer",
          description: "WPF interface integrating Matplotlib for coverage analysis. Interactive anchor placement and optimization.",
          impact: "Intuitive UI praised by client"
        }
      ],
      impact: [
        "Eliminated need for initial physical site surveys",
        "Compressed deployment timeline from months to days",
        "Enabled 'perfect' theoretical anchor placement before installation"
      ],
      tech: ["C# 13", ".NET 9", "Python 3.13", "NumPy", "SciPy", "WPF", "Matplotlib"]
    },
    {
      company: "TeqHolic",
      role: "Flutter Development Intern",
      period: "2023 (3 Months)",
      location: "Jhelum, Pakistan",
      summary: "Developed cross-platform mobile applications including social media and e-commerce platforms with real-time capabilities.",
      description: "Gained practical industry experience in agile development, focusing on responsive UI architectures and performance optimization for low-bandwidth environments.",
      highlights: [
        "Built Chirp: Twitter-like app with real-time updates",
        "Developed Sara Kuch: E-commerce with Shopify integration",
        "Optimized for low-bandwidth environments"
      ],
      modules: [
        {
          name: "Chirp",
          description: "Social media application with real-time feeds, interactions, and notifications using Firebase.",
          impact: "Full MVP in 6 weeks"
        },
        {
          name: "Sara Kuch",
          description: "E-commerce platform integrating Shopify REST API with cart, checkout, and order tracking.",
          impact: "Complete e-commerce flow delivered"
        }
      ],
      impact: [
        "Delivered two full MVP applications in 3 months",
        "Established responsive UI patterns for future projects"
      ],
      tech: ["Flutter", "Dart", "Firebase", "Shopify API", "Provider"]
    }
  ],

  projects: [
    {
      title: "Employee Monitoring Suite",
      category: "Flagship • Enterprise",
      tech: [".NET", "Blazor", "GraphQL", "ApexCharts", "Micro-ORM"],
      summary: "Company-wide monitoring system achieving 200% productivity boost with zero defects at launch.",
      description: "Single-handedly designed and engineered over the course of one year. Widely recognized inside ACE for directly enabling productivity improvements and setting a new benchmark for internal tools.",
      challenge: "The company lacked visibility into remote work patterns. Existing solutions were either invasive, inaccurate, or lacked context-aware reporting. Privacy concerns made aggressive tracking unacceptable.",
      approach: "Engineered a privacy-conscious, OS-level monitoring agent that respects boundaries while providing meaningful insights. Built a real-time Blazor dashboard with GraphQL for efficient data pipelines. Used Micro-ORM for high-throughput logging without the overhead of full ORMs.",
      impact: [
        "Zero defects at production launch",
        "200% productivity increase measured company-wide",
        "35% reduction in unauthorized breaks",
        "Recognized by CTO as a professional masterpiece",
        "Established as company standard for monitoring"
      ],
      link: "#"
    },
    {
      title: "UWB Indoor Positioning Simulation",
      category: "Simulation • Research",
      tech: ["C# 13", ".NET 9", "Python", "NumPy", "SciPy", "WPF"],
      summary: "Sophisticated simulation engine enabling UWB deployment planning without physical hardware.",
      description: "Client needed to validate UWB anchor placements before expensive physical installation. Built a hybrid .NET/Python system modeling signal propagation with material-specific attenuation.",
      challenge: "Deploying UWB anchors requires expensive physical testing. Mistakes in placement are costly to fix. The client needed virtual validation before drilling holes.",
      approach: "Built a hybrid simulation engine: .NET for UI, core logic, and geometric calculations; Python (NumPy/SciPy) for signal propagation modeling and heatmap generation. Implemented material-specific attenuation for walls, glass, and obstacles.",
      impact: [
        "Reduced deployment costs by approximately 60%",
        "Compressed timeline from months to days",
        "Simulation accuracy within 5% of physical tests",
        "Exceptional client praise for attention to detail"
      ],
      link: "#"
    },
    {
      title: "Enterprise ERP Platform",
      category: "SaaS • Architecture",
      tech: [".NET 9", "TypeScript", "Angular", "SignalR", "PostgreSQL"],
      summary: "Multi-tenant platform with composable subsystems powering all business modules.",
      description: "Transformed fragmented internal tools into a unified, multi-tenant SaaS ecosystem. Architected reusable engines rather than one-off module logic.",
      challenge: "Legacy tools were fragmented, single-tenant, and hard to maintain. Adding a new module meant reinventing authentication, approvals, and logging from scratch.",
      approach: "Architected a 'SaaS Backbone' containing generic Approvals, Rules, Notifications, and Rights engines. Business modules plug into this backbone. Used EAV patterns for flexibility and multi-tenant isolation.",
      impact: [
        "Enabled rapid rollout of 5+ business modules",
        "Transformed tools into marketable SaaS product",
        "90% reduction in module development time",
        "Multi-company support without code changes"
      ],
      link: "#"
    },
    {
      title: "ACE Password Vault",
      category: "Security • Cryptography",
      tech: ["C++", ".NET", "OpenSSL", "AES-256", "RSA-4096"],
      summary: "Multi-layered encryption system with custom cryptographic protocols exceeding industry standards.",
      description: "Financial credentials required security beyond standard password managers. Designed a defense-in-depth architecture with custom auditing and key rotation.",
      challenge: "Storing sensitive financial credentials required higher security than off-the-shelf solutions. Needed custom auditing, key rotation, and compliance with internal policies.",
      approach: "Designed multi-layered security: inner loops use C++ for raw cryptographic operations via OpenSSL wrappers; outer layers use .NET for secure memory management and PWA interface. Implemented zero-knowledge principles.",
      impact: [
        "Became critical company infrastructure",
        "Set new internal security standards",
        "Zero security incidents since deployment",
        "Protected most sensitive credentials"
      ],
      link: "#"
    },
    {
      title: "mr_crypt",
      category: "Open Source • Library",
      tech: ["C++23", "OpenSSL 3.0+", "Template Metaprogramming"],
      summary: "Revolutionary range-like syntax for C++ cryptography reducing implementation time by 10x.",
      description: "OpenSSL's C-API is verbose and error-prone. Created a wrapper using C++23 ranges and template metaprogramming for type-safe, fluent cryptographic operations.",
      challenge: "OpenSSL's C-API requires extensive boilerplate, manual memory management, and is difficult to use safely in modern C++ projects.",
      approach: "Leveraged C++23 ranges and concepts to create a fluent, type-safe API. Template metaprogramming ensures compile-time safety. Seamless OpenSSL 3.0+ integration.",
      impact: [
        "10x reduction in implementation boilerplate",
        "Significant improvement in code readability",
        "Recognition in C++ community",
        "Active open source maintenance"
      ],
      link: "https://github.com/TheMR-777"
    },
    {
      title: "Costaz",
      category: "Academic • Education",
      tech: ["Flutter", "Google Sheets API", "Firebase"],
      summary: "Decentralized academic management system reducing manual data entry by 50%.",
      description: "Built for University of the Punjab after surveying 10+ professors. Solved record management pain points with offline-first design and Google integration.",
      challenge: "Professors struggled with fragmented record-keeping. Unreliable connectivity made cloud-only solutions impractical.",
      approach: "Designed offline-first architecture using Google accounts for decentralized auth. Integrated Google Sheets for familiar data handling. Excel export for report generation.",
      impact: [
        "50% reduction in manual data entry",
        "30% improvement in data accuracy",
        "Adopted by multiple departments",
        "Recognition for elegant architecture"
      ],
      link: "#"
    }
  ],

  publications: [
    {
      title: "Identification of Paddy Disease Along Its Processing Time",
      authors: "Khan, S.N., Khan, S.U., Khan, M.A., Ansar, M.U., et al.",
      journal: "Quantum Journal of Social Sciences and Humanities",
      volume: "4(3), 72-80",
      doi: "10.55197/qjssh.v4i3.251",
      year: "2023"
    },
    {
      title: "Paddy Leaf Disease Symptoms Detection Through Artificial Neural Network",
      authors: "Khan, S.N., Khan, S.U., Ahmed, S., Khan, M.A., Khan, J.",
      journal: "Quantum Journal of Engineering, Science and Technology",
      volume: "4(4), 1-10",
      year: "2023",
      link: "https://qjoest.com/index.php/qjoest/article/view/123/75"
    }
  ],

  nullbyteArticles: [
    {
      title: "Installing Metasploit Framework on Android - Part 1: Termux",
      reads: "Most read 2018-2020",
      link: "https://null-byte.wonderhowto.com/forum/to-install-metasploit-framework-android-part-1-termux-0186792/"
    },
    {
      title: "Hack Android Device with Termux - Part 2: Over WLAN Hotspot",
      link: "https://null-byte.wonderhowto.com/forum/to-hack-android-device-with-termux-android-part-2-over-wlan-hotspot-ultimate-guide-0187637/"
    },
    {
      title: "Hack Android Device with Termux - Part 1: Over Internet",
      link: "https://null-byte.wonderhowto.com/forum/to-hack-android-device-with-termux-android-part-1-over-internet-ultimate-guide-0187005/"
    }
  ],

  certifications: [
    {
      name: "Modern C++ Mastery with Game Development",
      issuer: "TheCherno",
      note: "Performance-focused engineering mentorship"
    },
    {
      name: "Advanced Cryptography",
      issuer: "Christof Paar",
      note: "Deep cryptographic theory and implementation"
    },
    {
      name: "Flutter Development",
      issuer: "The App Brewery (Udemy)",
      note: "Cross-platform mobile development"
    },
    {
      name: ".NET Basic to Advanced",
      issuer: "CodeWithMosh & Tim Corey",
      note: "Enterprise .NET development patterns"
    },
    {
      name: "IELTS Academic",
      issuer: "British Council",
      score: "Band 7.5",
      breakdown: "L:8.5, R:7.0, W:7.0, S:7.0"
    }
  ],

  education: {
    degree: "BS (Honors) Computer Science",
    institution: "University of the Punjab, Jhelum Campus",
    period: "2019 - 2023",
    cgpa: "3.73 / 4.0",
    percentage: "84%",
    achievements: [
      "Unofficial C++ teaching assistant from 2nd semester",
      "Deputy class representative during COVID-19",
      "First team to complete FYP and research simultaneously",
      "Collaborated with visiting PhD professor on quantum computing"
    ]
  }
};

export type Project = typeof portfolioData.projects[0];
export type Experience = typeof portfolioData.experience[0];
