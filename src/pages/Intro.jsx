import './Intro.scss';

import { Col, Container, Row } from 'react-grid-system';
import React, { useEffect, useState } from 'react';

import Footer from '../components/Footer';
import PropTypes from 'prop-types';
import stairs from '../images/Homepage_1989.jpg';
import temple from '../images/Homepage_1984.jpg';

const Intro = ({
  year,
  navigateTo,
  nextBackground,
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
    setNextBackground(null);
  }, [year]);

  let transitionBackgroundClasses = {
    '1984': 'bg-1984',
    '1989': 'bg-1989',
    '1997': 'bg-1997',
    '2003': 'bg-2003',
    '2014': 'bg-2014',
    '2019': 'bg-2019',
    '2020': 'bg-2020',
    black: 'bg-black',
    'gray-30': 'bg-gray-30'
  };

  let yearBackgroundClasses = {
    '1984': 'bg-1984',
    '1989': 'bg-1989',
    '1997': 'bg-1997',
    '2003': 'bg-2003',
    '2014': 'bg-2014',
    '2019': 'bg-2019',
    '2020': 'bg-2020',
    black: 'bg-black',
    'gray-30': 'bg-gray-30'
  };

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
            className={`h-screen ${transitionBackgroundClasses[nextBackground]} bg-center bg-no-repeat bg-cover w-full`}
          />
        )}
      </div>

      <div className={`intro ${isClicked ? 'fade-out' : 'foreground-fade-in'}`}>
        <div
          className={`hero-image ${yearBackgroundClasses[year.id]} ${
            !isTransitioning ? 'hero-image-scale' : ''
          }`}
        />
        <div className="small-headline text-white absolute w-full scene-name">
          <Container className="grid__container">
            <Row className="grid__row">
              <Col lg={2} />
              <Col lg={6}>{year.title}</Col>
              <Col lg={4}>{year.id}</Col>
            </Row>
          </Container>
        </div>
        <Container className="grid__container min-h-screen">
          <Row className="grid__row pt-64 pb-40">
            <Col lg={4} />
            <Col lg={7} md={12}>
              <p className={`large-headline-dynamic text-white pb-16`}>
                Quisque non sem lacinia, sagittis nulla in, fermentum augue.
                Aenean in quam id neque commodo dignissim. Cras tincidunt semper
                metus sed consectetur. Nullam vitae facilisis sapien, a sodales
                ligula. Morbi id massa et nisl molestie rhoncus non id quam.
              </p>
            </Col>
            <Col lg={1} />
          </Row>

          <Row className="grid__row pb-20">
            <Col lg={1} />
            <Col lg={11} md={12}>
              <img src={temple} alt="" />
            </Col>
          </Row>

          <Row className="grid__row pb-20">
            <Col lg={1} />
            <Col lg={11} md={12}>
              <img src={stairs} alt="" />
            </Col>
          </Row>

          <Footer
            nextParams={{ year: year.id, scene: 'I', page: 'event' }}
            next={year.scenes[0]}
            changingParam="scene"
            setClicked={setClicked}
            setIsTransitioning={setIsTransitioning}
            navigateTo={navigateTo}
            theme={{
              background: 'black',
              text: 'gray-40',
              border: 'gray-80'
            }}
          />
        </Container>
      </div>
    </>
  );
};

Intro.defaultProps = {
  nextBackground: 'gray-30'
};

Intro.propTypes = {
  year: PropTypes.shape(),
  navigateTo: PropTypes.func,
  nextBackground: PropTypes.string,
  isTransitioning: PropTypes.bool,
  setIsTransitioning: PropTypes.func,
  setNextBackground: PropTypes.func
};

export default Intro;
