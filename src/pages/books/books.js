import BookList from '../../components/BookList/bookList';
import BookForm from '../../components/BookForm/bookForm';
import './books.css';

const Books = () => (
  <div className="books-container">
    <BookList />
    <BookForm />
  </div>
);

export default Books;
