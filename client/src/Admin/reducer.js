import {
  ADD_TYPE_PRODUCT,
  PRODUCT_LOAD_SUCCESS,
  SET_TYPE_PRODUCT,
  GET_TYPE_PRODUCT,
  UPDATE_PRODUCT,
  ADD_PRODUCT,
  LOADED,
} from "./constant";

const reducer = (state, action) => {
  const { type, payload } = action;
  switch (type) {
    case PRODUCT_LOAD_SUCCESS:
      return {
        ...state,
        products: payload,
      };
    case GET_TYPE_PRODUCT:
      return {
        ...state,
        typeProducts: payload,
      };
    case SET_TYPE_PRODUCT:
      const { product, data } = payload;
      const index = state.products.indexOf(product);
      state.products[index] = { ...state.products[index], typeProduct: data };
      return {
        ...state,
        // products: [...state.products, newProduct],
      };
    case UPDATE_PRODUCT:
      const indexUpdate = state.products.findIndex(
        (product) => product._id === payload.id
      );
      const productsUpdate = [...state.products];
      productsUpdate[indexUpdate] = payload.product;
      return {
        ...state,
        products: productsUpdate,
      };
    case ADD_PRODUCT:
      return {
        ...state,
        products: [...state.products, payload],
      };
    case LOADED:
      return {
        ...state,
        isLoading: false,
      };
    default:
      return state;
  }
};
export default reducer;
