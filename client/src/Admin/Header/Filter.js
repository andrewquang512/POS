import React, { useState, useRef, useEffect, useContext } from "react";
import FoodFilter from "./FoodFilter";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { adminContext } from "../AdminContext";
import TypeModal from "./TypeModal";

const Filter = ({ x }) => {
  const openModal = useRef();
  const [openPlease, setOpenPlease] = useState(false);
  const { isLoading } = useContext(adminContext);
  const [selected, setSelected] = useState(0);
  console.log(selected);
  const ref = useRef({});

  const next = () => {
    ref.current.slickNext();
  };

  const previous = () => {
    ref.current.slickPrev();
  };
  // let xy = "loading";
  // if (!isLoading) xy = <TypeModal index={0} />;
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
  useEffect(() => {
    console.log(openModal.current);
  }, [selected]);
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
          handleOneSelected={handleOneSelected}
          selected={selected}
          index={0}
          // key={-1}
          // name="Tất cả món"
          // id={-1}
          typeProduct={{
            _id: -1,
            name: "Tất cả món",
            img: "http://localhost:3000/image/FoodsType/ALL.jpg",
          }}
          // x_value={x}
        />
        {typeProducts.map((typeProduct, index) => {
          return (
            <>
              <FoodFilter
                index={index}
                setSelected={setSelected}
                // handleOneSelected={handleOneSelected}
                // selected={selected}
                // className={}
                typeProduct={typeProduct}
                // x_value={x}
              />
            </>
          );
        })}
      </Slider>

      <div className="button-filter button-next">
        <div onClick={next} className="arrow-right-food arrow-food"></div>
      </div>
      {isLoading || <TypeModal ref={openModal} index={selected} />}
      {/* {xy} */}
    </>
  );
};

export default Filter;
