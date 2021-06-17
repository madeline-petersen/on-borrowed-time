import './Intro.scss';

import { Col, Container, Row } from 'react-grid-system';
import React, { useEffect, useState } from 'react';

import Footer from '../components/Footer';
import PropTypes from 'prop-types';
import stairs from '../images/Homepage_1989.jpg';
import temple from '../images/Homepage_1984.jpg';

const Intro = ({ year, navigateTo }) => {
  const [isClicked, setClicked] = useState(false);

  useEffect(() => {
    setTimeout(function() {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }, 1000);
  }, []);

  return (
    <>
      {/* Backgrounds for page transition */}
      <div
        className={`h-screen bg-gray-30 bg-center bg-no-repeat bg-cover absolute top-0 w-full`}
      >
        <div
          className={`h-screen bg-black absolute top-0 w-full ${
            isClicked ? 'screen-shrink' : ''
          }`}
        />
      </div>

      <div className={`intro ${isClicked ? 'fade-out' : 'foreground-fade-in'}`}>
        <div className={`hero-image bg-${year.id}`}>
          <div className="small-headline text-white absolute w-full scene-name">
            <Container className="grid__container">
              <Row className="grid__row">
                <Col lg={2} />
                <Col lg={6}>{year.title}</Col>
                <Col lg={4}>{year.id}</Col>
              </Row>
            </Container>
          </div>
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

Intro.propTypes = {
  year: PropTypes.shape(),
  navigateTo: PropTypes.func
};

export default Intro;
