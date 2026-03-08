export interface Skill {
    name: string;
    icon: string;
    category: "ai" | "languages" | "frameworks" | "infrastructure";
    proficiency: number; // 1-100
    telemetry: string; // Hover description
}

export const skills: Skill[] = [
    // AI/ML
    { name: "LangGraph", icon: "🔗", category: "ai", proficiency: 85, telemetry: "Multi-agent orchestration & stateful AI workflows. Used in production for complex reasoning pipelines." },
    { name: "LangChain", icon: "⛓️", category: "ai", proficiency: 90, telemetry: "RAG pipelines, document processing, and LLM application development. Core tool in my AI stack." },
    { name: "OpenAI API", icon: "🤖", category: "ai", proficiency: 88, telemetry: "GPT-4, embeddings, fine-tuning. Integrated into multiple production applications." },
    { name: "Snowflake", icon: "❄️", category: "ai", proficiency: 75, telemetry: "Cloud data warehousing and analytics. SQL-based data pipelines and transformations." },

    // Languages
    { name: "TypeScript", icon: "📘", category: "languages", proficiency: 92, telemetry: "Primary language for all frontend and Node.js projects. Type-safe, scalable codebases." },
    { name: "Python", icon: "🐍", category: "languages", proficiency: 90, telemetry: "Backend APIs, ML pipelines, automation scripts. Go-to for AI/ML development." },
    { name: "JavaScript", icon: "⚡", category: "languages", proficiency: 95, telemetry: "Deep understanding of ES6+, async patterns, and browser APIs." },
    { name: "SQL", icon: "🗄️", category: "languages", proficiency: 80, telemetry: "Complex queries, joins, CTEs, and database optimization across PostgreSQL and Snowflake." },

    // Frameworks
    { name: "React", icon: "⚛️", category: "frameworks", proficiency: 95, telemetry: "Expert-level component architecture, hooks, context, and performance optimization." },
    { name: "Next.js", icon: "▲", category: "frameworks", proficiency: 92, telemetry: "App Router, SSR/SSG, API routes, middleware. Framework of choice for production apps." },
    { name: "FastAPI", icon: "🚀", category: "frameworks", proficiency: 88, telemetry: "High-performance Python APIs with auto-generated docs. Used for AI service backends." },
    { name: "Node.js", icon: "🟢", category: "frameworks", proficiency: 85, telemetry: "Server-side JS, Express/Fastify, real-time applications, and CLI tools." },
    { name: "Tailwind CSS", icon: "🎨", category: "frameworks", proficiency: 90, telemetry: "Utility-first CSS for rapid UI development. Clean, maintainable styling." },

    // Infrastructure
    { name: "AWS", icon: "☁️", category: "infrastructure", proficiency: 75, telemetry: "EC2, S3, Lambda, RDS. Cloud deployments and serverless architectures." },
    { name: "GCP", icon: "🌐", category: "infrastructure", proficiency: 70, telemetry: "Cloud Functions, BigQuery, Cloud Storage. Multi-cloud development." },
    { name: "Docker", icon: "🐳", category: "infrastructure", proficiency: 80, telemetry: "Containerized development and deployment. Multi-stage builds, Docker Compose." },
    { name: "CI/CD", icon: "🔄", category: "infrastructure", proficiency: 82, telemetry: "GitHub Actions, automated testing, deployment pipelines. Ship with confidence." },
    { name: "Git", icon: "📦", category: "infrastructure", proficiency: 92, telemetry: "Advanced branching strategies, rebasing, cherry-picking. Clean git history advocate." },
    { name: "Auth0", icon: "🔐", category: "infrastructure", proficiency: 78, telemetry: "Authentication and authorization. OAuth2, JWT, RBAC implementations." },
];

export const skillCategories = [
    { id: "all", label: "ALL SYSTEMS", icon: "💻" },
    { id: "ai", label: "AI/ML", icon: "🧠" },
    { id: "languages", label: "LANGUAGES", icon: "📝" },
    { id: "frameworks", label: "FRAMEWORKS", icon: "🏗️" },
    { id: "infrastructure", label: "INFRASTRUCTURE", icon: "⚙️" },
];
