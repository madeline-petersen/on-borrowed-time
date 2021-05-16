import { Col, Container, Row } from 'react-grid-system';
import React, { useState } from 'react';

import Footer from '../components/Footer';
import Header from '../components/Header';
import PropTypes from 'prop-types';
import ReactHtmlParser from 'react-html-parser';
import SubHeader from '../components/SubHeader';
import { roman } from '@sguest/roman-js';

const Reflection = ({
  year,
  nextYear,
  scene,
  romanSceneNumber,
  reflection
}) => {
  const [isClicked, setClicked] = useState(false);
  const sceneNumber = roman.parseRoman(romanSceneNumber);
  const isLastScene = () => {
    return sceneNumber < year.scenes.length ? false : true;
  };

  let nextRomanSceneNumber = isLastScene()
    ? 'I'
    : roman.toRoman(sceneNumber + 1);

  let nextUrl =
    isLastScene() && nextYear
      ? `/${nextYear.year}/scene-I/event`
      : `/${year.year}/scene-${nextRomanSceneNumber}/event`;

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
          romanSceneNumber={romanSceneNumber}
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

        {!(isLastScene() && !nextYear) && (
          <Footer
            pushTo={nextUrl}
            upNext="Event"
            romanSceneNumber={nextRomanSceneNumber}
            nextYear={nextYear}
            setClicked={setClicked}
            isClicked={isClicked}
            isLastScene={isLastScene()}
            theme={{ background: 'black', text: 'gray-40' }}
          />
        )}
      </div>
    </>
  );
};

Reflection.propTypes = {
  year: PropTypes.shape(),
  nextYear: PropTypes.shape(),
  scene: PropTypes.shape(),
  romanSceneNumber: PropTypes.string,
  reflection: PropTypes.shape()
};

export default Reflection;
