"use client";

import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
const Navbar = () => {
  const [toggle, setToggle] = useState(true);
  const handleMenu = () => {
    setToggle((previousState) => !previousState);
  };
  return (
    <nav className="p-3 flex  justify-between items-center div-cont">
      {/* <!-- logo first child --> */}
      <a href="#" id="brand" className="flex gap-2 items-center">
        <img
          className="object-cover max-h-12"
          src="images/logo.png"
          alt="Logo"
        />
      </a>
      {/* <!-- menu 2nd child --> */}

      <div id="navMenu" className="hidden md:flex gap-4">
        <Link href="#" className="font-medium hover:text-primary">
          Gi Bud
        </Link>
        <Link href="#" className="font-medium hover:text-primary">
          Selge Bil
        </Link>
        <Link href="#" className="font-medium hover:text-primary">
          Våre Biler
        </Link>
        <Link href="#" className="font-medium hover:text-primary">
          Auksjonsvilkår
        </Link>
      </div>

      {/* <!-- Button 3rd child --> */}

      <button className="hidden md:flex gap-1 justify-center items-center border border-gray-400 p-2 px-6 py-2 rounded hover:border-gray-800">
        <span className="font-medium p-1 font-display">Electron developer</span>
        <i className="fa-solid fa-arrow-right"></i>
      </button>

      {/* <!-- Btn for mobile_nav --> */}
      <button className=" p-2 md:hidden" onClick={handleMenu}>
        <FontAwesomeIcon icon={faBars} className="text-gray-600 h-6" />
      </button>

      <div
        id="nav-dilag"
        className={`${
          toggle ? "hidden" : ""
        } p-3 bg-white fixed z-20 inset-0 md:hidden`}
      >
        {/* <!-- horzental --> */}
        <div id="nav-bar " className="flex justify-between items-center">
          <a href="#" id="brand" className="flex gap-2 items-center">
            <img
              className="object-cover max-h-12"
              src="images/logo.png"
              alt="Logo"
            />
          </a>
          <button className=" p-2 md:hidden" onClick={handleMenu}>
            <FontAwesomeIcon icon={faXmark} className="text-gray-600 h-9" />
          </button>
        </div>
        {/* <!-- verticle --> */}

        <div className="mt-3">
          <a href="#" className="block font-medium p-3 m-3 hover:bg-gray-100">
            Gi Bud
          </a>
          <a href="#" className="block font-medium p-3 m-3 hover:bg-gray-100">
            Selge Bil
          </a>
          <a href="#" className="block font-medium p-3 m-3 hover:bg-gray-100">
            Våre Biler
          </a>
          <a href="#" className="block font-medium p-3 m-3 hover:bg-gray-100">
            Auksjonsvilkår
          </a>
        </div>

        {/* <!-- div for line --> */}
        <div className="h-[1px] bg-gray-200"></div>

        {/* <!-- Btn --> */}
        <button className="flex gap-1 items-center p-2 px-6 mt-6 w-full rounded hover:bg-gray-100">
          <span className="font-medium p-1 font-display">
            Electron developer
          </span>
          <i className="fa-solid fa-arrow-right"></i>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
