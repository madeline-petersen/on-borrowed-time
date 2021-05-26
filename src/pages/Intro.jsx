import './Intro.scss';

import { Col, Container, Row } from 'react-grid-system';
import React, { useEffect, useState } from 'react';

import Footer from '../components/Footer';
import Header from '../components/Header';
import PropTypes from 'prop-types';

const Intro = ({ year, nextParams, changingParam, next }) => {
  const [isClicked, setClicked] = useState(false);
  const start = 'black';
  const end = 'black';

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

      {/* <div className="hero-image" /> */}
      <div className="h-auto bg-black">
        <Container className="grid__container border-l lg:border-gray-60 border-black min-h-screen">
          {/* <div
            id="overflow-container"
            className={`${isClicked ? 'fade-out' : 'foreground-fade-in'}`}
          >
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
          </div> */}
        </Container>
      </div>
    </>
  );
};

Intro.propTypes = {
  year: PropTypes.shape(),
  scene: PropTypes.shape(),
  romanSceneNumber: PropTypes.string,
  artifacts: PropTypes.shape(),
  next: PropTypes.shape(),
  nextParams: PropTypes.shape(),
  changingParam: PropTypes.string
};

export default Intro;
