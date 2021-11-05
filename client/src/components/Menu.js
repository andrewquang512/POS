import { Container, Row, Col } from 'react-grid-system';
import ShowCard from './ShowCard';
import Fooods from './Foods'
import ShopContext from './ShopContext'

const Foods = Fooods
export default function Menu() {
    return (
        <ShopContext>
            {
                context => (
                    <Container>
                        <Row>
                            {Foods.map(Food =>(
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
    );
  }