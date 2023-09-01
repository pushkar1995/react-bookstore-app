import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navigation from './components/Navbar/navBar';
import BookPage from './pages/bookPage';
import Categories from './pages/categories';
import Books from './pages/books';
import './App.css';

function App() {
  return (
    <div className="wrapper">
      <Router>
        <Navigation />
        <div>
          <Routes>
            <Route path="/" element={<Books />} />
            <Route path="/bookPage" element={<BookPage />} />
            <Route path="/categories" element={<Categories />} />
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
