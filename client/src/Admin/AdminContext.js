import { createContext, useReducer } from "react";
import reducer from "./reducer";
import axios from "axios";
import {
  PRODUCT_LOAD_SUCCESS,
  SET_TYPE_PRODUCT,
  UPDATE_PRODUCT,
  GET_TYPE_PRODUCT,
  ADD_PRODUCT,
  LOADED,
} from "./constant";
export const adminContext = createContext();

const AdminProvider = ({ children }) => {
  const [stateAdmin, dispatch] = useReducer(reducer, {
    products: [],
    typeProducts: [],
    isLoading: true,
  });
  const { products, typeProducts, isLoading } = stateAdmin;
  const getProducts = async () => {
    try {
      const response = await axios.get("http://localhost:5000/api/product");

      if (response.data.success) {
        const products = response.data.products;
        dispatch({
          type: PRODUCT_LOAD_SUCCESS,
          payload: products,
        });
        products.map((product) => {
          getTypeProduct(product);
        });
      }
      getTypeProducts();
    } catch (error) {
      console.log(error);
    }
  };
  const addProduct = async (newProduct) => {
    try {
      // console.log(newProduct);
      const res = await axios.post(
        "http://localhost:5000/api/product",
        newProduct
      );
      if (res.data.success) {
        dispatch({
          type: ADD_PRODUCT,
          payload: res.data.product,
        });
        getTypeProduct(res.data.product);
      }
      // console.log(res);
    } catch (error) {
      console.log(error);
    }
  };
  const getTypeProducts = async () => {
    try {
      const res = await axios.get(`http://localhost:5000/api/typeproduct`);
      console.log(res.data);
      if (res.data.success) {
        dispatch({
          type: GET_TYPE_PRODUCT,
          payload: res.data.typeProducts,
        });
        dispatch({
          type: LOADED,
          payload: true,
        });
        // return res.data.typeProduct;
      }
    } catch (error) {
      console.log(error);
      // return;
    }
  };
  const getTypeProduct = async (product) => {
    try {
      const res = await axios.get(
        `http://localhost:5000/api/typeproduct/${product.catelory}`
      );
      console.log(res.data);
      if (res.data.success) {
        dispatch({
          type: SET_TYPE_PRODUCT,
          payload: {
            product,
            data: res.data.typeProduct.name,
          },
        });
        // return res.data.typeProduct;
      }
    } catch (error) {
      console.log(error);
      // return;
    }
  };
  const removeProduct = async (id) => {
    try {
      const res = await axios.delete(`http://localhost:5000/api/product/${id}`);
      if (res.data.success) {
        console.log(res.data.product);
        getProducts();
      }
    } catch (error) {
      console.log(error);
    }
  };
  const removeTypeProduct = async (id) => {
    try {
      const res = await axios.delete(
        `http://localhost:5000/api/typeproduct/${id}`
      );
      if (res.data.success) {
        console.log(res.data.product);
        getTypeProducts();
      }
    } catch (error) {
      console.log(error);
    }
  };
  const getProductForIndex = (index) => {
    return products[index];
  };
  const getTypeProductForIndex = (index) => {
    return typeProducts[index];
  };
  const updateProduct = async (id, dataForm) => {
    try {
      const res = await axios.put(
        `http://localhost:5000/api/product/${id}`,
        dataForm
      );
      if (res.data.success) {
        dispatch({
          type: UPDATE_PRODUCT,
          payload: {
            id,
            product: res.data.product,
          },
        });
        getTypeProduct(res.data.product);
      }
    } catch (error) {
      console.log(error);
    }
  };
  const addTypeProduct = async (dataForm) => {
    try {
      const res = await axios.post(
        `http://localhost:5000/api/typeproduct`,
        dataForm
      );
      if (res.data.success) {
        getTypeProducts();
      }
    } catch (error) {}
  };
  const adminValue = {
    isLoading,
    products,
    typeProducts,
    getProducts,
    getTypeProduct,
    getTypeProducts,
    addProduct,
    removeProduct,
    getProductForIndex,
    getTypeProductForIndex,
    updateProduct,
    removeTypeProduct,
    addTypeProduct,
  };
  return (
    <adminContext.Provider value={adminValue}>{children}</adminContext.Provider>
  );
};

export default AdminProvider;
