import React, { useState, useRef, useEffect, useContext } from "react";
import FoodFilter from "./FoodFilter";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { adminContext } from "../AdminContext";

const Filter = ({ x }) => {
  const [selected, setSelected] = useState(-1);
  const ref = useRef({});

  const next = () => {
    ref.current.slickNext();
  };

  const previous = () => {
    ref.current.slickPrev();
  };

  const settings = {
    className: "section-outstanding__slider hoangkui-css-filter",
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: false,
    infinite: true,
    rows: 1,
    centered: "true",
    // centerPadding:0,
    responsive: [
      {
        breakpoint: 1198,
        settings: {
          className: "stick-list-cc",
          slidesToShow: 2,
          slidesToScroll: 2,
          rows: 2,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          rows: 1,
        },
      },
    ],
  };
  const handleOneSelected = (id) => {
    setSelected(id);
  };

  // const [types, setTypes] = useState(Types);
  const { typeProducts } = useContext(adminContext);
  console.log("vcccc", typeProducts);
  return (
    <>
      <div className="backtohome">
        <i className="fas fa-home backtohome-icon"></i>
        <h3 className="backtohome-title">Back to Home</h3>
      </div>

      {/* <div className="filter-food"> */}
      <div className="button-filter button-back">
        <div onClick={previous} className="arrow-left-food arrow-food"></div>
      </div>

      {/* <ul className="filter-list"> */}
      <Slider ref={ref} {...settings}>
        <FoodFilter
          // handleOneSelected={handleOneSelected}
          // selected={selected}
          // key={-1}
          // name="Tất cả món"
          // id={-1}
          typeProduct={{ _id: -1, name: "Tất cả món", img: "none" }}
          // x_value={x}
        />
        {typeProducts.map((typeProduct) => {
          return (
            <FoodFilter
              // handleOneSelected={handleOneSelected}
              // selected={selected}
              // className={}
              typeProduct={typeProduct}
              // x_value={x}
            />
          );
        })}
      </Slider>

      <div className="button-filter button-next">
        <div onClick={next} className="arrow-right-food arrow-food"></div>
      </div>
    </>
  );
};

export default Filter;
