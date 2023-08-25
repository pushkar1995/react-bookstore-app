import React from 'react';
import PropTypes from 'prop-types';
import IndividualBook from './individualBook';

const BookList = ({ books, onDelete }) => (
  <div className="bookListDiv">
    <h2>Books</h2>
    <ul>
      {books.map((book) => (
        <li key={book.id}>
          <IndividualBook book={book} onDelete={onDelete} />
        </li>
      ))}
    </ul>
  </div>
);

BookList.propTypes = {
  books: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      author: PropTypes.string.isRequired,
    }),
  ).isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default BookList;
