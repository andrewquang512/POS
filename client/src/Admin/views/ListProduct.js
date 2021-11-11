import React, { useContext, useEffect } from "react";
import AdminProvider, { adminContext } from "../AdminContext";
import ListProducts from "../ListProducts";
import SingleProduct from "../ListProducts/SingleProduct";

const ListProduct = () => {
  const { products, getProducts } = useContext(adminContext);
  useEffect(() => getProducts(), []);
  return (
    <div>
      <h1>DANH SACH SAN PHAM</h1>
      <h2></h2>
      {/* {products.map((product, index) => (
        <SingleProduct product={product} index={index} />
      ))} */}

      <ListProducts />
    </div>
  );
};

export default ListProduct;
