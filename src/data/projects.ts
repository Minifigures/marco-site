export interface Project {
    id: string;
    title: string;
    shortDescription: string;
    fullDescription: string;
    tech: string[];
    category: "ai" | "fullstack" | "frontend" | "tool";
    featured: boolean;
    github?: string;
    liveUrl?: string;
    image: string;
    award?: string;
}

export const projects: Project[] = [
    {
        id: "locatr",
        title: "LOCATR",
        shortDescription: "AI-powered lost & found platform that won DeerHacks V hackathon. Uses computer vision to match lost items with found submissions.",
        fullDescription: "LOCATR is an AI-powered lost and found platform built during DeerHacks V (2025). It leverages computer vision and natural language processing to automatically match lost item reports with found submissions. The platform features real-time notifications, image similarity matching, and an intuitive user interface that simplifies the item recovery process. Built with a modern tech stack including React, FastAPI, and various AI/ML libraries for image processing and text matching.",
        tech: ["React", "FastAPI", "Python", "OpenAI", "LangChain", "Tailwind CSS"],
        category: "ai",
        featured: true,
        github: "https://github.com/deerhacks/LOCATR",
        image: "/images/projects/locatr.png",
        award: "🏆 DeerHacks V Winner",
    },
    {
        id: "portfolio",
        title: "Developer Portfolio",
        shortDescription: "This very website! A 3D interactive portfolio built with Next.js, React Three Fiber, and Framer Motion.",
        fullDescription: "A premium developer portfolio featuring 3D interactive elements built with React Three Fiber, smooth Framer Motion animations, terminal/hacker aesthetic, AI chatbot companion, and a comprehensive showcase of projects, writing, and presentations. Built to stand out from typical developer portfolios.",
        tech: ["Next.js", "React Three Fiber", "TypeScript", "Tailwind CSS", "Framer Motion"],
        category: "frontend",
        featured: false,
        github: "https://github.com/Minifigures/marco-portfolio",
        liveUrl: "https://marcoanthony.netlify.app",
        image: "/images/projects/portfolio.png",
    },
    {
        id: "ai-chatbot",
        title: "AI Research Assistant",
        shortDescription: "An intelligent document analysis tool powered by LangGraph and LangChain for automated research workflows.",
        fullDescription: "Built an AI-powered research assistant that can ingest documents, extract key insights, and answer complex questions about the content. Features multi-agent orchestration with LangGraph, document chunking and retrieval with vector embeddings, and a conversational interface for iterative research exploration.",
        tech: ["Python", "LangGraph", "LangChain", "FastAPI", "React", "Snowflake"],
        category: "ai",
        featured: false,
        github: "https://github.com/Minifigures",
        image: "/images/projects/research-assistant.png",
    },
    {
        id: "billiards-site",
        title: "UTM Billiards Club Website",
        shortDescription: "Official website for the UTM Billiards Club featuring event management, member profiles, and real-time updates.",
        fullDescription: "Designed and developed the official website for the UTM Billiards Club from scratch. Features include event scheduling, member directory, photo gallery, and integration with social media feeds. Built with a focus on responsive design and accessibility.",
        tech: ["React", "Next.js", "Tailwind CSS", "Vercel"],
        category: "fullstack",
        featured: false,
        github: "https://github.com/Minifigures",
        image: "/images/projects/billiards-club.png",
    },
];

export const projectCategories = [
    { id: "all", label: "ALL" },
    { id: "ai", label: "AI/ML" },
    { id: "fullstack", label: "FULL-STACK" },
    { id: "frontend", label: "FRONTEND" },
    { id: "tool", label: "TOOLS" },
];
