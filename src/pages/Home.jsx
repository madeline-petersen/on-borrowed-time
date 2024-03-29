import './Home.scss';

import { ArrowDown20 } from '@carbon/icons-react';
import ReactFullpage from '@fullpage/react-fullpage';
import parse from 'html-react-parser';
import PropTypes from 'prop-types';
import React, { useEffect } from 'react';
import { Col, Container, Row } from 'react-grid-system';
import { Helmet } from 'react-helmet';

const pluginWrapper = () => {
  require('./static/fullpage.parallax.min.js');
};

const Home = ({ years, hash, setHash, setTransitionType, navigateTo }) => {
  const beforeLeave = (origin, destination, direction) => {
    const destinationYear = years[destination.index].id;
    setHash(destinationYear);
    if (history.pushState) {
      // IE10, Firefox, Chrome, etc.
      window.history.pushState(null, null, '#' + destinationYear);
    } else {
      // IE9, IE8, etc
      window.location.hash = '#!' + destinationYear;
    }

    destination.item.classList.add(direction);
  };

  const afterLoad = (origin, destination, direction) => {
    origin.item.classList.remove(direction);
  };

  useEffect(() => {
    // get year, index from hash
    let yearIndex = years.findIndex(year => year.id === hash);

    // set year/section to match hash
    if (yearIndex > -1) {
      fullpage_api.silentMoveTo(yearIndex + 1);
    }
  }, []);

  useEffect(() => {
    setTransitionType(null);
  }, []);

  const onClickYear = year => {
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
    <div className="home">
      <Helmet>
        <title>{`On Borrowed Time`}</title>
      </Helmet>
      <div className="h-screen w-screen absolute bg-black z-10" />
      <ReactFullpage
        licenseKey={'DNAK9-ZU2SK-BDKK8-JZ61H-YIUAK'}
        pluginWrapper={pluginWrapper}
        // Scrolling
        scrollingSpeed={1000}
        continuousVertical={true}
        // Design
        parallax={true}
        parallaxOptions={{
          type: 'cover',
          percentage: 30,
          property: 'translate'
        }}
        parallaxKey={
          'T0NhR3N0YjI1aWIzSnliM2RsWkhScGJXVXVZMjl0QU9fYklqY0dGeVlXeHNZWGc9cG5s'
        }
        // Custom selectors
        credits={{ enabled: false }}
        // Events
        afterLoad={afterLoad}
        beforeLeave={beforeLeave}
        render={({ state, fullpageApi }) => {
          return (
            <ReactFullpage.Wrapper>
              {years.map(year => {
                return (
                  <div
                    className={`section hero-image cursor-pointer ${
                      transitionBackgroundClasses[year.id]
                    }`}
                    key={year.id}
                    id={year.id}
                    onClick={() => onClickYear(year.id)}
                  >
                    <div
                      className={`small-headline text-white z-10 absolute w-full scene-name cursor-pointer`}
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
                            {parse(year.title)}
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
                    {year.id === '1984' && (
                      <div className="arrow-down">
                        <ArrowDown20 />
                      </div>
                    )}
                  </div>
                );
              })}
            </ReactFullpage.Wrapper>
          );
        }}
      />
    </div>
  );
};

Home.propTypes = {
  years: PropTypes.arrayOf(PropTypes.shape()),
  hash: PropTypes.string,
  setHash: PropTypes.func,
  setTransitionType: PropTypes.func,
  navigateTo: PropTypes.func
};

export default Home;
