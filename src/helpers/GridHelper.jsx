import './GridHelper.css';

// Packages
import React from 'react';
import { Col, Container, Row, Visible } from 'react-grid-system';

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
          <p className="text-white">
            <span>Your current screen class is </span>
            <Visible xs>
              <strong>xs</strong>
            </Visible>
            <Visible sm>
              <strong>sm</strong>
            </Visible>
            <Visible md>
              <strong>md</strong>
            </Visible>
            <Visible lg>
              <strong>lg</strong>
            </Visible>
            <Visible xl>
              <strong>xl</strong>
            </Visible>
            <Visible xxl>
              <strong>xxl</strong>
            </Visible>
            <span>.</span>
          </p>
          <Row className="grid__row">
            <Col
              xxl={1}
              xl={1}
              lg={1}
              md={1}
              sm={1}
              xs={1}
              className="grid-helper__col"
            />
            <Col
              xxl={1}
              xl={1}
              lg={1}
              md={1}
              sm={1}
              xs={1}
              className="grid-helper__col"
            />
            <Col
              xxl={1}
              xl={1}
              lg={1}
              md={1}
              sm={1}
              xs={1}
              className="grid-helper__col"
            />
            <Col
              xxl={1}
              xl={1}
              lg={1}
              md={1}
              sm={1}
              xs={1}
              className="grid-helper__col"
            />
            <Col
              xxl={1}
              xl={1}
              lg={1}
              md={1}
              sm={1}
              xs={1}
              className="grid-helper__col"
            />
            <Col
              xxl={1}
              xl={1}
              lg={1}
              md={1}
              sm={1}
              xs={1}
              className="grid-helper__col"
            />
            <Col
              xxl={1}
              xl={1}
              lg={1}
              md={1}
              sm={1}
              xs={1}
              className="grid-helper__col"
            />
            <Col
              xxl={1}
              xl={1}
              lg={1}
              md={1}
              sm={1}
              xs={1}
              className="grid-helper__col"
            />
            <Col
              xxl={1}
              xl={1}
              lg={1}
              md={1}
              sm={1}
              xs={1}
              className="grid-helper__col"
            />
            <Col
              xxl={1}
              xl={1}
              lg={1}
              md={1}
              sm={1}
              xs={1}
              className="grid-helper__col"
            />
            <Col
              xxl={1}
              xl={1}
              lg={1}
              md={1}
              sm={1}
              xs={1}
              className="grid-helper__col"
            />
            <Col
              xxl={1}
              xl={1}
              lg={1}
              md={1}
              sm={1}
              xs={1}
              className="grid-helper__col"
            />
          </Row>
        </Container>
      </div>
    );
  }
}

export default GridHelper;
