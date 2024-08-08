import React from 'react'

function Card({img, alt, title, text, imgStyles, color}) {
  return (
    <figure className='w-full px-6 lg:px-24 md:px-16 flex flex-col items-center md:w-1/2 max-w-[25rem]'>
        <div className={` w-2/3 rounded-2xl ${imgStyles} flex flex-col justify-center items-center`}>
            <img src={img} alt={alt} className='rounded-2xl'/>
        </div>
        <h3 className={`mt-8 text-3xl text-center w-2/3 md:w-full font-semibold ${color}`}>{title}</h3>
        <p className='mt-6 text-xl text-center w-2/3 md:w-full text-white'>{text}</p>
    </figure>
  )
}

export default Card