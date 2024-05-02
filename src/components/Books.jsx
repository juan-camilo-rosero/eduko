import React, { useContext, useEffect, useState } from 'react'
import {booksData} from '../data'
import { SectionContext } from '../context/SectionContext'
import { BooksContext } from '../context/BooksContext'

function Books() {
  const {setBook} = useContext(SectionContext)
  const {setTitle, setContent, setActualBook, books, setBooks} = useContext(BooksContext)

  const bookStyles = "w-[45%] h-48 rounded-xl flex flex-col gap-2 justify-center items-center md:w-[26%] md:h-52 transition-all lg:w-1/5 shadow-xl"

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
      <div className='w-full bg-light h-[3px] rounded-full mb-8 mt-4'/>
      <div className='flex flex-wrap h-full justify-between gap-y-8 lg: gap-x-4'>
        <figure className = {`${bookStyles} border-blue-turquoise border-4 border-dashed hover:bg-blue-darkHover  cursor-pointer`}>
          <p className='text-5xl text-blue-turquoise font-bold '>+</p>
        </figure>
        {books.map((book, index) => {
          return <figure key={index} className={`${bookStyles} bg-blue-dark cursor-pointer hover:bg-blue-darkHover border-b-4 ${book.read
            ? 'border-dark'
            : 'border-blue-turquoise'
          }`} onClick = {e => handleBookClick(book, index)}>
            <p className='text-light font-semibold w-4/5 text-center'>{book.title}</p>
            {(book.read)
            ? <p className='text-medium font-semibold'>completed</p>
            : <p className='text-blue-turquoise font-semibold'>pending</p>
            }
          </figure>
        })}
      </div>
    </main>
  )
}

export default Books