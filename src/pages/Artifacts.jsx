import { Col, Container, Row } from 'react-grid-system';
import React, { useEffect, useState } from 'react';

import Footer from '../components/Footer';
import HeaderSpacer from '../components/HeaderSpacer';
import PropTypes from 'prop-types';
import candles from '../images/candles.png';
import car from '../images/car.png';
import crowd from '../images/crowd.png';
import tanks from '../images/tanks.png';

const imageLookup = {
  car: car,
  crowd: crowd,
  tanks: tanks,
  candles: candles
};

const Artifacts = ({ artifacts, changingParam, nextParams, next }) => {
  const [isClicked, setClicked] = useState(false);

  useEffect(() => {
    setTimeout(function() {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }, 1000);
  }, []);

  return (
    <>
      {/* Backgrounds for page transition */}
      <div className={`h-screen bg-black absolute top-0 w-full`}>
        <div
          className={`h-screen bg-black absolute top-0 w-full ${
            isClicked ? 'screen-shrink' : ''
          }`}
        />
      </div>

      <div className="h-auto bg-black">
        <Container className="grid__container min-h-screen">
          <HeaderSpacer />

          {/* Reflection */}
          <div
            id="overflow-container"
            className={`${isClicked ? 'fade-out' : 'foreground-fade-in'}`}
          >
            {artifacts.images.length > 0 && (
              <Row className="grid__row pt-64 pb-20">
                <Col lg={1} />
                <Col lg={11} md={12}>
                  <img src={imageLookup[artifacts.images[0].source]} alt="" />
                </Col>
                <Col lg={3} />
                <Col lg={4} md={4}>
                  <p className={`small-body text-white mt-8`}>
                    {artifacts.images[0].caption}
                  </p>
                </Col>
              </Row>
            )}
            {artifacts.length > 1 && (
              <Row className="grid__row pt-20 pb-24">
                <Col lg={3} />
                <Col lg={7} md={12}>
                  <img src={imageLookup[artifacts[1].source]} alt="" />
                </Col>
                <Col lg={3} />
                <Col lg={4} md={4}>
                  <p className={`small-body text-white mt-5`}>
                    {artifacts.images[1].caption}
                  </p>
                </Col>
              </Row>
            )}

            <Footer
              nextParams={nextParams}
              next={next}
              changingParam={changingParam}
              setClicked={setClicked}
              theme={{
                background: 'black',
                text: 'gray-40',
                border: 'gray-80'
              }}
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
  changingParam: PropTypes.string
};

export default Artifacts;
