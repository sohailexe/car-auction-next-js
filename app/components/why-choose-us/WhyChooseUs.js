import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faShield,
  faClock,
  faUsers,
  faAward,
  faHeart,
} from "@fortawesome/free-solid-svg-icons";
import ChooseUsArticle from "@/app/components/why-choose-us/ChooseUsArticle";
const WhyChooseUs = () => {
  return (
    <section className="">
      <div className="div-cont">
        <div
          id="header"
          className="flex flex-col gap-2 justify-center items-center text-center  px-5 md:px-20 lg:px-32 py-7"
        >
          <h1 className="h1">Why Choose Us</h1>

          <p className="font-light">
            dd the following information on the frontpage marked with reddd the
            following information on the frontpage marked with red
          </p>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 px-5 sm:px-0">
          <ChooseUsArticle
            icon={faShield}
            heading="Secure Transections"
            detail="Lorem ipsum dolor sit amet, consectetuer adipiscing elit."
          />
          <ChooseUsArticle
            icon={faHeart}
            heading="Secure Transections"
            detail="Lorem ipsum dolor sit amet, consectetuer adipiscing elit."
          />{" "}
          <ChooseUsArticle
            icon={faAward}
            heading="Secure Transections"
            detail="Lorem ipsum dolor sit amet, consectetuer adipiscing elit."
          />
          <ChooseUsArticle
            icon={faClock}
            heading="Secure Transections"
            detail="Lorem ipsum dolor sit amet, consectetuer adipiscing elit."
          />{" "}
          <ChooseUsArticle
            icon={faUsers}
            heading="Secure Transections"
            detail="Lorem ipsum dolor sit amet, consectetuer adipiscing elit."
          />{" "}
          <ChooseUsArticle
            icon={faShield}
            heading="Secure Transections"
            detail="Lorem ipsum dolor sit amet, consectetuer adipiscing elit."
          />
        </div>
      </div>
    </section>
  );
};
export default WhyChooseUs;
