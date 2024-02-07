import React from 'react'
import about from '../assets/images/about.jpg'
import date from '../assets/images/date.png'
import buid from '../assets/images/buid.png'
import deliver from '../assets/images/deliver.png'

const Trade = () => {
  return (
    <>
    <section className='bg-gray-900'>
        <div className='grid grid-cols-2'>
            <img className='w-full p-5' src={about} alt="" />
            <div className='p-3 m-5'>
                <h3 className='text-white text-4xl text-4xl font-medium font-serif'>Why Choose Us?</h3>
                <p className='text-white text-sm py-5'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptate, animi! Odit, qui ratione animi iste corporis earum minus minima. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Adipisci reprehenderit dolor, modi possimus, quia et saepe qui voluptate, dolorem porro facilis consequatur eius nihil eveniet omnis! Laborum id sapiente consequuntur!</p>
                <button class="bn53 text-white bg-orange-500 rounded-xl mt-5">Read More</button>
                <div className='grid grid-cols-3 my-10 gap-5'>
                    <div className='h-40 p-7 bg-red-200 rounded-2xl'>
                      <img src={date} alt="" />
                      <p>Quality Coffe</p>
                    </div>
                    <div className=' h-40 p-7 bg-red-200 gap-5 rounded-2xl'>
                      <img src={buid} alt="" />
                      <p>Our Branches</p>
                    </div>
                    <div className=' h-40 p-7 bg-red-200 rounded-2xl'>
                      <img src={deliver} alt="" />
                      <p>Free delivery</p>
                    </div>
                </div>

            </div>
        </div>
    </section>
    </>
  )
}

export default Trade