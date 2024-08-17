import React, { useContext } from 'react'
import {TextEffect} from './TextEffects'
import { SectionContext } from '../context/SectionContext'

function HeroSection() {
  const {setSignUp} = useContext(SectionContext)
  return (
    <section className='bg-black'>
      <div className="relative w-full h-screen">
        <div className='absolute bg-blue-turquoise bottom-0 h-20 w-full'></div>
        <div className='h-3/5 w-full flex flex-col items-center lg:items-start lg:pl-24 gap-6 md:gap-12 pt-[12vh] lg:w-1/2 lg:absolute lg:left-0  lg:h-[90vh] lg:mt-[5vh] lg:gap-10'>
          <h1 className='text-[1.6rem] text-blue-turquoise font-semibold w-3/4 text-center md:text-5xl lg:text-left lg:text-3xl lg:w-2/3'>Personalized education using AI</h1>
          <TextEffect per='char' as='h3' preset='fade' className='text-base text-gray-100 text-center w-3/4 md:text-2xl lg:text-lg lg:text-left lg:w-2/3 z-10'>Create personalized books with artificial intelligence for your children to learn English in a fun and effective way, based on their interests.</TextEffect>
          <button className="py-2 neon-turquoise-box w-1/2 text-lg bg-transparent border-2 rounded-xl font-semibold border-blue-turquoise text-blue-turquoise transition-all md:text-3xl hover:bg-blue-turquoise hover:text-black z-10 md:static md:w-auto md:px-14 lg:text-2xl" onClick={() => setSignUp(true)}>start now</button>
        </div>
        <img src="astronaut_kid.png" alt="Astronaut kid" className="absolute saturate-50 bottom-3 lg:bottom-0 left-1/2 transform -translate-x-1/2 h-2/5 object-cover lg:h-4/5" />
        <div className="absolute bottom-0 bg-gradient-to-b from-transparent to-blue-turquoise w-full h-20 mt-[50vh]"></div>
      </div>

      <div className='w-full bg-blue-turquoise flex flex-col py-24 gap-10 lg:flex-row md:w-full md:gap-0 md:justify-center md:gap-y-10 lg:items-center lg:py-32'>
        <h2 className='w-full text-center px-6 md:px-20 text-3xl md:text-4xl font-semibold lg:text-left lg:text-6xl lg:w-3/5'>We create unique experiences</h2>
        <TextEffect per='char' preset='fade' className='w-full text-center px-6 md:px-20 text-lg font-medium md:text-2xl lg:text-right lg:text-3xl'>Create personalized books with artificial intelligence for your children to learn English in a fun and effective way, based on their interests.</TextEffect>
      </div>
      <div className='w-full bg-black flex flex-col py-24 gap-10 md:flex-row md:flex-wrap md:w-full md:gap-0 md:gap-y-10 lg:gap-y-16'>
        <TextEffect className='w-full text-center px-6 md:px-20 text-3xl md:text-4xl font-semibold text-blue-turquoise lg:text-5xl lg:text-left lg:w-3/5'>Learn english while playing</TextEffect>
        <TextEffect per='char' preset='fade' className='w-full text-center px-6 md:px-20 text-lg font-medium md:text-2xl text-gray-100 lg:text-left lg:w-3/5 lg:text-3xl lg:font-normal'>Create personalized books with artificial intelligence for your children to learn English in a fun and effective way, based on their interests.</TextEffect>
      </div>
      <footer className='bg-blue-turquoise w-full h-20 flex items-center justify-center'>
        <p className='text-lg font-semibold'>Made with ❤ from Colombia</p>
      </footer>
    </section>
  )
}

export default HeroSection