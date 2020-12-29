import './Index.css';

import { Col, Container, Row } from 'react-grid-system';

const Index = () => {

  const entry = (
    <>
    <Row className="grid__row index-entry">
      <Col md={4} className="regular-caption">Death of an Icon</Col>
      <Col md={3} className="regular-caption">Champion for Liberalisation</Col>
      <Col md={3} className="regular-caption light">China’s Struggle for Democracy, Its…</Col>
      <Col md={2} className="regular-caption light">Excerpt (Book) 1989</Col>
    </Row>
    <Row className="grid__row index-entry">
      <Col md={4} className="regular-caption"></Col>
      <Col md={3} className="regular-caption">Death of Hu Yaobang</Col>
      <Col md={3} className="regular-caption light">Tiananmen Papers</Col>
      <Col md={2} className="regular-caption light">Excerpt (Book) 1989</Col>
    </Row>
    <Row className="grid__row index-entry">
      <Col md={4} className="regular-caption"></Col>
      <Col md={3} className="regular-caption">Mourning of Hu Yaobang</Col>
      <Col md={3} className="regular-caption light">Tiananmen Papers</Col>
      <Col md={2} className="regular-caption light">Excerpt (Book) 1989</Col>
    </Row>
    </>
  )
  return (
    <div className="Index">
      <Container className="grid__container">
        <Row className="grid__row directory">
          <Col md={3} className="medium-body directory__item-description">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque congue euismod lorem consequat vehicula. Integer eu bibendum nisl, sed ultrices dolor. Nullam dapibus, nunc vitae tempor scelerisque, mi elit rhoncus purus, quis euismod mauris sapien quis ipsum.
          </Col>


          <Col offset={{ md: 1 }} md={8} className="large-headline directory__list">
            <span>All</span><br />
            <span>Language</span><br />
            <span>Censorship</span><br />
            <span>Collective Memory</span><br />
            <span>Diaspora</span><br />
            <span>In-Betweeness</span><br />
            <span>National Identity</span>
          </Col>
        </Row>
        <Row className="grid__row divider thick" />
        <Row className="grid__row lower-nav-bar">
          <Col md={4} className="medium-caption">Event</Col>
          <Col md={3} className="medium-caption">Anecdotes</Col>
          <Col md={3} className="medium-caption">Source</Col>
          <Col md={2} className="medium-caption">Type</Col>
        </Row>
        <Row className="grid__row divider thin" />
        <Row className="grid__row event-header">
          <Col md={4} className="medium-body">
            <div>The June Fourth “Incident”</div>
            <div>1989</div>
          </Col>
        </Row>
        <Row className="grid__row divider thinnest" />
        {entry}
        <Row className="grid__row divider thinnest" />
        {entry}
        <Row className="grid__row divider thinnest" />
        {entry}
      </Container>
    </div>
  );
}

export default Index;