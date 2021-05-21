import React from 'react';
import Counter from "./components/Counter"
import IncreaseCounter from "./components/IncreaseCounter"
import DecreaseCounter from "./components/DecreaseCounter"
import IncreaseByTwoCounter from "./components/IncreaseByTwoCounter"
import { Container, Row, Col } from 'reactstrap';

function App() {
  return (

    <Container>
      <Row>
        <Col xs="4"></Col>

        <Col xs="4"><Counter /></Col>
        
        <Col xs="4"></Col>
        </Row>
      
      <Row>
        <Col xs="4"><IncreaseCounter /></Col>

        <Col xs="4"><DecreaseCounter /></Col>

        <Col xs="4"><IncreaseByTwoCounter /></Col>
      </Row>
    </Container>
  );
}

export default App;
