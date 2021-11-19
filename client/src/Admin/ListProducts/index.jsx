import React, { useContext, useEffect } from "react";
import { adminContext } from "../AdminContext";
import Filter from "../Header/Filter";
// import Product from "./Product";
// import Products from "../../Products";
import "../index-hoangkui.css";
import AddModal from "./AddModal";
import AddType from "./AddType";
import SingleProduct from "./SingleProduct";

// import { useHistory } from "react-router-dom";
const ListProducts = () => {
  const { products, getProducts, isLoading } = useContext(adminContext);
  useEffect(() => getProducts(), []);
  let filter = "loading";
  if (!isLoading) filter = <Filter />;
  return (
    <>
      {filter}
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
        {/* <button
          onClick={openModalAdd}
          className="listProducts-heading-add-product"
        >
          <i className="fas fa-plus"></i>
          Thêm sản phẩm
        </button> */}
        <AddType />
        <AddModal />
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
                Kiểu sản phẩm
              </th>
              <th className="listProducts-content-row-heading">Số lượng còn</th>
              <th className="listProducts-content-row-heading">Mô tả</th>
              <th className="listProducts-content-row-heading">Giá</th>
              <th className="listProducts-content-row-heading"></th>
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

      <div className="modal-hoangkui-add modal-hoangkui">
        {/* <AddModal /> */}
      </div>
    </>
  );
};

export default ListProducts;
