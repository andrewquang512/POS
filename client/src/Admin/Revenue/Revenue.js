import React, { useState } from 'react';
import './index.css';
import { Container, Row, Col } from 'react-grid-system';
// import Popup from "reactjs-popup";

import DetailRevenue from "./DetailRevenue";
import axios from "axios";
import { FaSearch } from "react-icons/fa";
import { BiRestaurant } from "react-icons/bi";
import useMountTransition from "./useMountTransition";

export default function Revenue() {
    // const [Staffs, setStaff] = React.useState(null);
    const renderSwitch = (search, current) => {
        switch(search) {
            case 2:
                return result.filter(data => data.usingMethod.includes(current)).map(order => (
                    <DetailRevenue order={order}/>
                ))
            case 3:
                return result.filter(data => data.totalPrice > (current)).map(order => (
                    <DetailRevenue order={order}/>
                ))
            default:
                return result.filter(data => data.userName.includes(current)).map(order => (
                    <DetailRevenue order={order}/>
                ))
          }
    }
    const choices = [
        {
            id: 1,
            name: "Người gọi món"
        },
        {
            id: 2,
            name: "Hình thức"
        },
        {
            id: 3,
            name: "Đơn giá"
        }
    ]

    const [Orders, setOrder] = React.useState([]);

    const [show, setshow] = useState(false);
    const [current, setCurrent] = React.useState("");
    const [checked, setChecked] = React.useState(-1);
    const hasTransitionedIn = useMountTransition(show, 1000);
    React.useEffect(() => {
        axios.get("http://localhost:5000/revenue/order").then((response) => {
            setOrder(response.data);
            // console.log(response.data);
        });
    }, []);
    if (!Orders) return null;
    let result = [...Orders];
    // if(result[1]) console.log("arayy",result[1].id);
    return (
        <>
        <div className="panel-content">
            <Container className="grid" fluid>
              <Row>
                <Col lg={9}>
                  {" "}
                  <h2><BiRestaurant className="iconManager"/>   Quản lí đơn hàng </h2>
                </Col>
                <Col lg={3}>
                  {" "}
                  {/* <SearchAccount /> */}
                </Col>
              </Row>
            </Container>
          </div>

        {(hasTransitionedIn || show) && <div className="tableChoice">
            {choices.map(choice => (
                <i className={`choice ${hasTransitionedIn && "in"} ${
                    show && "visible"}`} key={choice.id}>
                    <input 
                        type="radio" 
                        onChange={() => setChecked(choice.id)}
                        checked={choice.id === checked}
                    />
                    {choice.name}                        
                </i>
            ))}
        </div>}
        <form className="searchAccount" action="/" method="get">
            {(hasTransitionedIn || show) && <input
                className={`formSearch ${hasTransitionedIn && "in"} ${show && "visible"}`}
                value={current}
                type="text"
                id="header-search"
                onChange={e => setCurrent(e.target.value)}
                name="seachAccount" 
                />}
            {<div className="searchButton" onClick={() => setshow(!show)}><FaSearch size={25} className="searchIcon" /></div>}
            {/* {show && <button className="searchButton" onClick={() => setshow(true)}><FaSearch size={25} className="searchIcon" /></button>} */}
        </form>
        <div className="tabaccount">
                <div>
                    <Container className="showlist" fluid>
                        <Row>
                            <Col sm={1.9}> <h2 className="columlist">Người gọi món</h2></Col>
                            <Col sm={4.2}> <h2 className="columlist">Trạng thái</h2></Col>
                            <Col sm={4.4}> <h2 className="columlist">Hình thức</h2></Col>
                            <Col sm={1.3}> <h2 className="columlist">Đơn giá</h2></Col>
                        </Row>
                    </Container>
                    <div className="contentlist_Revenue">
                        {renderSwitch(checked, current)}
                    </div>
                    <div className="Total">Tổng doanh thu: {
                        Orders.reduce((sum, i) => (
                            sum += i.isPaid ? i.totalPrice : 0
                        ), 0).toLocaleString()
                    }.000 VNĐ</div> 
                </div>
        </div>
        </>
    )
}