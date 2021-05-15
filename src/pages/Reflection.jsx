import { Col, Container, Row } from 'react-grid-system';
import React, { useState } from 'react';

import Footer from '../components/Footer';
import Header from '../components/Header';
import PropTypes from 'prop-types';
import ReactHtmlParser from 'react-html-parser';
import SubHeader from '../components/SubHeader';

const Reflection = ({ year, scene, sceneNumber, reflection }) => {
  const [isClicked, setClicked] = useState(false);

  return (
    <>
      <div className="bg-black">
        <Container className="grid__container border-l border-gray-50">
          <Row className="grid__row screen-transition-animation" />
        </Container>
      </div>

      <div className="h-auto bg-black">
        <Header
          theme={{ background: 'black', text: 'gray-10' }}
          isClicked={isClicked}
          year={year.year}
          title={year.title}
        />

        <SubHeader
          theme={{ background: 'black', text: 'gray-10' }}
          isClicked={isClicked}
          sceneNumber={sceneNumber}
          title={scene.title}
        />

        {/* Final Reflection */}
        <Container className="grid__container border-l border-gray-50">
          <Row className="grid__row foreground-fade-in pt-64 pb-40">
            {reflection.map((paragraph, index) => {
              if (index === 0) {
                return (
                  <>
                    <Col lg={1} />
                    <Col lg={11} md={12}>
                      <p
                        className={`medium-headline text-gray-40 pb-16 ${
                          isClicked ? 'fade-out' : null
                        }`}
                      >
                        {ReactHtmlParser(paragraph)}
                      </p>
                    </Col>
                  </>
                );
              } else {
                return (
                  <>
                    <Col lg={3} />
                    <Col lg={7} md={12}>
                      <p
                        className={`medium-body text-gray-40 ${
                          isClicked ? 'fade-out' : null
                        }`}
                      >
                        {ReactHtmlParser(paragraph)}
                        <br />
                        <br />
                      </p>
                    </Col>
                  </>
                );
              }
            })}
          </Row>
        </Container>

        <Footer
          pushTo="/1989/scene-II/event"
          upNext="Event"
          scene="II"
          setClicked={setClicked}
          isClicked={isClicked}
          theme={{ background: 'black', text: 'gray-40' }}
        />
      </div>
    </>
  );
};

Reflection.propTypes = {
  year: PropTypes.shape(),
  scene: PropTypes.shape(),
  sceneNumber: PropTypes.string,
  reflection: PropTypes.shape()
};

export default Reflection;
