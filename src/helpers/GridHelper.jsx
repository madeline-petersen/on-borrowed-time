import './GridHelper.css';

import { Col, Container, Row } from 'react-grid-system';

// Packages
import React from 'react';

class GridHelper extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isVisible: false
    };
    this.keyDownHandler = this.keyDownHandler.bind(this);
  }

  keyDownHandler(e) {
    if (e.keyCode === 27) {
      this.setState(oldState => {
        return { isVisible: !oldState.isVisible };
      });
    }
  }

  componentDidMount() {
    document.addEventListener('keydown', this.keyDownHandler, false);
  }
  componentWillUnmount() {
    document.removeEventListener('keydown', this.keyDownHandler, false);
  }

  render() {
    return (
      <div
        className={`grid-helper ${this.state.isVisible ? ' isVisible' : ''}`}
      >
        <Container className="grid__container">
          <Row className="grid__row">
            <Col md={1} className="grid-helper__col" />
            <Col md={1} className="grid-helper__col" />
            <Col md={1} className="grid-helper__col" />
            <Col md={1} className="grid-helper__col" />
            <Col md={1} className="grid-helper__col" />
            <Col md={1} className="grid-helper__col" />
            <Col md={1} className="grid-helper__col" />
            <Col md={1} className="grid-helper__col" />
            <Col md={1} className="grid-helper__col" />
            <Col md={1} className="grid-helper__col" />
            <Col md={1} className="grid-helper__col" />
            <Col md={1} className="grid-helper__col" />
          </Row>
        </Container>
      </div>
    );
  }
}

export default GridHelper;
