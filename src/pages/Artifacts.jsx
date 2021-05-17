import { Col, Container, Row } from 'react-grid-system';
import React, { useState } from 'react';

import Footer from '../components/Footer';
import Header from '../components/Header';
import PropTypes from 'prop-types';
import SubHeader from '../components/SubHeader';
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

const Artifacts = ({ year, scene, romanSceneNumber, artifacts }) => {
  const [isClicked, setClicked] = useState(false);

  return (
    <>
      <div className="bg-gray-10">
        <Container className="grid__container border-l border-gray-50">
          <Row className="grid__row screen-transition-animation" />
        </Container>
      </div>

      <div className="h-auto bg-black">
        <Header
          label={`${year.year} ${year.title}`}
          theme={{ background: 'black', text: 'gray-10' }}
          border={true}
          isClicked={isClicked}
        />

        <SubHeader
          theme={{ background: 'black', text: 'gray-10' }}
          isClicked={isClicked}
          romanSceneNumber={romanSceneNumber}
          title={scene.title}
        />

        {/* Reflection */}
        <Container className="grid__container border-l border-gray-50">
          {artifacts.length > 0 && (
            <Row className="grid__row pt-64 pb-20 foreground-fade-in">
              <Col lg={1} />
              <Col lg={11} md={12}>
                <img
                  src={imageLookup[artifacts[0].source]}
                  alt=""
                  className={isClicked ? 'fade-out' : null}
                />
              </Col>
              <Col lg={3} />
              <Col lg={4} md={4}>
                <p
                  className={`small-body text-gray-40 mt-8 ${
                    isClicked ? 'fade-out' : null
                  }`}
                >
                  {artifacts[0].caption}
                </p>
              </Col>
            </Row>
          )}
          {artifacts.length > 1 && (
            <Row className="grid__row pt-20 pb-24 foreground-fade-in">
              <Col lg={3} />
              <Col lg={7} md={12}>
                <img
                  src={imageLookup[artifacts[1].source]}
                  alt=""
                  className={isClicked ? 'fade-out' : null}
                />
              </Col>
              <Col lg={3} />
              <Col lg={4} md={4}>
                <p
                  className={`small-body text-gray-40 mt-5 ${
                    isClicked ? 'fade-out' : null
                  }`}
                >
                  {artifacts[1].caption}
                </p>
              </Col>
            </Row>
          )}
        </Container>

        <Footer
          pushTo="reflection"
          upNext="Reflection"
          romanSceneNumber={romanSceneNumber}
          setClicked={setClicked}
          isClicked={isClicked}
          theme={{ background: 'black', text: 'gray-40' }}
        />
      </div>
    </>
  );
};

Artifacts.propTypes = {
  year: PropTypes.shape(),
  scene: PropTypes.shape(),
  romanSceneNumber: PropTypes.string,
  artifacts: PropTypes.shape()
};

export default Artifacts;
