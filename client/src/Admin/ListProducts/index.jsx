import React, { useContext, useEffect, useState } from "react";
import { adminContext } from "../AdminContext";
import Filter from "../Header/Filter";
import swal from "sweetalert";

import "../index-hoangkui.css";
import AddModal from "./AddModal";
import AddType from "./AddType";
import SingleProduct from "./SingleProduct";

// import { useHistory } from "react-router-dom";
const ListProducts = () => {
  const {
    products,
    getProducts,
    removeProduct,
    getTypeProducts,
    isLoading,
    typeProducts,
    removeTypeProduct,
  } = useContext(adminContext);
  useEffect(() => {
    getProducts();
    getTypeProducts();
  }, []);
  const [selectFilter, setSelectFilter] = useState(-1);
  // if (!isLoading) filter = <Filter />;
  const handleRemoveType = () => {
    swal({
      title: "Are you sure?",
      text: "Bạn sẽ xóa luôn tất cả các sản phẩm ở dưới?",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    }).then((willDelete) => {
      if (willDelete) {
        products.map((product) => {
          if (product.catelory === typeProducts[selectFilter]._id) {
            removeProduct(product._id);
          }
        });
        removeTypeProduct(typeProducts[selectFilter]._id);
        setSelectFilter(-1);
        swal("Xóa thành công", {
          icon: "success",
        });
      }
    });
  };
  console.log("??????", typeProducts, isLoading, products);
  return (
    <>
      {/* {filter} */}
      <div className="listProducts-heading">
        {/* <h3 className="listProducts-heading-title">Danh sách sản phẩm</h3> */}

        {false || (
          <div className="">
            <button
              onClick={() => setSelectFilter(-1)}
              className="button-filter-food"
              style={
                selectFilter === -1
                  ? { backgroundColor: "red", color: "#333" }
                  : {}
              }
            >
              All
            </button>
            {typeProducts.map((typeProduct, index) => {
              if (index !== 0)
                return (
                  <button
                    key={index}
                    onClick={() => setSelectFilter(index)}
                    style={
                      selectFilter === index
                        ? { backgroundColor: "red", color: "#333" }
                        : {}
                    }
                    className="button-filter-food"
                  >
                    {typeProduct.name}
                  </button>
                );
            })}
          </div>
        )}
        {/* <button
          onClick={openModalAdd}
          className="listProducts-heading-add-product"
        >
          <i className="fas fa-plus"></i>
          Thêm sản phẩm
        </button> */}
        <AddType />
        {selectFilter > -1 && (
          <button
            onClick={handleRemoveType}
            className="listProducts-heading-add-product"
          >
            Xóa loại này
          </button>
        )}
        <AddModal />
      </div>
      <div className="listProducts-content">
        <table className="listProducts-content-table">
          <tbody className="tbody-nth">
            <tr className="listProducts-content-row-heading-table">
              <th className="listProducts-content-row-heading">SKU</th>
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

            {products.map((product, index) => {
              if (selectFilter === -1) {
                return <SingleProduct product={product} index={index} />;
              } else if (product.catelory === typeProducts[selectFilter]._id)
                return <SingleProduct product={product} index={index} />;
            })}
          </tbody>
        </table>
      </div>

      <div className="modal-hoangkui-add modal-hoangkui">
        {/* <AddModal /> */}
      </div>
    </>
  );
};

export default ListProducts;
