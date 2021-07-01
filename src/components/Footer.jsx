import { Col, Row } from 'react-grid-system';

import { ArrowDown16 } from '@carbon/icons-react';
import PropTypes from 'prop-types';
import React from 'react';

const Footer = ({
  // useState variables, used in page component to transition page
  isClicked,
  setClicked,
  setIsTransitioning,

  // used to determine navigation and labels
  nextParams,
  changingParam,
  navigateTo,

  // object that contains title of next page
  next,

  // border, background, text
  theme,

  // current page id (intro, event, artifacts, reflection)
  pageId
}) => {
  const handleOnClick = () => {
    setClicked(true);
    setIsTransitioning(true);
    if (changingParam === 'year') {
      // if year end
      // inter-year
      navigateTo(nextParams.year);
    } else {
      // else
      // intra-year
      navigateTo(
        nextParams.year,
        nextParams.scene, // should be romanSceneNumber
        nextParams.page
      );
    }
  };

  let textClasses =
    pageId === 'home' || pageId === 'intro'
      ? 'text-white'
      : pageId === 'event'
      ? 'contrast-text gray'
      : 'contrast-text';

  let borderClasses = {
    'gray-60': 'border-gray-60',
    'gray-80': 'border-gray-80'
  };

  let backgroundClasses = {
    black: 'bg-black',
    'gray-30': 'bg-gray-30'
  };

  return (
    <>
      <Row className={`grid__row`}>
        <Col lg={1} />
        <Col lg={11} md={12}>
          <p className={`border-t ${borderClasses[theme.border]} mt-44`} />
        </Col>
      </Row>
      <Row
        className={`grid__row ${backgroundClasses[theme.background]} ${
          isClicked ? 'cursor-default' : 'cursor-pointer'
        }`}
        onClick={() => handleOnClick()}
      >
        <Col lg={1} className="cursor-default" />
        <Col lg={2} md={3} sm={3} xs={3}>
          <p className={`small-body pb-4 pt-4 ${textClasses}`}>Up Next</p>
        </Col>
        <Col lg={2} md={2} sm={2} xs={2}>
          <p className={`small-body pb-4 pt-4 ${textClasses}`}>
            {/* current scene, next scene, next year */}
            {changingParam === 'year'
              ? nextParams.year
              : `Scene ${nextParams.scene}`}
          </p>
        </Col>
        <Col
          lg={7}
          md={7}
          sm={7}
          xs={7}
          style={{ display: 'flex', justifyContent: 'space-between' }}
        >
          <p className={`small-body pb-4 pt-4 ${textClasses}`}>
            {/* next page, next scene, next year */}
            {next.title}
          </p>
          <p className={`pb-4 pt-4 ${textClasses}`}>
            <ArrowDown16 />
          </p>
        </Col>
      </Row>
    </>
  );
};

Footer.defaultProps = {
  theme: { background: 'gray-30', text: 'black', border: 'gray-60' }
};

Footer.propTypes = {
  isClicked: PropTypes.bool,
  setClicked: PropTypes.func,
  setIsTransitioning: PropTypes.func,
  changingParam: PropTypes.string,
  nextParams: PropTypes.shape(),
  navigateTo: PropTypes.func,
  next: PropTypes.shape(),
  theme: PropTypes.shape(),
  pageId: PropTypes.string
};

export default Footer;
