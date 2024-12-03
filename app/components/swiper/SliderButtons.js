import React from "react";

const SliderButtons = ({ buttons, swiper }) => {
    const handleClick = (action) => {
        if (!swiper) return; // Ensure Swiper instance exists

        if (action === "next") {
            swiper.slideNext(); // Swipe to next slide
        } else if (action === "prev") {
            swiper.slidePrev(); // Swipe to previous slide
        }
    };

    return (
        <>
            {buttons.map(({ id, text, action }) => (
                <button
                    key={id}
                    onClick={() => handleClick(action)}
                    className="btn-class"
                >
                    {text}
                </button>
            ))}
        </>
    );
};

export default SliderButtons;
