import React, { useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useGSAP } from '@gsap/react'

gsap.registerPlugin(ScrollTrigger)

const projects = [
    {
        "id": 1, "num": "01",
        "title": "Redmun Digitech — Software Farm",
        "url": "redmundigitech.com",
        "role": "Front-End Developer & Visual Engineer",
        "description": "Engineered the official web platform for Redmun Digitech software farm using Next.js for server-side rendering, Headless WordPress as backend CMS, Tailwind CSS for modern utility styling, and GSAP for advanced physics scroll animations.",
        "highlights": [
            "Built Next.js frontend with Headless WordPress GraphQL architecture.",
            "Engineered smooth physics-based GSAP scroll animations and interactions.",
            "Tailwind CSS design system tailored for a high-tech software agency."
        ],
        "techStack": ["Next.js", "Headless WordPress", "GSAP", "Tailwind CSS", "GraphQL"]
    },
    {
        "id": 2, "num": "02",
        "title": "Astha Creatives — Marketing Agency",
        "url": "asthacreatives.com",
        "role": "Lead Front-End Developer",
        "description": "Developed the official website for Astha Creatives marketing agency. Constructed a high-performance Next.js application powered by Headless WordPress, feature-rich GSAP timelines, and responsive Tailwind styling.",
        "highlights": [
            "Decoupled architecture: Next.js frontend + Headless WordPress CMS.",
            "Bespoke marketing layout with interactive GSAP timeline orchestrations.",
            "Ultra-fast page loads, optimized assets, and mobile-first responsiveness."
        ],
        "techStack": ["Next.js", "Headless WordPress", "GSAP", "Tailwind CSS", "REST API"]
    },
    {
        "id": 3, "num": "03",
        "title": "Astha News — Digital Media Portal",
        "url": "astha.news",
        "role": "Full Stack / Front-End Developer",
        "description": "Engineered a high-speed digital news portal using Next.js and Headless WordPress. Built to deliver real-time news updates, instant category filtering, dynamic article routing, and SEO optimization.",
        "highlights": [
            "High-performance news portal built with Next.js & Headless WordPress.",
            "Dynamic article routing, instant search, and category filtering.",
            "Optimized for high-traffic media publishing and Google Core Web Vitals."
        ],
        "techStack": ["Next.js", "Headless WordPress", "React.js", "Tailwind CSS", "SEO"]
    },
    {
        "id": 4, "num": "04",
        "title": "Shipping Market Place",
        "url": "www.centralbarge.com",
        "role": "UI/UX Designer & WordPress Developer",
        "description": "Designed the logo and established the core brand identity. Collaborated with the internal team to develop a fully responsive WordPress website using Elementor, ensuring perfect alignment with their brand visuals.",
        "highlights": [
            "Designed the core brand identity and logo from scratch.",
            "Developed a fully responsive WordPress website using Elementor.",
            "Ensured cross-browser compatibility and brand alignment."
        ],
        "techStack": ["Figma", "WordPress", "Elementor", "Custom CSS/JS"]
    },
    {
        "id": 5, "num": "05",
        "title": "Adroit Environment Consultants",
        "url": "aecl-bd.org",
        "role": "Lead Frontend Developer",
        "description": "Spearheaded a complete website re-creation, delivering noticeable design improvements and an upgraded user interface. Optimized the site architecture for enhanced web performance.",
        "highlights": [
            "Engineered a complete visual overhaul with modern semantic markup.",
            "Optimized site architecture and asset delivery for performance.",
            "Improved mobile user retention through an intuitive UI upgrade."
        ],
        "techStack": ["HTML/CSS/JS", "UI Redesign", "Performance Tuning"]
    },
    {
        "id": 6, "num": "06",
        "title": "Phone Repair Shop's Website",
        "url": "www.cellrepairstore.com",
        "role": "Full Stack Developer",
        "description": "Established their initial online presence by developing a dynamic website equipped with integrated booking and live features.",
        "highlights": [
            "Built a secure custom REST API with Node.js and Express.",
            "Integrated a dynamic booking system for scheduling repairs.",
            "Implemented live chat integration for real-time customer support."
        ],
        "techStack": ["React.js", "Node.js", "Express", "REST API"]
    },
    {
        "id": 7, "num": "07",
        "title": "Buying House and E-Commerce",
        "url": "www.brmsinternational.com",
        "role": "Web & E-Commerce Developer",
        "description": "Created their foundational online presence from the ground up. Developed a streamlined website featuring comprehensive company details alongside essential e-commerce functionality.",
        "highlights": [
            "Built a high-conversion B2B/B2C digital storefront.",
            "Integrated secure payment gateways and product catalogs.",
            "Ensured fast rendering for product-heavy catalog pages."
        ],
        "techStack": ["E-commerce", "JavaScript", "UI/UX", "Payment Integration"]
    },
    {
        "id": 8, "num": "08",
        "title": "Marketing Agency",
        "url": "www.redmun.com",
        "role": "Creative Developer & Visual Engineer",
        "description": "Contributed as a key member of the Brand Visuals team, actively engaging in core project planning and research. Led the team in developing a highly customized WordPress website and initiated modern interactive web applications utilizing React JS, GSAP for advanced animations.",
        "highlights": [
            "Led Brand Visuals team in project planning and research.",
            "Developed highly customized WordPress with extensive custom code.",
            "Built modern React.js & GSAP interactive web applications."
        ],
        "techStack": ["React.js", "GSAP", "Custom WordPress", "Node.js"]
    }
]

