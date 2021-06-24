import './Home.scss';

import { Col, Container, Row } from 'react-grid-system';
import React, { useEffect, useState } from 'react';

import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';
import yearBackgroundClasses from '../variables/backgroundImages.json';

const Home = ({ years, hash, setHash }) => {
  let myHistory = useHistory();
  const [year, setYear] = useState(years[0]);

  useEffect(() => {
    // get year, index from hash
    let yearIndex = years.findIndex(year => year.id === hash);
    if (yearIndex > -1) {
      setYear(years[yearIndex]); // year, title
    } else {
      setYear(years[0]); // year, title
    }
  }, [hash]);

  const onClickYear = year => {
    setTimeout(function() {
      // executed after 1 second
      myHistory.push(`/${year}`);
    }, 1000);
  };

  return (
    <>
      <div
        className="home"
        id="home"
        // hash is updated as page is scrolled
        onScroll={e => {
          let year = years[Math.floor(e.target.scrollTop / window.innerHeight)];
          setHash(year.id);
          if (history.pushState) {
            // IE10, Firefox, Chrome, etc.
            window.history.pushState(null, null, '#' + year.id);
          } else {
            // IE9, IE8, etc
            window.location.hash = '#!' + year.id;
          }
        }}
      >
        {year && (
          <>
            <div className="medium-caption text-white z-10 absolute w-full blurb">
              <Container className="grid__container">
                <Row className="grid__row">
                  <Col lg={2} />
                  <div
                    className="contents cursor-pointer"
                    onClick={() => onClickYear(year.id)}
                  >
                    <Col lg={3}>{year.blurb}</Col>
                  </div>
                  <Col lg={7} />
                </Row>
              </Container>
            </div>
            <div className="small-headline text-white z-10 absolute w-full scene-name">
              <Container className="grid__container">
                <Row className="grid__row">
                  <Col lg={2} />
                  <div
                    className="contents cursor-pointer"
                    onClick={() => onClickYear(year.id)}
                  >
                    <Col lg={6}>{year.title}</Col>
                    <Col lg={1}>{year.id}</Col>
                  </div>
                  <Col lg={3} />
                </Row>
              </Container>
            </div>
          </>
        )}
        {years.map(year => {
          return (
            <div
              className={`hero-image ${yearBackgroundClasses[year.id]}`}
              key={year.id}
              id={year.id}
            />
          );
        })}
      </div>
    </>
  );
};

Home.propTypes = {
  years: PropTypes.arrayOf(PropTypes.shape()),
  hash: PropTypes.string,
  setHash: PropTypes.func,
  scene: PropTypes.shape(),
  intro: PropTypes.shape(PropTypes.arrayOf(PropTypes.string)),
  romanSceneNumber: PropTypes.string,
  artifacts: PropTypes.shape(),
  next: PropTypes.shape(),
  nextParams: PropTypes.shape(),
  changingParam: PropTypes.string
};

export default Home;
