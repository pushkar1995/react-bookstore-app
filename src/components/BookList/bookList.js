import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getBookItems, removeBook } from '../../redux/books/booksSlice';
import './bookList.css';

const BookList = () => {
  const dispatch = useDispatch();
  const { books, isLoading, error } = useSelector((state) => state.books);

  useEffect(() => {
    dispatch(getBookItems());
  }, [dispatch]);

  const renderBook = (itemId, book) => {
    const { category, title, author } = book;

    return (
      <div className="booklist-container">
        <div key={itemId} className="Renderingcontainer">
          <div className="renderLeft">
            <p className="cat">{category}</p>
            <h3 className="tit">{title}</h3>
            <p className="auth">{author}</p>
            <div className="leftButton">
              <button className="leftButton" type="button">Comment</button>
              <button
                className="leftButton"
                type="button"
                onClick={() => dispatch(removeBook(itemId))}
              >
                Remove
              </button>
              <button className="leftButton" type="button">Edit</button>
            </div>
          </div>
        </div>
        <div className="renderRight">
          <div className="middle">
            <div className="Amid">
              <progress value="68%" min="0" max="100" style={{ visibility: 'hidden', height: '0', width: '0' }}>75%</progress>
            </div>
            <div className="midRight">
              <h4 className="percent">68%</h4>
              <h4 className="completed">Completed</h4>
            </div>
          </div>
          <div className="h-divider" />
          <div className="deepRight">
            <p className="current">Current Chapter</p>
            <p className="chapter">Chapter 15 </p>
            <button className="updateProgressButton" type="button">UPDATE PROGRESS</button>
          </div>
        </div>
      </div>
    );
  };

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Request failed</p>;
  }

  if (!books) {
    return null;
  }

  return (
    <div>
      {Object.entries(books).map(([itemId, book]) => renderBook(itemId, book[0]))}
    </div>
  );
};

export default BookList;
