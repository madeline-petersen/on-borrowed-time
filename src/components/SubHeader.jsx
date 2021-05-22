import { Col, Row } from 'react-grid-system';

import PropTypes from 'prop-types';
import React from 'react';

const SubHeader = ({
  romanSceneNumber,
  title,
  animate,
  fadeOut,
  isClicked
}) => {
  return (
    <Row className={`grid__row`}>
      <Col lg={3} md={4} />
      <Col lg={9} md={8} sm={12} xs={12}>
        {animate && (
          <p
            className={`medium-caption ${animate &&
              'scene-animation'} absolute top-0 pt-2 contrast-text`}
          >
            Scene {romanSceneNumber}
          </p>
        )}
        <p
          className={`small-body ${animate && 'title-animation'} ${fadeOut &&
            isClicked &&
            'fade-out'} pt-2 pb-5 contrast-text`}
        >
          {title}
        </p>
      </Col>
    </Row>
  );
};

SubHeader.defaultProps = {
  animate: false
};

SubHeader.propTypes = {
  romanSceneNumber: PropTypes.string,
  title: PropTypes.string,
  animate: PropTypes.bool,
  isClicked: PropTypes.bool,
  fadeOut: PropTypes.bool
};

export default SubHeader;
