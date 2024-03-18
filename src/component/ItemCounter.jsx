import React from "react";
import about from "../assets/images/about.jpg";
import date from "../assets/images/date.png";
import buid from "../assets/images/buid.png";
import deliver from "../assets/images/deliver.png";
import cofe from "../assets/images/cofe.jpg";
import userone from "../assets/images/userone.png";
import userthree from "../assets/images/userthree.png";
import user from "../assets/images/user.png";
import { FaPlus } from "react-icons/fa";
import { RiSubtractLine } from "react-icons/ri";
import { useState } from "react";
import Footer from "./Footer";

const ItemCounter = () => {
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
    <div className="overflow-hidden">
      <section className="bg-gray-900">
        <div className="grid lg-grid-cols-2 md:grid-cols-2 sm:grid-cols-3">
          <img className="w-full p-5" src={about} alt="" />
          <div className="p-3 m-5">
            <h3 className="text-white text-4xl text-4xl font-medium font-serif">
              Why Choose Us?
            </h3>
            <p className="text-white text-sm py-5">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Voluptate, animi! Odit, qui ratione animi iste corporis earum
              minus minima. Lorem ipsum dolor, sit amet consectetur adipisicing
              elit. Adipisci reprehenderit dolor, modi possimus, quia et saepe
              qui voluptate, dolorem porro facilis consequatur eius nihil
              eveniet omnis! Laborum id sapiente consequuntur!
            </p>
            <button class="bn53 text-white bg-orange-500 rounded-xl mt-5">
              Read More
            </button>
            <div className="grid grid-cols-3 my-10 gap-5 text-center">
              <div id="date" className="h-40 p-11">
                <img id="date" src={date} alt="" />
                <p>Quality Coffe</p>
              </div>
              <div id="date" className=" h-40 p-8 gap-5">
                <img src={buid} alt="" />
                <p>Our Branches</p>
              </div>
              <div id="date" className=" h-40 p-4">
                <img src={deliver} alt="" />
                <p>Free delivery</p>
              </div>
            </div>
          </div>
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
        <div className="bg-black">
      <h1 className="text-gray-300 text-center p-10 text-2xl font-serif font-bold">WHAT PEOPLE SAY ABOUT US</h1>
      <div className="justify-items-center">
      <center>
      <div className="grid lg-grid-cols-2 md:grid-cols-3 sm:grid-cols-3">
          <div className="dev p-3 w-96">
            <div className="">
              <img className="rounded-lg w-40" src={userone} alt="" />
            </div>
            <p className="text-white font-serif font-medium p-3">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Necessitatibus, incidunt! Sapiente reiciendis quaerat ea excepturi
              aut saepe quisquam hic eum quos repellat! Atque enim sed voluptate
              porro culpa ea ipsa?
            </p>
            <p className="text-white font-serif">JOHN DOE</p>
          </div>
          <div className="dev p-3 w-96">
            <div>
              <img  className="rounded-lg w-40"  src={userthree} alt="" />
            </div>
            <p className="text-white font-serif font-medium p-3">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Necessitatibus, incidunt! Sapiente reiciendis quaerat ea excepturi
              aut saepe quisquam hic eum quos repellat! Atque enim sed voluptate
              porro culpa ea
            </p>
            <p className="text-white font-serif">DORCAS WATT</p>
          </div>
          <div className="dev p-3 w-96">
            <div>
              <img  className="rounded-lg w-40" src={user} alt="" />
            </div>
            <p className="text-white font-serif font-medium p-3">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Necessitatibus, incidunt! Sapiente reiciendis quaerat ea excepturi
              aut saepe quisquam hic eum quos repellat! Atque enim sed voluptate
              porro culpa ea
            </p>
            <p className="text-white font-serif">THOMAS TANIMOLA</p>
          </div>
          </div>
      </center>
      </div>
        </div>  
      </div>
      <Footer/>
    </>
  );
};

export default ItemCounter;
