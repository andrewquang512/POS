import React, { useCallback, useState, useEffect, useContext } from "react";
import { adminContext } from "../AdminContext";
// import Product from "./Product";
// import Products from "../../Products";
import "../index-hoangkui.css";
import SingleProduct from "./SingleProduct";

// import { useHistory } from "react-router-dom";
const ListProducts = () => {
  const { products, getProducts } = useContext(adminContext);

  return (
    <>
      <div className="listProducts-heading">
        <h3 className="listProducts-heading-title">Danh sách sản phẩm</h3>
        <div className="listProducts-heading-wrap-search">
          <input
            type="text"
            className="listProducts-heading-search"
            placeholder="Tìm kiếm sản phẩm và thương hiệu"
          />
          <i className="fas fa-search"></i>
        </div>
        <button className="listProducts-heading-add-product">
          <i className="fas fa-plus"></i>
          Thêm sản phẩm
        </button>
      </div>
      <div className="listProducts-content">
        <table className="listProducts-content-table">
          <tbody className="tbody-nth">
            <tr className="listProducts-content-row-heading-table">
              <th className="listProducts-content-row-heading">
                <input
                  type="checkbox"
                  className="listProducts-content-row-checkbox"
                />
              </th>
              <th className="listProducts-content-row-heading">STT</th>
              <th className="listProducts-content-row-heading">Tên sản phẩm</th>
              <th className="listProducts-content-row-heading">
                Tên thương hiệu
              </th>
              <th className="listProducts-content-row-heading">Số lượng còn</th>
              <th className="listProducts-content-row-heading">
                Số lượng đã bán
              </th>
              <th className="listProducts-content-row-heading">Giá</th>
              <th className="listProducts-content-row-heading"> </th>
              <th className="listProducts-content-row-heading">
                <button className="listProducts-content-row-remove">
                  <i className="fas fa-trash"></i>
                </button>
              </th>
            </tr>

            {products.map((product, index) => (
              <SingleProduct product={product} index={index} />
            ))}
          </tbody>
        </table>
        <div className="listProducts-page">
          <button className="page-button">
            <i id="backPage" className="fas fa-step-backward"></i>
          </button>
          <button className="page-button">
            <i id="nextPage" className="fas fa-step-forward"></i>
          </button>
        </div>
      </div>
    </>
  );
};

export default ListProducts;
