import { Col, Container, Row } from 'react-grid-system';
import React, { useEffect, useState } from 'react';

import Footer from '../components/Footer';
import Header from '../components/Header';
import PropTypes from 'prop-types';
import ReactHtmlParser from 'react-html-parser';
import SubHeader from '../components/SubHeader';

const Reflection = ({
  year,
  scene,
  romanSceneNumber,
  reflection,
  nextParams,
  changingParam,
  next
}) => {
  const [isClicked, setClicked] = useState(false);
  const start = 'black';
  const end = 'gray-30';

  useEffect(() => {
    setTimeout(function() {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }, 1000);
  }, []);

  return (
    <>
      {/* Backgrounds for page transition */}
      <div className={`h-screen bg-${end} absolute top-0 w-full`}>
        <div
          className={`h-screen bg-${start} absolute top-0 w-full ${
            isClicked ? 'screen-shrink' : ''
          }`}
        />
      </div>

      <div className="h-auto bg-black">
        <Container className="grid__container border-l border-gray-80">
          <Header
            label={`${year.id} ${year.title}`}
            theme={{ background: 'black', text: 'gray-30', border: 'gray-80' }}
            border={true}
          />

          <SubHeader
            theme={{ background: 'black', text: 'gray-30', border: 'gray-80' }}
            romanSceneNumber={romanSceneNumber}
            title={scene.title}
            fadeOut={true}
            isClicked={isClicked}
          />

          {/* Final Reflection */}
          <div
            id="overflow-container"
            className={`${isClicked ? 'fade-out' : 'foreground-fade-in'}`}
          >
            <Row className="grid__row pt-64 pb-40">
              {reflection.paragraphs.map((paragraph, index) => {
                if (index === 0) {
                  return (
                    <>
                      <Col lg={1} />
                      <Col lg={11} md={12}>
                        <p className={`medium-headline text-gray-40 pb-16`}>
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
                        <p className={`medium-body text-gray-40`}>
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

            {next && (
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
            )}
          </div>
        </Container>
      </div>
    </>
  );
};

Reflection.propTypes = {
  year: PropTypes.shape(),
  scene: PropTypes.shape(),
  romanSceneNumber: PropTypes.string,
  reflection: PropTypes.shape(),
  next: PropTypes.shape(),
  nextParams: PropTypes.string,
  changingParam: PropTypes.string
};

export default Reflection;
