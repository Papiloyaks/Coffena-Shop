import logo from "../assets/images/logo.png";
import { Link } from "react-router-dom";
import phone from "../assets/images/phone.svg"
import chat from "../assets/images/chat.png"
import Aos from "aos";
import React, { useEffect } from 'react'

const Contact = () => {
  useEffect(() => {
    Aos.init({
      duration: 3000,

    });
    
  
    return () => {
      
    }
  }, [])
  return (
    <>
     <div>
        <nav className="bg-black fixed w-full">
          <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-5 position-fixed">
            <a href="#">
              <img src={logo} className="h-20" alt="Flowbite Logo" />
            </a>
            <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
              <Link to="/book">
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
                <Link to="/">
                <li>
                  <a
                    href="#"
                    className="block py-2 px-3 md:p-0 text-white rounded hover:bg-orange-400 md:hover:bg-transparent md:hover:text-blue-700 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                  >
                    Home
                  </a>
                </li>
                </Link>
                <Link to="/about">
                <li>
                  <a
                    href="#"
                    className="block py-2 px-3 md:p-0 text-white rounded hover:bg-orange-400 md:hover:bg-transparent md:hover:text-blue-700 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                  >
                    About
                  </a>
                </li>
                </Link>
                <Link to="/menu">
                <li>
                  <a
                    href="#"
                    className="block py-2 px-3 md:p-0 text-white rounded hover:bg-orange-400 md:hover:bg-transparent md:hover:text-blue-700 d:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                  >
                    Menu
                  </a>
                </li>
                </Link>
                <Link to="/contact">
                <li>
                  <a
                    href="#"
                    className="block py-2 px-3 md:p-0 text-white rounded hover:bg-orange-400 md:hover:bg-transparent md:hover:text-blue-700 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                  >
                    Contact
                  </a>
                </li>
                </Link>
              </ul>
            </div>
          </div>
        </nav>
      </div>
      <div data-aos="flip-left">
          <div className="backkks">
            <center className="font-semibold py-20">
              <h1 className="mt-40 font-serif text-5xl text-amber-600 p-10">Get in touch</h1>
              <p className='-mt-10 text-white text-xl font-serif'>Want to get in touch? We love to hear from you.Here is how can reach us</p>
            </center>
          </div>
        </div>
        <div className='grid lg-grid-cols-2 md:grid-cols-2 sm:grid-cols-2 bg-black py-10 justify-items-center'>
          <center className='border bg-white w-2/3 p-10 bg-[#dbcbbd]'><img src={phone} width={56} alt="" />
          <p className='text-[#c87941] text-xl p-2 font-semibold font-serif'>Talk to Sales</p>
          <p className='text-black text-sm font-semibold'>Intrested in making a custom coffe flavour? Just pick up the phone to chat with a member of our sales team</p>
          <p className='p-2 font-semibold'>+2349004560000</p>
          <p><a className='text-xs border-0 hover:bg-black p-2 rounded bg-[#d87941] text-white' href="">View all global numbers</a></p>
          </center>
          <center className='border bg-white w-2/3 p-10 bg-[#dbcbbd]'><img src={chat} width={56} alt="" />
          <p className='text-[#c87941] text-xl p-2 font-semibold font-serif'>Contact Customer Support</p>
          <p  className='text-black text-sm font-semibold'>Sometimes you need a little help from your friends, or a Cafena support rep. Don't worry... we're here for you.</p>
          <p className='mt-8'><a className='text-xs border-0 hover:bg-black p-2 rounded bg-[#d87941] text-white' href="">Contact Support</a></p>
          </center>
        </div>
    </>
  )
}

export default Contact