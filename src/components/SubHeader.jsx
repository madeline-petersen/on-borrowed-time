import { Col, Row } from 'react-grid-system';

import PropTypes from 'prop-types';
import React from 'react';

const SubHeader = ({
  romanSceneNumber,
  title,
  animate,
  fadeOut,
  isClicked,
  pageId
}) => {
  let textClasses =
    pageId === 'home' || pageId === 'intro'
      ? 'text-white'
      : pageId === 'event'
      ? 'contrast-text gray'
      : 'contrast-text';

  return (
    <span className={`${textClasses}`}>
      <Row className={`grid__row subheader`}>
        <Col lg={3} md={4} sm={4} xs={4} />
        <Col lg={9} md={8} sm={8} xs={8}>
          {animate && (
            <p
              className={`medium-caption ${animate &&
                'scene-animation'} absolute top-0 pt-2 ${textClasses}`}
            >
              Scene {romanSceneNumber}
            </p>
          )}
          <p
            className={`small-body ${animate && 'title-animation'} ${fadeOut &&
              isClicked &&
              'fade-out'} pt-2 pb-5 ${textClasses}`}
          >
            {title}
          </p>
        </Col>
      </Row>
    </span>
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
  fadeOut: PropTypes.bool,
  pageId: PropTypes.string
};

export default SubHeader;
