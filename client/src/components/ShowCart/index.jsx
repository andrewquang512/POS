import React from "react";
import "./index.css";
import ProductInCart from "../ProductInCart";
const ShowCart = () => {

    const handleClickCart=()=>{
        document.querySelector(".cart").classList.add("display");
    }
    const handleClickClose=()=>{
        document.querySelector(".cart").classList.remove("display");
        
    }
  return (
    <>
      <div className="cart-icon"
      onClick={handleClickCart}
      >
    
        <i className="fas fa-shopping-cart"></i>
      </div>
      <div className="cart">
          <div className="cart-close"
          onClick={handleClickClose}
          >
          <i class="fas fa-times-circle"></i>
          </div>
        <div className="cart-header">
          <p className="cart-header-title">
            <i className="fas fa-shopping-cart"></i>
            Your Cart (6)
          </p>
          <button className="cart-header-button">DINE IN</button>
        </div>
        <ul className="cart-list">
          <ProductInCart />
          <ProductInCart />
          <ProductInCart />
          <ProductInCart />
          <ProductInCart />
          <ProductInCart />
        </ul>
        <div className="cart-payment">
          <div className="cart-payment-total">
            <p className="cart-payment-total-text">Total</p>
            <div className="cart-payment-total-price">
              <p className="cart-payment-total-origin">Kr 123.00</p>
              <p className="cart-payment-total-tax">
                (Incl.tax 10% = Kr 12.30)
              </p>
            </div>
          </div>
          <button className="cart-payment-button">PAYMENT</button>
        </div>
      </div>
    </>
  );
};

export default ShowCart;
