import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Overview from './components/Overview';
import Contacts from './components/Contacts';
import Favorites from './components/Favorites';
import New from './components/New';


const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <Overview />,
    children: [
      {
        path: '/',
        element: <Overview />,
        
      },
      {
        path: '/contacts',
        element: <Contacts />,
      },
      {
        path: '/favorites',
        element: <Favorites />,
      },
      {
        path: '/new',
        element: <New />,
      }

    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <RouterProvider router={router} />
  </React.StrictMode>,
)
