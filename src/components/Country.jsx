import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { data } from './Data';
import {useParams } from 'react-router-dom';

const Country =() => {
    const { id } = useParams();
    const continentId = parseInt(id, 10);


    const countries = data.continents.find((continent) => continent.id === continentId);
    console.log(countries)

   return(
    <>
   <Container>
   <Row>
        <h2>Top contries in Asia for your next Holidays</h2>
        {countries.countries.map((country) => (
          <Col key={country.id} md={4}>
            <Card>
              <Card.Img variant="top" src={country.image} alt={country.name} />
              <Card.Body>
                <Card.Title>{country.name}</Card.Title>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
    </>
   )
}
export default Country;