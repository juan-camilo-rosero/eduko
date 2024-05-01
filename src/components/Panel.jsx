import React from 'react'
import UserCard from './UserCard'
import Books from './Books'
import Book from './Book'

function Panel() {
  return (
    <section className='w-screen min-h-screen pt-16 bg-blue-darker px-6 lg:px-24'>
      <Book/>
      <Books/>
      <UserCard/>
    </section>
  )
}

export default Panel