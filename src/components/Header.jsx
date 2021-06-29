import { Col, Container, Row } from 'react-grid-system';

import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import React from 'react';

const Header = ({
  currentYear,
  label,
  pageId,
  title,
  isTransitioning,
  romanSceneNumber,
  setNextBackground,
  setIsTransitioning,
  navigateTo
}) => {
  let textClasses =
    pageId === 'home' || pageId === 'intro'
      ? 'text-white'
      : pageId === 'event'
      ? 'contrast-text gray'
      : 'contrast-text';

  const onClickYear = () => {
    if (pageId !== 'intro') {
      setNextBackground(currentYear);
      setIsTransitioning(true);
      // setSceneIndex(null); // disappear circle
      // if (pageId !== 'home') {
      //   if (year !== currentYear) {
      //     setNumScenes(0); // collapse timeline (1s duration)
      //   }
      // }
      navigateTo(currentYear);
      // setSceneIndex('intro');
    }
  };

  const onClickScene = () => {
    if (pageId !== 'event') {
      setNextBackground('gray-30');
      setIsTransitioning(true);
      // setSceneIndex(null); // disappear circle
      navigateTo(currentYear, romanSceneNumber, 'event');
    }
  };

  return (
    <span
      className={`absolute w-full top-0 z-10 medium-caption ${textClasses}`}
    >
      <Container className="grid__container">
        <Row className={`grid__row pt-5`}>
          <Col lg={3} md={4} sm={4} xs={4} />
          <Col lg={3} md={3} sm={3} xs={3}>
            <p
              className={`${pageId !== 'intro' &&
                'cursor-pointer'} ${textClasses}`}
              onClick={onClickYear}
            >
              {label}
            </p>
          </Col>
          <Col lg={5} md={4} sm={4} xs={4} />
          <Col lg={1} md={1} sm={1} xs={1}>
            {/* <Link to="/index" className={textClasses}>
              Index
            </Link> */}
          </Col>
        </Row>
        {pageId === 'event' && (
          <Row className="grid__row shrink-animation">
            <Col lg={12} md={12} sm={12} xs={12} />
          </Row>
        )}
        <Row className={`grid__row`}>
          <Col lg={3} md={4} sm={4} xs={4} />
          <Col lg={9} md={8} sm={8} xs={8}>
            {pageId === 'event' && (
              <p
                className={`medium-caption scene-animation absolute top-0 pt-2 ${textClasses}`}
              >
                Scene {romanSceneNumber}
              </p>
            )}
            <p
              className={`small-body ${
                pageId === 'event' ? 'title-animation' : 'cursor-pointer'
              } ${pageId === 'reflection' &&
                isTransitioning &&
                'fade-out'} pt-2 pb-5 ${textClasses}`}
              onClick={onClickScene}
            >
              {title}
            </p>
          </Col>
        </Row>
      </Container>
    </span>
  );
};

Header.defaultProps = {
  label: ''
};

Header.propTypes = {
  currentYear: PropTypes.string,
  label: PropTypes.string,
  pageId: PropTypes.string,
  title: PropTypes.string,
  isTransitioning: PropTypes.bool,
  romanSceneNumber: PropTypes.string,
  setNextBackground: PropTypes.func,
  setIsTransitioning: PropTypes.func,
  navigateTo: PropTypes.func
};

export default Header;
