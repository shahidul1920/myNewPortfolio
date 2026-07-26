import React, { useRef, useState } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useGSAP } from '@gsap/react'

gsap.registerPlugin(ScrollTrigger);

export const Header = () => {
    const container = useRef();
    const imageRef = useRef();

    useGSAP(() => {
        // Text animation
        gsap.from(".char", {
            y: 30,
            opacity: 0,
            stagger: 0.05,
            duration: 1.4,
            ease: "power2.out"
        });

        // Image timeline animation (on load)
        const tl = gsap.timeline();
        const targetSize = window.innerWidth < 768 ? "280px" : "400px";

        tl.fromTo(imageRef.current,
            { width: "0px", height: "0px" },
            { width: targetSize, height: targetSize, duration: 1.2, ease: "power4.out" }
        )
            .to(imageRef.current, {
                width: "100vw",
                height: "100vh",
                duration: 1.5,
                ease: "power3.inOut"
            }, "+=1")
            .add(() => {
                // Once load animation finishes, create the scroll animation
                gsap.to(imageRef.current, {
                    scrollTrigger: {
                        trigger: container.current,
                        start: "top top",
                        end: "+=1000", // Scroll distance for pinning
                        scrub: 1, // Smooth scrubbing
                        pin: true, // Pin the whole section
                    },
                    width: targetSize,
                    height: targetSize,
                    borderRadius: "1rem", // Optional: Add a nice curve as it shrinks
                    ease: "none"
                });

                gsap.set(".lines hr", { opacity: 0.3 });
                // First hr fades out as soon as the section unpins and starts going up
                gsap.to(".lines hr:nth-child(1)", {
                    scrollTrigger: {
                        trigger: container.current,
                        start: "top top-=1000", // Starts exactly when the 1000px pin ends
                        end: "top top-=1300",  // Takes 300px of scrolling to fade
                        scrub: 1,
                    },
                    opacity: 0
                });

                // Second hr fades out shortly after the first one starts
                gsap.to(".lines hr:nth-child(2)", {
                    scrollTrigger: {
                        trigger: container.current,
                        start: "top top-=1150", // Starts slightly after the first one
                        end: "top top-=1450",
                        scrub: 1,
                    },
                    opacity: 0
                });
            });

    }, { scope: container });

    const title = "Shahidul Shakil";

    const [imgError, setImgError] = useState(false);

    return (
        <header ref={container} className="relative w-full h-screen overflow-hidden flex flex-col justify-between py-[2rem] bg-[#f5f5f5]">

            <div className="relative z-[2000] mix-blend-difference text-white">
                {/* Text and Nav should be on top of the image for blend mode to work beautifully */}
                <div className='container mx-auto logoArea pt-[16px] md:pt-[32px] px-2 sm:px-4 md:px-0'>
                    <h1 className='text-[6.2vw] min-[400px]:text-[6.5vw] sm:text-[8.5vw] md:text-[120px] bg-clip-text titlesFont uppercase flex justify-between leading-[0.85] md:leading-[0.78] w-full'>
                        {title.split('').map((char, index) => (
                            <span key={index} className="char inline-block whitespace-pre relative">
                                {char}
                            </span>
                        ))}
                    </h1>
                </div>

                {/* nav menu off about, services, work, contact */}
                <div className='container mx-auto mt-6 md:mt-8 bodyFont px-4 md:px-0'>
                    <nav>
                        <ul className='flex flex-wrap justify-between gap-4 md:gap-10 text-sm md:text-lg'>
                            <li><a href="#about" className="hover:opacity-60 transition-opacity">About</a></li>
                            <li><a href="#services" className="hover:opacity-60 transition-opacity">Services</a></li>
                            <li><a href="#work" className="hover:opacity-60 transition-opacity">Work</a></li>
                            <li><a href="#skills" className="hover:opacity-60 transition-opacity">Skills</a></li>
                            <li><a href="#contact" className="hover:opacity-60 transition-opacity">Contact</a></li>
                        </ul>
                    </nav>
                </div>
            </div>

            {/* bottom of this section */}
            <div className='stayAtBottom container mx-auto relative z-[2000] mix-blend-difference text-white mt-8 bodyFont px-4 md:px-0'>
                <div className='lines grid gap-6 md:gap-12'>
                    <hr />
                    <hr />
                    <hr />
                </div>
                <h3 className='text-lg md:text-2xl text-center max-w-3xl mx-auto font-light leading-relaxed'>
                    WordPress & Front-End Developer — Creative Developer & Visual Engineer with 4+ years of experience crafting interactive, high-performance web platforms.
                </h3>
            </div>

            {/* center image */}
            <div ref={imageRef} className='centerImageSec absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-[1000] pointer-events-none overflow-hidden rounded-md'>
                {!imgError ? (
                    <img
                        src="/header-shahidul-shakil.jpg"
                        alt="Shahidul Shakil"
                        className='w-full h-full object-cover'
                        onError={() => setImgError(true)}
                    />
                ) : (
                    <div className="absolute inset-0 bg-zinc-800 flex items-center justify-center">
                        <span className="text-white text-xs font-semibold uppercase tracking-wider">Shahidul Shakil</span>
                    </div>
                )}
            </div>

        </header>
    )
}

export default Header