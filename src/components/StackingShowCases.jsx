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
        const sections = gsap.utils.toArray(".showcase-section");
        
        sections.forEach((section, index) => {
            // We don't need to pin the very last card, because nothing is scrolling over it
            const isLast = index === sections.length - 1;

            ScrollTrigger.create({
                trigger: section, 
                // Pin exactly when the bottom of the card hits the bottom of the viewport
                start: "bottom bottom", 
                pin: true,
                pinSpacing: false,
                // CRITICAL FIX: Tell GSAP exactly how long to hold this pin.
                // It holds it for the height of the remaining sections combined.
                end: isLast ? "+=0" : () => `+=${window.innerHeight * (sections.length - index - 1)}`,
            });
        });

        // CRITICAL FIX FOR 1ST LOAD WEIRDNESS:
        // Give the DOM a split second to render the components ABOVE this one, 
        // then force GSAP to recalculate all the trigger positions.
        const timeout = setTimeout(() => {
            ScrollTrigger.refresh();
        }, 150);

        return () => clearTimeout(timeout);
        
    }, { scope: containerRef });

    return (
        // Added a min-height so the container doesn't collapse during the pin spacing calculation
        <div ref={containerRef} className="relative min-h-screen">
            {constents.map((contnt, i) => (
                <section 
                    key={i} 
                    // Notice I changed h-screen to a fixed height (e.g., h-[80vh]) to demonstrate 
                    // the "bottom bottom" effect better. Adjust this height to whatever you need!
                    className={`showcase-section relative w-full h-[85vh] ${contnt.bgClass} shadow-[0_-20px_30px_-15px_rgba(0,0,0,0.5)]`}
                    style={{ 
                        zIndex: i,
                    }}
                >
                    <div className="container mx-auto h-full flex flex-col justify-center px-8">
                        <div className="left handText">
                            <h2 className='text-4xl font-bold mb-4 text-white'>{contnt.title}</h2>
                        </div>
                        <div className="right bodyFont">
                            <p className='text-lg text-white max-w-md'>{contnt.description}</p>
                        </div>
                    </div>
                </section>
            ))}
        </div>
    )
}

export default StackingShowCases