import React, { useRef, useEffect, useState } from 'react'
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
  const [img1Error, setImg1Error] = useState(false);

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
    <div id="about">
      <main ref={contnr} className='container mx-auto min-h-screen grid place-items-center grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 px-4 md:px-8 py-16 lg:py-0'>

        <section ref={leftRef} className="left flex flex-col items-center w-full">
          {/* Balanced card stack container */}
          <div className="images relative w-3/4 max-w-[300px] sm:max-w-[350px] mx-auto mb-16 pt-8">

            {/* Front Card (Image) */}
            <div ref={img1Ref} className="w-full aspect-[4/5] rounded-2xl shadow-2xl -rotate-6 origin-bottom relative z-10 overflow-hidden bg-zinc-200 border border-zinc-300">
              {!img1Error ? (
                <img
                  src="/shakil.png"
                  alt="Shahidul Shakil Work"
                  className='w-full h-full object-cover grayscale contrast-105'
                  onError={() => setImg1Error(true)}
                />
              ) : (
                <div className="w-full h-full bg-zinc-800 flex items-center justify-center">
                  <span className="text-sm font-semibold text-white uppercase tracking-wider">Shahidul Shakil</span>
                </div>
              )}
            </div>

            {/* Behind Card (Image) */}
            <div ref={img2Ref} className="w-full aspect-[4/5] rounded-2xl shadow-2xl rotate-6 origin-bottom absolute top-8 left-0 z-5 overflow-hidden bg-zinc-800">
              <img
                src="https://kimbrandesign.com/_astro/brand_engagement.DKpNVKw7_ZpEzE9.webp"
                alt="Brand Engagement"
                className="w-full h-full object-cover"
              />
            </div>

          </div>

          <div ref={textRef} className="textUnderImg text-2xl md:text-3xl text-center">
            <div className="-rotate-12 inline-block">
              <p className='handText'>
                Shaping the <br /> beauty of modern <br /> digital brands.
              </p>
            </div>
          </div>
        </section>

        <section className="right">
          <div className="textSec pl-0 lg:pl-[4rem] xl:pl-[6rem]">
            <div className="signSVG mb-4 lg:mb-0">
              <svg viewBox="0 0 117 332" fill="none" xmlns="http://www.w3.org/2000/svg" className="about__deco w-16 sm:w-20 lg:w-[117px] h-auto"> <path ref={pathRef} d="M60.8461 76.3911C-133.162 168.782 213.858 -11.2246 87.8511 1.10964C35.3209 6.25156 18.8719 39.65 18.872 158.37L18.9289 331.15" stroke="black" strokeLinecap="round" style={{ strokeDashoffset: '613.677px', strokeDasharray: '613.677px, 613.677px' }}></path> </svg>
            </div>
            <div className="text">
              <p className='bodyFont text-sm md:text-base leading-relaxed'>
                Results-driven <strong>Creative Developer</strong> and
                <strong> Visual Engineer</strong> with 4+ years of experience
                creating visually engaging and user-friendly web experiences. <br /><br />

                Proven ability to deliver high-quality custom WordPress
                platforms, bespoke React JS web applications, and GSAP
                interactive motion — resulting in increased user engagement
                and client satisfaction.<br /><br />

                Combining strategic visual design (Figma, Photoshop,
                Illustrator) with robust frontend code, bridging the gap
                between brand identity and interactive digital
                performance.<br /><br />

                Based in <strong>Sector 15, Uttara, Dhaka</strong> — available for
                remote contract work, agency collaborations, and custom
                web platform builds.
              </p>
            </div>
            <div className="myName mt-6">
              <p className='handText text-[28px] md:text-[40px] -rotate-15'>
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