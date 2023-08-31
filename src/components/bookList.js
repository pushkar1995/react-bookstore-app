import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { remove } from '../redux/books/booksSlice';

const BookList = () => {
  const books = useSelector((store) => store.books);
  const dispatch = useDispatch();

  const handleDelete = (id) => {
    dispatch(remove({ id }));
  };
  return (
    <section className="homePageDiv">
      <div className="bookListDiv">
        <h1 className="title">BOOKS</h1>
        <ul>
          {books.map((book) => (
            <li key={book.itemId} className="individualBookLiItem">
              <div className="bookInfo">
                <h2>{book.title}</h2>
                <h3>{book.author}</h3>
                <h4>{book.category}</h4>
              </div>
              <button
                className="delete"
                type="button"
                onClick={() => handleDelete(book.itemId)}
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};
export default BookList;
