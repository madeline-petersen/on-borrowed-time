import { Col, Container, Row } from 'react-grid-system';

import PropTypes from 'prop-types';
import React from 'react';
import ReactHtmlParser from 'react-html-parser';

const Header = ({
  currentYear,
  label,
  pageId,
  title,
  isTransitioning,
  romanSceneNumber,
  setNextBackground,
  setIsTransitioning,
  navigateTo,
  colourBackgroundClass
}) => {
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
      setNextBackground(currentYear, 'event');
      setIsTransitioning(true);
      // setSceneIndex(null); // disappear circle
      navigateTo(currentYear, romanSceneNumber, 'event');
    }
  };

  return (
    <span className={`absolute w-full top-0 z-10 medium-caption contrast-text`}>
      <Container className="grid__container">
        <Row className={`grid__row pt-5`}>
          <Col lg={3} md={4} sm={4} xs={4} />
          <Col lg={9} md={8} sm={8} xs={8}>
            <p
              className={`${pageId !== 'intro' &&
                'cursor-pointer'} contrast-text ${
                pageId === 'event' ? colourBackgroundClass : ''
              }`}
              onClick={onClickYear}
            >
              {ReactHtmlParser(label)}
            </p>
          </Col>
        </Row>
        {pageId === 'event' && (
          <Row
            key={`${currentYear}-${romanSceneNumber}-spacer`}
            className="grid__row shrink-animation"
          >
            <Col lg={12} md={12} sm={12} xs={12} />
          </Row>
        )}
        <Row className={`grid__row`}>
          <Col lg={3} md={4} sm={4} xs={4} />
          <Col lg={9} md={8} sm={8} xs={8}>
            {pageId === 'event' && (
              <p
                key={`${currentYear}-${romanSceneNumber}-scene`}
                className={`medium-caption scene-animation absolute top-0 pt-2 contrast-text ${
                  pageId === 'event' ? colourBackgroundClass : ''
                } ${isTransitioning && 'fade-out'}`}
              >
                Scene {romanSceneNumber}
              </p>
            )}
            <p
              key={`${currentYear}-${romanSceneNumber}-title`}
              className={`medium-caption ${
                pageId === 'event' ? 'title-animation' : 'cursor-pointer'
              } ${
                isTransitioning
                  ? pageId === 'reflection'
                    ? 'fade-out'
                    : ''
                  : ''
              } pt-2 pb-5 contrast-text ${
                pageId === 'event' ? colourBackgroundClass : ''
              }`}
              onClick={onClickScene}
            >
              {ReactHtmlParser(title)}
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
  navigateTo: PropTypes.func,
  colourBackgroundClass: PropTypes.string
};

export default Header;
