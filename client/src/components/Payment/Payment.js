import { React, useState } from "react";
import { Form, Button } from "react-bootstrap";
import MethodModal from "./Modal/Modal";
import { Link, useLocation, useHistory } from "react-router-dom";
import Cartreview from "./CartReview/Cartreview";
import axios from "axios";
import "./index.css";

const Payment = () => {
  const [ModalOpened, setModalOpened] = useState(true);
  const [usingMethod, setusingMethod] = useState(null);

  const [state, setState] = useState(1);
  const [name, setName] = useState("");
  const [table, setTable] = useState("");
  const [number, setNumber] = useState("");
  const [address, setAddress] = useState("");

  const [nameerror, setnameerror] = useState(false);
  const [tableerror, settableerror] = useState(false);
  const [addresserror, setaddresserror] = useState(false);
  const [numbererror, setnumbererror] = useState(false);

  const history = useHistory();
  const location = useLocation();
  const { cartcontext } = location.state;
  let total = 0;
  // eslint-disable-next-line array-callback-return
  cartcontext.map((cartItem, index) => {
    total = total + cartItem.price * cartItem.quantity;
  });
  let ordername = name;
  let orderusingMethod = usingMethod;
  let ListItems = [];
  cartcontext.forEach(function (a) {
    if (!this[a.name]) {
      this[a.name] = {
        name: a.name,
        quantity: a.quantity,
        price: a.price,
        img: a.img,
      };
      ListItems.push(this[a.name]);
    }
  }, Object.create(null));
  const setMethod = (value) => {
    setusingMethod(value);
    setModalOpened(false);
  };
  const handlenameChange = (event) => {
    if (!event.target.value) {
      setnameerror(true);
    } else {
      setnameerror(false);
      setName(event.target.value);
    }
  };
  const handletableChange = (event) => {
    if (!event.target.value) {
      settableerror(true);
    } else {
      settableerror(false);
      setTable(event.target.value);
    }
  };
  const handleaddressChange = (event) => {
    if (!event.target.value) {
      setaddresserror(true);
    } else {
      setaddresserror(false);
      setAddress(event.target.value);
    }
  };
  const handlenumberChange = (event) => {
    if (!event.target.value) {
      setnumbererror(true);
    } else {
      setnumbererror(false);
      setNumber(event.target.value);
    }
  };

  const updateState = () => {
    if (usingMethod === "Directly") {
      if (name === "" || table === "" || table === "Select the table") {
        if (name === "") setnameerror(true);
        if (table === "") settableerror(true);
        if (table === "Select the table") settableerror(true);
      } else {
        setState(state + 1);
      }
    } else if (usingMethod === "Online") {
      if (name === "" || address === "" || number === "") {
        if (name === "") setnameerror(true);
        if (address === "") setaddresserror(true);
        if (number === "") setnumbererror(true);
      } else {
        setState(state + 1);
      }
    }
  };
  const backState = () => {
    setState(state - 1);
  };
  const handleSubmit = async (event) => {
    event.preventDefault();
    const data = {
      userName: ordername,
      usingMethod: orderusingMethod,
      totalPrice: total,
      OrderItems: ListItems,
    };
    console.log("vcc", data);
    try {
      await axios
        .post(`http://localhost:5000/api/orders/`, {
          userName: ordername,
          usingMethod: orderusingMethod,
          totalPrice: total,
          OrderItems: ListItems,
        })
        .then((res) => {
          history.push("/");
          console.log(res.data);
        })
        .catch((error) => console.log(error));
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      {ModalOpened ? (
        <MethodModal isOpened={ModalOpened} onChooseMethod={setMethod} />
      ) : usingMethod === "Directly" && state === 1 ? (
        <Form className="form-holder">
          <div className="form-content">
            <div className="form-items">
              <h3>Payment Check</h3>
              <p>Fill in the data below.</p>
              <Form.Group controlId="exampleForm.ControlInput1">
                <Form.Label>Tên</Form.Label>
                <Form.Control
                  onChange={handlenameChange}
                  type="text"
                  placeholder="Nguyễn Văn A"
                  value={name}
                />
                {nameerror ? (
                  <div className="invalid-feedback">
                    This field can not be empty
                  </div>
                ) : null}
              </Form.Group>
              <Form.Group controlId="exampleForm.ControlTextarea1">
                <Form.Label>Số bàn</Form.Label>
                <Form.Control
                  as="select"
                  value={table}
                  onChange={handletableChange}
                >
                  <option>Select the table</option>
                  <option value="1">01</option>
                  <option value="2">02</option>
                  <option value="3">03</option>
                  <option value="4">04</option>
                  <option value="5">05</option>
                  <option value="6">06</option>
                </Form.Control>
                {tableerror ? (
                  <div className="invalid-feedback">
                    This field can not be empty
                  </div>
                ) : null}
              </Form.Group>
              <div className="buttons-list">
                <Link to="/">
                  <Button className="secondary">Back to Shop</Button>
                </Link>
                <Button className="primary" onClick={updateState}>
                  Next
                </Button>
              </div>
            </div>
          </div>
        </Form>
      ) : usingMethod === "Online" && state === 1 ? (
        <Form className="form-holder">
          <div className="form-content">
            <div className="form-items">
              <h3>Payment Check</h3>
              <p>Fill in the data below.</p>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput1"
              >
                <Form.Label>Tên</Form.Label>
                <Form.Control
                  onChange={handlenameChange}
                  type="text"
                  placeholder="Nguyễn Văn A"
                  value={name}
                />
                {nameerror ? (
                  <div className="invalid-feedback">
                    This field can not be empty
                  </div>
                ) : null}
              </Form.Group>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlTextarea1"
              >
                <Form.Label>Địa chỉ</Form.Label>
                <Form.Control
                  onChange={handleaddressChange}
                  type="text"
                  placeholder="165 Baker Street"
                  value={address}
                />
                {addresserror ? (
                  <div className="invalid-feedback">
                    This field can not be empty
                  </div>
                ) : null}
              </Form.Group>
              <Form.Group controlId="exampleForm.ControlTextarea2">
                <Form.Label>Số điện thoại</Form.Label>
                <Form.Control
                  onChange={handlenumberChange}
                  type="text"
                  placeholder="0123456789"
                  value={number}
                />
                {numbererror ? (
                  <div className="invalid-feedback">
                    This field can not be empty
                  </div>
                ) : null}
              </Form.Group>
              <div className="buttons-list">
                <Link to="/">
                  <Button className="secondary">Back to Shop</Button>
                </Link>
                <Button className="primary" onClick={updateState}>
                  Next
                </Button>
              </div>
            </div>
          </div>
        </Form>
      ) : state === 2 ? (
        <Form className="form-holder">
          <div className="form-content">
            <div className="form-items">
              <h3>Review your cart</h3>
              <p>Check all the products below.</p>
              <ul className="payment-cart-list">
                {cartcontext.map((cartItem, index) => {
                  return (
                    <Cartreview
                      className="payment-cart-item"
                      item={cartItem}
                      index={index}
                    />
                  );
                })}
              </ul>
              <div className="payment-total-price">
                Total Price: {total} .000 Đ
              </div>
              <div className="buttons-list">
                <Button className="secondary" onClick={backState}>
                  Back
                </Button>
                <Button className="primary" onClick={updateState}>
                  Next
                </Button>
              </div>
            </div>
          </div>
        </Form>
      ) : state === 3 ? (
        <Form className="form-holder">
          <div className="form-content">
            <div className="form-items">
              <h3>Review your Order</h3>
              <p>Check all the information you've filled .</p>
              {usingMethod === "Directly" ? (
                <div>
                  <div className="payment-review">
                    <strong>Customer's name:</strong>
                    <span>{name}</span>
                  </div>
                  <div className="payment-review">
                    <strong>Table's number:</strong>
                    <span>{table}</span>
                  </div>
                  <div className="payment-review">
                    <strong>Order Items:</strong>
                    <ul className="payment-cart-list">
                      {cartcontext.map((cartItem, index) => {
                        return (
                          <Cartreview
                            className="payment-cart-item"
                            item={cartItem}
                            index={index}
                          />
                        );
                      })}
                    </ul>
                  </div>
                </div>
              ) : usingMethod === "Online" ? (
                <div>
                  <div className="payment-review">
                    <strong>Customer's name:</strong>
                    <span>{name}</span>
                  </div>
                  <div className="payment-review">
                    <strong>Address:</strong>
                    <span>{address}</span>
                  </div>
                  <div className="payment-review">
                    <strong>Phone number:</strong>
                    <span>{number}</span>
                  </div>
                  <div className="payment-review">
                    <strong>Order Items:</strong>
                    <ul className="payment-cart-list">
                      {cartcontext.map((cartItem, index) => {
                        return (
                          <Cartreview
                            className="payment-cart-item"
                            item={cartItem}
                            index={index}
                          />
                        );
                      })}
                    </ul>
                  </div>
                </div>
              ) : null}
              <div className="payment-total-price">
                Total Price: {total} .000 Đ
              </div>
              <div className="buttons-list">
                <Button className="secondary" onClick={backState}>
                  Back
                </Button>
                <Button className="primary" onClick={handleSubmit}>
                  Submit
                </Button>
              </div>
            </div>
          </div>
        </Form>
      ) : null}
    </div>
  );
};

export default Payment;
