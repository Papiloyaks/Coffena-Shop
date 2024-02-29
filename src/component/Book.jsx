import React from 'react'
import logo from "../assets/images/logo.png";
import { Link } from 'react-router-dom';
import cofe from "../assets/images/cofe.jpg";
import { FaPlus } from "react-icons/fa";
import { RiSubtractLine } from "react-icons/ri";
import { useState } from "react";
import Footer from './Footer';


const Book = () => {
  const [quantity, setQuantity] = useState(1);
  const itemPrice = 10; // Replace with the actual price of your item

  const handleIncrement = () => {
    setQuantity((prevQuantity) => prevQuantity + 1);
  };

  const handleDecrement = () => {
    if (quantity > -0) {
      setQuantity((prevQuantity) => prevQuantity - 1);
    }
  };

  const calculateTotalPrice = () => {
    return quantity * itemPrice;
  };

  const handlePayment = () => {
    // Add your payment validation logic here
    const total = calculateTotalPrice();

    // For demonstration purposes, let's just log the total price
    console.log(`Total Price: $${total}`);

    // Add your actual payment processing logic here
    // Example: Make an API call to process the payment
    // api.processPayment(total)
    //   .then(response => {
    //     console.log('Payment successful', response);
    //   })
    //   .catch(error => {
    //     console.error('Payment failed', error);
    //   });
  };
  return (
    <>
    <div>
    <nav className="bg-black fixed w-full">
          <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-5 position-fixed">
            <a href="#">
              <img src={logo} className="h-20" alt="Flowbite Logo" />
            </a>
            <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
              <Link to="./">
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
                <li>
                  <a
                    href="#"
                    className="block py-2 px-3 md:p-0 text-white rounded hover:bg-orange-400 md:hover:bg-transparent md:hover:text-blue-700 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                  >
                    About
                  </a>
                </li>
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
    <div className="backk">
          {/* <img classNameName='w-fit' src={home} alt="" /> */}
          <center className="font-semibold text-gray-100 py-20">
            <h1 className="text-7xl mt-40">
              Book A Table
            </h1>
            <p className="text-bold text-xl">Order any coffee flavour of your your choice</p>
          </center>
        </div>
    </section>

    <section className="grid lg-grid-cols-2 md:grid-cols-2 sm:grid-cols-3">
        <div className="bg-black">
          <img src={cofe} width={700} alt=""/>
        </div>
        <div className="bg-amber-800">
          <div className="text-center py-10">
            <h1 className="py-2 text-3xl text-white font-serif font-medium">
              Know Your Bill
            </h1>
            <p className="w-90">
              <hr />
            </p>
            <p className="p-3 text-xl font-serif text-white font-meduim">
              Pick Your Flavour
            </p>
            <p className="text-white">
              <select className="w-full border-0 text-center mt-5" id="select">
                <option className="text-white">Vanilla</option>
                <option value="">Chocolate</option>
                <option value="">Caffe Mocha</option>
                <option value="">Caramel</option>
                <option value="">Berry</option>
                <option value="">Irish Cream</option>
              </select>
            </p>
            <div className="mt-5">
              <p className="text-white text-xl font-serif">
                Quantity: {quantity}
              </p>
              <p id="select" className="mt-5">
                <button
                  className=" text-sm rounded p-1 bg-black text-white hover:bg-white hover:text-black"
                  onClick={handleDecrement}
                >
                  <RiSubtractLine />
                </button>
                <button
                  className="rounded p-1 bg-black text-white ms-2 text-sm hover:bg-white hover:text-black"
                  onClick={handleIncrement}
                >
                  <FaPlus />
                </button>
              </p>
            </div>
            <div className="mt-5">
              <a href="/">
                <button class="bn53" onClick={handlePayment}>Validate</button>
              </a>
            </div>
            <h4 className="mt-4 text-lg font-meduim font-serif text-white">
              Your Bill is:
            </h4>
            <p className="mt-3">
              {/* <span className="text-white text-xl font-serif">$0.00</span> */}
              <span className="text-white text-xl font-serif">Total Price: ${calculateTotalPrice()}</span>
            </p>
          </div>
        </div>
      </section>
      <Footer/>

    </>
  )
}

export default Book