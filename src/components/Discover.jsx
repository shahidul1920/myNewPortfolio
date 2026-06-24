import React from 'react'

export const Discover = () => {
  return (
    <div className='discover'>

        <section className='conrainer mx-auto grid place-items-center gap-4'>
            <h2 className=' text-6xl font-thin bodyFont text-center capitalize'>discover <br />more</h2>
            {/* verticle line with span */}
            <span className='verticleLine block h-[160px] w-[1px] bg-black'>
            </span>
            <div className="image w-[200px] h-[200px] bg-amber-900 rounded-full overflow-hidden">
                <img className='w-full h-full object-cover' src="https://kimbrandesign.com/_astro/Works_Kim.BBNA_L4q_ZNRXfX.webp" alt="" />
            </div>
        </section>
        
    </div>
  )
}
