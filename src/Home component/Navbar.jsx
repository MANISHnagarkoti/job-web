import { motion } from "framer-motion";
import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [show, setShow] = useState(false);

  return (
    <>
      <div className="bg-white fixed left-0 right-0 z-[999] border-b border-colorThree">
        <nav className="container flex  justify-between items-center py-3">
          <div className="text-2xl md:text-4xl">Job <span className="font-bold">HUNT</span></div>

          <div className="lg:flex gap-9 hidden ">


            <ul className="flex gap-6 items-center text-sm">
              <li className=" cursor-pointer">Home</li>
              <li className=" cursor-pointer">Category</li>
              <li className=" cursor-pointer">About Us</li>
              <li className=" cursor-pointer">Contact</li>

            </ul>
          </div>

          <div className=" items-center text-sm text-white lg:flex gap-6 hidden">

            <button className="rounded-xl bg-white text-black shadow-xl px-6 py-3 font-semibold">
              Sign In
            </button>

            <button className="rounded-xl bg-colorThree px-6 py-3  font-semibold">
              Sign Up
            </button>

          </div>



          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-6 cursor-pointer block md:hidden "
            onClick={() => setShow(!show)}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 9h16.5m-16.5 6.75h16.5"
            />
          </svg>


        </nav>


        {/* {{{{{{{{mobile navbar}}}}}}}} */}

        <div
          className={`fixed top-[60px] w-full z-50 text-white bg-colorThree h-screen left-0 flex flex-col items-center justify-center translate-y-[-200px] opacity-0 transition-all duration-200 pointer-events-none ${show && `!translate-y-0 !opacity-100 pointer-events-auto`
            }`}
        >


          <ul className="items-center text-2xl space-y-8">
            <li>Home</li>
            <li>Category</li>
            <li>About Us</li>
            <li>Contact</li>

          </ul>

          <div className=" items-center text-sm text-white mt-9  flex gap-6 ">

            <button className="rounded-xl bg-white text-black shadow-xl px-6 py-3 font-semibold">
              Sign In
            </button>

            <button className="rounded-xl border border-blue-400 px-6 py-3  font-semibold">
              Sign Up
            </button>

          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
