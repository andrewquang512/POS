import React, { useContext, useEffect } from "react";
import AdminProvider, { adminContext } from "../AdminContext";

const SingleProduct = ({ product, index }) => {
  const { getTypeProduct } = useContext(adminContext);
  // const { name, img } = getTypeProduct(product._id);
  let namee = null;
  const getName = async () => {
    const { name, img } = await getTypeProduct(product._id);
    namee = name;
  };
  // const nameE;
  console.log(namee);
  return (
    <div key={index}>
      {product.name}:{product.price}:{product.description}:{product.price}:
      {product.count}:{product.catelory}
    </div>
  );
};

export default SingleProduct;
