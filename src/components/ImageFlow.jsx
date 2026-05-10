import React from 'react'

function ImageFlow() {

    //const imageStyle = 'w-full h-auto object-cover';
    const imageStyle = 'absolute';

  return (
    <section className="image-flow py-16">
      <div className="container mx-auto grid grid-cols-4 gap-4 relative">
        <img className={`${imageStyle} left-0`} src="https://kimbrandesign.com/_astro/Labo_Biarritz_02.DozCqXRf_Z1IgYc7.webp" alt="" />
        <img className={`${imageStyle} left-200`} src="https://kimbrandesign.com/_astro/Labo_Biarritz_01.DFbCEQvH_ZLufBn.webp" alt="" />
        <img className={`${imageStyle} left-500`} src="https://kimbrandesign.com/_astro/Labo_Biarritz_03.D0P2vYpn_1ND8Mg.webp" alt="" />
        <img className={`${imageStyle} left-1000`} src="https://kimbrandesign.com/_astro/Labo_Biarritz_04.aSmP6FZF_124gyT.webp" alt="" />
      </div>
    </section>
  )
}

export default ImageFlow