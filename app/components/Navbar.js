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
      <Link href="/" id="brand" className="flex gap-2 items-center">
        <img
          className="object-cover max-h-12"
          src="images/logo.png"
          alt="Logo"
        />
      </Link>
      {/* <!-- menu 2nd child --> */}

      <div id="navMenu" className="hidden md:flex gap-4 md:pr-16">
        <Link href="gi-bud" className="font-medium hover:text-primary">
          Gi Bud
        </Link>
        <Link href="selge-bil" className="font-medium hover:text-primary">
          Selge Bil
        </Link>
        <Link href="vare-biler" className="font-medium hover:text-primary">
          Våre Biler
        </Link>
        <Link href="auksjonsvilkar" className="font-medium hover:text-primary">
          Auksjonsvilkår
        </Link>
      </div>

      {/* <!-- Button 3rd child --> */}

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
          <Link
            href="/"
            id="brand"
            className="flex gap-2 items-center"
            onClick={handleMenu}
          >
            <img
              className="object-cover max-h-12"
              src="images/logo.png"
              alt="Logo"
            />
          </Link>
          <button className=" p-2 md:hidden" onClick={handleMenu}>
            <FontAwesomeIcon icon={faXmark} className="text-gray-600 h-9" />
          </button>
        </div>
        {/* <!-- verticle --> */}

        <div className="mt-3">
          <Link
            href="gi-bud"
            className="block font-medium p-3 m-3 hover:bg-gray-100"
            onClick={handleMenu}
          >
            Gi Bud
          </Link>
          <Link
            href="selge-bil"
            className="block font-medium p-3 m-3 hover:bg-gray-100"
            onClick={handleMenu}
          >
            Selge Bil
          </Link>
          <Link
            href="vare-biler"
            className="block font-medium p-3 m-3 hover:bg-gray-100"
            onClick={handleMenu}
          >
            Våre Biler
          </Link>
          <Link
            href="auksjonsvilkar"
            className="block font-medium p-3 m-3 hover:bg-gray-100"
            onClick={handleMenu}
          >
            Auksjonsvilkår
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
