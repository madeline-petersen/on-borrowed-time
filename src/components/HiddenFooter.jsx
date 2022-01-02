import { Col, Container, Row } from 'react-grid-system';

import { ArrowRight16, ArrowDown16 } from '@carbon/icons-react';
import PropTypes from 'prop-types';
import React from 'react';
import ReactHtmlParser from 'react-html-parser';
import './HiddenFooter.scss';

const HiddenFooter = ({
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

  // show
  isShown
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

  if (textColourClass) {
    textClasses = textColourClass;
  }

  return (
    <div className={`hidden-footer__container ${isShown ? 'show' : 'hide'}`}>
      <Container className="grid__container">
        <Row
          className={`grid__row clickable-area ${
            isClicked ? 'cursor-default fade-out' : 'cursor-pointer'
          }`}
          onClick={() => handleOnClick()}
        >
          <Col lg={1} className="cursor-default" />
          <Col lg={2} md={3} sm={3} xs={3}>
            <p
              className={`small-body pb-4 pt-4 ${textClasses} fade-in-element`}
            >
              Up Next
            </p>
          </Col>
          <Col lg={2} md={2} sm={2} xs={2}>
            <p
              className={`small-body pb-4 pt-4 ${textClasses} fade-in-element`}
            >
              {/* current scene, next scene, next year */}
              {changingParam === 'year'
                ? nextParams.year
                : ReactHtmlParser(`Scene&nbsp;${nextParams.scene}`)}
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
              className={`small-body pb-4 pt-4 ${textClasses} fade-in-element`}
            >
              {/* next page, next scene, next year */}
              {ReactHtmlParser(next.title)}
            </p>
            <p className={`pb-4 pt-4 ${textClasses} fade-in-element`}>
              {pageId === 'intro' ? <ArrowRight16 /> : <ArrowDown16 />}
            </p>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

HiddenFooter.defaultProps = {};

HiddenFooter.propTypes = {
  isClicked: PropTypes.bool,
  setClicked: PropTypes.func,
  setIsTransitioning: PropTypes.func,
  changingParam: PropTypes.string,
  nextParams: PropTypes.shape(),
  navigateTo: PropTypes.func,
  next: PropTypes.shape(),
  pageId: PropTypes.string,
  textColourClass: PropTypes.string,
  isShown: PropTypes.bool
};

export default HiddenFooter;
