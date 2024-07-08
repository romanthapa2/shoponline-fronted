import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft, faAngleRight } from "@fortawesome/free-solid-svg-icons";

const MemoizeFontAwesomeIcon = React.memo(FontAwesomeIcon)

const collection = [
  {
    img : require("../../pictures/banner_2x1.jpg")
  },
  {
    img : require("../../pictures/legion-5i-pro-g8_2x1.png")
  }
];

const Imageslider = () => {
  const [current, setCurrent] = useState(0);
  const length = collection.length;


  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  return (
    <section className=" slider flex items-center justify-center relative mt-10  ml-9 mr-9">
      <MemoizeFontAwesomeIcon
        icon={faAngleLeft}
        className="left-arrow size-10 absolute left-0 md-left-7 hover:text-white"
        onClick={prevSlide}
      />

      {collection.map(({ img}, index) => {
        return (
          <div
            className={`slide ${
              index === current ? "active" : ""
            } transition-opacity duration-500 ease-in-out`}
            key={index}>
            {index === current && <img src={img} alt="" className=" rounded-2xl" />}
          </div>
        );
      })}
      <MemoizeFontAwesomeIcon
        icon={faAngleRight}
        className="right-arrow size-10 absolute right-0 hover:text-white md-8"
        onClick={nextSlide}
      />
    </section>
  );
};

export default Imageslider;
