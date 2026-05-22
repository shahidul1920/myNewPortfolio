import React, { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useGSAP } from '@gsap/react'

gsap.registerPlugin(ScrollTrigger)

function ImageFlow() {

  const position = 'absolute'
  const headingRef = useRef(null)
  const containerRef = useRef(null)
  const svgPathRef = useRef(null)

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
          delay: 0.3,
          stagger: 0.05,
          scrollTrigger: {
            trigger: headingRef.current,
            start: 'top 80%',
            end: 'top 50%',
            scrub: false
          }
        }
      )
    }

    return () => {
      if (headingRef.current) {
        ScrollTrigger.getAll().forEach(trigger => {
          if (trigger.vars.trigger === headingRef.current) {
            trigger.kill()
          }
        })
      }
    }
  }, [])

  // Separate effect for textSec animations
  useEffect(() => {
    const textSections = document.querySelectorAll('.image-flow .textSec')
    const triggers = []

    if (textSections && textSections.length > 0) {
      textSections.forEach((textSec) => {
        const anim = gsap.fromTo(
          textSec,
          {
            opacity: 0,
            y: 30,
            x: -20,
            skewY: 3
          },
          {
            opacity: 1,
            y: 0,
            x: 0,
            skewY: 0,
            duration: 0.8,
            scrollTrigger: {
              trigger: textSec,
              start: 'top 80%',
              end: 'top 50%',
              scrub: false
            },
            ease: 'power2.out'
          }
        )
        
        if (anim.scrollTrigger) {
          triggers.push(anim.scrollTrigger)
        }
      })
    }

    return () => {
      triggers.forEach(trigger => trigger.kill())
    }
  }, [])

  useGSAP(() => {
    if (!svgPathRef.current) return

    // Get the path length for stroke animation
    const path = svgPathRef.current
    const pathLength = path.getTotalLength()

    // Set initial state
    gsap.set(path, {
      strokeDasharray: pathLength,
      strokeDashoffset: pathLength,
    })

    // Animate SVG path with scroll - slower animation
    gsap.to(path, {
      strokeDashoffset: 0,
      scrollTrigger: {
        trigger: containerRef.current,
        start: 'top center',
        end: 'bottom center',
        scrub: 2.5,
        duration: 3
      }
    })
  }, { scope: containerRef })

  return (
    <section className="image-flow py-16 relative" ref={containerRef}>
      {/* SVG Snake/S-curve Path */}
      <svg 
        className="absolute left-0 top-0 w-full h-full pointer-events-none"
        style={{ zIndex: 1 }}
        viewBox="0 0 1200 3000"
        preserveAspectRatio="xMidYMid slice"
      >
        <path
          ref={svgPathRef}
          d="M 0 100 Q 600 400, 1200 700 T 0 1300 T 1200 1900 T 0 2500 L 0 2800"
          stroke="#000000"
          strokeWidth="3"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>

      <div className="topHeading container mx-auto mb-[3rem] relative z-10" ref={headingRef}>
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
      <div className="w-full p-[1rem] grid grid-cols-6 gap-4 relative h-[200vh] z-10">

        <div className={`imgWrapper one ${position} left-[25%] -top-10 z-40 w-[180px]`}>
          <img className="w-full h-auto object-cover rounded-lg shadow-lg" src="https://kimbrandesign.com/_astro/Labo_Biarritz_01.DFbCEQvH_ZLufBn.webp" alt="leaf thing" />
          <div className='textSec mt-4 bg-white/80 backdrop-blur-sm p-3 rounded-lg shadow-md border border-white/20'>
            <h4 className='text-lg font-bold text-gray-900'>Leaf Thing</h4>
            <p className='text-sm text-gray-700 mt-1'>A beautiful leafy creation</p>
          </div>
        </div>
        <div className={`imgWrapper two ${position} left-[50%] top-15 z-30 w-[150px]`}>
          <img className="w-full h-auto object-cover rounded-lg shadow-lg" src="https://kimbrandesign.com/_astro/Labo_Biarritz_03.D0P2vYpn_1ND8Mg.webp" alt="sea" />
          <div className='textSec mt-4 bg-white/80 backdrop-blur-sm p-3 rounded-lg shadow-md border border-white/20'>
            <h4 className='text-lg font-bold text-gray-900'>Sea</h4>
            <p className='text-sm text-gray-700 mt-1'>A serene ocean view</p>
          </div>  
        </div>
        <div className={`imgWrapper three ${position} left-10 top-20 z-10 w-[200px]`}>
          <img className="w-full h-auto object-cover rounded-lg shadow-lg" src="https://kimbrandesign.com/_astro/Labo_Biarritz_02.DozCqXRf_Z1IgYc7.webp" alt="face" />
          <div className='textSec mt-4 bg-white/80 backdrop-blur-sm p-3 rounded-lg shadow-md border border-white/20'>
            <h4 className='text-lg font-bold text-gray-900'>Face</h4>
            <p className='text-sm text-gray-700 mt-1'>A close-up of a beautiful face</p>
          </div>
        </div>
        <div className={`imgWrapper four ${position} right-10 top-10 z-20 w-[140px]`}>
          <img className="w-full h-auto object-cover rounded-lg shadow-lg" src="https://kimbrandesign.com/_astro/Labo_Biarritz_04.aSmP6FZF_124gyT.webp" alt="back" />
          <div className='textSec mt-4 bg-white/80 backdrop-blur-sm p-3 rounded-lg shadow-md border border-white/20'>
            <h4 className='text-lg font-bold text-gray-900'>Back</h4>
            <p className='text-sm text-gray-700 mt-1'>A view of the back of the subject</p>
          </div>
        </div>
        {/* more image wrappers can be added here */}
        <div className={`imgWrapper one ${position} left-[25%] top-180 z-40 w-[180px]`}>
          <img className="w-full h-auto object-cover rounded-lg shadow-lg" src="https://kimbrandesign.com/_astro/Labo_Biarritz_01.DFbCEQvH_ZLufBn.webp" alt="leaf thing" />
          <div className='textSec mt-4 bg-white/80 backdrop-blur-sm p-3 rounded-lg shadow-md border border-white/20'>
            <h4 className='text-lg font-bold text-gray-900'>Leaf Thing</h4>
            <p className='text-sm text-gray-700 mt-1'>A beautiful leafy creation</p>
          </div>
        </div>
        <div className={`imgWrapper four ${position} right-130 top-140 z-20 w-[180px]`}>
          <img className="w-full h-auto object-cover rounded-lg shadow-lg" src="https://kimbrandesign.com/_astro/Labo_Biarritz_04.aSmP6FZF_124gyT.webp" alt="back" />
          <div className='textSec mt-4 bg-white/80 backdrop-blur-sm p-3 rounded-lg shadow-md border border-white/20'>
            <h4 className='text-lg font-bold text-gray-900'>Back</h4>
            <p className='text-sm text-gray-700 mt-1'>A view of the back of the subject</p>
          </div>
        </div>
        <div className={`imgWrapper four ${position} right-50 top-240 z-20 w-[200px]`}>
          <img className="w-full h-auto object-cover rounded-lg shadow-lg" src="https://kimbrandesign.com/_astro/Labo_Biarritz_04.aSmP6FZF_124gyT.webp" alt="back" />
          <div className='textSec mt-4 bg-white/80 backdrop-blur-sm p-3 rounded-lg shadow-md border border-white/20'>
            <h4 className='text-lg font-bold text-gray-900'>Back</h4>
            <p className='text-sm text-gray-700 mt-1'>A view of the back of the subject</p>
          </div>
        </div>

        <div className={`imgWrapper three ${position} left-25 top-280 z-10 w-[200px]`}>
          <img className="w-full h-auto object-cover rounded-lg shadow-lg" src="https://kimbrandesign.com/_astro/Labo_Biarritz_02.DozCqXRf_Z1IgYc7.webp" alt="face" />
          <div className='textSec mt-4 bg-white/80 backdrop-blur-sm p-3 rounded-lg shadow-md border border-white/20'>
            <h4 className='text-lg font-bold text-gray-900'>Face</h4>
            <p className='text-sm text-gray-700 mt-1'>A close-up of a beautiful face</p>
          </div>
        </div>





      </div>
    </section>
  )
}

export default ImageFlow