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
            bgClass: "bg-stone-900"
        }, {
            title: "Brand creation",
            description: "Brand identity Look & feel Packaging design Product design Creative Direction Brand Guidelines",
            bgClass: "bg-stone-800"
        }, {
            title: "Brand experience",
            description: "Brand activation Campaigns & content Social media strategy & content Digital experience design Retail experience design Environmental design",
            bgClass: "bg-stone-700"
        }
    ]

    useGSAP(() => {
        const sections = gsap.utils.toArray(".showcase-section", containerRef.current);
        ScrollTrigger.refresh();

        sections.forEach((section, i) => {
            const isLast = i === sections.length - 1;

            if (!isLast) {
                ScrollTrigger.create({
                    trigger: section,
                    start: "top top",
                    end: () => isLast ? "bottom bottom" : "+=" + (window.innerHeight * 2),
                    pin: true,
                    scrub: 1,
                    pinSpacing: false,
                    anticipatePin: 1,
                    markers: false,
                })
            }
        })
        ScrollTrigger.refresh();
    }, { scope: containerRef })

    return (
        <div ref={containerRef} className="relative min-h-screen bg-red-900">
            {constents.map((contnt, i) => (
                <section
                    key={i}
                    className={`showcase-section relative w-full h-screen ${contnt.bgClass} shadow-[0_-20px_30px_-15px_rgba(0,0,0,0.5)]`}
                    
                >
                    <div className="container mx-auto h-full flex flex-col justify-center px-8">
                        <div className="left handText">
                            <h2 className='text-4xl font-bold mb-4 text-white'>{contnt.title}</h2>
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