import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Navigation from './components/navBar';
import Home from './pages/books';
import Categories from './pages/categories';
import './App.css';

function App() {
  return (
    <Router>
      <Navigation />
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/categories" element={<Categories />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
