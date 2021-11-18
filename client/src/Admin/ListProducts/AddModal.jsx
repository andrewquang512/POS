import axios from "axios";
import React, { useContext, useRef, useState } from "react";
import { adminContext } from "../AdminContext";
import FileBase from "react-file-base64";

const AddModal = () => {
  const { typeProducts, addProduct } = useContext(adminContext);
  // const fileInput = React.createRef();
  const [newProduct, setNewProduct] = useState({
    name: "",
    catelory: "",
    price: 0,
    description: "",
    img: "",
    count: 0,
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
    data.append("catelory", newProduct.catelory);
    data.append("price", newProduct.price);
    data.append("description", newProduct.description);
    data.append("count", newProduct.count);

    // const productAdd = {
    //   ...newProduct,
    // };
    // console.log(data);
    addProduct(data);
    // axios
    //   .post("http://localhost:5000/api/product", newProduct)
    //   .then((res) => console.log(res))
    //   .catch((err) => console.log(err));
    // axios.post("http://localhost:3000/")
  };
  return (
    <div className="modal-content-hoangkui">
      <div className="input-container">
        <form
          // action="http://localhost:5000/api/product"
          // method="POST"
          onSubmit={handleSubmitForm}
          encType="multipart/form-data"
        >
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
          />{" "}
          {/* <FileBase
            type="file"
            multiple={false}
            onDone={({ base64 }) =>
              setNewProduct({ ...newProduct, img: base64 })
            }
          /> */}
          <input
            type="file"
            name="img"
            accept="image/*"
            onChange={onChangeAva}
          />
          <input type="submit" value="Submit"></input>
        </form>
      </div>
    </div>
  );
};

export default AddModal;
