import './Index.css';

import { Col, Container, Row } from 'react-grid-system';

const Index = () => {
  return (
    <Container className="container-1">
        <Row className="col">
            <Col md={4} className="col"></Col>
            <Col md={8} className="col">All<br />Language<br />Censorship<br />Collective Memory<br />Diaspora<br />In-Betweeness<br />National Identity</Col>
        </Row>
    </Container>
  );
}

export default Index;