import React, { useContext, useState } from "react";
import { adminContext } from "../AdminContext";
import swal from "sweetalert";
import Modal from "react-modal";
import ButtonUpload from "../ButtonUpload";
export const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    width: 700,
    textAlign: "center",
  },
};
const SingleProduct = ({ product, index }) => {
  const [isDisable, setIsDisable] = useState(true);
  const { products, typeProducts, updateProduct } = useContext(adminContext);
  const [productUpdate, setProductUpdate] = useState({
    ...products[index],
  });
  const onChangeProduct = (e) => {
    setProductUpdate({
      ...productUpdate,
      [e.target.name]: e.target.value,
    });
  };
  // const { name, catelory, price, count, description, img } = productUpdate;
  // modal
  let subtitle;
  const [modalIsOpen, setIsOpen] = useState(false);
  function openModal() {
    setIsOpen(true);
    setIsDisable(true);
  }
  function afterOpenModal() {
    // references are now sync'd and can be accessed.
    subtitle.style.color = "#333";
  }
  function closeModal() {
    setIsOpen(false);
  }
  const openModalEdit = () => {
    setIsOpen(true);
    setIsDisable(false);
  };
  const { removeProduct } = useContext(adminContext);
  const { _id, name, typeProduct, price, count, description, img } = product;
  const handleRemove = () => {
    swal({
      title: "Are you sure?",
      text: "Bạn sẽ không thể khôi phục nếu sử dụng hành động này.",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    }).then((willDelete) => {
      if (willDelete) {
        removeProduct(_id);
        swal("Sản phẩm đã được xóa", {
          icon: "success",
        });
      }
    });
  };
  const handleUpdate = (e) => {
    e.preventDefault();
    console.log(productUpdate);
    const dataForm = new FormData();
    dataForm.append("name", productUpdate.name);
    dataForm.append("catelory", productUpdate.catelory);
    dataForm.append("price", productUpdate.price);
    dataForm.append("count", productUpdate.count);
    dataForm.append("description", productUpdate.description);
    dataForm.append("img", productUpdate.img);
    updateProduct(productUpdate._id, dataForm);
    closeModal();
    swal("Sửa thành công", "", "success");
  };
  return (
    <>
      <tr key={index} className="listProducts-content-row">
        <td onClick={openModal} className="listProducts-content-row-item">
          {index}
        </td>
        <td onClick={openModal} className="listProducts-content-row-item">
          {name}
        </td>
        <td onClick={openModal} className="listProducts-content-row-item">
          {typeProduct}
        </td>
        <td onClick={openModal} className="listProducts-content-row-item">
          {count}
        </td>
        <td
          onClick={openModal}
          className="listProducts-content-row-item listProducts-content-row-item-des"
        >
          {description}
        </td>
        <td onClick={openModal} className="listProducts-content-row-item">
          {price * 1000}
        </td>
        <td onClick={openModal} className="listProducts-content-row-item">
          <img src={img} alt="" className="listProducts-content-row-item-img" />
        </td>
        <td className="listProducts-content-row-item">
          <button
            onClick={openModalEdit}
            className="listProducts-content-row-edit"
          >
            <i className="fas fa-edit"></i>
          </button>
          <button
            onClick={handleRemove}
            className="listProducts-content-row-remove"
          >
            <i className="fas fa-trash"></i>
          </button>
        </td>
      </tr>

      <Modal
        // style={{ width: 600 }}
        // className="Modal"
        // overlayClassName="Overlay"
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <h2 ref={(_subtitle) => (subtitle = _subtitle)}>
          {isDisable ? "Thông tin sản phẩm" : "Chế độ chỉnh sửa"}
        </h2>
        <button className="modal-close" onClick={closeModal}>
          x
        </button>
        <form className="content-center" onSubmit={handleUpdate}>
          <div className="input-container-wrap">
            <div className="input-container-both">
              <div className="input-container input-container-img">
                <ButtonUpload
                  isDisable={isDisable}
                  text="Chọn ảnh"
                  src={img}
                  setProductUpdate={setProductUpdate}
                  productUpdate={productUpdate}
                />
              </div>
            </div>
            <div className="input-container-both">
              <div className="input-container">
                <label htmlFor="" className="input-label">
                  Tên
                </label>
                <input
                  disabled={isDisable}
                  className="input-box"
                  onChange={onChangeProduct}
                  type="text"
                  name="name"
                  value={productUpdate.name}
                  id=""
                />
              </div>
              <div className="input-container">
                <label htmlFor="" className="input-label">
                  Số lượng
                </label>
                <select
                  disabled={isDisable}
                  className="input-box"
                  name="catelory"
                  value={productUpdate.catelory}
                  onChange={onChangeProduct}
                >
                  {typeProducts.map((typeProduct, index) => (
                    <option value={typeProduct._id}>{typeProduct.name}</option>
                  ))}
                </select>
              </div>
              <div className="input-container">
                <label htmlFor="" className="input-label">
                  Giá
                </label>
                <input
                  disabled={isDisable}
                  className="input-box"
                  onChange={onChangeProduct}
                  type="text"
                  name="price"
                  value={productUpdate.price}
                  id=""
                />
              </div>
              <div className="input-container">
                <label htmlFor="" className="input-label">
                  Số lượng
                </label>
                <input
                  disabled={isDisable}
                  className="input-box"
                  onChange={onChangeProduct}
                  type="text"
                  name="count"
                  value={productUpdate.count}
                  id=""
                />
              </div>
              <div className="input-container">
                <label htmlFor="" className="input-label">
                  Mô tả
                </label>
                <textarea
                  disabled={true}
                  type="text"
                  name="description"
                  className="input-box input-box-textarea"
                  value={productUpdate.description}
                  onChange={onChangeProduct}
                  id=""
                />
              </div>
            </div>
          </div>
          <input
            style={{ display: isDisable ? "none" : "block" }}
            className="input-box input-box-submit"
            type="submit"
            value="Lưu"
          />
          {/* <button>the modal</button> */}
        </form>
      </Modal>
    </>
  );
};

export default SingleProduct;
