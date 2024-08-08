import { useContext } from 'react'
import Card from './Card'
import { SectionContext } from '../context/SectionContext'

function HeroSection() {
  const {setSignUp} = useContext(SectionContext)
  return (
    <section className='bg-[#0B0037]'>
      <div className="relative w-full h-screen">
        <div className='h-3/5 w-full flex flex-col items-center lg:items-start lg:pl-40 gap-12 pt-[12vh] lg:w-1/2 lg:absolute lg:left-0  lg:h-[90vh] lg:mt-[10vh] lg:gap-10'>
          <h1 className='text-4xl text-gray-100 font-bold w-3/4 text-center md:text-5xl lg:text-left lg:w-full'>Eduko</h1>
          <p className='text-2xl text-gray-100 text-center w-3/4 md:text-2xl lg:text-left lg:w-full z-10'>Create personalized books with artificial intelligence for your children to learn English in a fun and effective way, based on their interests.</p>
          <button className="py-2 w-3/4 text-2xl bg-transparent border-2 border-white neon-white-box rounded-xl font-semibold text-white hover:bg-whiteHover transition-all md:text-xl hover:bg-white hover:text-black absolute bottom-16 z-10 md:static md:w-auto md:px-14 lg:text-2xl" onClick={() => setSignUp(true)}>start now</button>
        </div>
        <img src="astronaut_kid.png" alt="Astronaut kid" className="absolute bottom-0 left-1/2 transform -translate-x-1/2 h-1/2 object-cover shadow-lg lg:right-0 lg:left-auto lg:h-[80vh] lg:translate-x-0 lg:mr-20" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black w-full h-[50vh] mt-[50vh] lg:h-[75vh] lg:mt-[25vh]"></div>
      </div>

      <div className='w-full bg-black pt-16 pb-20 flex flex-col gap-24 md:flex-row md:flex-wrap md:w-full md:gap-0 md:justify-center md:gap-y-20'>
        <Card title="Learn by reading" text="Enjoy reading books created based on your interests" alt="book" img="book.jpg" imgStyles="neon-red-box" color="text-[#dc224c]"/>
        <Card title="AI powered" text="We use artificial intelligence to create customized books and rate them" alt="AI" img="ai.webp" imgStyles="neon-turquoise-box" color="text-blue-turquoise"/>
        <Card title="Gamification" text="Our interface emulates a video game and we use a system of streaks and points to encourage learning." alt="videogame" img="game.jpg" imgStyles="neon-purple-box" color="text-[#c46ded]"/>
      </div>
    </section>
  )
}

export default HeroSection