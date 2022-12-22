import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './components/Home/Home';
import Main from './layout/Main';
import Courses from './components/Courses/Courses';
import Statistics from './components/Statistics/Statistics';
import Blogs from './components/Blogs/Blogs';
import About from './components/About/About';
import Footer from './components/Footer/Footer';
import Quiz from './components/Quiz/Quiz';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const App = () => {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Main></Main>,
      children:[
        {
          path: '/',
          loader: async() => {
            return fetch('https://openapi.programming-hero.com/api/quiz')
          },
          element: <Home></Home>
        },
        {
          path: 'home',
          loader: async() => {
            return fetch('https://openapi.programming-hero.com/api/quiz')
          },
          element: <Home></Home>
        },
        {
          path: 'courses',
          loader: async() => {
            return fetch('https://openapi.programming-hero.com/api/quiz')
          },
          element: <Courses></Courses>
        },
        {
          path: 'quiz/:quizId',
          loader: async({params}) => {
            return fetch(`https://openapi.programming-hero.com/api/quiz/${params.quizId}`)
          },
          element: <Quiz></Quiz>
        },
        {
          path: 'statistics',
          loader: async() => {
            return fetch('https://openapi.programming-hero.com/api/quiz')
          },
          element: <Statistics></Statistics>
        },
        {
          path: 'blogs', element: <Blogs></Blogs>
        },
        {
          path: 'about', element: <About></About>
        }
      ]
    }
  ]);
  return (
    <div>
        <RouterProvider router={router}></RouterProvider>
        <div className=''><ToastContainer className='some'></ToastContainer></div>
    </div>
  );
};

export default App;
