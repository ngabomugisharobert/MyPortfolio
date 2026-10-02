export const site = {
  name: "Robert Ngabo Mugisha",
  shortName: "Robert",
  nav: {
    logo: "N M R",
    links: [
      { text: "Leadership", to: "leadership" },
      { text: "Mobile", to: "mobile" },
      { text: "Career", to: "career" },
      { text: "Writing", to: "writing" },
    ],
  },
  header: {
    img: "/assets/profile.png",
    text: ["Hi!", "It's me Robert.", "I am "],
    typical: [
      "Software Engineer. 🖥",
      "Challenges Cracker. 👨🏽‍💻",
      "Mobile Developer. 📱",
    ],
    typicalPauseMs: 2000,
    btnText: "Articles on Medium",
    btnHref: "https://blog.robertngabo.com",
  },
  intro: {
    lines: ["Senior Android developer.", "AI-first builder."],
    body: "I design, build, and ship high-performance Android apps and SDKs — Kotlin, Jetpack Compose, Clean Architecture — and lead the engineering around them. Mentoring, CI/CD, and Play Store releases are part of the job, not extras.",
    location: "Seattle, WA · Open to relocation",
  },
  stats: [
    { value: "7+", label: "Years shipping" },
    { value: "6", label: "Industry domains" },
    { value: "6", label: "Companies" },
    { value: "2", label: "Master's degrees" },
  ],
  leadership: {
    kicker: "Leadership",
    title: "How I take ownership and move delivery",
    subtitle:
      "Hands-on Android lead: architecture, Compose adoption, small-team delivery, and teaching — not slide-deck management.",
    cards: [
      {
        title: "End-to-end ownership",
        body: "At HOGL I led mobile and web from design through production, including analytics, Firebase, and the workflows that actually run hydro operations.",
      },
      {
        title: "Cross-functional delivery",
        body: "I work with backend, QA, and product as a default. At Tech Consulting that meant real-time product availability; at Tieto Evry it meant MES-to-SAP ERP releases that had to land clean.",
      },
      {
        title: "Architecture and platform",
        body: "I drive Kotlin + Clean Architecture (MVP/MVVM), modularization, and the shift to Jetpack Compose so the codebase stays testable as the team and catalog grow.",
      },
      {
        title: "Mentorship and teaching",
        body: "I supervised three engineers at Tieto Evry and taught software engineering foundations at Carnegie Mellon — Java, Node, Git, CI/CD, and the habits that make juniors ship.",
      },
      {
        title: "Client and stakeholder alignment",
        body: "Remote delivery for a Finnish industrial client, bank infrastructure at BPR, and retail search at 1M+ SKU scale. I translate constraints into a sequence the team can finish.",
      },
      {
        title: "Unblocking and tradeoffs",
        body: "Lazy loading and Profiler/LeakCanary work to cut ANRs, OWASP-minded auth, and GitHub Actions so deploys are boring. I pick the bottleneck and fix it.",
      },
    ],
  },
  ai: {
    kicker: "AI-first engineering + process",
    title: "How I integrate agents into the way I build",
    subtitle:
      "GenAI is on the toolbelt. The writing is how I make it reliable: loops, verification, and mobile surfaces agents can actually call.",
    cards: [
      {
        title: "Loop / agentic engineering",
        body: "I stopped treating prompts as the job. Loops, harnesses, and repeatable agent workflows are how I actually get work through.",
      },
      {
        title: "Agent-friendly codebases",
        body: "Structure, tests, and mechanical checks that a model can run without asking me. Same TDD/BDD discipline I already use on Android.",
      },
      {
        title: "Mobile + AI agents",
        body: "Android AppFunctions and the shift from “open the app” to callable on-device actions. I am building for that interface, not only the UI.",
      },
      {
        title: "CI/CD and predictable releases",
        body: "GitHub Actions, Jenkins, GitLab CI, Azure DevOps. Automated checks belong inside the loop, not after the pull request.",
      },
    ],
    chips: [
      "Agent-friendly codebases",
      "AppFunctions",
      "AI stack 2026",
      "Loop engineering",
      "TDD / BDD",
      "GitHub Actions",
    ],
  },
  mobile: {
    kicker: "Mobile expertise",
    title: "Concept to store release",
    subtitle:
      "Full lifecycle: architecture, Kotlin, Compose, testing, security, Play Store, monitoring",
    chips: [
      "Kotlin",
      "Java",
      "Jetpack Compose",
      "Android SDK",
      "Material Design 3",
      "MVVM / MVP",
      "Clean architecture",
      "Coroutines / Flow",
      "Firebase",
      "Room",
      "Play Store",
      "CI/CD",
    ],
    body: "I architect Android apps with Kotlin, Clean Architecture, and Jetpack Compose, then take them through test, security, and Play Store. At Tech Consulting I shipped image-recognition search, scaled a catalog of 1M+ products, cut ANRs, and wired Firebase auth, Firestore, FCM, and Analytics. At HOGL I owned the mobile + web surface for hydro operations, including Flutter and Kotlin alongside the backend.",
  },
  timeline: {
    kicker: "Career timeline",
    title: "From industrial software to senior Android",
    subtitle:
      "Seven years across retail, energy, banking, manufacturing, and teaching — with two STEM master's along the way.",
    roles: [
      {
        year: "2024",
        dates: "Sep 2024–Present · Atlanta, US",
        title: "Android Developer, Tech Consulting",
        body: "Shipped “Snap a Picture, Find What You Need.” Scaled the app for 1M+ products, reduced ANRs, led Jetpack Compose adoption, and integrated Firebase (Auth, Firestore, FCM, Analytics) with OWASP-minded login and GitHub Actions CI/CD.",
      },
      {
        year: "2022",
        dates: "Jun 2022–Jun 2023 · Kigali",
        title: "Senior Android Developer, HOGL",
        body: "Led end-to-end mobile and web for hydro operations. Kotlin, Flutter, React, Spring Boot, Firebase, and Clean Architecture in an Agile delivery loop.",
      },
      {
        year: "2023",
        dates: "Jan 2023–May 2023 · Kigali",
        title: "DevOps Engineer, BPR Bank Rwanda",
        body: "CI/CD, cloud infrastructure, configuration management, monitoring, and disaster recovery for multiple bank applications.",
      },
      {
        year: "2022",
        dates: "Aug 2022–Dec 2022 · Pittsburgh",
        title: "Graduate Teaching Assistant, Carnegie Mellon University",
        body: "Software Engineering Foundations and DevOps: Java, JavaScript, Node, Git, Jenkins, Docker, Kubernetes, Terraform, Azure DevOps. Mentored students through real workflows.",
      },
      {
        year: "2019",
        dates: "Mar 2019–Jun 2023 · Kigali",
        title: "Software Engineer, High Hill Software",
        body: "Microservices in Node, Spring Boot, and FastAPI. React front ends, JWT/Spring Security, Docker on AKS, Jenkins and GitHub Actions. ~95% test coverage.",
      },
      {
        year: "2019",
        dates: "May 2019–Aug 2020 · Helsinki, remote",
        title: "Software Engineer, Tieto Evry",
        body: "Supervised three developers on TIPS/4 for pulp, paper, and packaging. MES-to-SAP ERP integrations and the backend for an automated roll wrapping line.",
      },
    ],
    education: [
      "MS Business Analytics (STEM), Emory University, Goizueta Business School",
      "MS Information Technology (Software Engineering), Carnegie Mellon University",
      "BS Computer Science, University of Rwanda",
    ],
  },
  domains: {
    kicker: "Domain depth",
    title: "Six industries, one engineering approach",
    items: [
      {
        title: "Retail / e-commerce",
        body: "Image-recognition search and a catalog of 1M+ products — performance, ANRs, real-time availability.",
      },
      {
        title: "Energy / hydro",
        body: "Mobile and web systems that stream operational data and tighten hydro workflows.",
      },
      {
        title: "Banking",
        body: "CI/CD, cloud, security, and release process for production bank applications.",
      },
      {
        title: "Manufacturing",
        body: "Pulp, paper, packaging MES and SAP ERP — plus an automated roll wrapping line.",
      },
      {
        title: "Education",
        body: "Ejo: Android + web for child development tracking. CMU: teaching the next engineers.",
      },
      {
        title: "Cloud platforms",
        body: "Property search, orders, and user management — microservices on Azure Kubernetes.",
      },
    ],
  },
  writing: {
    kicker: "Latest thinking",
    title: "Articles on engineering, agents, and mobile",
    viewAllHref: "https://blog.robertngabo.com",
    viewAllLabel: "View all articles",
    articles: [
      {
        title: "I Tried Loop Engineering",
        summary:
          "I stopped typing prompts for a few weeks and built loops instead. Notes from that shift.",
        tag: "Agents",
        readTime: "7 min read",
        href: "https://blog.robertngabo.com/writing/i-tried-loop-engineering",
      },
      {
        title: "Building Android Apps With AppFunctions",
        summary:
          "Enabling direct access to your app’s core actions by AI — without the UI in the loop.",
        tag: "Android",
        readTime: "7 min read",
        href: "https://blog.robertngabo.com/writing/building-android-apps-with-appfunctions",
      },
      {
        title: "Make Your Codebase Agent-Friendly",
        summary:
          "Most of what makes a codebase agent-friendly is work we should have been doing all along.",
        tag: "Agents",
        readTime: "7 min read",
        href: "https://blog.robertngabo.com/writing/make-your-codebase-agent-friendly",
      },
    ],
  },
  footer: {
    name: "Robert Ngabo Mugisha",
    location: "Seattle, WA · 2026",
    email: "robertngabomugisha@gmail.com",
    links: [
      { label: "GitHub", href: "https://github.com/ngabomugisharobert" },
      { label: "LinkedIn", href: "https://www.linkedin.com/in/robert-ngabo" },
      { label: "Blog", href: "https://blog.robertngabo.com" },
    ],
  },
} as const;
