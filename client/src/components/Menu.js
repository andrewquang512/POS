import { Container, Row, Col } from 'react-grid-system';
import ShowCard from './ShowCard';
import Fooods from './Foods'

const Foods = Fooods
export default function Menu() {
    return (
        <div>
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
                            />
                        </Col>
                    ))}
                </Row>
            </Container>
        </div>
    );
  }