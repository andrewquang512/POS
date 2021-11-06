import React, { useState, useRef,useEffect} from "react";
import FoodFilter from "./FoodFilter";
import { Types } from "./Types";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
console.log(Types);
const Filter = ({x}) => {
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
    setSelected(id)
  };
  useEffect(() => {

    return () => {
      console.log("pre",selected);
    }
  }, [selected])

  const [types, setTypes] = useState(Types);

  return (
    <>
      <div className="backtohome">
        <i className="fas fa-home backtohome-icon"></i>
        <h3 className="backtohome-title">Back to Home</h3>
      </div>

      <div className="button-filter button-back">
        <div onClick={previous} class="arrow-left-food arrow-food"></div>
      </div>


        <Slider ref={ref} {...settings}>
        <FoodFilter handleOneSelected={handleOneSelected} selected={selected} key={-1} name="All" id={-1} />
        {types.map((typeFood, index) => {
          return (
            <FoodFilter
            handleOneSelected={handleOneSelected}
            selected={selected}
              // className={}
              key={typeFood.typeId}
              name={typeFood.typeName}
              id={typeFood.typeId}
            />
          );
        })}
      </Slider>

        
        <div className="button-filter button-next">
          <div onClick={next}  class="arrow-right-food arrow-food"></div>
        </div>
    </>
  );
};

export default Filter;
