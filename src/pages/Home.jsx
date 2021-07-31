import './Home.scss';

import { Col, Container, Row } from 'react-grid-system';
import React, { useEffect, useState } from 'react';

import PropTypes from 'prop-types';
import ReactHtmlParser from 'react-html-parser';
import { useHistory } from 'react-router-dom';

const Home = ({ years, hash, setHash, setIsTransitioning }) => {
  let myHistory = useHistory();
  const [year, setYear] = useState(years[0]);
  const [isClicked, setClicked] = useState(false);

  useEffect(() => {
    // get year, index from hash
    let yearIndex = years.findIndex(year => year.id === hash);
    if (yearIndex > -1) {
      setYear(years[yearIndex]); // year, title
    } else {
      setYear(years[0]); // year, title
    }
  }, [hash]);

  useEffect(() => {
    setIsTransitioning(false);
  }, []);

  const onClickYear = year => {
    setClicked(true);
    setIsTransitioning(true);
    myHistory.push(`/${year}`);
  };

  let transitionBackgroundClasses = {
    '1984': 'bg-1984-home',
    '1989': 'bg-1989-home',
    '1997': 'bg-1997-home',
    '2003': 'bg-2003-home',
    '2014': 'bg-2014-home',
    '2019': 'bg-2019-home',
    '2020': 'bg-2020-home'
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
          <div className="small-headline text-white z-10 absolute w-full scene-name">
            <Container className="grid__container">
              <Row className="grid__row">
                <Col lg={2} />
                <Col lg={6}>{year.title}</Col>
                <Col lg={1}>{year.id}</Col>
                <Col lg={3} />
              </Row>
            </Container>
          </div>
        )}
        {years.map(year => {
          return (
            <div
              className={`hero-image cursor-pointer ${
                transitionBackgroundClasses[year.id]
              }`}
              key={year.id}
              id={year.id}
              onClick={() => onClickYear(year.id)}
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
  setIsTransitioning: PropTypes.func
};

export default Home;
