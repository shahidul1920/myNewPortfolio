import React, { useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useGSAP } from '@gsap/react'

gsap.registerPlugin(ScrollTrigger);

const StackingShowCases = () => {
    const containerRef = useRef(null);
    const constents = [
        {
            title: "Brand strategy",
            description: "Brand Audit & Insights Strategic Planning Brand platform Positioning & concept Storytelling Innovation opportunities",
            bgUrl: "https://kimbrandesign.com/_astro/brand_strategy.w0hVrqaj_ZcECwk.webp"
        }, {
            title: "Brand creation",
            description: "Brand identity Look & feel Packaging design Product design Creative Direction Brand Guidelines",
            bgUrl: "https://kimbrandesign.com/_astro/brand_creation.O16Mg-Jj_ZkBMgR.webp"
        }, {
            title: "Brand experience",
            description: "Brand activation Campaigns & content Social media strategy & content Digital experience design Retail experience design Environmental design",            
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
        <div ref={containerRef} className="relative min-h-screen bg-red-900">
            {constents.map((contnt, i) => (
                <section
                    key={i}
                    className={`showcase-section relative w-full h-screen shadow-[0_-20px_30px_-15px_rgba(0,0,0,0.5)]`}
                    style={{ backgroundImage: `url('${contnt.bgUrl}')`, backgroundSize: 'cover', backgroundPosition: 'center' }}
                >
                    <div className="container mx-auto h-full flex gap-[2rem] justify-center items-center px-8">
                        <div className="left handText">
                            <h2 className='text-[120px] font-bold mb-4 text-white rotate-[-15deg]'>{contnt.title}</h2>
                        </div>
                        <div className="right bodyFont">
                            <p className='text-lg text-white max-w-md'>{contnt.description}{i}</p>
                        </div>
                    </div>
                </section>
            ))}
        </div>
    )
}

export default StackingShowCases