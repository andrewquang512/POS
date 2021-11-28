import React, { useReducer } from "react";
import ShopContext from "./ShopContext";
import { shopReducer, ADD_PRODUCT, REMOVE_PRODUCT, REMOVE_ALL } from "./reducers";

function GlobalState(props) {

  const [cartState, dispatch] = useReducer(shopReducer, { cart: [] });

  const addProductToCart = product => {
    dispatch({ type: ADD_PRODUCT, product: product });
  // const addProductToCart = (product, num) => {
  //   dispatch({ type: ADD_PRODUCT, product: product, num: num });
  };
  const removeAll = product => {
    dispatch({ type: REMOVE_ALL, product: product });
  };
  const removeProductFromCart = productId => {
    dispatch({ type: REMOVE_PRODUCT, productId: productId });
  };

  return (
    <ShopContext.Provider
      value={{
        // products: products,
        cart: cartState.cart,
        addProductToCart: addProductToCart,
        removeProductFromCart: removeProductFromCart,
        removeAll: removeAll
      }}
    >
      {props.children}
    </ShopContext.Provider>
  );
}

export default GlobalState;
