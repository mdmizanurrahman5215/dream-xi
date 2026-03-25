import React from 'react'

import bgShadow from "../assets/banner-shadow.png"
import banner_img from "../assets/banner-main.png"



const Banner = () => {
  return (
    <div>
      <div className=" bg-cover bg-center container mx-auto my-6 rounded-md py-20 bg-black/60 bg-blend-darken"
    style={{ backgroundImage: `url(${bgShadow})` }}
      >
      <div className='flex justify-center items-center flex-col gap-2'>
        <img src={banner_img} alt="" />
        <h1 className='text-3xl font-semibold'>Assemble Your Ultimate Dream 11 Cricket Team</h1>
        <p className='text-2xl'>Beyond Boundaries Beyond Limits</p>
        <button className='bg-amber-500 px-6 py-2 rounded-md cursor-pointer font-semibold'> Claim Free Credit</button>
      </div>
</div>
      
    </div>
  )
}

export default Banner
