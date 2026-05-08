import { useGSAP } from '@gsap/react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import React from 'react'

gsap.registerPlugin(ScrollTrigger);

export default function DemoStacking() {

    // gsap stacking effect is implemented in StackingShowCases component, this is just a demo page to show the stacking effect in action. You can replace the content of this component with the StackingShowCases component to see the effect.

    useGSAP(()=>{
        const sectionsOf = gsap.utils.toArray(".showMe");
        sectionsOf.forEach((sec, i)=>{
            const isLast = i === sectionsOf.length - 1;

            if(!isLast){
                gsap.to(sec,{
                    scrollTrigger:{
                        trigger: sec,
                        start: "top top",
                        end: () => "+=" + window.innerHeight,
                        pin: true,
                        scrub: 0.5,
                    }
                })
            }
        })
        
    })


  return (
    <div>
        <div className="showMe h-screen grid place-items-center bg-amber-200">
            <h1 className='text-4xl font-bold'>Scroll down to see the stacking effect</h1>
        </div>
        <div className="showMe h-screen grid place-items-center bg-amber-300">
            <h1 className='text-4xl font-bold'>Scroll down to see the stacking effect</h1>
        </div>
        <div className="showMe h-screen grid place-items-center bg-amber-400">
            <h1 className='text-4xl font-bold'>Scroll down to see the stacking effect</h1>
        </div>
    </div>
  )
}
