import './Event.scss';
import 'fullpage.js/vendors/scrolloverflow';

import ReactFullpage from '@fullpage/react-fullpage';
import { throttle } from 'lodash';
import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';
import { Col, Container, Row, useScreenClass } from 'react-grid-system';
import ReactHtmlParser from 'react-html-parser';

import HiddenFooter from '../components/HiddenFooter';
import Custom from '../components/imageLayouts/Custom';
import Diptych from '../components/imageLayouts/Diptych';
import Triptych from '../components/imageLayouts/Triptych';
import ResourceTable from '../components/ResourceTable';

const Event = ({
  year,
  event,
  nextParams,
  changingParam,
  next,
  navigateTo,
  setIsTransitioning,
  colourBackgroundClass,
  textColourClass,
  borderColourClass,
  setAnecdoteData,
  isModalActive,
  setIsModalActive
}) => {
  const [headerHeight, setHeaderHeight] = useState('78px');

  const openModal = entry => {
    if (entry.content) {
      setAnecdoteData(entry);
      setIsModalActive(true);
    } else if (entry.linkTo) {
      window.open(entry.linkTo);
    }
  };

  const screenClass = useScreenClass();
  const getTextIndent = () => {
    if (['lg', 'xl', 'xxl'].includes(screenClass)) {
      return `calc(200%/11)`; // indent 2/11 columns for large
    } else if (['md'].includes(screenClass)) {
      return `calc(200%/10)`; // indent 2/10 columns for medium
    } else {
      return '0'; // indent 0 for small, x-small
    }
  };

  const getFilteredMatches = id => {
    // get paragraphs
    const container = document.querySelector(`#${id}`);

    // get spans within paragraphs
    let filteredMatches = [];
    if (container) {
      let matches = container.querySelectorAll('span');
      let matchesArray = Array.prototype.slice.call(matches);
      filteredMatches = matchesArray.filter(
        element => element.classList.length === 0
      );
    }
    return filteredMatches;
  };

  const setOnClicks = (id, sectionIndex) => {
    const filteredMatches = getFilteredMatches(id);

    // set onclick for spans
    if (filteredMatches.length) {
      filteredMatches.forEach((match, index) => {
        match.onclick = function() {
          if (year.id === '2020') {
            openModal(event.sections[sectionIndex].resources[index]);
          } else {
            openModal(event.resources[index]);
          }
        };
      });
    }
  };

  useEffect(() => {
    setIsTransitioning(null);

    // disabling all scrolling while animation plays
    fullpage_api.setAllowScrolling(false);
    fullpage_api.setKeyboardScrolling(false);

    setTimeout(() => {
      // enable scrolling once animation ends (4.25s)
      fullpage_api.setAllowScrolling(true);
      fullpage_api.setKeyboardScrolling(true);
    }, 4250);
  }, [event]);

  const afterLoad = (origin, destination, direction) => {
    if (destination.isLast) {
      // intra-year
      navigateTo(
        nextParams.year,
        nextParams.scene, // romanSceneNumber
        nextParams.page
      );
    }
  };

  const onLeave = (origin, destination, direction) => {
    if (isModalActive) {
      return false;
    }

    const element = document.getElementsByClassName(
      'hidden-footer__container'
    )[0];

    if (element) {
      if (element.classList.contains('show')) {
        return true;
      } else {
        element.classList.add('show');
        return false;
      }
    }
  };

  setTimeout(() => {
    const header = document.getElementById('header');
    if (header) {
      setHeaderHeight(window.getComputedStyle(header).height);
    }
  }, 4500);

  if (year.id === '2020') {
    return (
      <>
        <div className="event" key={`event-2020`}>
          <ReactFullpage
            licenseKey={'518F7C98-E6514A4C-AF78105C-8D322AE9'}
            scrollingSpeed={1000}
            scrollOverflow={true}
            scrollOverflowOptions={{
              preventDefault: false
            }}
            lazyLoading={false}
            paddingTop={headerHeight}
            render={({ state, fullpageApi }) => {
              return (
                <ReactFullpage.Wrapper>
                  <div className={`section ${colourBackgroundClass}`}>
                    {/* Event */}
                    {event && (
                      <div className="delayed-fade-in">
                        <Container className="grid__container">
                          <Row
                            className={`grid__row intro-paragraph pb-24`}
                            id="event-paragraphs"
                          >
                            {event.paragraphs.map((paragraph, index) => {
                              return (
                                <div
                                  key={`paragraph-${index}`}
                                  className="contents"
                                >
                                  <Col lg={1} md={2} />
                                  <Col lg={11} md={10} sm={12} xs={12}>
                                    <p
                                      className={`large-headline-dynamic text-white fade-first`}
                                      style={{ textIndent: getTextIndent() }}
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
                        </Container>
                        {event.sections.map((section, sectionIndex) => {
                          const sectionId = event.themes[sectionIndex]
                            .replace(/\s+/g, '-')
                            .replace('&', 'and')
                            .toLowerCase();
                          return (
                            <section key={`section-${sectionIndex}`}>
                              <Container className="grid__container">
                                <Row
                                  className={`grid__row intro-paragraph pb-24`}
                                  id={sectionId}
                                >
                                  {section.paragraphs.map(
                                    (paragraph, index) => {
                                      return index === 0 ? (
                                        <div
                                          key={`paragraph-${index}`}
                                          className="contents"
                                        >
                                          <Col lg={1} md={2} />
                                          <Col
                                            lg={11}
                                            md={10}
                                            sm={12}
                                            xs={12}
                                            className="border-t border-white"
                                            style={{
                                              '--tw-border-opacity': '0.15',
                                              paddingBottom: '30px'
                                            }}
                                          />
                                          <Col lg={1} md={2} />
                                          <Col lg={5} md={3} sm={12} xs={12}>
                                            <p className="small-headline text-white">
                                              {event.themes[sectionIndex]}
                                            </p>
                                            <br />
                                          </Col>
                                          <Col
                                            lg={6}
                                            md={7}
                                            sm={12}
                                            xs={12}
                                            className="highlight light"
                                          >
                                            <p
                                              className={`small-headline fade-first`}
                                            >
                                              {ReactHtmlParser(paragraph)}
                                            </p>
                                            <br />
                                          </Col>
                                        </div>
                                      ) : (
                                        <div
                                          key={`paragraph-${index}`}
                                          className="contents"
                                        >
                                          <Col lg={6} md={5} />
                                          <Col
                                            lg={5}
                                            md={7}
                                            sm={12}
                                            xs={12}
                                            className="highlight light"
                                          >
                                            <p
                                              className={`small-body-2 fade-first`}
                                            >
                                              {ReactHtmlParser(paragraph)}
                                            </p>
                                            <br />
                                          </Col>
                                          <Col lg={1} />
                                        </div>
                                      );
                                    }
                                  )}
                                </Row>
                              </Container>
                              <Container className="grid__container resource-table-container transition-all">
                                <ResourceTable
                                  theme="white"
                                  data={section.resources}
                                  openModal={openModal}
                                  matches={getFilteredMatches(sectionId)}
                                  textColourClass={textColourClass}
                                  borderColourClass={borderColourClass}
                                  setOnClicks={() =>
                                    setOnClicks(sectionId, sectionIndex)
                                  }
                                  fullWidth={true}
                                />
                              </Container>
                              <Container className="grid__container">
                                {section.image && (
                                  <Row className="pt-20 grid__row">
                                    <Col lg={1} md={2} />
                                    <Col lg={11} md={10} sm={12} xs={12}>
                                      <div
                                        className="fade-first aspect-ratio"
                                        style={{
                                          paddingTop: `calc(${section.image.height}/${section.image.width} * 100%)`,
                                          backgroundImage: `url('/images/${section.image.source}')`
                                        }}
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
                              </Container>
                            </section>
                          );
                        })}

                        {/* padding below last resource table */}
                        <div className="pb-16" />
                      </div>
                    )}
                  </div>
                </ReactFullpage.Wrapper>
              );
            }}
          />
        </div>
      </>
    );
  } else {
    return (
      <>
        <div
          className="event"
          key={`event-${nextParams.year}-${nextParams.scene}-${nextParams.page}`}
        >
          <ReactFullpage
            licenseKey={'518F7C98-E6514A4C-AF78105C-8D322AE9'}
            scrollingSpeed={1000}
            afterLoad={afterLoad}
            onLeave={throttle(onLeave, 1000)}
            scrollOverflow={true}
            scrollOverflowOptions={{
              preventDefault: false
            }}
            lazyLoading={false}
            paddingTop={headerHeight}
            render={({ state, fullpageApi }) => {
              return (
                <ReactFullpage.Wrapper>
                  <div className={`section h-auto ${colourBackgroundClass}`}>
                    {/* Event */}
                    {event && (
                      <div className={`delayed-fade-in`}>
                        <Container className="grid__container">
                          <Row
                            className={`grid__row intro-paragraph pb-24`}
                            id="event-paragraphs"
                          >
                            {event.paragraphs.map((paragraph, index) => {
                              return (
                                <div
                                  key={`paragraph-${index}`}
                                  className="contents"
                                >
                                  <Col lg={1} md={2} />
                                  <Col
                                    lg={11}
                                    md={10}
                                    sm={12}
                                    xs={12}
                                    className={`highlight ${
                                      ['1989', '1997'].includes(year.id)
                                        ? 'light'
                                        : 'dark'
                                    }`}
                                  >
                                    <p
                                      className={`large-headline-dynamic fade-first`}
                                      style={{ textIndent: getTextIndent() }}
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
                        </Container>
                        <Container className="grid__container resource-table-container transition-all">
                          <ResourceTable
                            data={event.resources}
                            openModal={openModal}
                            matches={getFilteredMatches('event-paragraphs')}
                            textColourClass={textColourClass}
                            borderColourClass={borderColourClass}
                            setOnClicks={() => setOnClicks('event-paragraphs')}
                            fullWidth={false}
                          />
                        </Container>

                        <Container className="grid__container">
                          {event.imageLayout && (
                            <div style={{ height: '50vh' }} />
                          )}
                          {event.imageLayout &&
                            event.imageLayout.type === 'custom' && (
                              <Custom images={event.imageLayout.images} />
                            )}
                          {event.imageLayout &&
                            event.imageLayout.type === 'triptych' && (
                              <Triptych images={event.imageLayout.images} />
                            )}
                          {event.imageLayout &&
                            event.imageLayout.type === 'diptych' && (
                              <Diptych images={event.imageLayout.images} />
                            )}

                          {/* padding below last page element */}
                          <div className="pb-44" />
                        </Container>
                      </div>
                    )}
                    <div className={`hidden-footer__container bg-black`}>
                      <HiddenFooter
                        pageId="event"
                        nextParams={nextParams}
                        next={next}
                        changingParam={changingParam}
                        textClasses="text-white text-opacity-90"
                      />
                    </div>
                  </div>
                  <div className={`section w-full bg-black`}>
                    <Container className="grid__container">
                      <Row
                        className={`grid__row`}
                        style={{ height: '100vh' }}
                      ></Row>
                    </Container>
                  </div>
                </ReactFullpage.Wrapper>
              );
            }}
          />
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
  setIsTransitioning: PropTypes.func,
  navigateTo: PropTypes.func,
  colourBackgroundClass: PropTypes.string,
  textColourClass: PropTypes.string,
  borderColourClass: PropTypes.string,
  setAnecdoteData: PropTypes.func,
  isModalActive: PropTypes.func,
  setIsModalActive: PropTypes.func
};

export default Event;
