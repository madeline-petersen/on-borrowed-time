import './Index.css';

import { Col, Container, Row } from 'react-grid-system';

const Index = () => {
  return (
    <div className={`Index index-helper isVisible`}>
    <Container className="grid-container">
    <Row className="bx--row">
        <Col offset={{md: 4}} md={8}>All<br />Language<br />Censorship<br />Collective Memory<br />Diaspora<br />In-Betweeness<br />National Identity</Col>
      </Row>
    </Container>
  </div>);
}

export default Index;