import './GridHelper.css';

import { Col, Container, Row } from 'react-grid-system';

const GridHelper = () => {
  return (
    <Container debug className="container-1">
        <Row debug>
            <Col md={1} style={{height: '100vh'}} debug/>
            <Col md={1} style={{height: '100vh'}} debug/>
            <Col md={1} style={{height: '100vh'}} debug/>
            <Col md={1} style={{height: '100vh'}} debug/>
            <Col md={1} style={{height: '100vh'}} debug/>
            <Col md={1} style={{height: '100vh'}} debug/>
            <Col md={1} style={{height: '100vh'}} debug/>
            <Col md={1} style={{height: '100vh'}} debug/>
            <Col md={1} style={{height: '100vh'}} debug/>
            <Col md={1} style={{height: '100vh'}} debug/>
            <Col md={1} style={{height: '100vh'}} debug/>
            <Col md={1} style={{height: '100vh'}} debug/>
        </Row>
    </Container>
  );
}

export default GridHelper;