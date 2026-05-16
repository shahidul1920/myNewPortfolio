import React from 'react'

function ImageFlow() {

  const position = 'absolute'

  return (
    <section className="image-flow py-16">
      <div className="topHeading">
        <h2 className="text-4xl font-bold mb-4">Our Work</h2>
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