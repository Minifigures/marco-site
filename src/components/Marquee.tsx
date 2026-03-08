"use client";

export default function Marquee() {
    const line1 =
        "/// BUILD SYSTEMS THAT THINK /// SHIP FAST, ITERATE FASTER /// CODE WITH PURPOSE /// FULL-STACK \u00D7 AI/ML \u00D7 OPEN SOURCE /// ";
    const line2 =
        "/// REACT /// NEXT.JS /// TYPESCRIPT /// PYTHON /// LANGRAPH /// LANGCHAIN /// FASTAPI /// THREE.JS /// TAILWIND /// DOCKER /// AWS /// ";

    return (
        <div className="w-full overflow-hidden py-6 border-y border-border-subtle bg-bg-secondary/20">
            {/* Line 1 - Left */}
            <div className="flex whitespace-nowrap mb-3">
                <div className="animate-marquee-left flex">
                    <span className="font-mono text-sm tracking-[0.15em] text-accent-cyan/60 px-4">
                        {line1.repeat(4)}
                    </span>
                    <span className="font-mono text-sm tracking-[0.15em] text-accent-cyan/60 px-4">
                        {line1.repeat(4)}
                    </span>
                </div>
            </div>
            {/* Line 2 - Right */}
            <div className="flex whitespace-nowrap">
                <div className="animate-marquee-right flex">
                    <span className="font-mono text-sm tracking-[0.15em] text-text-muted/40 px-4">
                        {line2.repeat(4)}
                    </span>
                    <span className="font-mono text-sm tracking-[0.15em] text-text-muted/40 px-4">
                        {line2.repeat(4)}
                    </span>
                </div>
            </div>
        </div>
    );
}
