import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

import Book from './Book'   // in case of default you cab rename as well 
import {books} from './books' // we have to specify which one to export.
const BookList = () => {
  const getBook = (index) => {
    const book = books.find((book) => book.id === index + 1) // index starts from 0
    console.log(book.title, index)
  }
  return (
    <>
      <h1>Amazon Best Seller Books</h1>
      <section className="booklist">
        {books.map((book, index) => {
          // console.log(book)
          return (
            <Book {...book} key={book.id} getBook={getBook} index={index}>
              <h4>Children</h4>
            </Book>
          )
        })}
      </section>
    </>
  )
}


const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(<BookList>All the matter </BookList>)
