import './Home.scss';

import { Col, Container, Row } from 'react-grid-system';
import React, { useEffect, useState } from 'react';

import PropTypes from 'prop-types';

const Home = ({ years }) => {
  const [isClicked, setClicked] = useState(false);
  const start = 'black';
  const end = 'black';

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

      <div
        className="home"
        id="home"
        onScroll={e => {
          let year = years[Math.floor(e.target.scrollTop / window.innerHeight)];
          if (history.pushState) {
            // IE10, Firefox, Chrome, etc.
            window.history.pushState(null, null, '#' + year.id);
          } else {
            // IE9, IE8, etc
            window.location.hash = '#!' + year.id;
          }
        }}
      >
        {years.map(year => {
          return (
            <div
              className={`hero-image bg-${year.id}-home`}
              key={year.id}
              id={year.id}
            >
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
          );
        })}
      </div>
    </>
  );
};

Home.propTypes = {
  years: PropTypes.arrayOf(PropTypes.shape()),
  scene: PropTypes.shape(),
  intro: PropTypes.shape(PropTypes.arrayOf(PropTypes.string)),
  romanSceneNumber: PropTypes.string,
  artifacts: PropTypes.shape(),
  next: PropTypes.shape(),
  nextParams: PropTypes.shape(),
  changingParam: PropTypes.string
};

export default Home;
