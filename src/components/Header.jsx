import { Col, Container, Row } from 'react-grid-system';

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
  navigateTo,
  textClasses
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
    <span
      className={`absolute w-full top-0 z-10 medium-caption ${textClasses}`}
    >
      <Container className="grid__container">
        <Row className={`grid__row pt-5`}>
          <Col lg={3} md={4} sm={4} xs={4} />
          <Col lg={9} md={8} sm={8} xs={8}>
            <p
              className={`${pageId !== 'intro' &&
                'cursor-pointer'} ${textClasses}`}
              onClick={onClickYear}
            >
              {label}
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
                className={`medium-caption scene-animation absolute top-0 pt-2 ${textClasses} ${isTransitioning &&
                  'fade-out hidden'}`} // fade-out not applying, using hidden as a backup
              >
                Scene {romanSceneNumber}
              </p>
            )}
            <p
              key={`${currentYear}-${romanSceneNumber}-title`}
              className={`small-body ${
                pageId === 'event' ? 'title-animation' : 'cursor-pointer'
              } ${isTransitioning &&
                'fade-out hidden'} pt-2 pb-5 ${textClasses}`} // fade-out not applying, using hidden as a backup
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
  navigateTo: PropTypes.func,
  textClasses: PropTypes.string
};

export default Header;
