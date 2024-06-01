import { useContext } from 'react'
import LoginContainer from './LoginContainer'
import { SectionContext } from '../context/SectionContext'

function HeroSection() {
  const {setSignUp} = useContext(SectionContext)
  return (
    <section className='bg-[#0B0037]'>
      <div className="relative w-full h-screen">
        <div className='h-3/5 w-full flex flex-col items-center lg:items-start lg:pl-40 gap-12 pt-[12vh] lg:w-1/2 lg:absolute lg:left-0  lg:h-[90vh] lg:mt-[10vh] lg:gap-10'>
          <h1 className='text-4xl text-gray-100 font-bold w-3/4 text-center md:text-5xl lg:text-left lg:w-full'>Eduku</h1>
          <p className='text-2xl text-gray-100 text-center w-3/4 md:text-2xl lg:text-left lg:w-full z-10'>Create personalized books with AI for your children to learn English in a fun and effective way, based on their interests.</p>
          <button className="py-2 w-3/4 text-2xl bg-transparent border-2 border-white neon-white-box rounded-xl font-semibold text-white hover:bg-whiteHover transition-all md:text-xl hover:bg-white hover:text-black absolute bottom-16 z-10 md:static md:w-auto md:px-14 lg:text-2xl" onClick={() => setSignUp(true)}>start now</button>
        </div>
        <img src="astronaut_kid.png" alt="Astronaut kid" className="absolute bottom-0 left-1/2 transform -translate-x-1/2 h-1/2 object-cover shadow-lg lg:right-0 lg:left-auto lg:h-[80vh] lg:translate-x-0 lg:mr-20" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black w-full h-[50vh] mt-[50vh] lg:h-[75vh] lg:mt-[25vh]"></div>
      </div>



      <div className='w-full h-screen bg-black'></div>
      {/*
      <section className="pt-20 pb-10 min-h-screen bg-blue-darker flex flex-col px-6 items-center lg:grid lg:grid-cols-3">
          <div className='flex flex-col items-center lg:col-span-2'>
              <h1 className="mt-10 text-center font-semibold text-light text-4xl mb-10 md:w-4/5 md:text-5xl lg:text-left lg:leading-snug">Encourage your child's reading with AI</h1>
              <h2 className="text-center text-xl md:text-2xl text-medium md:w-4/5 lg:text-left">Create books based on their interests and motivate them through rewards for reading.</h2>
          </div>
          <LoginContainer/>
      </section>
    */}


    </section>
  )
}

export default HeroSection
