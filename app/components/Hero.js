import React from "react";
import Link from "next/link";
const Hero = () => {
  return (
    <section className="min-h-[70vh] relative bg-gradient-to-r from-purple-600 to-blue-600 text-white overflow-hidden">
      <div className="absolute inset-0">
        <img
          src="images/1-main.jpg"
          alt="Background Image"
          className="object-cover object-center w-full h-full"
        />
        <div className="absolute inset-0 bg-black opacity-50"></div>
      </div>

      <div className="div-cont absolute inset-0 z-10">
        <div className="w-full md:w-1/2 h-full flex flex-col gap-6 justify-center">
          {/* <!-- headings  --> */}
          <div
            id="headings "
            className="flex flex-col gap-6 md:justify-start md:items-start md:text-start items-center text-center"
          >
            <h1 className="text-3xl font-light uppercase">Bilauksjon</h1>
            <h1 className="banner uppercase text-primary">Ongsdag og sondag</h1>
            <h1 className="text-2xl uppercase">hver uke</h1>
            <h1 className="uppercase font-bold">Gi bud allerede i deg</h1>
          </div>
          {/* <!-- buttons --> */}
          <Link
            href="./contect"
            className="btn-primary mx-6 md:mx-0 md:max-w-[170px] text-center"
          >
            Contact us
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;
