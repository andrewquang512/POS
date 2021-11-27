import React from "react";
import { useState } from "react";

const Cartreview = (props) => {
  const [number, setNumber] = useState(props.item.quantity);
  return (
    <>
      <li key={props.item.SKU} className="cart-item">
        <img src={props.item.img} alt="" className="cart-item-img-src" />
        <div className="cart-item-content">
          <p className="cart-item-content-title">
            {props.index + 1}. {props.item.name}
          </p>
          <div className="cart-item-content-add-list">
            <div className="cart-item-content-add-item">
              <p className="cart-item-content-add-item-title">
                Description: {props.item.description}
              </p>
            </div>
          </div>
          <div className="cart-item-content-bottom">
            <div className="cart-item-content-bottom-button">
              Quantity: {number}
            </div>
            <div className="cart-item-content-bottom-price">
              <p className="cart-item-content-bottom-price-origin">
                {/* <VscChromeClose  className="iconX" size={25}/>  */}
                {props.item.price} .000 Đ
              </p>
              {/* <p className="cart-item-content-bottom-price-tax">(Incl.tax 10% = Kr 12.30)</p> */}
            </div>
          </div>
        </div>
      </li>
    </>
  );
};

export default Cartreview;
