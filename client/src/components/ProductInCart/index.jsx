import React from "react";
import "./index.css";
import { useState, useEffect } from "react";
import { VscChromeClose } from "react-icons/vsc";

const ProductInCart = (props) => {
  const [number, setNumber] = useState(props.item.quantity);
  const incrementCounter = () => setNumber(number + 1);
  let decrementCounter = () => setNumber(number - 1);
  if (number <= 1) {
    decrementCounter = () => setNumber(1);
  }
  const removeAll = () => {
    console.log(props.item.SKU);

    // return props.context.removeProductFromCart.bind(this, props.item.SKU)
  };
  useEffect(() => {
    setNumber(props.item.quantity);
    return () => {
      // cleanup
    };
  }, [props.item.quantity]);
  return (
    <>
      <li key={props.item.SKU} className="cart-item">
        <img src={props.item.img} alt="" className="cart-item-img-src" />
        <div className="cart-item-content">
          <p className="cart-item-content-title">
            {props.index + 1}. {props.item.name}
          </p>
          <div onClick={decrementCounter}>
            {/* <a 
                            className="removeItem" 
                            onClick={props.context.removeProductFromCart.bind(this, props.item.SKU)} 
                            href
                        >   
                            &times;
                        </a> */}
          </div>
          <div className="cart-item-content-add-list">
            <div className="cart-item-content-add-item">
              <p className="cart-item-content-add-item-title">
                {props.item.description}
              </p>
            </div>
          </div>
          <div className="cart-item-content-bottom">
            <div className="cart-item-content-bottom-button">
              <i
                onClick={props.context.removeProductFromCart.bind(
                  this,
                  props.item._id
                )}
              >
                <i className="fas fa-minus" onClick={decrementCounter}></i>
              </i>
              {number}
              <i
                onClick={props.context.addProductToCart.bind(this, {
                  ...props.item,
                  want: 1,
                })}
              >
                <i className="fas fa-plus" onClick={incrementCounter}></i>
              </i>
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

        <i
          onClick={props.context.removeAll.bind(this, { ...props.item })}
          className="fas fa-times cart-item-icon-close"
        ></i>
      </li>
    </>
  );
};

export default ProductInCart;
