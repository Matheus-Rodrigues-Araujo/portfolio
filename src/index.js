import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

import {createBrowserRouter, RouterProvider } from 'react-router-dom';

import Home from './routes/Home';
import About from './routes/About';
import Graduation from './routes/Graduation'
import Career from './routes/Career'
import Projects from './routes/Projects'
import Contact from './routes/Contact';
import ErrorPage from './routes/ErrorPage';
import Inbox from './routes/inbox';
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
    path: '/about',
    element: <App/>,
    children:[
      {
        path:'/about',
        element: <About/>
      }
    ]
  },
  {
    path: '/graduation',
    element: <App/>,
    children:[
      {
        path:'/graduation',
        element: <Graduation/>
      }
    ]
  },
  {
    path: '/career',
    element: <App/>,
    children:[
      {
        path:'/career',
        element: <Career/>
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
    path: '/contact',
    element: <App/>,
    children:[
      {
        path:'/contact',
        element: <Contact/>
      }
    ]
  },
  {
    path: '/inbox',
    element: <App/>,
    children:[
      {
        path:'/inbox',
        element: <Inbox/>
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
