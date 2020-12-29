import './Index.css';

import { Col, Container, Row } from 'react-grid-system';

const Index = () => {
  return (
    <div className="Index index-helper">
    <Container className="grid-container">
      <Row className="bx--row index-title-block">
        <Col offset={{md: 4}} md={8} className="large-headline">All<br />Language<br />Censorship<br />Collective Memory<br />Diaspora<br />In-Betweeness<br />National Identity</Col>
      </Row>
      <Row className="bx--row divider thick" />
      <Row className="bx--row lower-heading">
        <Col md={4} className="medium-caption">Event</Col>
        <Col md={3} className="medium-caption">Anecdotes</Col>
        <Col md={4} className="medium-caption">Source</Col>
        <Col md={1} className="medium-caption">Type</Col>
      </Row>
      <Row className="bx--row divider thin" />
    </Container>
  </div>);
}

export default Index;