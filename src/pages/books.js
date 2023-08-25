import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import BookList from '../components/bookList';
import BookForm from '../components/bookForm';

const Home = () => {
  const [books, setBooks] = useState([
    {
      id: uuidv4(),
      title: 'Book 1',
      author: 'Author 1',
    },
    {
      id: uuidv4(),
      title: 'Book 2',
      author: 'Author 2',
    },
  ]);

  const handleDelete = (id) => {
    setBooks((prevBooks) => prevBooks.filter((book) => book.id !== id));
  };

  const handleSubmit = (newBook) => {
    setBooks((prevBooks) => [...prevBooks, newBook]);
  };

  return (
    <div className="homePageDiv">
      <BookList books={books} onDelete={handleDelete} />
      <BookForm onSubmit={handleSubmit} />
    </div>
  );
};

export default Home;
