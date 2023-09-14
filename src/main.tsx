import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.scss';

// import ErrorPage from './components/ErrorPage.tsx';

import { createBrowserRouter, RouterProvider, Navigate } from 'react-router-dom';
const router = createBrowserRouter([
  {
    path: '/',
    element: <App />
    // errorElement: <ErrorPage />
  },
  {
    path: '*',
    element: <Navigate to="/" />
  }
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>
);
