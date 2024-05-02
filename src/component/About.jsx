import React from "react";
import logo from "../assets/images/logo.png";
import { Link } from "react-router-dom";
import Footer from "./Footer";
import userone from "../assets/images/userone.png"
import userthree from "../assets/images/userthree.png"
import user from "../assets/images/user.png"
import { LuFacebook } from "react-icons/lu";
import { BsInstagram } from "react-icons/bs";
import { LuTwitter } from "react-icons/lu";

const About = () => {
  return ( 
    <>
      <div>
        <nav className="bg-black fixed w-full">
          <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-5 position-fixed">
            <a href="">
              <img src={logo} className="h-20" alt="Flowbite Logo" />
            </a>
            <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
              <Link to="./book">
                <button
                  id="bn632-hover bn19"
                  type="button"
                  className="text-white w-40 bg-orange-400 hover:bg-black focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                Book Table
                </button>
              </Link>
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
                    href="home"
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
              <h1 className="mt-40 font-serif text-4xl">ABOUT US</h1>
            </center>
          </div>
        </div>
          <div className="bg-black">
        <center className="p-10">
            <h1 className="text-2xl font-serif font-semibold text-orange-400">
              A LITTLE ABOUT US
            </h1>
            <p className="bg-black text-white text-base font-serif p-5">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Impedit
              voluptate maiores voluptatem natus molestias sit placeat
              perferendis, expedita perspiciatis maxime. Lorem ipsum dolor sit
              amet consectetur adipisicing elit. Culpa magni itaque cumque
              quibusdam quas, amet cum aperiam architecto dolore sit, voluptatem
              alias dolores numquam consequatur ratione provident est minima?
              Laudantium?
            </p>
        </center>
          </div>
          <center className="bg-black">
          <center className="Bg w-3/4 p-10 rounded-3xl">
            <div className="bg rounded-xl">
              <h2 className="B p-1" >Our Mission</h2>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam dolore necessitatibus temporibus atque deleniti magnam aspernatur libero sint quaerat, illo harum, ipsam, consectetur aliquam cupiditate quae autem corrupti. Accusantium, ex?</p>
            </div>
            <div className="bg mt-5 rounded-xl">
              <h2 className="B p-1">Our Vision</h2>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero expedita labore doloremque, incidunt praesentium repudiandae recusandae dolores cum corporis quisquam non nostrum nemo minima nulla temporibus, earum quo! Soluta, accusantium!
            </div>
          </center>
          </center>
            <center>
          <div className="grid lg-grid-cols-2 md:grid-cols-3 sm:grid-cols-3 bg-black py-20">
          <span className="p-5">
            <img src={userone} alt="" />
            <h2 className="text-xl font-semibold font-serif text-gray-300">James Watt</h2>
            <p className="text-gray-500">CEO/Executive Director</p>
            <ol className="flex gap-3 mt-5 -ms-10">
              <a className="text-amber-800 ms-40 p-2  rounded-xl border border-amber-900" href=""><LuFacebook/></a>
              <a className="text-amber-800 p-2 border rounded-xl border-amber-900" href=""><BsInstagram /></a>
              <a className="text-amber-800 p-2 border rounded-xl border-amber-900" href=""><LuTwitter /></a>
            </ol>
          </span>
          <span className="p-5">
            <img src={userthree} alt="" />
            <h2 className="text-xl font-semibold font-serif text-gray-300">Dorcas Biro</h2>
            <p className="text-gray-500">Managing Director</p>
            <ol className="flex gap-3 mt-5 -ms-10">
              <a className="text-amber-800 rounded-xl border-amber-900 ms-40 p-2 border" href=""><LuFacebook/></a>
              <a className="text-amber-800 rounded-xl border-amber-900 p-2 border" href=""><BsInstagram /></a>
              <a className="text-amber-800 rounded-xl border-amber-900 p-2 border" href=""><LuTwitter /></a>
            </ol>
          </span>
          
          <span className="p-5">
            <img src={user} alt="" />
            <h2 className="text-xl font-semibold font-serif text-gray-300">Sola Mike</h2>
            <p className="text-gray-500">Human Resource Manager</p>
            <ol className="flex gap-3 mt-5 -ms-10">
              <a className="text-amber-800 rounded-xl border-amber-900 ms-40 border p-2" href=""><LuFacebook/></a>
              <a className="text-amber-800 rounded-xl border-amber-900 border p-2" href=""><BsInstagram /></a>
              <a className="text-amber-800 rounded-xl border-amber-900 border p-2" href=""><LuTwitter /></a>
            </ol>
          </span>
          </div>
          </center>
      </section>
      <Footer />
    </>
  );
};

export default About;
