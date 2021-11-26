import React, { useState, useRef, useEffect } from "react";
import FoodFilter from "./FoodFilter";
import Slider from "react-slick";
import {Types} from "./Types";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// import { BorderLeft } from "@material-ui/icons";
// console.log("type...........<<<<<<..", Types);
const Filter = ({ x, Foods, Typess }) => {
  // Typess.push({image:"/image/FoodsType/ALL.jpg", name:"Tất cả món"})
  console.log("x........Typess", Typess);
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

  useEffect(() => {
    return () => {
      console.log("pre", selected);
    };
  }, [selected]);

  // const [types, setTypes] = useState(Typess);
  // console.log("asdfgh", Typess)
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
        {/* <FoodFilter
          handleOneSelected={handleOneSelected}
          selected={selected}
          key={0}
          name="Tất cả món"
          id={0}
          x_value={x}
        /> */}
        {Typess.map((typeFood, index) => {
          return (
            <FoodFilter
              handleOneSelected={handleOneSelected}
              selected={selected}
              // className={}
              key={typeFood._id}
              name={typeFood.name}
              id={index}
              x_value={x}
              Typesss={Typess}
              _id={typeFood._id}
              // key={typeFood.typeId}
              // name={typeFood.typeName}
              // id={typeFood.typeId}
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
