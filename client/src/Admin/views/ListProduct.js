import React, { useContext, useEffect } from "react";
import AdminProvider, { adminContext } from "../AdminContext";
import SingleProduct from "./SingleProduct";

const ListProduct = () => {
  const { products, getProducts } = useContext(adminContext);
  useEffect(() => getProducts(), []);
  return (
    <div>
      <h1>DANH SACH SAN PHAM</h1>
      {products.map((product, index) => (
        <SingleProduct product={product} index={index} />
      ))}
    </div>
  );
};

export default ListProduct;
