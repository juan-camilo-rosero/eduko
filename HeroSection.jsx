import LoginContainer from './LoginContainer'

function HeroSection() {
  return (
    <section className="pt-20 pb-10 min-h-screen bg-blue-darker flex flex-col px-6 items-center lg:grid lg:grid-cols-3">
        <div className='flex flex-col items-center lg:col-span-2'>
            <h1 className="mt-10 text-center font-semibold text-light text-4xl mb-10 md:w-4/5 md:text-5xl lg:text-left lg:leading-snug">Encourage your child's reading with AI</h1>
            <h2 className="text-center text-xl md:text-2xl text-medium md:w-4/5 lg:text-left">Create books based on their interests and motivate them through rewards for reading.</h2>
        </div>
        <LoginContainer/>
    </section>
  )
}

export default HeroSection