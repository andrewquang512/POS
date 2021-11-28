import { Container, Row, Col } from "react-grid-system";
import ShowCard from "./ShowCard";
import Fooods from "./Foods";
import ShopContext from "./ShopContext";
import Filter from "./Header/Filter";

import React from "react";
const Foods = Fooods;
export default function Menu(props) {
  return (
    <>
      <ShopContext>
        {(context) => (
          <Container>
            <Row>
              {/* {Foods.filter(Food => Food.typeId == props.typeId || props.typeId == 0).map((Food, index) =>( */}
              {props.Foods.filter(
                (Food) => Food.catelory == props.type_id || props.typeId == 0).map((Food, index) => (
                  <Col sm={3}>
                    <ShowCard
                      name={Food.name}
                      price={Food.price}
                      image={Food.img}
                      SKU={index + 1}
                      description={Food.description}
                      food={Food}
                      context={context}
                    />
                  </Col>
                ))}
            </Row>
          </Container>
        )}
      </ShopContext>
    </>
  );
}
