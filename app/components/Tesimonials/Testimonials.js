"use client";
import React, { Component } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import "./testimonials.css";
import Testimonial from "@/app/components/Tesimonials/Testimonial";
export default class Testimonials extends Component {
  render() {
    return (
      <Carousel
        className="div-cont"
        showArrows={true}
        infiniteLoop={true}
        showThumbs={false}
        showStatus={false}
        autoPlay={true}
        interval={6100}
      >
        <Testimonial img="/images/portrait.avif">
          <h3>Shirley Fultz</h3>
          <h4>Designer</h4>
          <p>
            It's freeing to be able to catch up on customized news and not be
            distracted by a social media element on the same site
          </p>
        </Testimonial>

        <Testimonial img="/images/portrait.avif">
          <h3>Shirley Fultz</h3>
          <h4>Designer</h4>
          <p>
            It's freeing to be able to catch up on customized news and not be
            distracted by a social media element on the same site
          </p>
        </Testimonial>
        <Testimonial img="/images/portrait.avif">
          <h3>Shirley Fultz</h3>
          <h4>Designer</h4>
          <p>
            It's freeing to be able to catch up on customized news and not be
            distracted by a social media element on the same site
          </p>
        </Testimonial>
      </Carousel>
    );
  }
}