/* ── Card content (rendered inside each pinned full-screen section) ── */
const ProjectCard = ({ project }) => (
    <div className="container mx-auto h-full min-h-screen flex items-center px-4 md:px-8 py-10 lg:py-0">
        <div className="w-full grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-16 items-center">
            
            {/* Left: Big Number + Title */}
            <div className="lg:col-span-5 flex flex-col justify-center">
                <span className="titlesFont text-[60px] sm:text-[100px] lg:text-[160px] font-black text-zinc-200 leading-none -mb-2 lg:-mb-8 select-none">{project.num}</span>
                <h3 className='text-[24px] sm:text-[34px] lg:text-[48px] font-extrabold titlesFont uppercase leading-tight text-zinc-900'>
                    {project.title}
                </h3>
                <a 
                    href={`https://${project.url}`} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className='text-xs sm:text-sm font-mono font-medium text-blue-600 hover:text-blue-800 inline-flex items-center gap-1.5 mt-2 group/link'
                >
                    {project.url} <span className="group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform">↗</span>
                </a>
            </div>

            {/* Right: Details */}
            <div className="lg:col-span-7 flex flex-col gap-4 sm:gap-6">
                
                <span className="text-xs bodyFont font-semibold text-zinc-800 bg-zinc-100 border border-zinc-200 py-1 px-3 sm:py-1.5 sm:px-4 rounded-full w-fit">
                    {project.role}
                </span>

                <p className='text-sm sm:text-base md:text-lg bodyFont font-light leading-relaxed text-zinc-600 border-l-2 border-zinc-300 pl-4 sm:pl-5'>
                    {project.description}
                </p>

                {/* Key Highlights */}
                <div>
                    <h4 className='text-[11px] sm:text-xs font-mono font-semibold uppercase text-zinc-900 mb-2 tracking-wider'>Key Highlights</h4>
                    <ul className='space-y-1.5'>
                        {project.highlights.map((highlight, idx) => (
                            <li key={idx} className='text-xs sm:text-sm bodyFont font-light text-zinc-600 flex items-start gap-2.5'>
                                <span className='text-blue-500 font-bold mt-0.5'>•</span>
                                <span>{highlight}</span>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Tech Stack */}
                <div className="pt-3 border-t border-zinc-200">
                    <div className='flex flex-wrap gap-1.5 sm:gap-2'>
                        {project.techStack.map((tech, index) => (
                            <span 
                                key={index} 
                                className='bg-zinc-50 text-zinc-800 py-1 px-3 sm:py-1.5 sm:px-4 rounded-full text-[11px] sm:text-xs bodyFont font-medium border border-zinc-200/70'
                            >
                                {tech}
                            </span>
                        ))}
                    </div>
                </div>

            </div>
        </div>
    </div>
)

/* ── Main Component ── */
function Expernc() {
    const stackRef = useRef(null)

    useGSAP(() => {
        ScrollTrigger.refresh();
        const sections = gsap.utils.toArray('.project-panel', stackRef.current)

        sections.forEach((section, i) => {
            const isLast = i === sections.length - 1

            if (!isLast) {
                ScrollTrigger.create({
                    trigger: section,
                    start: 'top top',
                    end: () => isLast ? 'bottom bottom' : '+=' + window.innerHeight,
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

        const handleResize = () => ScrollTrigger.refresh();
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);

    }, { scope: stackRef })

    return (
        <>
            {/* Header section — sits OUTSIDE the pinned stacking container */}
            <section id="work" className="expernc pt-12 lg:pt-16 pb-4 relative bg-[#f9f9fb]">
                <div className="container mx-auto px-4 md:px-8">
                    <div className="topPer mb-6">
                        <h3 className='flex flex-wrap gap-x-3 gap-y-1 text-[22px] sm:text-[30px] md:text-[36px] font-medium uppercase titlesFont leading-snug text-zinc-900'>
                            Shahidul Shakil melds strategy, custom code, and design to give voice to every client project, elevating them in their sector.
                        </h3>
                    </div>
                    <div className="title flex flex-col md:flex-row md:items-end justify-between border-b border-zinc-200 pb-8 gap-6">
                        <div>
                            <span className="text-xs font-mono font-semibold uppercase tracking-widest text-zinc-500 block mb-2">// Featured Client Work</span>
                            <h2 className='text-[36px] sm:text-[60px] lg:text-[84px] titlesFont uppercase font-extrabold leading-none tracking-tight text-zinc-900'>Client Projects</h2>
                        </div>
                        <p className='text-sm md:text-base bodyFont font-light text-zinc-600 max-w-md leading-relaxed'>
                            Selected client solutions spanning custom WordPress engineering, interactive React interfaces, brand identity design, and full-stack web applications.
                        </p>
                    </div>
                </div>
            </section>

            {/* Stacking panels — exact same structure as StackingShowCases */}
            <div ref={stackRef} className="relative bg-zinc-900">
                {projects.map((project, i) => (
                    <section
                        key={project.id}
                        className={`project-panel relative w-full min-h-screen lg:h-screen ${i === 0 ? '' : 'shadow-[0_-20px_30px_-15px_rgba(0,0,0,0.15)]'}`}
                        style={{ backgroundColor: i % 2 === 0 ? '#ffffff' : '#f5f5f7' }}
                    >
                        <ProjectCard project={project} />
                    </section>
                ))}
            </div>
        </>
    )
}

export default Expernc