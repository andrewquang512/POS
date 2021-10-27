
import Card from "react-bootstrap/Card";
import React from "react";
import { BsCart2 } from 'react-icons/bs';


export default function ShowCard(props) {
  return (
    <div className="cardfood">
      <Card style={{ width: "13rem"}}>
        <Card.Body>
          <Card.Img className="imagefood" variant="bottom" src={props.image} />
          <Card.Title> {props.name} </Card.Title>
          <Card.Text className="price"> {props.price} </Card.Text>
          <Card.Link href="">
            <BsCart2 className="iconcart"/>
          </Card.Link>
        </Card.Body>
      </Card>
    </div>
  );
}