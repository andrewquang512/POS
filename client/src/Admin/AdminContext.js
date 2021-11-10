import { createContext, useReducer } from "react";
import reducer from "./reducer";
import axios from "axios";
import { PRODUCT_LOAD_SUCCESS, SET_TYPE_PRODUCT } from "./constant";
export const adminContext = createContext();

const AdminProvider = ({ children }) => {
  const [stateAdmin, dispatch] = useReducer(reducer, {
    products: [],
    typeProducts: [],
  });
  const { products, typeProducts } = stateAdmin;
  const getProducts = async () => {
    try {
      const response = await axios.get("http://localhost:5000/api/product");

      if (response.data.success) {
        const products = response.data.products;
        dispatch({
          type: PRODUCT_LOAD_SUCCESS,
          payload: products,
        });
        // products.map((product) => {
        //   getTypeProduct(product);
        // });
      }
    } catch (error) {
      console.log(error);
    }
  };
  const getTypeProduct = async (product) => {
    try {
      const res = await axios.get(
        `http://localhost:5000/api/typeproduct/${product.catelory}`
      );
      if (res.data.success) {
        dispatch({
          type: SET_TYPE_PRODUCT,
          payload: {
            product,
            data: res.data.typeProduct,
          },
        });
        // return res.data.typeProduct;
      }
    } catch (error) {
      console.log(error);
      // return;
    }
  };
  const adminValue = { products, typeProducts, getProducts, getTypeProduct };
  return (
    <adminContext.Provider value={adminValue}>{children}</adminContext.Provider>
  );
};

export default AdminProvider;
