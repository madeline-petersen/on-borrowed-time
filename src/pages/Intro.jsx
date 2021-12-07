import './Intro.scss';

import { Col, Container, Row } from 'react-grid-system';
import React, { useCallback, useEffect, useRef, useState } from 'react';

import Footer from '../components/Footer';
import PropTypes from 'prop-types';
import ReactHtmlParser from 'react-html-parser';
import { useOverscroll } from '../hooks/useOverscroll';

const Intro = ({
  year,
  navigateTo,
  backgroundClass,
  nextBackgroundClass,
  isTransitioning,
  setIsTransitioning,
  setNextBackground,
  nextParams
}) => {
  const [isClicked, setClicked] = useState(false);

  useEffect(() => {
    setClicked(isTransitioning);
  }, [isTransitioning]);

  useEffect(() => {
    setIsTransitioning(false);
    setNextBackground(nextParams.year, nextParams.page);
  }, [year]);

  const onClickYear = () => {
    setClicked(true);
    setIsTransitioning(true);
    navigateTo(
      nextParams.year,
      nextParams.scene, // should be romanSceneNumber
      nextParams.page
    );
  };

  const onScrollEnd = useCallback(() => {
    onClickYear();
  }, []);
  const scrollRef = useRef();
  useOverscroll(scrollRef, onScrollEnd, 3);

  return (
    <>
      {/* Backgrounds for page transition */}
      <div className={`absolute top-0 w-full`}>
        <div
          // fades to black before transitioning
          className={`h-screen bg-black w-full ${
            isClicked ? 'screen-shrink' : ''
          }`}
        />
        {isTransitioning && (
          <div
            className={`h-screen ${nextBackgroundClass} bg-center bg-no-repeat bg-cover w-full`}
          />
        )}
      </div>

      <div
        className={`intro cursor-pointer ${
          isClicked ? 'fade-out' : 'foreground-fade-in'
        }`}
        ref={scrollRef}
        onClick={() => onClickYear(year.id)}
      >
        <div className={`hero-image ${backgroundClass}`}>
          <div
            key={`gradient-transition-${year.id}`}
            className="gradient-transition"
          >
            <div className="small-headline text-white absolute w-full blurb-content">
              <Container className="grid__container">
                <Row className="grid__row">
                  <Col lg={5} />
                  <Col lg={7}>
                    <p className="fade-first">{ReactHtmlParser(year.blurb)}</p>
                  </Col>
                </Row>
              </Container>
            </div>
            <div className="absolute w-full bottom-0">
              <Container className="grid__container">
                <Footer
                  pageId="intro"
                  nextParams={nextParams}
                  next={year.scenes[0]}
                  changingParam="scene"
                  setClicked={setClicked}
                  setIsTransitioning={setIsTransitioning}
                  navigateTo={navigateTo}
                />
              </Container>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

Intro.propTypes = {
  year: PropTypes.shape(),
  navigateTo: PropTypes.func,
  backgroundClass: PropTypes.string,
  nextBackgroundClass: PropTypes.string,
  isTransitioning: PropTypes.bool,
  setIsTransitioning: PropTypes.func,
  setNextBackground: PropTypes.func,
  nextParams: PropTypes.shape()
};

export default Intro;
