import { Col, Container, Row } from 'react-grid-system';

import PropTypes from 'prop-types';
import React from 'react';

const SubHeader = ({ isClicked, theme, romanSceneNumber, title }) => {
  return (
    <Container
      className={`grid__container sticky top-8 border-l border-${theme.border}`}
    >
      {/* solid background */}
      <Row
        className={`grid__row bg-${theme.background} ${
          isClicked ? 'fade-out' : null
        }`}
      >
        <Col lg={3} md={4} />
        <Col lg={9} md={8} sm={12} xs={12}>
          <p
            className={`medium-caption scene-animation pt-2 absolute top-0 text-${theme.text}`}
          >
            Scene {romanSceneNumber}
          </p>
          <p
            className={`small-body title-animation pt-2 pb-5 text-${theme.text}`}
          >
            {title}
          </p>
        </Col>
      </Row>
    </Container>
  );
};

SubHeader.defaultProps = {
  theme: { background: 'gray-30', text: 'black', border: 'gray-60' }
};

SubHeader.propTypes = {
  romanSceneNumber: PropTypes.string,
  title: PropTypes.string,
  isClicked: PropTypes.bool,
  theme: PropTypes.shape()
};

export default SubHeader;
