import React from 'react'
import { Link } from 'react-router-dom'
import logo from "../assets/images/logo.png";
import blog from "../assets/images/blog.jpg"
import vani from "../assets/images/vani.jpg"
import vanil from "../assets/images/vanil.jpg"
import smoke from "../assets/images/smoke.png"
import mocha from "../assets/images/mocha.png"
import ame from "../assets/images/ame.png"
import cups from "../assets/images/cups.png"
import butter from "../assets/images/butter.png"
import grog from "../assets/images/grog.png"


const Menu = () => {
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
                <Link to="./menu">
                <li>
                  <a
                    href="#"
                    className="block py-2 px-3 md:p-0 text-white rounded hover:bg-orange-400 md:hover:bg-transparent md:hover:text-blue-700 d:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                  >
                    Menu
                  </a>
                </li>
                </Link>
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
    <section className='bg-black'>
    
    <div className="backkkk">
          <center className="font-semibold text-gray-100 py-20">
            <h1 className="text-5xl mt-40">
            OUR MENU
            </h1>
          </center>
    </div>

    <center className="grid lg-grid-cols-3 md:grid-cols-3 sm:grid-cols-3 mt-10 bg-black">
        <div>
        <img src={blog} alt="" />
        <p className='text-xl text-orange-600 font-serif'>Vanilla</p>
        <div className=''>
            <button className='p-2 bg-orange-500 font-semibold font-serif rounded-xl text-white'>Buy Now</button>
            <button className='p-2 bg-gray-200 font-semibold font-serif rounded-xl text-white'>Add to cart</button>
        </div>
        </div>
        <div>
        <img src={vani} alt="" />
        <p className='text-xl text-orange-600 font-serif'>Hazelnut</p>
        <div>
        <button className='p-2 bg-orange-500 font-semibold font-serif rounded-xl text-white'>Buy Now</button>
            <button className='p-2 bg-gray-200 font-semibold font-serif rounded-xl text-white'>Add to cart</button>
        </div>
        </div>
        <div>
        <img src={vanil} alt="" />
        <p className='text-xl text-orange-600 font-serif'>Caramel</p>
        <div>
        <button className='p-2 bg-orange-500 font-semibold font-serif rounded-xl text-white'>Buy Now</button>
            <button className='p-2 bg-gray-200 font-semibold font-serif rounded-xl text-white'>Add to cart</button>
        </div>
        </div>

        <div>
        <img src={smoke} width={300} alt="" />
        <p className='text-xl text-orange-600 font-serif'>Chocolate</p>
        <div>
        <button className='p-2 bg-orange-500 font-semibold font-serif rounded-xl text-white'>Buy Now</button>
            <button className='p-2 bg-gray-200 font-semibold font-serif rounded-xl text-white'>Add to cart</button>
        </div>
        </div>

        <div>
        <img src={mocha} alt="" />
        <p className='text-xl text-orange-600 font-serif'>Caffe Mocha</p>
        <div>
        <button className='p-2 bg-orange-500 font-semibold font-serif rounded-xl text-white'>Buy Now</button>
            <button className='p-2 bg-gray-200 font-semibold font-serif rounded-xl text-white'>Add to cart</button>
        </div>
        </div>

        <div>
        <img src={ame} alt="" />
        <p className='text-xl text-orange-600 font-serif'>Ameretto</p>
        <div>
        <button className='p-2 bg-orange-500 font-semibold font-serif rounded-xl text-white'>Buy Now</button>
            <button className='p-2 bg-gray-200 font-semibold font-serif rounded-xl text-white'>Add to cart</button>
        </div>
        </div>
        {/* next */}
        <div>
        <img src={cups} width={300} alt="" />
        <p className='text-xl text-orange-600 font-serif'>Cappuccino</p>
        <div>
        <button className='p-2 bg-orange-500 font-semibold font-serif rounded-xl text-white'>Buy Now</button>
            <button className='p-2 bg-gray-200 font-semibold font-serif rounded-xl text-white'>Add to cart</button>
        </div>
        </div>

        <div>
        <img src={butter} alt="" />
        <p className='text-xl text-orange-600 font-serif'>Butterscotch</p>
        <div>
        <button className='p-2 bg-orange-500 font-semibold font-serif rounded-xl text-white'>Buy Now</button>
            <button className='p-2 bg-gray-200 font-semibold font-serif rounded-xl text-white'>Add to cart</button>
        </div>
        </div>

        <div>
        <img src={grog} alt="" />
        <p className='text-xl text-orange-600 font-serif'>Grog</p>
        <div>
        <button className='p-2 bg-orange-500 font-semibold font-serif rounded-xl text-white'>Buy Now</button>
            <button className='p-2 bg-gray-200 font-semibold font-serif rounded-xl text-white'>Add to cart</button>
        </div>
        </div>
    </center>
    </section>
    </>
  )
}

export default Menu