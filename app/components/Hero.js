import React from "react";
import Link from "next/link";
import Table from "@/app/components/Table";
const Hero = () => {
  return (
    <section className="min-h-[80vh] relative bg-gradient-to-r from-purple-600 to-blue-600 text-white overflow-hidden">
      <div className="absolute inset-0">
        <img
          src="images/1-main.jpg"
          alt="Background Image"
          className="object-cover object-center w-full h-full"
        />
        <div className="absolute inset-0 bg-black opacity-50"></div>
      </div>

      <div className="div-cont  absolute inset-0 z-10 flex flex-col justify-between">
        <div>
          <div className=" flex flex-col gap-2 ">
            <h2 className="text-2xl text-primary md:text-3xl">BILAUKSJON</h2>
            <span className="text-4xl font-semibold md:text-5xl ">
              ONSDAG OG SØNDAG{" "}
            </span>
            <span className="text-xl md:text-2xl">HVER UKE</span>
            <span className="text-2xl font-semibold md:text-3xl">
              GI BUD ALLEREDE I DAG
            </span>
          </div>

          <div className="flex flex-col  mt-9">
            <h2 className="text-2xl text-primary md:text-3xl">
              Kontakt oss for sporsmal
            </h2>
            <p className="text-xl md:text-2xl">
              Tom Østerby <br />
              22 22 56 56 <br />
              TOM@OKERNBILAUKSJON.NO
            </p>
          </div>

          <div className=" mt-9 text-left">
            <Table />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
