import React from 'react'
import UserCard from './UserCard'
import Books from './Books'
import Book from './Book'
import CreateBook from './CreateBook'
import Alert from './Alert'
import Account from './Account'

function Panel() {
  return (
    <section className='w-screen min-h-screen pt-16 bg-blue-darker px-6 lg:px-24'>
      <Alert/>
      <Account/>
      <Book/>
      <Books/>
      <UserCard/>
      <CreateBook/>
    </section>
  )
}

export default Panel