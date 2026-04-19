import React, { useRef } from 'react'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'

export const Header = () => {
  const container = useRef();

  useGSAP(() => {
    // Text animation
    gsap.from(".char", {
      y: 30,
      opacity: 0,
      stagger: 0.05,
      duration: 1.4,
      ease: "power2.out"
    });

    // Image timeline animation
    const tl = gsap.timeline();
    
    tl.fromTo(".centerImageSec", 
      { width: "0px", height: "0px" },
      { width: "400px", height: "400px", duration: 1.2, ease: "power4.out" }
    )
    .to(".centerImageSec", {
      width: "100vw",
      height: "100vh",
      duration: 1.5,
      ease: "power3.inOut"
    }, "+=1"); // Little delay before expanding
  }, { scope: container });

  const title = "Shahidul Shakil";

    return (
    <header ref={container} className="relative w-full min-h-screen bg-[#f5f5f5]">

        {/* Text and Nav should be on top of the image for blend mode to work beautifully */}
        <div className='container mx-auto logoArea pt-[32px] relative z-[2000] mix-blend-difference text-white'>
            <h1 className='text-[120px] bg-clip-text titlesFont uppercase flex justify-between leading-[0.78]'>
                {title.split('').map((char, index) => (
                    <span key={index} className="char inline-block whitespace-pre relative">
                        {char}
                    </span>
                ))}
            </h1>
        </div>
        
        {/* nav menu off about, services, work, contact */}
        <div className='container mx-auto relative z-[2000] mix-blend-difference text-white'>
                <nav>
                    <ul className='flex justify-between gap-10 text-lg'>
                        <li>About</li>
                        <li>Services</li>
                        <li>Work</li>
                        <li>Contact</li>
                    </ul>
                </nav>
        </div>  

        {/* center image */}
        <div className='centerImageSec fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-[1000] pointer-events-none overflow-hidden rounded-md'>
            <img 
              src="https://kimbrandesign.com/_astro/Hero.Bwo3F92J_Z4vX3r.webp" 
              alt="Header Image" 
              className='w-full h-full object-cover' 
            />
        </div>

    </header>
  )
}

export default Header