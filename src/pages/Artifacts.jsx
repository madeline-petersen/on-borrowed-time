import { Col, Container, Row } from 'react-grid-system';
import React, { useEffect, useState } from 'react';

import Footer from '../components/Footer';
import HeaderSpacer from '../components/HeaderSpacer';
import PropTypes from 'prop-types';
import ReactHtmlParser from 'react-html-parser';
import candles from '../images/candles.png';
import car from '../images/car.png';
import crowd from '../images/crowd.png';
import tanks from '../images/tanks.png';
import one from '../images/1997-01.jpeg';
import two from '../images/1997-02.jpeg';
import three from '../images/1997-03.jpeg';
import four from '../images/1997-04.jpeg';

const imageLookup = {
  car: car,
  crowd: crowd,
  tanks: tanks,
  one: one,
  two: two,
  three: three,
  four: four,
  candles: candles
};

const Artifacts = ({
  artifacts,
  changingParam,
  nextParams,
  next,
  navigateTo,
  nextBackgroundClass,
  isTransitioning,
  setIsTransitioning,
  setNextBackground
}) => {
  const [isClicked, setClicked] = useState(false);

  useEffect(() => {
    setClicked(isTransitioning);
  }, [isTransitioning]);

  useEffect(() => {
    setIsTransitioning(false);
    setNextBackground(nextParams.year, nextParams.page);
  }, [artifacts]);

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

      <div className="h-auto bg-black">
        <Container className="grid__container min-h-screen">
          <HeaderSpacer />

          {/* Reflection */}
          <div
            id="overflow-container"
            className={`${isClicked ? 'fade-out' : 'foreground-fade-in'}`}
          >
            {artifacts.images.map((image, index) => {
              return index % 2 === 0 ? (
                <Row key={`image-${index}`} className="grid__row pt-64 pb-20">
                  <Col lg={1} />
                  <Col lg={11} md={12}>
                    <img
                      className="fade-first"
                      src={imageLookup[image.source]}
                      alt=""
                    />
                  </Col>
                  <Col lg={3} />
                  <Col lg={4} md={4}>
                    <p className={`small-body text-white mt-8 fade-first`}>
                      {ReactHtmlParser(image.caption)}
                    </p>
                  </Col>
                </Row>
              ) : (
                <Row key={`image-${index}`} className="grid__row pt-20 pb-24">
                  <Col lg={3} />
                  <Col lg={7} md={12}>
                    <img
                      className="fade-second"
                      src={imageLookup[image.source]}
                      alt=""
                    />
                  </Col>
                  <Col lg={3} />
                  <Col lg={4} md={4}>
                    <p className={`small-body text-white mt-5 fade-second`}>
                      {ReactHtmlParser(image.caption)}
                    </p>
                  </Col>
                </Row>
              );
            })}

            <Footer
              pageId="artifacts"
              nextParams={nextParams}
              next={next}
              changingParam={changingParam}
              setClicked={setClicked}
              navigateTo={navigateTo}
              setIsTransitioning={setIsTransitioning}
            />
          </div>
        </Container>
      </div>
    </>
  );
};

Artifacts.propTypes = {
  artifacts: PropTypes.shape(),
  next: PropTypes.shape(),
  nextParams: PropTypes.shape(),
  changingParam: PropTypes.string,
  navigateTo: PropTypes.func,
  nextBackgroundClass: PropTypes.string,
  isTransitioning: PropTypes.bool,
  setIsTransitioning: PropTypes.func,
  setNextBackground: PropTypes.func
};

export default Artifacts;
