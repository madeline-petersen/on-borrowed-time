import { Col, Container, Row } from 'react-grid-system';
import React, { useState } from 'react';

import Footer from '../components/Footer';
import Header from '../components/Header';
import car from '../images/car.png';
import crowd from '../images/crowd.png';

const Imagery = () => {
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
          theme={{ background: 'black', text: 'gray-10' }}
          isClicked={isClicked}
        />

        {/* Event intro */}
        <Container className="grid__container sticky top-8 border-l border-gray-50">
          {/* solid black background */}
          <Row
            className={`grid__row bg-black ${isClicked ? 'fade-out' : null}`}
          >
            <Col lg={3} md={3} />
            <Col lg={9} md={9} sm={12} xs={12}>
              <p className="medium-caption scene-animation pt-2 absolute top-0 text-gray-50">
                Scene I
              </p>
              <p className="small-body title-animation pt-2 pb-2 text-gray-50">
                Death of an Icon
              </p>
            </Col>
          </Row>
        </Container>

        {/* Reflection */}
        <Container className="grid__container border-l border-gray-50">
          <Row className="grid__row pt-64 pb-20 foreground-fade-in">
            <Col lg={1} />
            <Col lg={11} md={12}>
              <img
                src={crowd}
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
                Some two hundred thousand pro-democracy students staged an
                unauthorized demonstration in Tiananmen Square during the
                funeral ceremony of the Chinese Communist Party leader and
                liberal reformer Hu Yaobang, on April 22, 1989. Photograph by
                Catherine Henriette/AFP/Getty.
              </p>
            </Col>
          </Row>
          <Row className="grid__row pt-20 pb-24 foreground-fade-in">
            <Col lg={3} />
            <Col lg={7} md={12}>
              <img src={car} alt="" className={isClicked ? 'fade-out' : null} />
            </Col>
            <Col lg={3} />
            <Col lg={4} md={4}>
              <p
                className={`small-body text-gray-40 mt-5 ${
                  isClicked ? 'fade-out' : null
                }`}
              >
                A weary protester pleads with a PLA officer sitting in his truck
                to not crackdown on the student demonstrators in Tiananmen
                Square. (Photo by Peter Turnley/Getty Images)
              </p>
            </Col>
          </Row>
        </Container>

        <Footer
          pushTo="/reflection"
          upNext="Reflection"
          scene="I"
          setClicked={setClicked}
          isClicked={isClicked}
          theme={{ background: 'black', text: 'gray-40' }}
        />
      </div>
    </>
  );
};

export default Imagery;
