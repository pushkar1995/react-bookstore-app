import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Provider } from 'react-redux';
import App from './App';
import Home from './pages/books';
import Categories from './pages/categories';
import store from './redux/store';

const router = createBrowserRouter([
  {
    path: '*',
    element: <App />,
    children: [
      { path: 'books', element: <Home /> },
      { path: 'categories', element: <Categories /> },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  </Provider>,
);
