export interface Writing {
    id: string;
    title: string;
    date: string;
    course: string;
    excerpt: string;
    tags: string[];
    type: "essay" | "research" | "analysis" | "blog";
    contentPath?: string; // Path to markdown file
    googleDocUrl?: string; // Optional Google Docs embed URL
}

export const writings: Writing[] = [
    {
        id: "film-analysis-1",
        title: "The Semiotics of Visual Storytelling in Modern Cinema",
        date: "2025-11-15",
        course: "CCIT 201 — Media Semiotics",
        excerpt: "An exploration of how contemporary filmmakers employ semiotic frameworks to construct meaning through visual composition, color theory, and mise-en-scène. This paper analyzes the work of Denis Villeneuve and how his visual language communicates complex narratives...",
        tags: ["Film Analysis", "Semiotics", "CCIT"],
        type: "analysis",
        contentPath: "/content/writings/film-analysis.md",
    },
    {
        id: "sociology-research",
        title: "Digital Communities and Social Capital in the Post-Pandemic Era",
        date: "2025-03-20",
        course: "SOC 310 — Digital Sociology",
        excerpt: "This research paper examines how online communities fostered during the COVID-19 pandemic have evolved and their impact on traditional notions of social capital. Through qualitative analysis of Discord servers and Reddit communities...",
        tags: ["Sociology", "Research", "Digital Culture"],
        type: "research",
        contentPath: "/content/writings/digital-communities.md",
    },
    {
        id: "tech-ethics",
        title: "Ethical Implications of AI-Generated Content in News Media",
        date: "2025-09-10",
        course: "CCIT 302 — Technology & Ethics",
        excerpt: "As AI-generated content becomes increasingly prevalent in news media, this paper examines the ethical challenges surrounding authenticity, accountability, and public trust. Drawing on case studies from major news organizations...",
        tags: ["AI Ethics", "CCIT", "Research"],
        type: "essay",
        contentPath: "/content/writings/ai-ethics.md",
    },
    {
        id: "cultural-analysis",
        title: "K-Wave 2.0: How South Korean Cultural Exports Reshape Global Identity",
        date: "2024-12-05",
        course: "SOC 205 — Globalization & Culture",
        excerpt: "Analyzing the second wave of Korean cultural influence through BTS, Squid Game, and K-beauty, this paper explores how cultural exports serve as soft power instruments and reshape identity formation among global youth...",
        tags: ["Sociology", "Cultural Studies", "Globalization"],
        type: "analysis",
        contentPath: "/content/writings/kwave-analysis.md",
    },
];

export const writingTags = [
    "All",
    "Film Analysis",
    "Semiotics",
    "CCIT",
    "Sociology",
    "Research",
    "Digital Culture",
    "AI Ethics",
    "Cultural Studies",
    "Globalization",
];
