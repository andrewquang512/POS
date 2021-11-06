import { Container, Row, Col } from 'react-grid-system';
import ShowCard from './ShowCard';
import Fooods from './Foods'
import ShopContext from './ShopContext'
import Filter from './Header/Filter';

const Foods = Fooods
var Showall = true
export default function Menu(props) {
    return (
        <>
        <ShopContext>
            {
                context => (
                    <Container>
                        <Row>
                            {Foods.filter(Food => Food.typeId == props.typeId || Showall == props.Showall).map(Food =>(
                                <Col sm={3}>
                                    <ShowCard
                                        name={Food.name}
                                        price={Food.price}
                                        image={Food.image}
                                        SKU={Food.SKU}
                                        description={Food.description}
                                        food={Food}
                                        context={context}
                                    />
                                </Col>
                            ))}
                        </Row>
                    </Container>
                )
            }
        </ShopContext>
        </>
    );
  }