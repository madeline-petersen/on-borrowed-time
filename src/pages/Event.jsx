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
  const [isModalActive, setIsModalActive] = useState(false);
  const [anecdoteData, setAnecdoteData] = useState({});

  const openModal = entry => {
    if (entry.content) {
      setAnecdoteData(entry);
      setIsModalActive(true);
    } else if (entry.linkTo) {
      window.open(entry.linkTo);
    }
  };

  const screenClass = useScreenClass();
  const container = document.querySelector('#event-paragraphs');
  let matches = [];
  if (container) {
    matches = container.querySelectorAll('span');
  }

  if (matches.length) {
    matches.forEach((match, index) => {
      match.onclick = function() {
        openModal(event.resources[index]);
      };
    });
  }

  useEffect(() => {
    setClicked(isTransitioning);
  }, [isTransitioning]);

  useEffect(() => {
    setIsTransitioning(false);
    if (nextParams) {
      setNextBackground(nextParams.year, nextParams.page);
    }
  }, [event]);

  if (year.id === '2020') {
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
                            className={`large-headline-dynamic text-white fade-first`}
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
                <ResourceTable
                  theme="white"
                  data={event.resources}
                  isModalActive={isModalActive}
                  setIsModalActive={setIsModalActive}
                  anecdoteData={anecdoteData}
                  openModal={openModal}
                  matchesLength={matches.length}
                />
              </div>
            )}
          </Container>
        </div>
      </>
    );
  } else {
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
                            className={`large-headline-dynamic text-black fade-first`}
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
                <ResourceTable
                  data={event.resources}
                  isModalActive={isModalActive}
                  setIsModalActive={setIsModalActive}
                  anecdoteData={anecdoteData}
                  openModal={openModal}
                  matchesLength={matches.length}
                />

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
  }
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
