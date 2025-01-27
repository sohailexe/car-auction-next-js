import React from "react";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

const Testimonial = ({ img }) => {
  return (
    <div>
      <img className="object-cover" src={img} />

      <div className="myCarousel">
        <h3>Theo Sorel</h3>
        <div className="text-primary text-[12px] mb-1 -translate-y-1.5">
          <FontAwesomeIcon className="" icon={faStar} />
          <FontAwesomeIcon className="" icon={faStar} />
          <FontAwesomeIcon className="" icon={faStar} />
          <FontAwesomeIcon className="" icon={faStar} />
          <FontAwesomeIcon className="" icon={faStar} />
        </div>
        <h4>Designer</h4>

        <p>
          I enjoy catching up with Fetch on my laptop, or on my phone when I'm
          on the go!
        </p>
      </div>
    </div>
  );
};
export default Testimonial;
