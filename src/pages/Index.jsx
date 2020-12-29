import './Index.css';

import { Col, Container, Row } from 'react-grid-system';

const Index = () => {

  const entry = (
    <>
    <Row className="bx--row index-entry">
      <Col md={4} className="regular-caption">Death of an Icon</Col>
      <Col md={3} className="regular-caption">Champion for Liberalisation</Col>
      <Col md={3} className="regular-caption light">China’s Struggle for Democracy, Its…</Col>
      <Col md={2} className="regular-caption light">Excerpt (Book) 1989</Col>
    </Row>
    <Row className="bx--row index-entry">
      <Col md={4} className="regular-caption"></Col>
      <Col md={3} className="regular-caption">Death of Hu Yaobang</Col>
      <Col md={3} className="regular-caption light">Tiananmen Papers</Col>
      <Col md={2} className="regular-caption light">Excerpt (Book) 1989</Col>
    </Row>
    <Row className="bx--row index-entry">
      <Col md={4} className="regular-caption"></Col>
      <Col md={3} className="regular-caption">Mourning of Hu Yaobang</Col>
      <Col md={3} className="regular-caption light">Tiananmen Papers</Col>
      <Col md={2} className="regular-caption light">Excerpt (Book) 1989</Col>
    </Row>
    </>
  )
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
        <Col md={3} className="medium-caption">Source</Col>
        <Col md={2} className="medium-caption">Type</Col>
      </Row>
      <Row className="bx--row divider thin" />
      <Row className="bx--row event-header">
        <Col md={4} className="medium-body">The June Fourth “Incident”<br />1989</Col>
      </Row>
      <Row className="bx--row divider thinnest" />
      {entry}
      <Row className="bx--row divider thinnest" />
      {entry}
      <Row className="bx--row divider thinnest" />
      {entry}
    </Container>
  </div>);
}

export default Index;