import React from 'react'
import logo from '../assets/images/logo.png'
import home from '../assets/images/home.jpg'
import Trade from '../component/Trade'

const Home = () => {
  return (
    <>
    <div>
     <nav class="bg-black">
  <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-5">
  <a href="#" >
      <img className='' src={logo} class="h-20" alt="Flowbite Logo" />
  </a>
  <div class="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
      <button id='bn632-hover bn19' type="button" class="text-white w-40 bg-orange-400 hover:bg-black focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Book Table</button>
      <button data-collapse-toggle="navbar-cta" type="button" class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-cta" aria-expanded="false">
        <span class="sr-only">Open main menu</span>
        <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15"/>
        </svg>
    </button>
  </div>
  <div class="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-cta">
    <ul class="flex flex-col font-medium p-4 md:p-0 mt-4 text-red-300 md:text-white-200 md:space-x-8 rtl: md:flex-row">
      <li>
        <a href="#" class="block py-2 px-3 md:p-0 bg-blue-700 rounded md:bg-transparent md:text-white md:dark:text-blue-500" aria-current="page">Home</a>
      </li>
      <li>
        <a href="#" class="block py-2 px-3 md:p-0 text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">About</a>
      </li>
      <li>
        <a href="#" class="block py-2 px-3 md:p-0 text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 d:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Menu</a>
      </li>
      <li>
        <a href="#" class="block py-2 px-3 md:p-0 text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Contact</a>
      </li>
    </ul>
  </div>
  </div>
</nav>
</div>

      <div className=''>
        <div className='back'>
          {/* <img className='w-fit' src={home} alt="" /> */}
          <div className='text-white font-semibold text-orange-800 ms-10 p-20'>
          <h1 id='h1' className='text-7xl'>Fresh Coffe In <br /> The Morning</h1>
          <p className='text-light'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid, dolorem eligendi fugiat necessitatibus aperiam <br /> qui atque quas et? Ullam aspernatur sunt </p>
          <a href="/">
      {/* <button class="bn53">Buy Now</button> */}
      <a href="/"><button class="bn632-hover bn19">Buy Now</button></a>
      </a>
      </div>
        </div>
      </div>
      <Trade/>


    </>
  )
}

export default Home