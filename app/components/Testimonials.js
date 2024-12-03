"use client"; // <===== REQUIRED

import React, { Component } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

export default class Testimonials extends Component {
    render() {
        return (
            <Carousel>
                <div>
                    <img src="images/car.png" alt="Testimonial 1" />
                    <p className="legend">Legend 1</p>


                </div>
                <div>
                    <img src="images/car.png" alt="Testimonial 1"/>
                    <p className="legend">Legend 2</p>
                </div>
                <div>
                    <img src="images/car.png" alt="Testimonial 1"/>
                    <p className="legend">Legend 3</p>
                </div>
            </Carousel>
        );
    }
}