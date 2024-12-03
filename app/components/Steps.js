import React from "react";

const Steps = () => {
  return (
    <section  className="div-cont mt-0 ">
      {/* <!-- headings  --> */}
      <div className="flex flex-col justify-center items-center gap-2 mb-12">
        <span className="sm-primary">Start now</span>
        <h1 className="h1">How it Works</h1>
      </div>

      {/* <!-- cards --> */}
      <div className="flex flex-col gap-8 justify-between md:flex-row pb-24">
        {/* <!-- card1 --> */}
        <div className="relative flex flex-col gap-2 justify-center items-center text-center">
          <img
              className="w-44 hidden md:inline-block absolute top-[-6%] right-[-50%] -rotate-6"
            src="images/arrow.png"
            alt=""
          />
          <img src="images/1.svg" alt="" />
          <h2 className="text-xl font-semibold">Registration and Account</h2>
          <p className="font-light text-sm">
            Search inventory of more than salvage used vehicles. Aliquam
            sagittis pellentesque turpis egestas tincidunt. Integer mollis leo
            lectus. .
          </p>
        </div>

        {/* <!-- card2 --> */}
        <div className="relative flex flex-col gap-2 justify-center items-center text-center">
          <img
              className="w-44 hidden md:inline-block absolute bottom-[-30%] transform -scale-y-100 right-[-20%] rotate-12"
            src="images/arrow.png"
            alt=""
          />
          <img src="images/2.svg" alt="" />
          <h2 className="text-xl font-semibold">Lorem, ipsum dolor.</h2>
          <p className="font-light text-sm">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis
            laboriosam perferendis sunt, culpa quos ipsum quidem perspiciatis
            numquam beatae tenetur, magni illum aut labore distinctio unde
            recusandae eius hic nostrum.
          </p>
        </div>

        {/* <!-- card3 --> */}
        <div className="flex flex-col gap-2 justify-center items-center text-center">
          <img src="images/3.png" alt="" />
          <h2 className="text-xl font-semibold">
            than salvage used vehicles Account
          </h2>
          <p className="font-light text-sm">
            Search inventory of more than salvage used vehicles. Aliquam
            sagittis pellentesque turpis egestas tincidunt. Integer mollis leo
            lectus. .
          </p>
        </div>
      </div>
    </section>
  );
};

export default Steps;
