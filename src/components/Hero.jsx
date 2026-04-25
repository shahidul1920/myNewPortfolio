import React, { useRef, useEffect } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useGSAP } from '@gsap/react'

gsap.registerPlugin(ScrollTrigger);

function Hero() {
  const pathRef = useRef(null);
  const leftRef = useRef(null);
  const img1Ref = useRef(null);
  const img2Ref = useRef(null);
  const textRef = useRef(null);
  const contnr = useRef(null);

  useGSAP(() => {
    // SVG stroke animation on intersection
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          gsap.fromTo(
            pathRef.current,
            { strokeDashoffset: 613.677 },
            { strokeDashoffset: 0, duration: 2.5, ease: "power2.out" }
          );
        } else {
          gsap.set(pathRef.current, { strokeDashoffset: 613.677 });
        }
      },
      { threshold: 0.5 }
    );

    if (pathRef.current) {
      observer.observe(pathRef.current);
    }

    // Scroll-based subtle rotation animation for images
    ScrollTrigger.create({
      trigger: leftRef.current,
      start: "top bottom",
      end: "bottom top",
      scrub: 0.6,
      markers: false, // Debug markers
      animation: gsap.timeline()
        .fromTo(img1Ref.current, { rotation: -3 }, { rotation: 3, ease: "none" }, 0)
        .fromTo(img2Ref.current, { rotation: 3 }, { rotation: -3, ease: "none" }, 0)
        .fromTo(textRef.current, { y: 0 }, { y: -40, ease: "none" }, 0)
    });

    return () => {
      observer.disconnect();
    };
  });

  return (
    <div>
      <main ref={contnr} className='container mx-auto h-screen grid place-items-center grid-cols-2 gap-16'>

        <section ref={leftRef} className="left flex flex-col">
          <div className="images relative w-3/4 max-w-sm mx-auto mb-16 pt-8">
            <img ref={img1Ref} src="https://kimbrandesign.com/_astro/About_01.ZXzuB3eg_Z2e5j5Y.webp" alt="Hero Image 1" className='w-full h-auto rounded-xl shadow-2xl -rotate-5 origin-bottom relative z-10' />
            <img ref={img2Ref} src="https://kimbrandesign.com/_astro/About_02.Di9Nhm44_ZeCWQd.webp" alt="Hero Image 2" className='w-full h-auto rounded-xl shadow-2xl rotate-5 origin-bottom absolute top-8 left-0 z-5' />
          </div>
          <div ref={textRef} className="textUnderImg text-2xl text-center">
            <div className="-rotate-15 inline-block">
              <p className='handText'>
                Shaping the <br /> beauty of everyday <br /> brands.
              </p>
            </div>
          </div>
        </section>

        <section className="right">
          <div className="textSec pl-[6rem]">
            <div className="signSVG">
              <svg width="117" height="332" viewBox="0 0 117 332" fill="none" xmlns="http://www.w3.org/2000/svg" className="about__deco" data-astro-cid-3cggfioh=""> <path ref={pathRef} d="M60.8461 76.3911C-133.162 168.782 213.858 -11.2246 87.8511 1.10964C35.3209 6.25156 18.8719 39.65 18.872 158.37L18.9289 331.15" stroke="black" strokeLinecap="round" data-astro-cid-3cggfioh="" style={{ strokeDashoffset: '613.677px', strokeDasharray: '613.677px, 613.677px' }}></path> </svg>
            </div>
            <div className="text">
              <p className='bodyFont'>
                KIMBRANDESIGN is a strategic brand
                transformation studio led by Kim Sentis. <br /><br />

                With over 15 years of experience in cosmetics,
                branding and marketing, Kim partners with
                brand leaders to clarify vision, unlock new
                positioning and guide meaningful
                transformation.<br /><br />

                Combining strategic clarity, emotional
                intelligence and creative leadership, KBD helps
                brands express who they truly are - clearly,
                consistently and beautifully.<br /><br />

                We often work with brands at pivotal moments
                - when they need to redefine who they are
                and where they are going.<br /><br />

                Our hybrid model allows us to assemble
                tailor-made teams around each project,
                delivering the strategic depth of a consultancy
                with the creative impact of a leading agency.
              </p>
            </div>
            <div className="myName">
              <p className='handText text-[24px] -rotate-15'>
                 Shakil + +
              </p>
            </div>
          </div>
        </section>

      </main>
    </div>
  )
}

export default Hero