import { useGSAP } from '@gsap/react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import React from 'react'

function DownDemoSec() {


  useGSAP(() => {
    // GSAP animation logic for DownDemoSec can be added here
    const scrn = ScrollTrigger.create({
      trigger: ".down-demo-sec",
      start: "top 20%",
      end: "bottom 80%",
      markers: true,
      scrub: 1,
      animation: gsap.to(".down-demo-sec", { y: -100, opacity: 0, ease: "none" })
    })
  });

  return (
    <div className='h-screen grid place-items-center bg-red-900'>DownDemoSec</div>
  )
}

export default DownDemoSec