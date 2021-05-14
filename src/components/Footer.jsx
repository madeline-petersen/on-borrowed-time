import { Col, Container, Row } from 'react-grid-system';

import { ArrowDown16 } from '@carbon/icons-react';
import PropTypes from 'prop-types';
import React from 'react';
import { useHistory } from 'react-router-dom';

const Footer = ({ isClicked, setClicked, pushTo, upNext, scene, theme }) => {
  let history = useHistory();

  const handleOnClick = () => {
    setClicked(true);
    setTimeout(function() {
      // executed after 1 second
      history.push(pushTo);
    }, 1000);
  };

  return (
    <Container className="grid__container border-l border-gray-50">
      <Row className={`grid__row`}>
        <Col lg={1} md={1} />
        <Col lg={11} md={11}>
          <div
            className={`border-t border-gray-60 mt-44 ${
              isClicked ? 'fade-out' : null
            }`}
          />
        </Col>
      </Row>
      <Row className={`grid__row bg-${theme.background}`}>
        <Col lg={1} md={1} />
        <div
          to="/imagery"
          className={`contents  ${isClicked ? 'fade-out' : 'cursor-pointer'}`}
          onClick={() => handleOnClick()}
        >
          <Col lg={2} md={2} sm={2} xs={2}>
            <p
              className={`small-body pb-4 pt-4 text-${theme.text} ${
                isClicked ? 'fade-out' : null
              }`}
            >
              Up Next
            </p>
          </Col>
          <Col lg={2} md={2} sm={2} xs={2}>
            <p
              className={`small-body pb-4 pt-4 text-${theme.text} ${
                isClicked ? 'fade-out' : null
              }`}
            >
              Scene {scene}
            </p>
          </Col>
          <Col
            lg={7}
            md={7}
            sm={7}
            xs={7}
            style={{ display: 'flex', justifyContent: 'space-between' }}
          >
            <p
              className={`small-body pb-4 pt-4 text-${theme.text} ${
                isClicked ? 'fade-out' : null
              }`}
            >
              {upNext}
            </p>
            <p
              className={`pb-4 pt-4 text-${theme.text} ${
                isClicked ? 'fade-out' : null
              }`}
            >
              <ArrowDown16 />
            </p>
          </Col>
        </div>
      </Row>
    </Container>
  );
};

Footer.propTypes = {
  pushTo: PropTypes.string,
  upNext: PropTypes.string,
  scene: PropTypes.string,
  setClicked: PropTypes.func,
  isClicked: PropTypes.bool,
  theme: PropTypes.shape()
};

export default Footer;
