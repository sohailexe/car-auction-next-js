import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const ChooseUsArticle = ({ icon, heading, detail }) => {
  return (
    <article className="relative rounded-lg  p-4 after:absolute after:inset-0 after:rounded-lg  after:transition-all after:duration-300 after:content-['\00a0'] after:hover:rotate-1 after:hover:scale-105 after:bg-gray-100  after:hover:shadow-lg  bg-gray-100 shadow-md transition ease-linear">
      <div className="relative z-10 cursor-default flex gap-3 ">
        <div>
          <span className=" size-12 bg-blue-50 border-2 text-primary border-primary rounded-xl  flex justify-center items-center">
            <FontAwesomeIcon icon={icon} />
          </span>
        </div>

        <div className="">
          <h2 className="text-xl font-semibold">{heading}</h2>
          <p className="font-light">{detail}</p>
        </div>
      </div>
    </article>
  );
};
export default ChooseUsArticle;
