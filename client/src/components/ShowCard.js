
import Card from "react-bootstrap/Card";
import React from "react";
import { Container, Row, Col } from 'react-grid-system';
import { BsCart2 } from 'react-icons/bs';
import { AiOutlinePlus } from 'react-icons/ai';
import { AiOutlineMinus } from 'react-icons/ai';
import Popup from "reactjs-popup";
import { useState } from 'react';

function ButtonIncrement(props) {

  return (
    <button style={{ marginLeft: '1rem', borderRadius: '10px', cursor: 'pointer' }} onClick={props.onClickFunc}>
      <AiOutlinePlus className="iconPop" />
    </button>
  )
}
function ButtonDecrement(props) {

  return (
    <button style={{ marginLeft: '1rem', borderRadius: '10px', cursor: 'pointer' }} onClick={props.onClickFunc}>
      <AiOutlineMinus className="iconPop" />
    </button>
  )
}
function Display(props) {
  return (
    <label style={{ marginLeft: '1rem' }} >{props.message}</label>
  )
}

const contentStyle = {
  height: "60%",
  width: "60%",
};

export default function ShowCard(props) {
  const [counter, setCounter] = useState(1);
  const incrementCounter = () => setCounter(counter + 1);
  let decrementCounter = () => setCounter(counter - 1);
  if (counter <= 1) {
    decrementCounter = () => setCounter(1);
  }
  return (
    <Popup
      trigger={
        <div className="cardfood">
          <Card style={{ width: "13rem" }}>
            <Card.Body>
              <Card.Img className="imagefood" variant="bottom" src={props.image} />
              <Card.Title> {props.name} </Card.Title>
              <Card.Text className="price"> {props.price}.000 Đ </Card.Text>
              <Card.Link href="">
                <BsCart2 className="iconcart" />
              </Card.Link>
            </Card.Body>
          </Card>
        </div>
      }
      modal
      contentStyle={contentStyle}
    >
      {close => (

        <div className="modal">
          <div className="header">ADD TO CART</div>
          <a className="close" onClick={close} href>&times;</a>
          <div className="content">
            {' '}
            <Container>
              <Row>
                <Col lg={4}>
                  <img className="image_Pop" src={props.image} alt="food_image" width="190" height="170"></img>
                </Col>
                <Col lg={8}>
                  <div className="contentPopup">
                    <Row className="textBig" >
                      <Col md={3}>SKU</Col>
                      <Col md={6}>Name</Col>
                      <Col className="textright" md={3}>Price</Col>
                    </Row>
                    <Row>
                      <Col md={3}>{props.SKU}</Col>
                      <Col md={6}>{props.name}</Col>
                      <Col className="textright" md={3}>{props.price}.000 Đ</Col>
                    </Row>
                    <div>{props.description}</div>
                    <div className="textBig" >
                      <Row>
                        <Col md={6}>Quantity :</Col>
                        <Col className="textright" md={6}>
                          <ButtonDecrement className="iconPop" onClickFunc={decrementCounter} />
                          <Display message={counter} />
                          <ButtonIncrement onClickFunc={incrementCounter} />
                        </Col>
                      </Row>
                      <div onClick={close}>
                        <div
                          className="totalPrice"
                          // onClick={props.context.addProductToCart.bind(this, props.food)}
                          onClick={props.context.addProductToCart.bind(this, { ...props.food, want: counter })}
                        >
                          <label style={{ textAlign: 'center', cursor: 'pointer' }}>
                            <BsCart2 className="iconTotalPrice" />{counter * props.price} .000 Đ
                          </label>
                        </div>
                      </div>
                    </div>
                  </div>
                </Col>
              </Row>
            </Container>
          </div>
        </div>
      )}
    </Popup>
  );
}