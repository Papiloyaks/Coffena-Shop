import React from "react";
import { IoLogoFacebook } from "react-icons/io5";
import { FaInstagramSquare } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";
import logo from "../assets/images/logo.png";
import Foot from "./Foot";

const Footer = () => {
  return (
    <>
      <div className="overflow-hidden">
        <div className="center">
          <div
            data-aos="flip-left"
            className="grid lg-grid-cols-2 md:grid-cols-2 sm:grid-cols-3 "
          >
            <div className="p-10 bg-black">
              <h1 className="text-xl font-meduim text-gray-300 text-xl font-bold mt-10">
                Subcribe for our Newsletter
              </h1>
              <div className="p-4">
                <label className="font-semibold text-white font-serif text-xs">
                  First Name:
                </label>
                <p>
                  <input
                    className="input h-8 rounded-xl lg:w-96 md:w-64 w-72"
                    onChange={(e) => setName(e.target.value)}
                    type="text"
                  />
                </p>

                <label className="font-semibold text-white font-serif text-xs">
                  Last Name:
                </label>
                <p>
                  <input
                    className="input h-8 rounded-xl lg:w-96 md:w-64 w-72"
                    type="text"
                  />
                </p>

                <label className="font-semibold text-white font-serif text-xs">
                  Email:
                </label>
                <p>
                  <input
                    className="input lg:w-96 md:w-64 w-72 h-8 rounded-xl bg-orange-800"
                    placeholder=""
                    type="text"
                  />
                </p>

                <label className="font-semibold text-white text-xs">
                  Messages:
                </label>
                <p>
                  <textarea className="h-20 lg:w-96 md:w-64 w-72 rounded-xl "></textarea>
                </p>
                <button className="bg-orange-800 text-white w-60 h-9 rounded-xl hover:bg-transparent hover:border text-xs font-serif">
                  Send Message
                </button>
              </div>
              {/* <p><img className='block ml-auto w-25 lg:w-24 md:w-28'  src={logo} alt="" /></p> */}
            </div>
            <div className="bg-black flex text-2xl p-3 text-center justify-center items-center text-4xl gap-5 text-orange-600">
              <a href="#" className="hover:scale-150">
                <IoLogoFacebook />
              </a>
              <a href="#" className="hover:scale-150">
                <FaInstagramSquare />
              </a>
              <a href="#" className="hover:scale-150">
                <BsTwitterX />
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
