import React, { useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useGSAP } from '@gsap/react'

gsap.registerPlugin(ScrollTrigger)

const SkillsSection = () => {
    const containerRef = useRef(null)

    const technicalSkills = [
        "HTML & CSS", "JAVASCRIPT", "NEXT JS", "REACT JS", "GSAP", "Headless CMS", "Node js", "WordPress"
    ]
    const designSkills = [
        "UI UX (Figma)", "Adobe Photoshop", "Adobe Illustrator", "Adobe After Effect"
    ]

    useGSAP(() => {
        // Animate each skill pill on scroll
        const pills = containerRef.current?.querySelectorAll('.skill-pill')
        if (pills) {
            gsap.fromTo(pills,
                { y: 30, opacity: 0, scale: 0.9 },
                {
                    y: 0, opacity: 1, scale: 1,
                    duration: 0.5,
                    stagger: 0.06,
                    ease: "back.out(1.7)",
                    scrollTrigger: {
                        trigger: containerRef.current,
                        start: "top 70%",
                        toggleActions: "play none none reverse",
                    }
                }
            )
        }

        // Animate section titles
        const titles = containerRef.current?.querySelectorAll('.section-title-char')
        if (titles) {
            gsap.fromTo(titles,
                { y: 50, opacity: 0 },
                {
                    y: 0, opacity: 1,
                    duration: 0.8,
                    stagger: 0.03,
                    ease: "power3.out",
                    scrollTrigger: {
                        trigger: containerRef.current,
                        start: "top 80%",
                    }
                }
            )
        }

        // Horizontal line draw animation
        const lines = containerRef.current?.querySelectorAll('.skill-divider')
        if (lines) {
            gsap.fromTo(lines,
                { scaleX: 0 },
                {
                    scaleX: 1,
                    duration: 1.2,
                    ease: "power2.inOut",
                    scrollTrigger: {
                        trigger: containerRef.current,
                        start: "top 70%",
                    }
                }
            )
        }
    }, { scope: containerRef })

    const titleText = "Skills & Tools"

    return (
        <section id="skills" className="py-20 lg:py-26 relative bg-[#f5f5f5]" ref={containerRef}>
            <div className="container mx-auto px-4 md:px-8">
                
                {/* Title with character animation — single line fluid heading */}
                <h2 className='text-[6.8vw] lg:text-[84px] titlesFont uppercase leading-none flex justify-between items-center whitespace-nowrap w-full tracking-tight'>
                    {titleText.split('').map((char, index) => (
                        <span key={index} className="section-title-char inline-block whitespace-pre">
                            {char}
                        </span>
                    ))}
                </h2>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 mt-16 md:mt-24">
                    
                    {/* Technical Skills Column */}
                    <div>
                        <div className="flex items-center gap-4 mb-8">
                            <h3 className="text-[16px] md:text-[18px] bodyFont font-semibold uppercase tracking-widest text-gray-900">// Technical Skills</h3>
                            <div className="skill-divider flex-1 h-[1px] bg-black origin-left"></div>
                        </div>
                        
                        <div className="space-y-4">
                            {technicalSkills.map((skill, idx) => (
                                <div 
                                    key={idx}
                                    className="skill-pill bg-white border border-gray-200 rounded-2xl p-5 md:p-6 flex items-center justify-between hover:shadow-lg hover:border-gray-400 transition-all duration-300 group cursor-default"
                                >
                                    <span className="text-[20px] md:text-[26px] font-bold titlesFont uppercase text-gray-900 group-hover:tracking-wider transition-all">{skill}</span>
                                    <span className="handText text-[20px] md:text-[24px] text-gray-500 -rotate-12 opacity-0 group-hover:opacity-100 transition-opacity duration-300">expert</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Design & UI/UX Column */}
                    <div>
                        <div className="flex items-center gap-4 mb-8">
                            <h3 className="text-[16px] md:text-[18px] bodyFont font-semibold uppercase tracking-widest text-gray-900">// Design & UI/UX</h3>
                            <div className="skill-divider flex-1 h-[1px] bg-black origin-left"></div>
                        </div>
                        
                        <div className="space-y-4">
                            {designSkills.map((skill, idx) => (
                                <div 
                                    key={idx}
                                    className="skill-pill bg-white border border-gray-200 rounded-2xl p-5 md:p-6 flex items-center justify-between hover:shadow-lg hover:border-gray-400 transition-all duration-300 group cursor-default"
                                >
                                    <span className="text-[20px] md:text-[26px] font-bold titlesFont uppercase text-gray-900 group-hover:tracking-wider transition-all">{skill}</span>
                                    <span className="handText text-[20px] md:text-[24px] text-gray-500 -rotate-12 opacity-0 group-hover:opacity-100 transition-opacity duration-300">creative</span>
                                </div>
                            ))}
                        </div>

                        {/* Hand-written accent note — same style as Hero section */}
                        <div className="mt-12 -rotate-8 inline-block">
                            <p className="handText text-[28px] md:text-[36px] text-black">
                                Always learning, <br /> always building.
                            </p>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    )
}

export default SkillsSection
