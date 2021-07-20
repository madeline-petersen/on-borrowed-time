import './Event.scss';

import { Col, Container, Row } from 'react-grid-system';
import React, { useEffect, useState } from 'react';

import Footer from '../components/Footer';
import HeaderSpacer from '../components/HeaderSpacer';
import PropTypes from 'prop-types';
import ReactHtmlParser from 'react-html-parser';
import ResourceTable from '../components/ResourceTable';
import { useScreenClass } from 'react-grid-system';

const Event = ({
  year,
  event,
  nextParams,
  changingParam,
  next,
  navigateTo,
  nextBackgroundClass,
  isTransitioning,
  setIsTransitioning,
  setNextBackground,
  colourBackgroundClass
}) => {
  const [isClicked, setClicked] = useState(false);
  const screenClass = useScreenClass();
  const container = document.querySelector('#event-paragraphs');
  let matches = [];
  if (container) {
    matches = container.querySelectorAll('span');
    // console.log('it a match!', matches);
  }

  if (matches.length) {
    // console.log('many matches');
    matches[0].onclick = function() {
      alert('bla bla');
    };
  }

  useEffect(() => {
    setClicked(isTransitioning);
  }, [isTransitioning]);

  useEffect(() => {
    setIsTransitioning(false);
    setNextBackground(nextParams.year, nextParams.page);
  }, [event]);

  return (
    <>
      {/* Backgrounds for page transition */}
      <div className={`absolute top-0 w-full`}>
        <div
          className={`h-screen ${colourBackgroundClass} w-full ${
            isClicked ? 'screen-shrink' : ''
          }`}
        />
        {isTransitioning && (
          <div
            className={`h-screen ${nextBackgroundClass} bg-center bg-no-repeat bg-cover w-full`}
          />
        )}
      </div>

      <div className={`h-auto ${colourBackgroundClass}`}>
        <Container className="grid__container min-h-screen">
          <HeaderSpacer />

          {/* Event */}
          {event && (
            <div
              id="overflow-container"
              className={`${isClicked ? 'fade-out' : 'delayed-fade-in'}`}
            >
              <Row
                className={`grid__row intro-paragraph pb-24`}
                id="event-paragraphs"
              >
                {event.paragraphs.map((paragraph, index) => {
                  return (
                    <div key={`paragraph-${index}`} className="contents">
                      <Col lg={1} md={2} />
                      <Col lg={11} md={10} sm={12} xs={12}>
                        <p
                          className={`large-headline-dynamic text-black fade-in-element`}
                          style={{
                            textIndent: ['lg', 'xl', 'xxl'].includes(
                              screenClass
                            )
                              ? `calc(200%/11)` // indent 2/11 columns for large
                              : ['md'].includes(screenClass)
                              ? `calc(200%/10)` // indent 2/10 columns for medium
                              : '0' // indent 0 for small, x-small
                          }}
                        >
                          {ReactHtmlParser(paragraph)}
                          <br />
                          <br />
                        </p>
                      </Col>
                    </div>
                  );
                })}
              </Row>
              <ResourceTable data={event.resources} />

              <Footer
                pageId="event"
                nextParams={nextParams}
                next={next}
                changingParam={changingParam}
                setClicked={setClicked}
                isClicked={isClicked}
                navigateTo={navigateTo}
                setIsTransitioning={setIsTransitioning}
              />
            </div>
          )}
        </Container>
      </div>
    </>
  );
};

Event.propTypes = {
  year: PropTypes.shape(),
  years: PropTypes.arrayOf(PropTypes.shape()),
  event: PropTypes.shape(),
  next: PropTypes.shape(),
  nextParams: PropTypes.shape(),
  changingParam: PropTypes.string,
  nextBackgroundClass: PropTypes.string,
  isTransitioning: PropTypes.bool,
  setIsTransitioning: PropTypes.func,
  navigateTo: PropTypes.func,
  setNextBackground: PropTypes.func,
  colourBackgroundClass: PropTypes.string
};

export default Event;
