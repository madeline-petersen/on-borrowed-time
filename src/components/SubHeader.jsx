import { Col, Container, Row } from 'react-grid-system';

import PropTypes from 'prop-types';
import React from 'react';

const SubHeader = ({ theme, romanSceneNumber, title }) => {
  return (
    <Row className={`grid__row`}>
      <Col lg={3} md={4} />
      <Col lg={9} md={8} sm={12} xs={12}>
        <p
          className={`medium-caption scene-animation absolute top-0 pt-2 text-${theme.text}`}
        >
          Scene {romanSceneNumber}
        </p>
        <p className={`small-body title-animation pt-2 pb-5 contrast-text`}>
          {title}
        </p>
      </Col>
    </Row>
  );
};

SubHeader.defaultProps = {
  theme: { border: 'gray-60' }
};

SubHeader.propTypes = {
  theme: PropTypes.shape(),
  romanSceneNumber: PropTypes.string,
  title: PropTypes.string
};

export default SubHeader;
