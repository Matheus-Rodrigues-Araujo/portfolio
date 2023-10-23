import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

import {createBrowserRouter, RouterProvider } from 'react-router-dom';

import Home from './routes/Home';
import ErrorPage from './routes/ErrorPage';
import Projects from './routes/Projects';
import Project1 from './routes/techs/project1';
import Project2 from './routes/techs/project2';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App/>,
    errorElement: <ErrorPage/>,
    children: [
      {
        path: '/',
        element: <Home/>  
      }
    ]
  },
  {
    path: '/projects',
    element: <App/>,
    children:[
      {
        path:'/projects',
        element: <Projects/>
      }
    ]
  },
  {
    path: '/project1',
    element: <App/>,
    children:[
      {
        path:'/project1',
        element: <Project1/>
      }
    ]
  },
  {
    path: '/project2',
    element: <App/>,
    children:[
      {
        path:'/project2',
        element: <Project2/>
      }
    ]
  },
])


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
