import React, { useContext, useEffect, useState } from 'react'
import { SectionContext } from '../context/SectionContext'
import { UserContext } from '../context/UserContext'
import { ShopContext } from '../context/ShopContext'
import { hatsData } from '../data'

function Shop() {
    const {shop, setShop} = useContext(SectionContext)
    const {points, setHat} = useContext(UserContext)
    const {hats, loadHats} = useContext(ShopContext)

    useEffect(() => {
        loadHats()
    }, [])

    return (
        <div className={`fixed ${(shop) ? "h-1/2" : "h-0 hidden"} bg-black overflow-y-auto w-full bottom-0 transition-all px-6 flex flex-col md:items-center md:px-0 lg:w-1/4 lg:bg-transparent lg:h-full lg:justify-center lg:items-end lg:right-24 lg:px-0`}>
            <div className={`md:w-3/4 flex flex-col items-center lg:w-80 lg:bg-black lg:h-[60vh] lg:rounded-2xl`}> 
                <h3 className='text-center text-light text-3xl font-semibold mb-12 lg:mt-6 lg:mb-6'>shop</h3>
                <div className='flex w-full justify-around flex-wrap gap-6 gap-y-8 pb-8 md:w-4/5 md:gap-x-4 lg:h-62 lg:overflow-y-auto lg:w-60 lg:gap-x-2'>
                    {hats.map((hat, index) => 
                        <figure key={index} className={`flex justify-center items-center bg-light rounded-xl w-20 h-20 cursor-pointer hover:bg-lightHover transition-all md:w-28 md:h-28 lg:w-16 lg:h-16 relative`} onClick={() => {
                            if(points >= hat.points) {
                                setHat(hats[index])
                                setShop(false)
                            }
                        }}>
                            <img src={hat.url} alt="hat" className='relative w-16 lg:w-12'/>
                            {
                                (points < hat.points)
                                ? <p className='absolute rounded-xl h-16 w-16 bg-light text-center flex items-center justify-center bg-opacity-60 text-black font-bold text-lg'>{hat.points}</p>
                                : null
                            }
                        </figure>
                    )}
                </div>
                <button className={`w-full py-3 text-2xl text-blue-turquoise font-semibold neon-turquoise-box transition-all hover:bg-blue-turquoise hover:text-black rounded-xl mt-4 md:w-2/3 lg:w-60 lg:text-xl lg:py-2 lg:mb-6 ${(shop) ? "mb-12" : "fixed -mb-60"}`} onClick={() => setShop(false)}>go back</button>
            </div>
        </div>
    )
}

export default Shop