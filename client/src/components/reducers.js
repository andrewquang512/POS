export const ADD_PRODUCT = "ADD_PRODUCT";
export const REMOVE_PRODUCT = "REMOVE_PRODUCT";

const addProductToCart = (product, num, state) => {
  console.log("adding product", product);
  console.log("current Cart", state.cart);
  const updatedCart = [...state.cart];
  const updatedItemIndex = updatedCart.findIndex(
    item => item.SKU === product.SKU
  );

  if (updatedItemIndex < 0) {
    updatedCart.push({ ...product, quantity: num });
  } else {
    const updatedItem = updatedCart[updatedItemIndex]

    updatedItem.quantity += num;
    updatedCart[updatedItemIndex] = updatedItem;
  }
  console.log("update Cart", updatedCart);
  return { ...state, cart: updatedCart };
};

const removeProductFromCart = (productId, num, state) => {
  console.log("remove product: " + productId);
  const updatedCart = [...state.cart];
  const updatedItemIndex = updatedCart.findIndex(item => item.SKU === productId);

  const updatedItem = {
    ...updatedCart[updatedItemIndex]
  };
  updatedItem.quantity -= num;
  if (updatedItem.quantity <= 0) {
    updatedCart.splice(updatedItemIndex, 1);
  } else {
    updatedCart[updatedItemIndex] = updatedItem;
  }
  console.log("update Cart", updatedCart);
  return { ...state, cart: updatedCart };
};

export const shopReducer = (state, action) => {
  switch (action.type) {
    case ADD_PRODUCT:
      return addProductToCart(action.product, action.num, state);

    case REMOVE_PRODUCT:
      return removeProductFromCart(action.productId, action.num, state);

    default:
      return state;
  }
};
