"use client";
import React, { useState, useEffect } from "react";
import LayoutControl from "./LayoutControl";
export const CarsList = () => {
  const [layoutGrid, setLayoutGrid] = useState(true);

  console.log(layoutGrid);

  useEffect(() => {
    return () => {};
  }, [layoutGrid]);
  return (
    <>
      <LayoutControl setLayoutGrid={setLayoutGrid} />
      {/* <!-- Grid --> */}
      <div
        id="card-grid"
        className={`grid gap-6 gap-x-8 transition ${
          layoutGrid ? "md:grid-cols-2 lg:grid-cols-3" : " "
        }`}
      >
        {/* <!-- cad-1  --> */}
        <div className="car-card w-full rounded-xl overflow-hidden bg-slate-100 shadow-xl">
          <div id="img" className="overflow-hidden relative">
            <img
              className="w-full border hover:scale-105 transition ease-linearl object-cover"
              src="../assets/2car.jpg"
              alt=""
            />
            <a
              href="
        "
            >
              <i className="rounded-lg hover:bg-primary py-3 px-3 text-white absolute bottom-2 right-2 fa-regular fa-eye"></i>
            </a>
          </div>

          <div className="pl-4 pt-3">
            <a className="font-semibold text-xl hover:text-primary">Audi RS3</a>
            <p>2020 · 18 175 km · 1 598 cm3 · Hibrid</p>
            <p className="font-light mt-5 mb-14 md:mb-5">Auction Ended</p>
          </div>
        </div>
        {/* <!-- cad-1 end -->

    //   <!-- cad-1  --> */}
        <div className="car-card w-full rounded-xl overflow-hidden bg-slate-100 shadow-xl">
          <div id="img" className="overflow-hidden relative">
            <img
              className="w-full border hover:scale-105 transition ease-linearl object-cover"
              src="../assets/2car.jpg"
              alt=""
            />
            <a
              href="
      "
            >
              <i className="rounded-lg hover:bg-primary py-3 px-3 text-white absolute bottom-2 right-2 fa-regular fa-eye"></i>
            </a>
          </div>

          <div className="pl-4 pt-3">
            <a className="font-semibold text-xl hover:text-primary">Audi RS3</a>
            <p>2020 · 18 175 km · 1 598 cm3 · Hibrid</p>
            <p className="font-light mt-5 mb-14 md:mb-5">Auction Ended</p>
          </div>
        </div>
        {/* <!-- cad-1 end -->
    //   <!-- cad-1  --> */}
        <div className="car-card w-full rounded-xl overflow-hidden bg-slate-100 shadow-xl">
          <div id="img" className="overflow-hidden relative">
            <img
              className="w-full border hover:scale-105 transition ease-linearl object-cover"
              src="../assets/2car.jpg"
              alt=""
            />
            <a
              href="
      "
            >
              <i className="rounded-lg hover:bg-primary py-3 px-3 text-white absolute bottom-2 right-2 fa-regular fa-eye"></i>
            </a>
          </div>

          <div className="pl-4 pt-3">
            <a className="font-semibold text-xl hover:text-primary">Audi RS3</a>
            <p>2020 · 18 175 km · 1 598 cm3 · Hibrid</p>
            <p className="font-light mt-5 mb-14 md:mb-5">Auction Ended</p>
          </div>
        </div>
        {/* <!-- cad-1 end -->
    //   <!-- cad-1  --> */}
        <div className="car-card w-full rounded-xl overflow-hidden bg-slate-100 shadow-xl">
          <div id="img" className="overflow-hidden relative">
            <img
              className="w-full border hover:scale-105 transition ease-linearl object-cover"
              src="../assets/2car.jpg"
              alt=""
            />
            <a
              href="
      "
            >
              <i className="rounded-lg hover:bg-primary py-3 px-3 text-white absolute bottom-2 right-2 fa-regular fa-eye"></i>
            </a>
          </div>

          <div className="pl-4 pt-3">
            <a className="font-semibold text-xl hover:text-primary">Audi RS3</a>
            <p>2020 · 18 175 km · 1 598 cm3 · Hibrid</p>
            <p className="font-light mt-5 mb-14 md:mb-5">Auction Ended</p>
          </div>
        </div>

        <div className="car-card w-full rounded-xl overflow-hidden bg-slate-100 shadow-xl">
          <div id="img" className="overflow-hidden relative">
            <img
              className="w-full border hover:scale-105 transition ease-linearl object-cover"
              src="../assets/2car.jpg"
              alt=""
            />
            <a
              href="
      "
            >
              <i className="rounded-lg hover:bg-primary py-3 px-3 text-white absolute bottom-2 right-2 fa-regular fa-eye"></i>
            </a>
          </div>

          <div className="pl-4 pt-3">
            <a className="font-semibold text-xl hover:text-primary">Audi RS3</a>
            <p>2020 · 18 175 km · 1 598 cm3 · Hibrid</p>
            <p className="font-light mt-5 mb-14 md:mb-5">Auction Ended</p>
          </div>
        </div>
        {/* <!-- cad-1 end --> */}
      </div>
    </>
  );
};
