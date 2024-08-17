import React from 'react'

function ConnectWords({wordsEn, wordsEs}) {
  return (
    <div className='w-full h-full flex flex-col items-center'>
        <h3 className='text-white font-medium text-center text-2xl'>Connect the words</h3>
      <div className='flex flex-row w-full h-full'>
        <div className='w-1/2 h-full items-center justify-center gap-8 text-white flex flex-col'>
          {wordsEn.map(word => <figure className='cursor-pointer neon-white-box py-2 px-4 w-4/5 flex items-center justify-center'>
            <p className='text-sm md:text-lg font-semibold'>{word}</p>
          </figure>)}
        </div>
        <div className='w-1/2 h-full items-center justify-center gap-8 text-white flex flex-col'>
          {wordsEs.map(word => <figure className='cursor-pointer neon-white-box py-2 px-4 w-4/5 flex items-center justify-center'>
            <p className='text-sm md:text-lg font-semibold'>{word}</p>
          </figure>)}
        </div>
      </div>
    </div>
  )
}

export default ConnectWords