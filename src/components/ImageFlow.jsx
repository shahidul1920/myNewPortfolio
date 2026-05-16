import React, { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

function ImageFlow() {

  const position = 'absolute'
  const headingRef = useRef(null)

  useEffect(() => {
    const spans = headingRef.current?.querySelectorAll('h2 span')
    
    if (spans) {
      gsap.fromTo(
        spans,
        {
          opacity: 0,
          y: -20
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          delay: 0.5,
          stagger: 0.05,
          scrollTrigger: {
            trigger: headingRef.current,
            start: 'top 80%',
            end: 'top 50%',
            scrub: false,
            onEnter: () => ScrollTrigger.refresh()
          }
        }
      )
    }

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill())
    }
  }, [])

  return (
    <section className="image-flow py-16">
      <div className="topHeading container mx-auto mb-[3rem]" ref={headingRef}>
        <h2 className="text-[180px] text-center font-bold mb-4 uppercase flex justify-between">
          <span>O</span>
          <span>u</span>
          <span>r</span>
          <span> </span>
          <span>W</span>
          <span>o</span>
          <span>r</span>
          <span>k</span>
        </h2>
      </div>
      <div className="w-full p-[1rem] grid grid-cols-4 gap-4 relative h-[200vh]">
        <div className={`imgWrapper one ${position} left-[25%] -top-10 z-40 w-[380px]`}>
          <img className="w-full h-auto object-cover" src="https://kimbrandesign.com/_astro/Labo_Biarritz_01.DFbCEQvH_ZLufBn.webp" alt="leaf thing" />
        </div>
        <div className={`imgWrapper two ${position} left-[50%] top-15 z-30 w-[310px]`}>
          <img className="w-full h-auto object-cover" src="https://kimbrandesign.com/_astro/Labo_Biarritz_03.D0P2vYpn_1ND8Mg.webp" alt="sea" />
        </div>
        <div className={`imgWrapper three ${position} left-0 top-20 z-10 w-[400px]`}>
          <img className="w-full h-auto object-cover" src="https://kimbrandesign.com/_astro/Labo_Biarritz_02.DozCqXRf_Z1IgYc7.webp" alt="face" />
        </div>
        <div className={`imgWrapper four ${position} right-0 top-10 z-20 w-[310px]`}>
          <img className="w-full h-auto object-cover" src="https://kimbrandesign.com/_astro/Labo_Biarritz_04.aSmP6FZF_124gyT.webp" alt="back" />
        </div>
      </div>
    </section>
  )
}

export default ImageFlow