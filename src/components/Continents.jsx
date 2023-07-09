import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { data } from './Data';
import { useNavigate } from 'react-router-dom';

const Continents =() => {
    const navigate = useNavigate();
    
   return(
    <>
   <Container>
      <Row>
        <h1>Welcome To Trip Advosor</h1>
        <h4>Top Continents for your next holiday</h4>
        {data.continents.map((continent) => (
          <Col key={continent.id} md={4}>
            <Card onClick = {() => navigate(`/country/${continent.id}`)}>
              <Card.Img variant="top" src={continent.image} alt={continent.name} />
              <Card.Body>
                <Card.Title>{continent.name}</Card.Title>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
    </>
   )
}
export default Continents;