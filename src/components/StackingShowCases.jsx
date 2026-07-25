import React, { useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useGSAP } from '@gsap/react'

gsap.registerPlugin(ScrollTrigger);

const StackingShowCases = () => {
    const containerRef = useRef(null);
    const constents = [
        {
            title: "WordPress & Custom Code",
            description: "Custom WordPress Theme Development • Elementor Customization • PHP Logic & Hooks • Performance Optimization • SEO Architecture • Cross-browser Responsive Builds",
            bgUrl: "https://kimbrandesign.com/_astro/brand_strategy.w0hVrqaj_ZcECwk.webp"
        }, {
            title: "React & GSAP Motion",
            description: "Interactive React JS Web Applications • ScrollTrigger & Timeline Orchestrations • SVG Path Animations • Physics-based UI Motion • Modern State Management",
            bgUrl: "https://kimbrandesign.com/_astro/brand_creation.O16Mg-Jj_ZkBMgR.webp"
        }, {
            title: "UI/UX & Brand Identity",
            description: "Figma Wireframing & Prototyping • Brand Identity & Logo Design • Adobe Photoshop & Illustrator • After Effects Motion Assets • Design System Architecture",
            bgUrl: "https://kimbrandesign.com/_astro/brand_engagement.DKpNVKw7_ZpEzE9.webp"
        }
    ]

    useGSAP(() => {
        ScrollTrigger.refresh();
        const sections = gsap.utils.toArray(".showcase-section", containerRef.current);

        sections.forEach((section, i) => {
            const isLast = i === sections.length - 1;

            if (!isLast) {
                ScrollTrigger.create({
                    trigger: section,
                    start: "top top",
                    end: () => isLast ? "bottom bottom" : "+=" + (window.innerHeight),
                    pin: true,
                    scrub: 1,
                    pinSpacing: false,
                    anticipatePin: 1,
                    refreshPriority: -1,
                    markers: false,
                })
            }
        })
        ScrollTrigger.refresh();

        // Handle window resize to recalculate scroll positions
        const handleResize = () => ScrollTrigger.refresh();
        window.addEventListener("resize", handleResize);

        return () => window.removeEventListener("resize", handleResize);
    }, { scope: containerRef })

    return (
        <div id="services" ref={containerRef} className="relative min-h-screen bg-zinc-900">
            {constents.map((contnt, i) => (
                <section
                    key={i}
                    className={`showcase-section relative w-full h-screen shadow-[0_-20px_30px_-15px_rgba(0,0,0,0.5)]`}
                    style={{ backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.8)), url('${contnt.bgUrl}')`, backgroundSize: 'cover', backgroundPosition: 'center' }}
                >
                    <div className="container mx-auto h-full flex flex-col lg:flex-row gap-4 lg:gap-[4rem] justify-center items-center px-6 md:px-8 py-8 lg:py-0">
                        <div className="left titlesFont w-full lg:w-3/5">
                            <h2 className='text-[28px] sm:text-[48px] lg:text-[84px] font-extrabold mb-2 lg:mb-4 text-white uppercase tracking-tight leading-[1.05] drop-shadow-2xl'>{contnt.title}</h2>
                        </div>
                        <div className="right bodyFont flex items-center lg:items-end justify-center lg:justify-end w-full lg:w-2/5 lg:h-full pb-8 lg:pb-[7rem]">
                            <p className='text-sm sm:text-base md:text-xl text-zinc-200 max-w-md leading-relaxed font-light border-l-2 border-white/30 pl-4'>{contnt.description}</p>
                        </div>
                    </div>
                </section>
            ))}
        </div>
    )
}

export default StackingShowCases