import axios from "axios";
import React, { useContext, useRef, useState } from "react";
import { adminContext } from "../AdminContext";

const AddModal = () => {
  const { typeProducts, addProduct } = useContext(adminContext);
  const fileInput = React.createRef();
  const [newProduct, setNewProduct] = useState({
    name: "",
    catelory: "",
    price: -1,
    description: "",
    img: "",
    count: -2,
  });
  const { name, catelory, price, description, img, count } = newProduct;
  const onChangeInputProduct = (e) => {
    setNewProduct({
      ...newProduct,
      [e.target.name]: e.target.value,
    });
  };
  //   const onChangeAva = (e) => {
  //     // console.log(fileInput.current.files[0].name);
  //     setNewProduct({
  //       ...newProduct,
  //       img: fileInput.current.files[0],
  //     });
  //   };
  console.log(newProduct);
  const handleSubmitForm = (e) => {
    console.log(fileInput.current.files[0]);
    e.preventDefault();
    const productAdd = {
      ...newProduct,
      img: fileInput.current.files[0],
    };
    console.log(productAdd);
    addProduct(productAdd);
    //   axios.post("http://localhost:5000/")
  };
  return (
    <div className="modal-content-hoangkui">
      <div className="input-container">
        <form onSubmit={handleSubmitForm}>
          <input
            type="text"
            name="name"
            value={name}
            onChange={onChangeInputProduct}
            className="input-item"
            placeholder="Nhập tên sản phẩm"
          />
          <select
            name="catelory"
            value={catelory}
            onChange={onChangeInputProduct}
          >
            {typeProducts.map((typeProduct, index) => (
              <option value={typeProduct._id}>{typeProduct.name}</option>
            ))}
          </select>

          <input
            type="number"
            name="count"
            value={count}
            onChange={onChangeInputProduct}
            className="input-item"
            placeholder="Nhập số lượng"
          />
          <textarea
            id="description"
            name="description"
            rows="4"
            value={description}
            onChange={onChangeInputProduct}
            cols="50"
            placeholder="Nhập mô tả"
          />
          <input
            type="number"
            name="price"
            value={price}
            onChange={onChangeInputProduct}
            className="input-item"
            placeholder="Nhập giá"
          />
          <input
            type="file"
            // value={img}
            name="img"
            id="img"
            ref={fileInput}
            // src="submit.gif"
            // alt="Submit"
            // style="float:right"
            width="48"
            height="48"
          />
          <input type="submit" value="Submit"></input>
        </form>
      </div>
    </div>
  );
};

export default AddModal;

// if(e.target.files[0]){
//     const fileReader = new FileReader();
//     fileReader.readAsDataURL(e.target.files[0]);

//     fileReader.onload = () => {
//         this.setState({
//             avatar : fileReader.result
//         })
//     };
//     fileReader.onerror = (error) => {
//         console.log(error);
//     }
// }
