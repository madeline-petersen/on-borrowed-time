import { Col, Container, Row, Visible } from 'react-grid-system';

import PropTypes from 'prop-types';
import ReactHtmlParser from 'react-html-parser';
import './Header.scss';
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
  colourBackgroundClass,
  setBackgroundColor,
  isWhite
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

  const onClickUrl = url => {
    setNextBackground(currentYear, 'thematic-threads');
    setIsTransitioning(true);
    navigateTo(url);
  };

  return (
    <span
      className={`absolute w-full top-0 z-10 medium-caption contrast-text ${
        ['1989', '1997'].includes(currentYear)
          ? 'mix-blend-screen'
          : 'mix-blend-difference'
      }`}
    >
      <Container className="grid__container">
        <Row className={`grid__row pt-5`}>
          <Col xl={3} lg={3} md={4} sm={4} xs={4} />
          <Col xl={7} lg={5} md={6} sm={8} xs={8}>
            <p
              className={`${pageId !== 'intro' &&
                'cursor-pointer'} contrast-text ${
                pageId === 'event' ? colourBackgroundClass : ''
              }`}
              onClick={onClickYear}
            >
              {ReactHtmlParser(label)}
            </p>
            {pageId === 'thematic-threads' && (
              <div
                className={`flex items-center`}
                onClick={() => setBackgroundColor(!isWhite)}
              >
                <div className={`${isWhite ? 'white' : 'black'}`}>
                  <span className="slider round max-w-min" />
                  <span className="slider round max-w-min" />
                </div>
                <div className="pl-4">
                  {isWhite ? `1984-2003` : `2003—2020`}
                </div>
              </div>
            )}
          </Col>
          <Visible xxl xl lg>
            <Col xl={1} lg={2}>
              <p
                className={`cursor-pointer contrast-text
                ${pageId === 'event' ? colourBackgroundClass : ''}
                ${pageId === 'thematic-threads' && 'underline'}`}
                onClick={() => onClickUrl('thematic-threads')}
              >
                Thematic Threads
              </p>
            </Col>
            <Col xl={1} lg={2}>
              <p
                className={`cursor-pointer contrast-text float-right
                ${pageId === 'event' ? colourBackgroundClass : ''}
                ${pageId === 'editors-note' && 'underline'}`}
                onClick={() => onClickUrl('editors-note')}
              >
                Editor&apos;s Note
              </p>
            </Col>
          </Visible>
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
  colourBackgroundClass: PropTypes.string,
  setBackgroundColor: PropTypes.func,
  isWhite: PropTypes.bool
};

export default Header;
