import React, { useEffect } from 'react'
import OurApproach from './OurApproach'
import Milestones from './Milestones'

 export const AboutUs = () => {
  useEffect(()=>{
    window.scrollTo(0,0)
  },[])
  return (
    <div className='bg-gray-50'>
    <div className='pt- relative '>
      {/* Background Layer */}
      <div className='absolute inset-0 bg-gray-800 opacity-40 z-0'></div>

      {/* Content Layer */}
      <div className='relative flex flex-col lg:flex-row md:flex-row p-2'>
        <div className='p-2 my-auto text-white'>
          <h1 className='text-4xl lg:text-5xl md:text-5xl font-bold text-center mb-4 pt-10'> About Us .</h1>
          <h1 className='text-2xl lg:text-3xl md:text-3xl font-bold text-center mb-4'> Finding Inspiration in Every Turn</h1>
          <p className='text-lg w-3/4 text-left mx-auto'>
            We are a team of doctors, engineers, management professionals, 
            and students from across MAHE who came together to solve the problems faced by various sectors of India. 
            With a shared vision, we combine our expertise to develop effective and affordable solutions.
          </p>
        </div>
        <img src="/assets/images/gangliateam.png" className='h-lg w-xl mix-blend-multiply' />
      </div>
    </div>
    <div className="relative z-10 -mt-16"> 
        <OurApproach />
      </div>
      <Milestones/>
    </div>
  )
}


