import React, { useRef, useState } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useGSAP } from '@gsap/react'

gsap.registerPlugin(ScrollTrigger)

export const Discover = () => {
  const containerRef = useRef(null)
  const lineRef = useRef(null)
  const [imgError, setImgError] = useState(false)
  const [copied, setCopied] = useState(false)

  const handleCopyEmail = (e) => {
    e.preventDefault();
    navigator.clipboard.writeText('shahidulshakil@proton.me');
    setCopied(true);
    setTimeout(() => {
      setCopied(false);
    }, 2500);
  };

  useGSAP(() => {
    // Vertical line height animation
    if (lineRef.current) {
      gsap.fromTo(lineRef.current,
        { scaleY: 0 },
        {
          scaleY: 1,
          duration: 1.5,
          ease: "power2.inOut",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 70%",
          }
        }
      )
    }

    // Reveal text blocks
    const reveals = containerRef.current?.querySelectorAll('.contact-reveal')
    if (reveals) {
      gsap.fromTo(reveals,
        { y: 40, opacity: 0 },
        {
          y: 0, opacity: 1,
          duration: 0.8,
          stagger: 0.12,
          ease: "power3.out",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 60%",
            toggleActions: "play none none reverse",
          }
        }
      )
    }
  }, { scope: containerRef })

  return (
    <div id="contact" className='discover py-20 lg:py-26' ref={containerRef}>

        <section className='container mx-auto grid place-items-center gap-6 px-4 md:px-8'>
            
            {/* Title — same bodyFont light style */}
            <h2 className='contact-reveal text-4xl sm:text-5xl md:text-7xl font-thin bodyFont text-center capitalize'>discover <br />more</h2>
            
            {/* Vertical line with animated scale */}
            <span ref={lineRef} className='verticleLine block h-[120px] md:h-[160px] w-[1px] bg-black origin-top'></span>
            
            {/* Avatar image with fallback placeholder */}
            <div className="contact-reveal relative w-[160px] h-[160px] md:w-[220px] md:h-[220px] bg-zinc-300 rounded-full overflow-hidden shadow-xl border-2 border-black">
                {!imgError ? (
                  <img 
                    className='w-full h-full object-cover grayscale contrast-105' 
                    src="/shakil-.png" 
                    alt="Shahidul Shakil" 
                    onError={() => setImgError(true)}
                  />
                ) : (
                  <div className="absolute inset-0 img-placeholder rounded-full flex items-center justify-center">
                      <span className="text-[9px] font-mono font-bold bg-white/90 text-black px-2 py-1 rounded shadow">[IMAGE: ./avatar-shakil.jpg]</span>
                  </div>
                )}
            </div>

            {/* Cursive signature — exact original style */}
            <div className="contact-reveal name handText text-black text-3xl md:text-4xl -rotate-20 -translate-y-4 translate-x-6 font-bold">Shakil ++</div>

            {/* Contact & Links Box */}
            <div className="contact-reveal mt-8 max-w-3xl w-full bg-white p-8 md:p-10 rounded-3xl border border-gray-200 shadow-lg">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                
                <div className="relative">
                  <h3 className="text-[13px] bodyFont font-semibold uppercase tracking-widest text-gray-500 mb-3">// Direct Contact</h3>
                  
                  {/* Email Copy Trigger */}
                  <div className="relative inline-block group">
                    {/* Mini Popup Toast Notification */}
                    <div className={`absolute -top-10 left-0 bg-zinc-900 text-white text-xs font-mono font-bold py-1.5 px-3.5 rounded-full shadow-2xl border border-zinc-700 flex items-center gap-1.5 z-50 whitespace-nowrap transition-all duration-300 ease-out transform ${copied ? 'opacity-100 -translate-y-2.5 scale-100' : 'opacity-0 translate-y-1 scale-95 pointer-events-none'}`}>
                      <span className="text-green-400">✓</span> Email copied!
                    </div>

                    <button 
                      onClick={handleCopyEmail}
                      type="button"
                      className="text-[18px] md:text-[22px] font-bold titlesFont text-black hover:text-blue-600 transition-colors text-left leading-tight cursor-pointer focus:outline-none"
                    >
                      shahidulshakil<br />@proton.me <span className="text-xs font-mono font-semibold bg-zinc-100 text-zinc-700 border border-zinc-200 px-2 py-0.5 rounded ml-1 group-hover:bg-blue-50 group-hover:text-blue-600 transition-colors">copy</span>
                    </button>
                  </div>

                  <span className="text-[14px] bodyFont text-gray-600 block mt-3">Sector 15, Uttara, Dhaka, Bangladesh</span>
                </div>

                <div>
                  <h3 className="text-[13px] bodyFont font-semibold uppercase tracking-widest text-gray-500 mb-3">// Online Links</h3>
                  <div className="flex flex-col gap-2 text-[14px] bodyFont font-semibold">
                    <a href="https://github.com/shahidul1920" target="_blank" rel="noopener noreferrer" className="text-gray-800 hover:text-blue-600 transition-colors">
                      github.com/shahidul1920 ↗
                    </a>
                    <a href="https://linkedin.com/in/shahidul-shakil" target="_blank" rel="noopener noreferrer" className="text-gray-800 hover:text-blue-600 transition-colors">
                      linkedin.com/in/shahidul-shakil ↗
                    </a>
                    <a href="https://www.behance.net/shakil-d" target="_blank" rel="noopener noreferrer" className="text-gray-800 hover:text-blue-600 transition-colors">
                      behance.net/shakil-d ↗
                    </a>
                  </div>
                </div>

              </div>

              {/* Interests — editorial pill style */}
              <div className="mt-8 pt-6 border-t border-gray-200">
                <h3 className="text-[13px] bodyFont font-semibold uppercase tracking-widest text-gray-500 mb-4">// Interests</h3>
                <div className="flex flex-wrap gap-3">
                  <span className="bg-gray-50 text-gray-900 border border-gray-200 text-[13px] font-medium px-4 py-2 rounded-full">🎮 Video Games</span>
                  <span className="bg-gray-50 text-gray-900 border border-gray-200 text-[13px] font-medium px-4 py-2 rounded-full">🎬 Movies & Podcast</span>
                  <span className="bg-gray-50 text-gray-900 border border-gray-200 text-[13px] font-medium px-4 py-2 rounded-full">✈️ Traveling</span>
                </div>
              </div>
            </div>

            {/* Footer */}
            <div className="contact-reveal mt-12 text-[12px] bodyFont text-gray-500 text-center">
              © {new Date().getFullYear()} Shahidul Shakil — WordPress & Front-end Developer. All rights reserved.
            </div>

        </section>
        
    </div>
  )
}

export default Discover
