import React, { useContext, useState } from "react";
import { adminContext } from "../AdminContext";
import swal from "sweetalert";
import Modal from "react-modal";
import ButtonUpload from "../ButtonUpload";
const customStyles = {
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
  const { products, typeProducts } = useContext(adminContext);
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
  }
  function afterOpenModal() {
    // references are now sync'd and can be accessed.
    subtitle.style.color = "#f00";
  }
  function closeModal() {
    setIsOpen(false);
  }

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
  };
  return (
    <>
      <tr onClick={openModal} key={index} className="listProducts-content-row">
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
          <img src={img} alt="" className="listProducts-content-row-item-img" />
        </td>
        <td className="listProducts-content-row-item">
          <button onClick={openModal} className="listProducts-content-row-edit">
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
        <h2 ref={(_subtitle) => (subtitle = _subtitle)}>Chỉnh sửa sản phẩm</h2>
        <button className="modal-close" onClick={closeModal}>
          close
        </button>
        <form className="content-center" onSubmit={handleUpdate}>
          <div className="input-container">
            <label htmlFor="" className="input-label">
              Tên
            </label>
            <input
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
              type="text"
              name="description"
              className="input-box input-box-textarea"
              value={productUpdate.description}
              onChange={onChangeProduct}
              id=""
            />
          </div>
          <div className="input-container">
            <ButtonUpload text="Chọn ảnh" src={img} />
          </div>
          <input
            className="input-box input-box-submit"
            type="submit"
            value="Lưu lại"
          />
          {/* <button>the modal</button> */}
        </form>
      </Modal>
    </>
  );
};

export default SingleProduct;
