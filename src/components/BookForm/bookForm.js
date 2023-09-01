import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { addBook } from '../../redux/books/booksSlice';
import './bookForm.css';

const BookForm = () => {
  const dispatch = useDispatch();
  const initialState = {
    title: '',
    author: '',
    category: '',
  };
  const [bookData, setBookData] = useState(initialState);

  const inputChangehandler = (e) => {
    const { name, value } = e.target;
    setBookData((previousData) => ({
      ...previousData,
      [name]: value,
    }));
  };

  const handleAddBook = (e) => {
    e.preventDefault();

    const { title, author, category } = bookData;

    if (title && author && category) {
      const timestamp = Date.now(); // Using timestamp as a unique ID
      const newBook = {
        item_id: timestamp.toString(),
        ...bookData,
      };
      dispatch(addBook(newBook));
      setBookData(initialState);
    }
  };

  return (
    <div className="containerCreateBooks">
      <form>
        <h3>ADD NEW BOOK</h3>
        <input
          type="text"
          name="title"
          placeholder="Book Title"
          value={bookData.title}
          onChange={inputChangehandler}
        />
        <input
          type="text"
          name="author"
          placeholder="Book Author"
          value={bookData.author}
          onChange={inputChangehandler}
        />
        <select
          className="select"
          name="category"
          value={bookData.category}
          onChange={inputChangehandler}
        >
          <option value="">Select Category</option>
          <option value="BIOGRAPHY">BIOGRAPHY</option>
          <option value="TECHNOLOGY">TECHNOLOGY</option>
          <option value="SCIENCE">SCIENCE</option>
          <option value="PHILOSHOPY">PHILOSHOPY</option>
        </select>
        <button
          className="addBook"
          type="button"
          onClick={handleAddBook}
        >
          ADD BOOK
        </button>
      </form>
    </div>
  );
};

export default BookForm;
