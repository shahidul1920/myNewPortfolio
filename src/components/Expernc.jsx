import React, { useRef } from 'react'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'

function Expernc() {

    const containerRef = useRef(null)
    const imageRefs = useRef({})

    const projects = [
        {
            "id": 1,
            "title": "Shipping Market Place",
            "url": "www.centralbarge.com",
            "role": "UI/UX Designer & Frontend Developer",
            "description": "Led the end-to-end visual identity and digital presence for a maritime logistics platform.",
            "highlights": [
                "Designed the core brand identity and logo from scratch using Figma.",
                "Developed a fully responsive, custom WordPress interface, utilizing advanced CSS and JavaScript to bypass standard builder limitations for a bespoke feel.",
                "Ensured cross-browser compatibility and perfect alignment with brand visuals."
            ],
            "techStack": ["Figma", "WordPress", "Custom CSS/JS", "Elementor"],
            "image": "https://images.unsplash.com/photo-1557821552-17105176677c?w=800&h=600&fit=crop"
        },
        {
            "id": 2,
            "title": "Adroit Environment Consultants",
            "url": "aecl-bd.org",
            "role": "Lead Frontend Developer",
            "description": "Spearheaded a complete platform re-architecture to modernize the user experience and improve technical SEO.",
            "highlights": [
                "Engineered a complete visual overhaul, replacing legacy code with modern, semantic markup.",
                "Optimized site architecture and asset delivery, significantly reducing page load times.",
                "Implemented an upgraded, intuitive user interface that improved mobile user retention."
            ],
            "techStack": ["React.js", "Tailwind CSS", "Vite", "Performance Optimization"],
            "image": "https://images.unsplash.com/photo-1633356122544-f134324ef6db?w=800&h=600&fit=crop"
        },
        {
            "id": 3,
            "title": "Phone Repair Shop's Website",
            "url": "www.cellrepairstore.com",
            "role": "Full Stack Developer",
            "description": "Architected a dynamic, service-oriented web application to digitize their customer intake process.",
            "highlights": [
                "Built a secure, custom REST API with Node.js and Express to handle customer data and service requests.",
                "Integrated a dynamic booking system allowing users to schedule repairs seamlessly.",
                "Implemented live chat integration for real-time customer support and lead capture."
            ],
            "techStack": ["React.js", "Node.js", "Express", "REST API"],
            "image": "https://images.unsplash.com/photo-1600432963602-3e3b0c9e9637?w=800&h=600&fit=crop"
        },
        {
            "id": 4,
            "title": "Buying House and E-commerce",
            "url": "www.brmsinternational.com",
            "role": "Web Developer",
            "description": "Created a foundational B2B and B2C digital storefront from the ground up.",
            "highlights": [
                "Developed a streamlined, high-conversion user flow for the e-commerce shopping experience.",
                "Integrated secure payment gateways and comprehensive product inventory structures.",
                "Ensured high performance and fast rendering for product catalogs."
            ],
            "techStack": ["E-commerce", "JavaScript", "UI/UX", "Payment Integration"],
            "image": "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=600&fit=crop"
        },
        {
            "id": 5,
            "title": "Marketing Agency",
            "url": "www.redmun.com",
            "role": "Creative Developer & Visual Engineer",
            "description": "Driving the agency's digital visual strategy by blending highly customized code with interactive web experiences.",
            "highlights": [
                "Led the Brand Visuals team in core project planning, research, and technical execution.",
                "Developed highly customized WordPress solutions, writing extensive custom logic to achieve tailored client results.",
                "Initiated and built modern, interactive web applications using React.js and GSAP to deliver award-winning scroll animations and physics-based interactions."
            ],
            "techStack": ["React.js", "GSAP", "Custom WordPress", "Node.js"],
            "image": "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=800&h=600&fit=crop"
        }
    ]

    useGSAP(() => {
        // Hover animation for project cards
        const cards = containerRef.current?.querySelectorAll('.projectCard')
        
        if (cards) {
            cards.forEach((card) => {
                const image = card.querySelector('.projectImage')
                const cardId = card.dataset.projectId

                card.addEventListener('mouseenter', () => {
                    if (image) {
                        gsap.to(image, {
                            opacity: 1,
                            scale: 1,
                            rotateX: 0,
                            rotateZ: 5,
                            y: -20,
                            duration: 0.6,
                            ease: "elastic.out(1, 0.5)"
                        })
                    }
                })

                card.addEventListener('mouseleave', () => {
                    if (image) {
                        gsap.to(image, {
                            opacity: 0,
                            scale: 0.8,
                            rotateX: 45,
                            rotateZ: 0,
                            y: 30,
                            duration: 0.5,
                            ease: "power2.inOut"
                        })
                    }
                })
            })
        }
    }, { scope: containerRef })



    return (
        <section className="expernc py-26 relative" ref={containerRef}>
            <div className="container mx-auto">
                <div className="topPer">
                    <h3 className='flex flex-wrap gap-4 text-[40px] font-semibold uppercase bodyFont leading-[43px]'>
                        <span>Laurenti</span>
                        <span>Study</span>
                        <span>melts</span>
                        <span>strategy</span>
                        <span>and</span>
                        <span>design</span>
                        <span>for</span>
                        <span>give</span>
                        <span>voice</span>
                        <span>to</span>
                        <span>potential</span>
                        <span>unexpressed</span>
                        <span>gods</span>
                        <span>brand,</span>
                        <span>raising</span>
                        <span>them</span>
                        <span>a</span>
                        <span>points</span>
                        <span>of</span>
                        <span>reference</span>
                        <span>of the</span>
                        <span>own</span>
                        <span>sector.</span>
                    </h3>
                </div>
                <div className="title">
                    <h2 className='text-[70px] mt-26 bodyFont uppercase leading-[73px]'>Our<br />Projects</h2>
                    <div className="sub">
                        <p className='text-[16px] mt-3.5 bodyFont font-light leading-[22px]'>We are a multidisciplinary design studio based in Paris, France. We work on a wide range of projects, from branding and identity to digital and physical experiences. We are passionate about creating meaningful and impactful work that resonates with our clients and their audiences.</p>
                    </div>
                </div>

                <section className="expSection mt-20">
                    {/* Projects Grid */}
                    {projects.map((project) => (
                        <div 
                            key={project.id} 
                            data-project-id={project.id}
                            className="projectCard relative py-12 px-8 border border-gray-200 rounded-2xl mb-8 bg-white hover:shadow-lg transition-shadow duration-300 overflow-hidden group"
                        >
                            {/* Image - Hidden by default, appears on hover */}
                            <div className="absolute inset-0 pointer-events-none">
                                <img 
                                    ref={(el) => imageRefs.current[project.id] = el}
                                    src={project.image} 
                                    alt={project.title}
                                    className="projectImage absolute top-1/2 right-6 w-64 h-48 object-cover rounded-xl opacity-0 scale-80"
                                    style={{
                                        transformOrigin: 'right center',
                                        perspective: '1200px'
                                    }}
                                />
                            </div>

                            {/* Content */}
                            <div className="relative z-10 pr-80">
                                {/* Title */}
                                <h3 className='text-[32px] font-bold bodyFont uppercase leading-[36px] text-gray-900 mb-2'>
                                    {project.title}
                                </h3>

                                {/* URL Link */}
                                <a 
                                    href={`https://${project.url}`} 
                                    target="_blank" 
                                    rel="noopener noreferrer"
                                    className='text-[14px] text-blue-600 hover:text-blue-800 font-medium mb-4 inline-block'
                                >
                                    {project.url} ↗
                                </a>

                                {/* Role */}
                                <p className='text-[14px] font-semibold text-gray-700 bg-gray-100 py-1 px-3 rounded-full inline-block mb-4'>
                                    {project.role}
                                </p>

                                {/* Description */}
                                <p className='text-[16px] mt-4 bodyFont font-light leading-[24px] text-gray-700 max-w-2xl'>
                                    {project.description}
                                </p>

                                {/* Highlights */}
                                <div className="highlights mt-6">
                                    <h4 className='text-[14px] font-semibold uppercase text-gray-900 mb-3'>Key Highlights</h4>
                                    <ul className='space-y-2'>
                                        {project.highlights.map((highlight, idx) => (
                                            <li key={idx} className='text-[14px] bodyFont font-light text-gray-700 flex items-start gap-2'>
                                                <span className='text-blue-600 font-bold mt-1'>•</span>
                                                <span>{highlight}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                {/* Tech Stack */}
                                <div className="techStack mt-6">
                                    <h4 className='text-[14px] font-semibold uppercase text-gray-900 mb-3'>Tech Stack</h4>
                                    <div className='flex flex-wrap gap-2'>
                                        {project.techStack.map((tech, index) => (
                                            <span 
                                                key={index} 
                                                className='inline-block bg-gradient-to-r from-blue-50 to-blue-100 text-blue-900 py-1.5 px-3 rounded-full text-[12px] font-medium border border-blue-200 hover:border-blue-400 transition-colors'
                                            >
                                                {tech}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </section>
            </div>
        </section>
    )
}

export default Expernc