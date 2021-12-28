import './Event.scss';

import { Col, Container, Row, useScreenClass } from 'react-grid-system';
import React, { useCallback, useEffect, useRef, useState } from 'react';

import Footer from '../components/Footer';
import HeaderSpacer from '../components/HeaderSpacer';
import PropTypes from 'prop-types';
import ReactHtmlParser from 'react-html-parser';
import ResourceTable from '../components/ResourceTable';
import Triptych from '../components/imageLayouts/Triptych';
import Diptych from '../components/imageLayouts/Diptych';
import Custom from '../components/imageLayouts/Custom';
import imageLookup from '../images';
import { useOverscroll } from '../hooks/useOverscroll';

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
  colourBackgroundClass,
  textColourClass,
  borderColourClass
}) => {
  const [isClicked, setClicked] = useState(false);
  const [isModalActive, setIsModalActive] = useState(false);
  const [anecdoteData, setAnecdoteData] = useState({});
  const [selectedTheme, setSelectedTheme] = useState(null);

  const scrollRef = useRef();
  // set to false initially if implementing preview
  const [previewNextPage, setPreviewNextPage] = useState(true);
  const onScrollEnd = useCallback(() => {
    if (previewNextPage) {
      setClicked(true);
      setIsTransitioning(true);
      if (changingParam === 'year') {
        // if year end
        // inter-year
        navigateTo(nextParams.year);
      } else {
        // else
        // intra-year
        navigateTo(
          nextParams.year,
          nextParams.scene, // should be romanSceneNumber
          nextParams.page
        );
      }
    } else {
      setPreviewNextPage(true);
    }
  }, []);
  useOverscroll(scrollRef, onScrollEnd, 3);

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
  let filteredMatches = [];
  if (container) {
    let matches = container.querySelectorAll('span');
    let matchesArray = Array.prototype.slice.call(matches);
    filteredMatches = matchesArray.filter(
      element => element.classList.length === 0
    );
  }

  if (filteredMatches.length) {
    filteredMatches.forEach((match, index) => {
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

  let themeLookup = [];
  if (event.themes) {
    themeLookup = event.themes.map(theme => {
      return `#${theme.replace(/\s+/g, '-').toLowerCase()}`;
    });
  }

  const isSelectedTheme = theme => {
    return theme === selectedTheme;
  };

  const hexToRGBTable = {
    'bg-blue-50': [0, 55, 120],
    'bg-red': [104, 18, 12],
    'bg-yellow': [232, 229, 210],
    'bg-purple': [156, 140, 181],
    'bg-gray-30': [188, 185, 182],
    'bg-brown': [147, 103, 83]
  };

  const [red, green, blue] = hexToRGBTable[colourBackgroundClass];
  const transitionContainer = document.querySelector(
    '.transition-colour-on-scroll'
  );
  const overflow = document.getElementById('overflow-container');

  if (overflow && transitionContainer && event.imageLayout) {
    overflow.addEventListener('scroll', () => {
      const y = 1 + overflow.scrollTop / 150 - 5;
      if (y >= 1) {
        const [r, g, b] = [red / y, green / y, blue / y].map(Math.round);
        transitionContainer.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
      }
    });
  }

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

        <div className={`h-screen ${colourBackgroundClass}`}>
          <Container className="h-screen grid__container">
            <HeaderSpacer />

            {/* Event */}
            {event && (
              <div
                id="overflow-container"
                ref={scrollRef}
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
                <Row
                  className={`grid__row bg-black theme-nav-container fade-first`}
                >
                  <Col lg={3} md={2} />
                  <Col lg={6} md={10} sm={12} xs={12}>
                    <p className="pb-5">
                      {event.themes.map((theme, index) => {
                        return (
                          <>
                            {index === 0 ? (
                              ''
                            ) : (
                              <span
                                className={`small-headline text-white fade-first ${
                                  selectedTheme === null
                                    ? 'text-opacity-100'
                                    : 'text-opacity-20'
                                }
                                 `}
                              >
                                {' '}
                                /{' '}
                              </span>
                            )}
                            <a
                              key={`theme-${index}`}
                              className={`small-headline text-white cursor-pointer fade-first ${
                                selectedTheme === null
                                  ? 'text-opacity-100 hover:text-opacity-20'
                                  : isSelectedTheme(
                                      themeLookup[index].substring(1)
                                    ) // remove hash
                                  ? 'text-opacity-100'
                                  : 'text-opacity-20 hover:text-opacity-50'
                              } `}
                              href={themeLookup[index]}
                              onClick={() =>
                                setSelectedTheme(
                                  themeLookup[index].substring(1)
                                )
                              }
                            >
                              {ReactHtmlParser(theme)}
                            </a>
                          </>
                        );
                      })}
                    </p>
                  </Col>
                  <Col lg={3} />
                  <Col lg={1} md={2} />
                  <Col lg={11} md={10} sm={12} xs={12}>
                    <p className="border-b border-white border-opacity-20 fade-first" />
                  </Col>
                </Row>
                {event.sections.map((section, index) => {
                  return (
                    <section
                      key={`section-${index}`}
                      id={event.themes[index]
                        .replace(/\s+/g, '-')
                        .toLowerCase()}
                    >
                      <Row className={`grid__row intro-paragraph pb-24`}>
                        {section.paragraphs.map((paragraph, index) => {
                          return index === 0 ? (
                            <div
                              key={`paragraph-${index}`}
                              className="contents"
                            >
                              <Col lg={3} md={2} />
                              <Col lg={6} md={10} sm={12} xs={12}>
                                <p
                                  className={`small-headline text-white fade-first`}
                                  style={{ paddingTop: '43px' }}
                                >
                                  {ReactHtmlParser(paragraph)}
                                  <br />
                                  <br />
                                </p>
                              </Col>
                              <Col lg={3} />
                            </div>
                          ) : (
                            <div
                              key={`paragraph-${index}`}
                              className="contents"
                            >
                              <Col lg={3} md={2} />
                              <Col lg={4} md={10} sm={12} xs={12}>
                                <p
                                  className={`small-body-2 text-white fade-first`}
                                >
                                  {ReactHtmlParser(paragraph)}
                                  <br />
                                  <br />
                                </p>
                              </Col>
                              <Col lg={5} />
                            </div>
                          );
                        })}
                      </Row>
                      {section.image && (
                        <Row className="pb-16 grid__row">
                          <Col lg={3} md={2} />
                          <Col lg={9} md={10} sm={12} xs={12}>
                            <img
                              className="fade-first"
                              src={imageLookup[section.image.source]}
                              alt=""
                            />
                          </Col>

                          <Col lg={3} md={2} />
                          <Col lg={4} md={4}>
                            <p
                              className={`small-body text-white mt-8 fade-first text-opacity-70`}
                            >
                              {ReactHtmlParser(section.image.caption)}
                            </p>
                          </Col>
                        </Row>
                      )}
                      <ResourceTable
                        theme="white"
                        data={section.resources}
                        isModalActive={isModalActive}
                        setIsModalActive={setIsModalActive}
                        anecdoteData={anecdoteData}
                        openModal={openModal}
                        matchesLength={filteredMatches.length}
                        textColourClass={textColourClass}
                        borderColourClass={borderColourClass}
                      />
                    </section>
                  );
                })}
                {/* padding below last resource table */}
                <div className="pb-16" />
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
            className={`h-screen transition-colour-on-scroll ${colourBackgroundClass} w-full ${
              isClicked ? 'screen-shrink' : ''
            }`}
          />
          {isTransitioning && (
            <div
              className={`h-screen ${nextBackgroundClass} bg-center bg-no-repeat bg-cover w-full`}
            />
          )}
        </div>

        <div
          className={`story-container h-auto transition-colour-on-scroll ${colourBackgroundClass}`}
        >
          <Container className="min-h-screen grid__container">
            <HeaderSpacer />

            {/* Event */}
            {event && (
              <div
                id="overflow-container"
                ref={scrollRef}
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
                            className={`large-headline-dynamic ${textColourClass} fade-first`}
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
                  matchesLength={filteredMatches.length}
                  textColourClass={textColourClass}
                  borderColourClass={borderColourClass}
                />

                {event.imageLayout && <div style={{ marginTop: '3000px' }} />}
                {event.imageLayout && event.imageLayout.type === 'custom' && (
                  <Custom images={event.imageLayout.images} />
                )}
                {event.imageLayout && event.imageLayout.type === 'triptych' && (
                  <Triptych images={event.imageLayout.images} />
                )}
                {event.imageLayout && event.imageLayout.type === 'diptych' && (
                  <Diptych images={event.imageLayout.images} />
                )}
              </div>
            )}
          </Container>
        </div>
        <div className={`${nextBackgroundClass} translate-y-full`}>
          <Container className="grid__container">
            <Footer
              pageId="event"
              nextParams={nextParams}
              next={next}
              changingParam={changingParam}
              setClicked={setClicked}
              isClicked={isClicked}
              navigateTo={navigateTo}
              setIsTransitioning={setIsTransitioning}
              nextBackgroundClass={nextBackgroundClass}
              textColourClass={
                event.imageLayout
                  ? `text-white text-opacity-90`
                  : textColourClass
              }
              borderColourClass={
                event.imageLayout
                  ? `border-white border-opacity-20`
                  : borderColourClass
              }
            />
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
  colourBackgroundClass: PropTypes.string,
  textColourClass: PropTypes.string,
  borderColourClass: PropTypes.string
};

export default Event;
