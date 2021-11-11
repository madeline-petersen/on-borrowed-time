import './Home.scss';

import { Col, Container, Row } from 'react-grid-system';
import React, { useEffect, useState } from 'react';

import { ArrowDown20 } from '@carbon/icons-react';
import PropTypes from 'prop-types';
import ReactHtmlParser from 'react-html-parser';
import ReactFullpage from '@fullpage/react-fullpage';

const Home = ({ years, hash, setHash, setIsTransitioning, navigateTo }) => {
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
    navigateTo(year);
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
      {/* <div
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
      > */}
      <ReactFullpage
        //fullpage options
        licenseKey={'518F7C98-E6514A4C-AF78105C-8D322AE9'}
        scrollingSpeed={1000} /* Options here */
        render={({ state, fullpageApi }) => {
          return (
            <ReactFullpage.Wrapper>
              {years.map(year => {
                return (
                  <div
                    className={`section hero-image cursor-pointer ${
                      transitionBackgroundClasses[year.id]
                    } ${hash === year.id ? 'current' : ''}`}
                    key={year.id}
                    id={year.id}
                    onClick={() => onClickYear(year.id)}
                  >
                    <div
                      className={`small-headline text-white z-10 absolute w-full scene-name cursor-pointer ${
                        isClicked ? 'fade-out' : ''
                      }`}
                      onClick={() => onClickYear(year.id)}
                    >
                      <Container className="grid__container">
                        <Row className="grid__row">
                          <Col lg={2} />
                          <Col
                            lg={3}
                            className="title title__english"
                            key={`english-${year.id}`}
                          >
                            {ReactHtmlParser(year.title)}
                          </Col>
                          <Col
                            lg={3}
                            className="title title__chinese"
                            key={`chinese-${year.id}`}
                          >
                            {year.chineseTitle}
                          </Col>
                          <Col
                            lg={2}
                            className="title title__year"
                            key={`year-${year.id}`}
                          >
                            {year.id}
                          </Col>
                          <Col lg={1} />
                        </Row>
                      </Container>
                    </div>
                  </div>
                );
              })}
            </ReactFullpage.Wrapper>
          );
        }}
      />
      {/* <div className="arrow-down">
        <ArrowDown20 />
      </div> */}
      {/* </div> */}
    </>
  );
};

Home.propTypes = {
  years: PropTypes.arrayOf(PropTypes.shape()),
  hash: PropTypes.string,
  setHash: PropTypes.func,
  setIsTransitioning: PropTypes.func,
  navigateTo: PropTypes.func
};

export default Home;
