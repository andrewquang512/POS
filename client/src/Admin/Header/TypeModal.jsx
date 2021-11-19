import axios from "axios";
import React, { useContext, useRef, useState, useEffect } from "react";
import { adminContext } from "../AdminContext";
import swal from "sweetalert";
import Modal from "react-modal";
// import { customStyles } from "../ListProducts/SingleProduct";
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
const TypeModal = ({ index, openPlease, ref }) => {
  console.log(index);
  const [isEdit, setIsEdit] = useState(false);
  const { typeProducts, addProduct, addTypeProduct, isLoading } =
    useContext(adminContext);
  const [typeProduct, setTypeProduct] = useState(typeProducts[index]);
  const { name, img } = typeProduct;
  const [modalIsOpen, setIsOpen] = useState(false);
  let subtitle;
  useEffect(() => {
    setTypeProduct(typeProducts[index]);
    return () => {
      //   cleanup;
    };
  });
  function openModal() {
    setIsOpen(true);
  }
  //   if (openPlease) {
  //     setIsOpen(true);
  //     // openPlease = false;
  //   }
  function afterOpenModal() {
    // references are now sync'd and can be accessed.
    subtitle.style.color = "#f00";
  }
  function closeModal() {
    setIsOpen(false);
  }

  // const fileInput = React.createRef();

  const onChangeInputProduct = (e) => {
    setTypeProduct({
      ...typeProduct,
      [e.target.name]: e.target.value,
    });
  };
  const onChangeAva = (e) => {
    // console.log(fileInput.current.files[0].name);
    setTypeProduct({
      ...typeProduct,
      img: e.target.files[0],
    });
  };
  // console.log(newProduct);
  const handleSubmitForm = (e) => {
    e.preventDefault();
    const data = new FormData();
    data.append("img", img);
    data.append("name", name);

    // const productAdd = {
    //   ...newProduct,
    // };
    addTypeProduct(data);
    // axios
    //   .post("http://localhost:5000/api/product", newProduct)
    //   .then((res) => console.log(res))
    //   .catch((err) => console.log(err));
    // axios.post("http://localhost:3000/")
  };
  return (
    <>
      <button
        ref={ref}
        onClick={openModal}
        style={{ display: "none" }}
        className="listProducts-heading-add-product"
      >
        <i className="fas fa-plus"></i>
        Thêm Loại
      </button>
      <Modal
        ariaHideApp={false}
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
          close
        </button>
        <form className="content-center" onSubmit={handleSubmitForm}>
          <div className="input-container-wrap">
            <div className="input-container-both">
              <div className="input-container input-container-img">
                <ButtonUpload
                  text="Chọn ảnh"
                  src={img}
                  setProductUpdate={setTypeProduct}
                  productUpdate={typeProduct}
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
            style={{ display: isEdit ? "block" : "none" }}
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

export default TypeModal;
