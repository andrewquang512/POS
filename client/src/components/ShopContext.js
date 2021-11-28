import React from "react";
// import Foods from "./Foods";
export default React.createContext({
    cart: [],
    addProductToCart: product => { },
    removeAll: product => { },
    removeProductFromCart: productId => { }
    // addProductToCart: (product, num) => { },
    // removeProductFromCart: (productId, num) => { }
});
