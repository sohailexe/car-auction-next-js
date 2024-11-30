"use client";
import React, { useEffect } from "react";
import $ from "jquery";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faList,
  faBorderAll,
  faChevronUp,
} from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

const LayoutControl = ({ setLayoutGrid }) => {
  const [isGrid, setisGrid] = useState(true);
  const [listShow, setListShow] = useState(false);

  const primary = "btn-layout border text-white bg-primary border-primary";
  const secondry = "btn-layout  border text-black bg-white border-gray-300";

  const handleListShow = () => {
    setListShow((prev) => {
      return !prev;
    });
  };

  const gridHandle = () => {
    setisGrid(true);
    setLayoutGrid(true);
  };
  const listHandle = () => {
    setisGrid(false);
    setLayoutGrid(false);
  };

  return (
    <div id="nav" className="flex gap-3 items-start justify-between mb-6">
      {/* <!-- btn-group  --> */}
      <div>
        <div className="inline-flex rounded-md shadow-sm" role="group">
          <button
            id="btn-grid"
            onClick={gridHandle}
            type="button"
            className={`${isGrid ? primary : secondry} rounded-s-lg `}
          >
            <FontAwesomeIcon icon={faBorderAll} />
          </button>

          <button
            onClick={listHandle}
            id="btn-list"
            type="button"
            className={`${isGrid ? secondry : primary} rounded-e-lg`}
          >
            <FontAwesomeIcon icon={faList} />
          </button>
        </div>
      </div>

      <div className="relative transition">
        <button
          onClick={handleListShow}
          id="dropdownButton"
          className="min-w-[152px] px-2 py-2 border border-gray-600 rounded-md shadow-sm bg-white text-gray-700 text-sm flex justify-between"
        >
          <span> Select an option </span>

          <FontAwesomeIcon
            id="up"
            icon={faChevronUp}
            className="fa-solid fa-chevron-up ml-3 rotate-180 scale-75 transition ease-in-out"
          />
        </button>
        <ul
          id="dropdownList"
          className={` ${
            listShow ? "" : "hidden"
          }  absolute border border-gray-300 rounded-md shadow-2xl bg-white  max-w-96 mt-4 transition  z-10 -translate-x-[50%]`}
        >
          <li
            onClick={handleListShow}
            className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
          >
            Opt
          </li>
          <li
            onClick={handleListShow}
            className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
          >
            Option 2
          </li>
          <li
            onClick={handleListShow}
            className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
          >
            Option 3
          </li>
        </ul>
      </div>
    </div>
  );
};

export default LayoutControl;