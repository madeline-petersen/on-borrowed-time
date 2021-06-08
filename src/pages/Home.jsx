import './Home.scss';

import { Col, Container, Row } from 'react-grid-system';
import React, { useEffect, useState } from 'react';

import Footer from '../components/Footer';
import PropTypes from 'prop-types';
import ReactHtmlParser from 'react-html-parser';

const Home = ({ intro, years, scene, nextParams, changingParam, next }) => {
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

      <div className="home">
        {years.map(year => {
          return (
            <div className={`hero-image bg-${year.id}-home`} key={year.id}>
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
