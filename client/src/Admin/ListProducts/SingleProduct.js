import React from "react";

const SingleProduct = ({ product, index }) => {
  const { name, typeProduct, price, count, description, img } = product;
  return (
    <>
      <tr key={index} className="listProducts-content-row">
        <td className="listProducts-content-row-item">
          <input
            type="checkbox"
            className="listProducts-content-row-checkbox"
          />
        </td>
        <td className="listProducts-content-row-item">{index}</td>
        <td className="listProducts-content-row-item">{name}</td>
        <td className="listProducts-content-row-item">{typeProduct}</td>
        <td className="listProducts-content-row-item">{count}</td>
        <td className="listProducts-content-row-item">{description}</td>
        <td className="listProducts-content-row-item">{price}</td>
        <td className="listProducts-content-row-item">
          <img src={img} alt="" />
        </td>
        <td className="listProducts-content-row-item">
          <button className="listProducts-content-row-remove">
            {" "}
            <i className="fas fa-trash"></i>
          </button>
        </td>
      </tr>
    </>
  );
};

export default SingleProduct;
