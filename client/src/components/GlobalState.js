import React, { useReducer } from "react";
import ShopContext from "./ShopContext";
import { shopReducer, ADD_PRODUCT, REMOVE_PRODUCT } from "./reducers";

function GlobalState(props) {

  const [cartState, dispatch] = useReducer(shopReducer, { cart: [] });

  const addProductToCart = (product, num) => {
    dispatch({ type: ADD_PRODUCT, product: product, num: num });
  };

  const removeProductFromCart = (productId, num) => {
    dispatch({ type: REMOVE_PRODUCT, productId: productId, num: num });
  };

  return (
    <ShopContext.Provider
      value={{
        // products: products,
        cart: cartState.cart,
        addProductToCart: addProductToCart,
        removeProductFromCart: removeProductFromCart
      }}
    >
      {props.children}
    </ShopContext.Provider>
  );
}

export default GlobalState;
