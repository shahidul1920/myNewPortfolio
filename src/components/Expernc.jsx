import React from 'react'

function Expernc() {

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
            "techStack": ["Figma", "WordPress", "Custom CSS/JS", "Elementor"]
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
            "techStack": ["React.js", "Tailwind CSS", "Vite", "Performance Optimization"]
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
            "techStack": ["React.js", "Node.js", "Express", "REST API"]
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
            "techStack": ["E-commerce", "JavaScript", "UI/UX", "Payment Integration"]
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
            "techStack": ["React.js", "GSAP", "Custom WordPress", "Node.js"]
        }
    ]


    return (
        <section className="expernc py-26">
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

                    {/* map of projects showing all data ui like row by row */}
                    {projects.map((project) => (
                        <div key={project.id} className="projectCard py-10 border border-gray-300 rounded-lg mb-10 px-6 border-l-0 border-r-0">
                            <h3 className='text-[30px] font-semibold bodyFont uppercase leading-[33px]'>{project.title}</h3>
                            <p className='text-[16px] mt-3.5 bodyFont font-light leading-[22px]'>{project.description}</p>
                            <div className="techStack mt-5">
                                {project.techStack.map((tech, index) => (
                                    <span key={index} className='inline-block bg-gray-200 text-gray-800 py-1 px-3 rounded-full text-[12px] font-medium mr-2 mb-2'>
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </div>
                    ))}

                </section>
            </div>
        </section>
    )
}

export default Expernc