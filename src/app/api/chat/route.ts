import { NextRequest, NextResponse } from "next/server";

const SYSTEM_PROMPT = `You are Marco Anthony Ayuste's AI assistant on his portfolio website. You answer questions about Marco in a friendly, concise manner.

ABOUT MARCO:
- Name: Marco Anthony Ayuste
- Title: Software Engineer | AI/ML Builder | Full-Stack Developer
- School: University of Toronto Mississauga, Honours Bachelor of Arts, Double Major in Communication, Culture & IT (CCIT) and Sociology, graduating June 2027
- Location: Mississauga, Ontario, Canada
- Contact: marco.ayuste@mail.utoronto.ca | 647-808-1592
- Trilingual: English, French (bilingual), Tagalog
- Interests: Weightlifting, gaming, anime, billiards, skiing, music

TECH STACK:
React, Next.js, Node.js, TypeScript, JavaScript, Python, SQL, FastAPI, LangGraph, LangChain, Snowflake, AWS, GCP, Docker, CI/CD, Auth0, Tailwind CSS, Git

EXPERIENCE:
- Riipen: Software Engineering Intern (Mar 2026+)
- ECCC (Environment and Climate Change Canada): Software QA Analyst Intern (Aug 2025+)
- UTM Billiards Club: Website Manager & Lead Developer (May 2025+)
- MINOA: Webmaster Intern (Dec 2025+)
- UTM Centre for Student Engagement: Indigenous Programming Assistant (Aug 2025+)
- Embark Student Corp: Bilingual Customer Success Rep (Jul-Aug 2024)
- Hallite Seals: Inventory Clerk (Nov 2023 - Dec 2025)
- UTMSU: Poll Clerk (Mar 2023 - Mar 2025)

KEY PROJECTS:
- LOCATR: AI-powered lost & found platform, won DeerHacks V hackathon. Built with React, FastAPI, Python, OpenAI, LangChain.
- Developer Portfolio: This website! Built with Next.js, React Three Fiber, TypeScript, Tailwind CSS, Framer Motion.
- AI Research Assistant: Intelligent document analysis tool with LangGraph and LangChain.
- UTM Billiards Club Website: Official website for the billiards club.

RULES:
- Keep responses concise (2-3 sentences max)
- Be friendly and professional
- If asked about things unrelated to Marco, politely redirect
- Never share sensitive personal information beyond what's listed above
- Encourage visitors to reach out via the contact form for detailed discussions`;

// Simple in-memory rate limiting
const rateLimit = new Map<string, { count: number; resetTime: number }>();
const RATE_LIMIT = 10; // requests per window
const RATE_WINDOW = 60 * 1000; // 1 minute

function checkRateLimit(ip: string): boolean {
    const now = Date.now();
    const record = rateLimit.get(ip);

    if (!record || now > record.resetTime) {
        rateLimit.set(ip, { count: 1, resetTime: now + RATE_WINDOW });
        return true;
    }

    if (record.count >= RATE_LIMIT) return false;
    record.count++;
    return true;
}

export async function POST(request: NextRequest) {
    const ip = request.headers.get("x-forwarded-for") || "unknown";

    if (!checkRateLimit(ip)) {
        return NextResponse.json(
            { error: "Rate limit exceeded. Please try again in a minute." },
            { status: 429 }
        );
    }

    try {
        const { message } = await request.json();

        if (!message || typeof message !== "string" || message.length > 500) {
            return NextResponse.json(
                { error: "Invalid message. Max 500 characters." },
                { status: 400 }
            );
        }

        // Check for API key
        const apiKey = process.env.OPENAI_API_KEY;

        if (!apiKey) {
            // Fallback: provide a basic response without API
            return NextResponse.json({
                reply: getBasicResponse(message),
            });
        }

        // Call OpenAI API
        const response = await fetch("https://api.openai.com/v1/chat/completions", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${apiKey}`,
            },
            body: JSON.stringify({
                model: "gpt-4o-mini",
                messages: [
                    { role: "system", content: SYSTEM_PROMPT },
                    { role: "user", content: message },
                ],
                max_tokens: 200,
                temperature: 0.7,
            }),
        });

        if (!response.ok) {
            throw new Error("OpenAI API error");
        }

        const data = await response.json();
        return NextResponse.json({
            reply: data.choices[0]?.message?.content || "Sorry, I couldn't generate a response.",
        });
    } catch {
        return NextResponse.json({
            reply: "I'm having trouble connecting right now. Feel free to reach Marco directly at marco.ayuste@mail.utoronto.ca",
        });
    }
}

function getBasicResponse(message: string): string {
    const lower = message.toLowerCase();

    if (lower.includes("skill") || lower.includes("tech") || lower.includes("stack")) {
        return "Marco works with React, Next.js, TypeScript, Python, FastAPI, LangGraph, LangChain, AWS, Docker, and more. He's particularly passionate about AI/ML and full-stack development!";
    }
    if (lower.includes("project") || lower.includes("locatr") || lower.includes("hackathon")) {
        return "Marco's flagship project is LOCATR, an AI-powered lost & found platform that won DeerHacks V. He also builds full-stack web apps and AI tools using LangGraph and LangChain. Check out the Projects page for more!";
    }
    if (lower.includes("experience") || lower.includes("work") || lower.includes("job")) {
        return "Marco has interned at Riipen (Software Engineering) and ECCC (Software QA). He also manages the UTM Billiards Club website and has experience in customer success and event coordination. Visit the Experience page for details!";
    }
    if (lower.includes("education") || lower.includes("school") || lower.includes("university")) {
        return "Marco is studying at the University of Toronto Mississauga, pursuing an Honours B.A. with a double major in CCIT (Communication, Culture & IT) and Sociology. He's graduating in June 2027.";
    }
    if (lower.includes("contact") || lower.includes("email") || lower.includes("reach")) {
        return "You can reach Marco at marco.ayuste@mail.utoronto.ca or 647-808-1592. Also check out the Contact page to send a message directly!";
    }
    if (lower.includes("hello") || lower.includes("hi") || lower.includes("hey")) {
        return "Hey there! 👋 I'm Marco's AI assistant. Ask me about his skills, projects, experience, or anything else about him!";
    }

    return "That's a great question! Marco is a Software Engineer and AI/ML Builder at UofT. For more details, explore the different sections of this portfolio or reach out via the Contact page!";
}
