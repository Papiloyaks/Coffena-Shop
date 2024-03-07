import React from 'react'
import logo from "../assets/images/logo.png";
import { Link } from 'react-router-dom';
import Footer from './Footer';


const About = () => {
  return (
    <>
    <div>
    <nav className="bg-black fixed w-full">
          <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-5 position-fixed">
            <a href="#">
              <img src={logo} className="h-20" alt="Flowbite Logo" />
            </a>
            <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
              <Link to="./book">
              <button 
                id="bn632-hover bn19"
                type="button"
                className="text-white w-40 bg-orange-400 hover:bg-black focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" >Book Table</button></Link>
              <button
                data-collapse-toggle="navbar-cta"
                type="button"
                className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600 bg-white text-orange-400"
                aria-controls="navbar-cta"
                aria-expanded="false"
              >
                <span className="sr-only">Open main menu</span>
                <svg
                  className="w-7 h-7"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 17 14"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M1 1h15M1 7h15M1 13h15"
                  />
                </svg>
              </button>
            </div>
            <div
              className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
              id="navbar-cta"
            >
              <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 text-white font-serif font md:text-white-200 md:space-x-8 rtl: md:flex-row">
                <li>
                  <a
                    href="#"
                    className="block py-2 px-3 md:p-0 text-white rounded hover:bg-orange-400 md:hover:bg-transparent md:hover:text-blue-700 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                  >
                    Home
                  </a>
                </li>
                <Link to="./about">
                <li>
                  <a
                    href="#"
                    className="block py-2 px-3 md:p-0 text-white rounded hover:bg-orange-400 md:hover:bg-transparent md:hover:text-blue-700 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                  >
                    About
                  </a>
                </li>
                </Link>
                <li>
                  <a
                    href="#"
                    className="block py-2 px-3 md:p-0 text-white rounded hover:bg-orange-400 md:hover:bg-transparent md:hover:text-blue-700 d:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                  >
                    Menu
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="block py-2 px-3 md:p-0 text-white rounded hover:bg-orange-400 md:hover:bg-transparent md:hover:text-blue-700 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                  >
                    Contact
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
    </div>
    <section>
    <div>
    <div className="backkk">
          <center className="font-semibold text-gray-100 py-20">
            <h1 className="text-5xl mt-40">
            ABOUT US
            </h1>
          </center>
    </div>
    </div>
    <center>
      <div className='bg-black'>
        <h1 className='text-xl font-semibold text-orange-400 p-5'>A LITTLE ABOUT US</h1>
        <p id='lor' className='text-white'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Impedit voluptate maiores voluptatem natus molestias sit placeat perferendis, expedita perspiciatis maxime. Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa magni itaque cumque quibusdam quas, amet cum aperiam architecto dolore sit, voluptatem alias dolores numquam consequatur ratione provident est minima? Laudantium?</p>
        </div>
        <div id='lorr' className='bg-red-300 py-10'> 
            <div id='lor' className='border'>
                <h3>Our Missions</h3>
                <p id=''>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore ex aspernatur explicabo soluta sint, corrupti nobis deleniti ipsa ullam consequatur quis error molestias voluptates quam! Quidem adipisci culpa laborum consequatur.</p>
            </div>
            <div id='lor' className='border'>
                <h3>Our Visions</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore ex aspernatur explicabo soluta sint, corrupti nobis deleniti ipsa ullam consequatur quis error molestias voluptates quam! Quidem adipisci culpa laborum consequatur.</p>
            </div>
        </div>

    </center>
    </section>
    <Footer/>
    </>
  )
}

export default About