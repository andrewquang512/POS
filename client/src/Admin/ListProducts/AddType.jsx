import axios from "axios";
import React, { useContext, useRef, useState } from "react";
import { adminContext } from "../AdminContext";
import swal from "sweetalert";
import Modal from "react-modal";
import { customStyles } from "./SingleProduct";
import ButtonUpload from "../ButtonUpload";
const AddType = () => {
  const [modalIsOpen, setIsOpen] = useState(false);
  let subtitle;

  function openModal() {
    setIsOpen(true);
  }
  function afterOpenModal() {
    // references are now sync'd and can be accessed.
    subtitle.style.color = "#333";
  }
  function closeModal() {
    setIsOpen(false);
  }

  const { typeProducts, addProduct, addTypeProduct } = useContext(adminContext);
  // const fileInput = React.createRef();
  const [newProduct, setNewProduct] = useState({
    name: "",
    img: "",
  });
  const { name, catelory, price, description, img, count } = newProduct;
  const onChangeInputProduct = (e) => {
    setNewProduct({
      ...newProduct,
      [e.target.name]: e.target.value,
    });
  };
  const onChangeAva = (e) => {
    // console.log(fileInput.current.files[0].name);
    setNewProduct({
      ...newProduct,
      img: e.target.files[0],
    });
  };
  // console.log(newProduct);
  const handleSubmitForm = (e) => {
    e.preventDefault();
    const data = new FormData();
    data.append("img", newProduct.img);
    data.append("name", newProduct.name);

    // const productAdd = {
    //   ...newProduct,
    // };
    console.log(newProduct);
    addTypeProduct(data);
    closeModal();
    swal(
      "Thành công",
      `Đã thêm thành công loại ${newProduct.name} `,
      "success"
    );
    // axios
    //   .post("http://localhost:5000/api/product", newProduct)
    //   .then((res) => console.log(res))
    //   .catch((err) => console.log(err));
    // axios.post("http://localhost:3000/")
  };
  return (
    <>
      <button onClick={openModal} className="listProducts-heading-add-product">
        <i className="fas fa-plus"></i>
        Thêm Loại
      </button>
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
        <h2 ref={(_subtitle) => (subtitle = _subtitle)}>Thêm loại sản phẩm</h2>
        <button className="modal-close" onClick={closeModal}>
          x
        </button>
        <form className="content-center" onSubmit={handleSubmitForm}>
          <div className="input-container-wrap">
            <div className="input-container-both">
              <div className="input-container input-container-img">
                <ButtonUpload
                  text="Chọn ảnh"
                  src={img}
                  setProductUpdate={setNewProduct}
                  productUpdate={newProduct}
                />
              </div>
            </div>
            <div className="input-container-both">
              <div className="input-container">
                <label htmlFor="" className="input-label">
                  Tên
                </label>
                <input
                  className="input-box"
                  onChange={onChangeInputProduct}
                  type="text"
                  name="name"
                  value={name}
                  id=""
                />
              </div>
            </div>
          </div>
          <input
            className="input-box input-box-submit"
            type="submit"
            value="Thêm"
          />
          {/* <button>the modal</button> */}
        </form>
      </Modal>
    </>
  );
};

export default AddType;
