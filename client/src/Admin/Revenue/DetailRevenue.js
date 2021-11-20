import React from "react";
import { Container, Row, Col } from 'react-grid-system';
import Popup from "reactjs-popup";
import { FiXCircle } from 'react-icons/fi';
import { FcOk } from "react-icons/fc";
import { AiOutlineCloseCircle } from "react-icons/ai";
import DetailOrder from './DetailOrder';

import axios from "axios";

const contentStyle = {
    height: "80%",
    width: "85%",
  };
export default function DetailRevenue(props) {
    const ConfirmOrder = (order => {   
        const getData = async (order) => {  
            console.log(order._id)
            await axios.post("http://localhost:5000/revenue/confirm", {idd: order._id}).then((response) => {
                // setproduct(response.data)
                console.log(response.data);
            });
        }  
        getData(order);
    })
    const refreshPage = () => {
        window.location.reload(false);
    }
    
    return (

            <Popup
                trigger={
                    <Container fluid>
                    <Row className="elementlist">
                        <Col sm={2}> <h2 className="element">{props.order.userName}</h2></Col>
                        <Col sm={4}> <h2 className="element">
                            {props.order.isPaid ? <FcOk  className="iconRevenue" size={20} color="green"/> : <AiOutlineCloseCircle size={20} color="red"/>}</h2>
                        </Col>
                        <Col sm={4.8}> <h2 className="element">{props.order.usingMethod}</h2></Col>
                        <Col sm={1.2}> <h2 className="oderprice">{props.order.totalPrice.toLocaleString()}.000 VNĐ</h2></Col>
                    </Row>
                    </Container>
                }
                modal
                contentStyle = {contentStyle}
                >
                {close => (
                    <div className="modal">
                        <div className="header">
                            Tài khoản: {props.order.userName }
                        </div>
                        <a className="close" onClick={close} href><FiXCircle size={20}/></a>
                        <div className="content">
                            <div className="OrderPopUp">
                                <i onClick={refreshPage}>
                                    <i onClick={close}>
                                        {!props.order.isPaid && <button 
                                            className="buttonConfirm" 
                                            onClick={() => ConfirmOrder(props.order)}
                                            >
                                            Xác Nhận
                                        </button>}
                                    </i>
                                </i>
                                <DetailOrder order={props.order}/>
                            </div>
                        </div>
                    </div>
                )}
            </Popup> 
    )
}


