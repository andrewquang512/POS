import React, { useContext, useEffect } from "react";
import "./index.css";
import ProductInCart from "../ProductInCart";
import ShopContext from "../ShopContext";

const ShowCart = () => {

    const handleClickCart=()=>{
        document.querySelector(".cart").classList.add("display");
    }
    const handleClickClose=()=>{
        document.querySelector(".cart").classList.remove("display");
        
    }
    // ** ---------------Log-------Add ----------------------------------**
    const context = useContext(ShopContext);
    useEffect(() => {
      console.log(context);
    }, []);
    return (
    <>
      <div className="cart-icon"
        onClick={handleClickCart}
      >
    
        <i className="fas fa-shopping-cart"></i>
        <div className="INCART">
          {context.cart.reduce((count, curItem) => {
            return count + curItem.quantity;
          }, 0)}
        </div>
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
            Your Cart ({
              context.cart.reduce((count, curItem) => {
                return count + curItem.quantity;
            }, 0)})
          </p>
          <button className="cart-header-button">DINE IN</button>
        </div>
        <ul className="cart-list">
          {context.cart.map(cartItem => 
            <ProductInCart 
              item={cartItem}
              context={context}
            />  
          )}
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
