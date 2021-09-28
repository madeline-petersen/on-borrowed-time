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

  // current page id (intro, event, artifacts, reflection)
  pageId,

  // colours
  textColourClass,
  borderColourClass
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
    pageId === 'event'
      ? 'text-black text-opacity-70'
      : 'text-white text-opacity-90';
  let borderClasses =
    pageId === 'event'
      ? 'border-black border-opacity-20'
      : 'border-white border-opacity-20';

  if (textColourClass) {
    textClasses = textColourClass;
  }
  if (borderColourClass) {
    borderClasses = borderColourClass;
  }

  return (
    <>
      <Row className={`grid__row`}>
        <Col lg={1} />
        <Col lg={11} md={12}>
          <p className={`border-t ${borderClasses} mt-44 fade-in-element`} />
        </Col>
      </Row>
      <Row
        className={`grid__row ${
          isClicked ? 'cursor-default' : 'cursor-pointer'
        }`}
        onClick={() => handleOnClick()}
      >
        <Col lg={1} className="cursor-default" />
        <Col lg={2} md={3} sm={3} xs={3}>
          <p className={`small-body pb-4 pt-4 ${textClasses} fade-in-element`}>
            Up Next
          </p>
        </Col>
        <Col lg={2} md={2} sm={2} xs={2}>
          <p className={`small-body pb-4 pt-4 ${textClasses} fade-in-element`}>
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
          <p className={`small-body pb-4 pt-4 ${textClasses} fade-in-element`}>
            {/* next page, next scene, next year */}
            {next.title}
          </p>
          <p className={`pb-4 pt-4 ${textClasses} fade-in-element`}>
            <ArrowDown16 />
          </p>
        </Col>
      </Row>
    </>
  );
};

Footer.defaultProps = {};

Footer.propTypes = {
  isClicked: PropTypes.bool,
  setClicked: PropTypes.func,
  setIsTransitioning: PropTypes.func,
  changingParam: PropTypes.string,
  nextParams: PropTypes.shape(),
  navigateTo: PropTypes.func,
  next: PropTypes.shape(),
  pageId: PropTypes.string,
  textColourClass: PropTypes.string,
  borderColourClass: PropTypes.string
};

export default Footer;
