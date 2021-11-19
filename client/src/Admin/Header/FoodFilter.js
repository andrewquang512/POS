import React, { useRef, useState } from "react";

import ListTypeProducts from "../../components/TypeProducts";

// const TypeProducts = ListTypeProducts;

const FoodFilter = ({ selected, typeProduct, setSelected, index }) => {
  var className = "filter-item";
  // if (selected === id) className = "filter-item filter-item-seleted";
  // const filterRef = useRef();
  // const handleClickFilter = (id) => {
  //   handleOneSelected(id);
  //   console.log("id", id);
  // };
  // const getMenu = (id) => {
  //   x_value(id);
  //   console.log("id", id);
  // };
  // function doSomeThing() {
  //   handleClickFilter(id);
  //   getMenu(id);
  // }
  const { _id, name, img } = typeProduct;
  return (
    <>
      <li
        onClick={() => {
          // console.log(index);
          setSelected(index);
        }}
        key={_id}
        className={className}
      >
        <img src={img} alt="" className="filter-item-img" />
        <h3 className="filter-item-title">{name}</h3>
      </li>
    </>
  );
};

export default FoodFilter;
