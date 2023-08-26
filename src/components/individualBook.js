import PropTypes from 'prop-types';

const IndividualBook = ({ book, onDelete }) => {
  const handleDelete = () => {
    onDelete(book.id);
  };

  return (
    <div className="individualBookDiv">
      <h3>{book.title}</h3>
      <p>{book.author}</p>
      <button type="button" onClick={handleDelete}>
        Delete
      </button>
    </div>
  );
};

IndividualBook.propTypes = {
  book: PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
  }).isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default IndividualBook;
