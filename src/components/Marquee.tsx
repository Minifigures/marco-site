"use client";

export default function Marquee() {
    const line1 = "/// SHIP FAST, ITERATE FASTER /// BUILD SYSTEMS THAT THINK /// CODE WITH PURPOSE /// EMBRACE THE GRIND /// NEVER STOP LEARNING ";
    const line2 = "/// REACT /// NEXT.JS /// TYPESCRIPT /// PYTHON /// LANGRAPH /// LANGCHAIN /// FASTAPI /// THREE.JS /// TAILWIND /// DOCKER /// AWS ";

    return (
        <div className="w-full overflow-hidden py-4 border-y border-border-subtle bg-bg-secondary/30">
            {/* Line 1 - Left */}
            <div className="flex whitespace-nowrap mb-2">
                <div className="animate-marquee-left flex">
                    <span className="font-mono text-xs tracking-[0.2em] text-text-muted opacity-60 px-4">
                        {line1.repeat(4)}
                    </span>
                    <span className="font-mono text-xs tracking-[0.2em] text-text-muted opacity-60 px-4">
                        {line1.repeat(4)}
                    </span>
                </div>
            </div>
            {/* Line 2 - Right */}
            <div className="flex whitespace-nowrap">
                <div className="animate-marquee-right flex">
                    <span className="font-mono text-xs tracking-[0.2em] text-accent-cyan/30 px-4">
                        {line2.repeat(4)}
                    </span>
                    <span className="font-mono text-xs tracking-[0.2em] text-accent-cyan/30 px-4">
                        {line2.repeat(4)}
                    </span>
                </div>
            </div>
        </div>
    );
}
