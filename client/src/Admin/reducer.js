import {
  ADD_TYPE_PRODUCT,
  PRODUCT_LOAD_SUCCESS,
  SET_TYPE_PRODUCT,
} from "./constant";

const reducer = (state, action) => {
  const { type, payload } = action;
  switch (type) {
    case PRODUCT_LOAD_SUCCESS:
      return {
        ...state,
        products: payload,
      };
    case SET_TYPE_PRODUCT:
      const { product, data } = payload;
      const index = state.products.indexOf(product);
      state.products[index] = { ...state.products[index], typeProduct: data };
      return {
        ...state,
        // products: [...state.products, newProduct],
      };

    default:
      return state;
  }
};
export default reducer;
