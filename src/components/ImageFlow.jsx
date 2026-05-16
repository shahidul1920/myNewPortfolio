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
          y: 20
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
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
      <div className="topHeading container mx-auto mb-16" ref={headingRef}>
        <h2 className="text-[220px] text-center font-bold mb-4 uppercase">
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
      <div className="container mx-auto grid grid-cols-4 gap-4 relative h-[200vh]">
        <div className={`imgWrapper one ${position} left-0 top-0`}>
          <img className="w-full h-auto" src="https://kimbrandesign.com/_astro/Labo_Biarritz_02.DozCqXRf_Z1IgYc7.webp" alt="" />
        </div>
        <div className={`imgWrapper two ${position} left-1/4 top-100`}>
          <img className="w-full h-auto" src="https://kimbrandesign.com/_astro/Labo_Biarritz_01.DFbCEQvH_ZLufBn.webp" alt="" />
        </div>
        <div className={`imgWrapper three ${position} left-2/4 top-80`}>
          <img className="w-full h-auto" src="https://kimbrandesign.com/_astro/Labo_Biarritz_03.D0P2vYpn_1ND8Mg.webp" alt="" />
        </div>
        <div className={`imgWrapper four ${position} left-3/4 top-40`}>
          <img className="w-full h-auto" src="https://kimbrandesign.com/_astro/Labo_Biarritz_04.aSmP6FZF_124gyT.webp" alt="" />
        </div>
      </div>
    </section>
  )
}

export default ImageFlow