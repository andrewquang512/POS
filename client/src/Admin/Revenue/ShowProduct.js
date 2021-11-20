import React from "react";
import { Container, Row, Col } from 'react-grid-system';
import axios from "axios";

export default function ShowProduct(props) {
    // const [product, setproduct] = React.useState([]);
    
    // if (!product) return null;

    return (
            <Container fluid>
                <Row>
                    <Col lg={4.5}><img className="imageOrder" src={props.order.img} alt="ProductImage"></img></Col>
                    <Col lg={7.5} className="contentOrder">
                        <div className="nameOrder">{props.order.name}</div>
                        {/* <div className="nameOrder">{product.id}</div> */}
                        {/* <div>{product.description}</div> */}
                        {/* <div>SIZE {props.item.size}</div> */}
                        <div className="quantityOrder">Số lượng: { props.order.quantity}</div>
                        {props.order.price && <div className="textRight">GIÁ: {props.order.price.toLocaleString()}.000 VNĐ</div>}
                    </Col>
                </Row>
            </Container>
    )
}