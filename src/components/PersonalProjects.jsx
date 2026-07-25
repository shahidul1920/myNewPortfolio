import React, { useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useGSAP } from '@gsap/react'

gsap.registerPlugin(ScrollTrigger)

const PersonalProjects = () => {
    const containerRef = useRef(null)

    const projects = [
        {
            title: "Chat App with MERN Stack",
            description: "Full-featured real-time messaging application built on MongoDB, Express, React, and Node.js with Socket.io for instantaneous messaging and JWT authentication.",
            techStack: ["MongoDB", "Express", "React JS", "Node.js", "Socket.io"],
            image: "https://kimbrandesign.com/_astro/brand_strategy.w0hVrqaj_ZcECwk.webp"
        },
        {
            title: "Personal Chatbot with Ollama 8B",
            description: "Privacy-focused local AI conversational chatbot powered by the Ollama Llama 3 8B model. Custom streaming interface with system prompt customization.",
            techStack: ["Ollama 8B", "React.js", "Node.js", "Streaming API"],
            image: "https://kimbrandesign.com/_astro/brand_creation.O16Mg-Jj_ZkBMgR.webp"
        },
        {
            title: "AI Agent for Organizing Leads",
            description: "Intelligent automation agent that extracts, categorizes, scores, and organizes business leads automatically using prompt pipelines and data structuring.",
            techStack: ["AI Agents", "JavaScript", "Node.js", "API Automation"],
            image: "https://kimbrandesign.com/_astro/brand_engagement.DKpNVKw7_ZpEzE9.webp"
        }
    ]

    useGSAP(() => {
        // Staggered reveal animation for each card
        const cards = containerRef.current?.querySelectorAll('.personalCard')
        if (cards) {
            gsap.fromTo(cards,
                { y: 100, opacity: 0, rotateX: 8 },
                {
                    y: 0, opacity: 1, rotateX: 0,
                    duration: 1,
                    stagger: 0.2,
                    ease: "power3.out",
                    scrollTrigger: {
                        trigger: containerRef.current,
                        start: "top 75%",
                        end: "top 30%",
                        toggleActions: "play none none reverse",
                    }
                }
            )
        }

        // Heading word-by-word reveal
        const headingWords = containerRef.current?.querySelectorAll('.heading-word')
        if (headingWords) {
            gsap.fromTo(headingWords,
                { y: 40, opacity: 0 },
                {
                    y: 0, opacity: 1,
                    duration: 0.7,
                    stagger: 0.04,
                    ease: "power2.out",
                    scrollTrigger: {
                        trigger: containerRef.current,
                        start: "top 80%",
                    }
                }
            )
        }
    }, { scope: containerRef })

    return (
        <section className="py-10 lg:py-14 relative" ref={containerRef}>
            <div className="container mx-auto px-4 md:px-8">
                
                {/* Heading — same style as Expernc topPer */}
                <div className="topPer mb-4">
                    <h3 className='flex flex-wrap gap-x-3 gap-y-1 text-[20px] sm:text-[28px] md:text-[32px] font-semibold uppercase bodyFont leading-tight'>
                        {["Beyond", "client", "work,", "exploring", "AI", "agents,", "local", "LLMs,", "and", "real-time", "MERN", "applications."].map((word, i) => (
                            <span key={i} className="heading-word">{word}</span>
                        ))}
                    </h3>
                </div>

                <div className="title">
                    <h2 className='text-[32px] sm:text-[50px] lg:text-[64px] mt-6 md:mt-8 titlesFont uppercase leading-none'>Personal<br />Projects</h2>
                    <div className="sub">
                        <p className='text-[14px] md:text-[16px] mt-2.5 bodyFont font-light leading-[22px] max-w-2xl'>Personal innovations and experiments exploring autonomous AI agents, local Large Language Models, and full-stack real-time web applications.</p>
                    </div>
                </div>

                {/* 3-Column Cards Grid with Perfect Row Alignment */}
                <div className="mt-8 md:mt-10 grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
                    {projects.map((project, i) => (
                        <div 
                            key={i}
                            className="personalCard bg-white border border-gray-200 rounded-2xl p-6 md:p-8 flex flex-col justify-between hover:shadow-xl transition-shadow duration-300 group h-full"
                        >
                            <div className="flex flex-col flex-grow">
                                {/* Title — Uniform Height for Baseline Alignment */}
                                <h3 className="text-[20px] lg:text-[24px] font-bold titlesFont uppercase leading-tight text-gray-900 mb-4 min-h-[4.5rem] md:min-h-[5.5rem] flex items-start group-hover:tracking-wide transition-all">
                                    {project.title}
                                </h3>

                                {/* Description — Uniform Height for Image Baseline Alignment */}
                                <p className="text-[14px] bodyFont font-light leading-[22px] text-gray-700 mb-6 min-h-[4.5rem] md:min-h-[5.5rem] flex items-start">
                                    {project.description}
                                </p>

                                {/* Image Container with Blue Filter Overlay */}
                                <div className="relative w-full h-44 rounded-xl overflow-hidden mb-6 mt-auto border border-gray-200 shadow-sm group-hover:shadow-md transition-shadow">
                                    <img 
                                        src={project.image} 
                                        alt={project.title}
                                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                    />
                                    {/* Blue Filter Overlay */}
                                    <div className="absolute inset-0 bg-blue-600/35 mix-blend-multiply transition-colors duration-300"></div>
                                    <div className="absolute inset-0 bg-gradient-to-t from-blue-900/50 via-transparent to-transparent pointer-events-none"></div>
                                </div>
                            </div>

                            {/* Tech Stack Footer — Baseline Aligned */}
                            <div className="pt-4 border-t border-gray-200 mt-auto">
                                <div className="flex flex-wrap gap-2 min-h-[3.25rem] content-start">
                                    {project.techStack.map((tech, idx) => (
                                        <span 
                                            key={idx} 
                                            className='inline-block bg-gray-50 text-gray-900 py-1 px-3 rounded-full text-[11px] font-medium border border-gray-200'
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default PersonalProjects
