import { useGSAP } from '@gsap/react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import React from 'react'

gsap.registerPlugin(ScrollTrigger);

export default function DemoStacking() {

    // gsap stacking effect is implemented in StackingShowCases component, this is just a demo page to show the stacking effect in action. You can replace the content of this component with the StackingShowCases component to see the effect.
    const demoCont = React.useRef(null);
    useGSAP(()=>{
        // Refresh ScrollTrigger to recalculate positions with all elements rendered
        ScrollTrigger.refresh();
        
        const sectionsOf = gsap.utils.toArray(".showMe", demoCont.current);
        sectionsOf.forEach((sec, i)=>{
            const isLast = i === sectionsOf.length - 1;

            ScrollTrigger.create({
                trigger: sec,
                start: "top top",
                end: () => isLast ? "bottom bottom" : "+=" + (window.innerHeight * 2),
                pin: true,
                scrub: 1,
                pinSpacing: false,
                anticipatePin: 1,
                refreshPriority: -1,
                markers: true,
            })
        })
        
        // Refresh again after triggers are created
        ScrollTrigger.refresh();
    })


  return (
    <div ref={demoCont}>
        <div className="showMe h-screen grid place-items-center bg-amber-200">
            <h1 className='text-4xl font-bold'>1 Scroll down to see the stacking effect</h1>
        </div>
        <div className="showMe h-screen grid place-items-center bg-amber-300">
            <h1 className='text-4xl font-bold'>2 Scroll down to see the stacking effect</h1>
        </div>
        <div className="showMe h-screen grid place-items-center bg-amber-400">
            <h1 className='text-4xl font-bold'>3 Scroll down to see the stacking effect</h1>
        </div>
    </div>
  )
}
