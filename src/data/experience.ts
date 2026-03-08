export interface Experience {
    id: string;
    company: string;
    title: string;
    location: string;
    startDate: string;
    endDate: string;
    description: string[];
    tech: string[];
    type: "fulltime" | "internship" | "parttime" | "volunteer";
}

export const experiences: Experience[] = [
    {
        id: "riipen",
        company: "Riipen",
        title: "Software Engineering Intern",
        location: "Remote, Canada",
        startDate: "Mar 2026",
        endDate: "Present",
        description: [
            "Developing and maintaining full-stack features for Riipen's experiential learning platform",
            "Collaborating with cross-functional teams to ship production-quality code",
            "Working with modern web technologies in an agile development environment",
        ],
        tech: ["React", "TypeScript", "Node.js", "PostgreSQL"],
        type: "internship",
    },
    {
        id: "eccc",
        company: "Environment and Climate Change Canada (ECCC)",
        title: "Software QA Analyst Intern",
        location: "Gatineau, QC",
        startDate: "Aug 2025",
        endDate: "Present",
        description: [
            "Conducting comprehensive software quality assurance testing for government environmental systems",
            "Developing automated test suites to improve testing efficiency and coverage",
            "Collaborating with developers to identify and resolve software defects",
        ],
        tech: ["Python", "Selenium", "SQL", "CI/CD", "JIRA"],
        type: "internship",
    },
    {
        id: "utm-billiards",
        company: "UTM Billiards Club",
        title: "Website Manager & Lead Developer",
        location: "Mississauga, ON",
        startDate: "May 2025",
        endDate: "Present",
        description: [
            "Designed and developed the club's official website from scratch",
            "Managing web infrastructure, content updates, and member engagement features",
            "Implementing responsive design and modern UI/UX best practices",
        ],
        tech: ["React", "Next.js", "Tailwind CSS", "Vercel"],
        type: "parttime",
    },
    {
        id: "minoa",
        company: "MINOA",
        title: "Webmaster Intern",
        location: "Remote",
        startDate: "Dec 2025",
        endDate: "Present",
        description: [
            "Managing and updating organizational web presence",
            "Implementing new features and improving site performance",
            "Working with content management systems and web analytics",
        ],
        tech: ["HTML", "CSS", "JavaScript", "WordPress"],
        type: "internship",
    },
    {
        id: "utm-cse",
        company: "UTM Centre for Student Engagement",
        title: "Indigenous Programming Assistant",
        location: "Mississauga, ON",
        startDate: "Aug 2025",
        endDate: "Present",
        description: [
            "Supporting Indigenous programming initiatives and community engagement events",
            "Assisting with event planning, logistics, and communications",
            "Contributing to inclusive campus programming and cultural awareness",
        ],
        tech: [],
        type: "parttime",
    },
    {
        id: "embark",
        company: "Embark Student Corp",
        title: "Bilingual Customer Success Representative",
        location: "Remote, Canada",
        startDate: "Jul 2024",
        endDate: "Aug 2024",
        description: [
            "Provided bilingual (English/French) customer support for student financial products",
            "Resolved customer inquiries efficiently while maintaining high satisfaction scores",
            "Leveraged CRM tools to track and manage customer interactions",
        ],
        tech: ["CRM", "Salesforce"],
        type: "fulltime",
    },
    {
        id: "hallite",
        company: "Hallite Seals",
        title: "Inventory Clerk",
        location: "Mississauga, ON",
        startDate: "Nov 2023",
        endDate: "Dec 2025",
        description: [
            "Managed inventory tracking and organization for industrial seal products",
            "Maintained accurate records using inventory management systems",
            "Coordinated with teams to ensure timely order fulfillment",
        ],
        tech: ["SAP", "Excel"],
        type: "parttime",
    },
    {
        id: "utmsu",
        company: "UTMSU",
        title: "Poll Clerk",
        location: "Mississauga, ON",
        startDate: "Mar 2023",
        endDate: "Mar 2025",
        description: [
            "Facilitated student union elections ensuring fair and transparent voting processes",
            "Managed polling stations and assisted voters with procedures",
            "Maintained election integrity and accurate vote counts",
        ],
        tech: [],
        type: "parttime",
    },
];
