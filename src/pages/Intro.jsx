import './Intro.scss';

import { Col, Container, Row } from 'react-grid-system';
import React, { useEffect, useState } from 'react';

import Footer from '../components/Footer';
import PropTypes from 'prop-types';
import ReactHtmlParser from 'react-html-parser';

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

  return (
    <>
      {/* Backgrounds for page transition */}
      <div className={`absolute top-0 w-full`}>
        <div
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
        key={`${year.id}-hero-image`}
        className={`intro hero-image ${backgroundClass} ${
          isClicked ? 'fade-out' : 'foreground-fade-in'
        }`}
      >
        <div
          key={`${year.id}-gradient-transition`}
          className={`gradient-transition`}
        >
          <div className="small-headline text-white absolute w-full scene-name">
            <Container className="grid__container">
              <Row className="grid__row">
                <Col lg={5} />
                <Col lg={7}>
                  <p>{ReactHtmlParser(year.blurb)}</p>
                </Col>
              </Row>
            </Container>
          </div>
          <div className="absolute w-full bottom-0">
            <Container className="grid__container">
              <Footer
                pageId="intro"
                nextParams={{ year: year.id, scene: 'I', page: 'event' }}
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
