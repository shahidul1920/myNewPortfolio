import React, { useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useGSAP } from '@gsap/react'

gsap.registerPlugin(ScrollTrigger)

const WorkHistory = () => {
    const containerRef = useRef(null)
    const timelineRef = useRef(null)

    const experiences = [
        {
            role: "Front-End Developer",
            company: "Redmun Digitech",
            period: "2025 – On Going",
            description: "Developing modern Next.js web platforms with Headless WordPress, crafting bespoke interactive UI components using React JS, GSAP animations, and Tailwind CSS."
        },
        {
            role: "Graphics Designer",
            company: "OMC Healthcare",
            period: "2024 – 2025",
            description: "Created core visual graphics, marketing media, brand assets, and UI designs for healthcare digital platforms."
        },
        {
            role: "Web & Graphics Specialist",
            company: "IPS-Australia (Remote)",
            period: "2022 – 2023",
            description: "Delivered end-to-end web designs and digital graphic assets remotely for Australian client accounts."
        },
        {
            role: "Web & Graphics Freelancer",
            company: "Fiverr Freelancing Platform",
            period: "2019 – 2023",
            description: "Built custom websites, logos, and WordPress setups for international clients with top satisfaction ratings."
        }
    ]

    const certificates = [
        { name: "UX/UI Designer", org: "CreativeIT", placeholderText: "[IMAGE: ./certificates/creativeit.jpg]" },
        { name: "Graphics Designer", org: "Twoinsoft", placeholderText: "[IMAGE: ./certificates/twoinsoft.jpg]" },
        { name: "MERN Dev", org: "eShikhon", placeholderText: "[IMAGE: ./certificates/eshikhon.jpg]" },
        { name: "Next JS", org: "Frontend Master", placeholderText: "[IMAGE: ./certificates/frontendmaster.jpg]" },
    ]

    const education = [
        { degree: "Bachelor of Computer Sciences", school: "Uttara University", status: "2024 – On going" },
        { degree: "Diploma in Computer Science", school: "Golden Polytechnic Institute", status: "Completed" },
    ]

    useGSAP(() => {
        // SVG timeline path draw
        const path = timelineRef.current
        if (path) {
            const pathLength = path.getTotalLength()
            gsap.set(path, { strokeDasharray: pathLength, strokeDashoffset: pathLength })
            gsap.to(path, {
                strokeDashoffset: 0,
                ease: "none",
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: "top 60%",
                    end: "bottom 40%",
                    scrub: 1.5,
                }
            })
        }

        // Experience cards stagger
        const expCards = containerRef.current?.querySelectorAll('.exp-card')
        if (expCards) {
            gsap.fromTo(expCards,
                { x: -60, opacity: 0 },
                {
                    x: 0, opacity: 1,
                    duration: 0.8,
                    stagger: 0.15,
                    ease: "power3.out",
                    scrollTrigger: {
                        trigger: containerRef.current,
                        start: "top 65%",
                        toggleActions: "play none none reverse",
                    }
                }
            )
        }

        // Certificate cards stagger from right
        const certCards = containerRef.current?.querySelectorAll('.cert-card')
        if (certCards) {
            gsap.fromTo(certCards,
                { x: 40, opacity: 0 },
                {
                    x: 0, opacity: 1,
                    duration: 0.7,
                    stagger: 0.12,
                    ease: "power2.out",
                    scrollTrigger: {
                        trigger: certCards[0],
                        start: "top 80%",
                        toggleActions: "play none none reverse",
                    }
                }
            )
        }
    }, { scope: containerRef })

    return (
        <section className="py-20 lg:py-26 relative overflow-hidden" ref={containerRef}>
            {/* Decorative SVG vertical timeline line — same style as ImageFlow S-curve */}
            <svg className="absolute left-8 md:left-16 top-0 w-[2px] h-full pointer-events-none hidden lg:block" style={{ zIndex: 1 }}>
                <line ref={timelineRef} x1="1" y1="0" x2="1" y2="100%" stroke="black" strokeWidth="2" />
            </svg>

            <div className="container mx-auto px-4 md:px-8 relative z-10">
                
                {/* Title — matching StackingShowCases massive rotated headline */}
                <div className="mb-12 md:mb-20">
                    <h2 className='text-[36px] sm:text-[56px] lg:text-[70px] titlesFont uppercase leading-none'>Experience &<br />Education</h2>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
                    
                    {/* Left Column: Work Experience (7 cols) */}
                    <div className="lg:col-span-7">
                        <div className="flex items-center gap-4 mb-8">
                            <h3 className="text-[16px] bodyFont font-semibold uppercase tracking-widest text-gray-900">// Other Experiences</h3>
                            <div className="flex-1 h-[1px] bg-black"></div>
                        </div>

                        <div className="space-y-6">
                            {experiences.map((exp, idx) => (
                                <div key={idx} className="exp-card bg-white border border-gray-200 rounded-2xl p-6 md:p-8 hover:shadow-lg transition-shadow duration-300 group">
                                    <div className="flex flex-wrap items-start justify-between gap-2 mb-3">
                                        <h4 className="text-[22px] md:text-[28px] font-bold titlesFont uppercase text-gray-900 leading-tight group-hover:tracking-wide transition-all">{exp.role}</h4>
                                        <span className="text-[12px] font-mono font-bold bg-black text-white px-3 py-1 rounded whitespace-nowrap">{exp.period}</span>
                                    </div>
                                    <span className="text-[14px] bodyFont font-semibold text-blue-600 block mb-3">{exp.company}</span>
                                    <p className="text-[14px] bodyFont font-light text-gray-700 leading-relaxed">{exp.description}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Right Column: Certificates & Education (5 cols) */}
                    <div className="lg:col-span-5 space-y-12">
                        
                        {/* Certifications */}
                        <div>
                            <div className="flex items-center gap-4 mb-8">
                                <h3 className="text-[16px] bodyFont font-semibold uppercase tracking-widest text-gray-900">// Certificate & Achievements</h3>
                            </div>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                {certificates.map((cert, idx) => (
                                    <div key={idx} className="cert-card bg-white border border-gray-200 rounded-2xl p-5 flex flex-col justify-between hover:shadow-lg transition-shadow duration-300 group">
                                        <div>
                                            <h4 className="text-[18px] font-bold titlesFont uppercase text-gray-900 mb-1 group-hover:tracking-wide transition-all">{cert.name}</h4>
                                            <span className="text-[12px] bodyFont text-gray-600 block mb-4">From {cert.org}</span>
                                        </div>
                                        {/* Certificate Image Location */}
                                        <div className="w-full h-16 rounded-lg img-placeholder flex items-center justify-center">
                                            <span className="text-[9px] font-mono font-bold bg-white/90 text-black px-2 py-0.5 rounded shadow">{cert.placeholderText}</span>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Education */}
                        <div>
                            <div className="flex items-center gap-4 mb-8">
                                <h3 className="text-[16px] bodyFont font-semibold uppercase tracking-widest text-gray-900">// Education</h3>
                                <div className="flex-1 h-[1px] bg-black"></div>
                            </div>

                            <div className="space-y-4">
                                {education.map((edu, idx) => (
                                    <div key={idx} className="bg-white border border-gray-200 rounded-2xl p-5 md:p-6">
                                        <h4 className="text-[18px] md:text-[22px] font-bold titlesFont uppercase text-gray-900 leading-tight">{edu.degree}</h4>
                                        <div className="flex flex-wrap items-center justify-between mt-2 gap-2">
                                            <span className="text-[14px] bodyFont font-medium text-gray-700">{edu.school}</span>
                                            <span className="text-[11px] font-semibold text-blue-600 bg-blue-50 px-2.5 py-0.5 rounded-full border border-blue-200">{edu.status}</span>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            {/* Hand-written accent — matching Hero signature style */}
                            <div className="mt-10 -rotate-10 inline-block">
                                <p className="handText text-[28px] md:text-[36px] text-black">
                                    Never stop <br /> growing ++
                                </p>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    )
}

export default WorkHistory
