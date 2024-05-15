import React, { useContext, useEffect, useState } from 'react'
import {booksData} from '../data'
import { SectionContext } from '../context/SectionContext'
import { BooksContext } from '../context/BooksContext'
import '../App.css'

function Books() {
  const {setBook, setCreateBook} = useContext(SectionContext)
  const {setTitle, setContent, setActualBook, books, setBooks} = useContext(BooksContext)

  const bookStyles = "rounded-xl flex flex-col gap-2 justify-center items-center md:w-40 md:h-40 md:h-52 transition-all lg:w-40 shadow-xl"

  useEffect(() => {
    setBooks(booksData)
  }, [])

  const handleBookClick = (book, index) => {
    setBook(true)
    setActualBook(index)
    setTitle(book.title)
    setContent(book.content)
  }

  return (
    <main className='min-h-screen -mt-16 pt-16 lg:w-2/3 w-full pb-32 lg:pb-8'>
      <h2 className='text-2xl text-light font-semibold mt-6 lg:text-3xl lg:mt-8'>Your books</h2>
      <div className='w-full bg-light h-[3px] rounded-full mb-8 mt-4 neon-white-box'/>
      <div className='flex flex-wrap h-full justify-between gap-y-8 lg: lg:gap-x-10 lg:justify-start items-start'>
        <figure className = {`${bookStyles} w-[45%] border-blue-turquoise neon-turquoise-box border-4 hover:bg-blue-turquoise text-blue-turquoise hover:text-black bg-black h-48 md:h-48 cursor-pointer`} onClick={() => setCreateBook(true)}>
          <p className='text-5xl font-bold'>+</p>
        </figure>
        {books.map((book, index) => {
          return <div key={index} className='w-[40vw] rounded-xl flex flex-col gap-2 justify-center items-center md:w-[26%] transition-all lg:w-40'>
          <figure className={`${bookStyles} h-[40vw] w-full bg-cover cursor-pointer hover:bg-blue-darkHover border-b-4 opacity-80 hover:opacity-100 ${book.read
            ? 'border-dark'
            : 'border-blue-turquoise'
          }`} onClick = {e => handleBookClick(book, index)}>
            <img src={book.img || "profile.webp"} alt="image" className='rounded-xl w-full h-full'/>
          </figure>
            <p className='text-light font-semibold w-4/5 text-center text-sm'>{book.title}</p>
            {(book.read)
            ? <p className='text-medium font-semibold'>completed</p>
            : <p className='text-blue-turquoise font-semibold'>pending</p>
            }
          </div>
        })}
      </div>
    </main>
  )
}

export default Books