import './Event.scss';

import ReactFullpage from '@fullpage/react-fullpage';
import parse from 'html-react-parser';
import { throttle } from 'lodash';
import PropTypes from 'prop-types';
import React from 'react';
import { Col, Container, Row } from 'react-grid-system';

import HiddenFooter from '../../components/HiddenFooter';
import ResourceTable from '../../components/ResourceTable';

const Event = ({
  event,
  nextParams,
  changingParam,
  next,
  headerHeight,
  colourBackgroundClass,
  textColourClass,
  borderColourClass,
  getFilteredMatches,
  getTextIndent,
  onLeave,
  afterLoad,
  openModal,
  setOnClicks,
  generateKey
}) => {
  return (
    <>
      <div className="event" key={() => generateKey()}>
        <ReactFullpage
          licenseKey={'7K067-1U2MK-3MUI9-JIYX7-UXLKN'}
          scrollingSpeed={1000}
          onLeave={throttle(onLeave, 5000, { leading: true })}
          afterLoad={afterLoad}
          scrollOverflow={true}
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
                          className={`grid__row intro-paragraph pb-12 lg:pb-24`}
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
                                    {parse(paragraph)}
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
                                className="grid__row intro-paragraph pb-12 lg:pb-24"
                                id={sectionId}
                              >
                                {section.paragraphs.map((paragraph, index) => {
                                  return index === 0 ? (
                                    <div
                                      key={`paragraph-${index}`}
                                      className="contents section-introduction"
                                    >
                                      <Col lg={1} md={2} />
                                      <Col
                                        lg={11}
                                        md={10}
                                        sm={12}
                                        xs={12}
                                        className="border-t border-white"
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
                                          {parse(paragraph)}
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
                                          {parse(paragraph)}
                                        </p>
                                        <br />
                                      </Col>
                                      <Col lg={1} />
                                    </div>
                                  );
                                })}
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
                                width="full"
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

                                  <Col lg={6} md={5} />
                                  <Col lg={4} md={7}>
                                    <p
                                      className={`small-body text-white mt-8 fade-first text-opacity-70`}
                                    >
                                      {parse(section.image.caption)}
                                    </p>
                                  </Col>
                                </Row>
                              )}
                            </Container>
                          </section>
                        );
                      })}

                      {/* padding below last caption */}
                      <div className="pb-48" />
                    </div>
                  )}
                  <div className="hidden-footer__container bg-black">
                    {nextParams && (
                      <HiddenFooter
                        pageId="event"
                        nextParams={nextParams}
                        next={next}
                        changingParam={changingParam}
                        textClasses="text-white text-opacity-90"
                      />
                    )}
                  </div>
                </div>
                <div className="section w-full bg-black">
                  <Container className="grid__container">
                    <Row className="grid__row h-screen" />
                  </Container>
                </div>
              </ReactFullpage.Wrapper>
            );
          }}
        />
      </div>
    </>
  );
};

Event.propTypes = {
  event: PropTypes.shape(),
  headerHeight: PropTypes.string,
  colourBackgroundClass: PropTypes.string,
  textColourClass: PropTypes.string,
  borderColourClass: PropTypes.string,
  next: PropTypes.shape(),
  nextParams: PropTypes.shape(),
  afterLoad: PropTypes.func,
  changingParam: PropTypes.string,
  onLeave: PropTypes.func,
  getTextIndent: PropTypes.func,
  openModal: PropTypes.func,
  getFilteredMatches: PropTypes.func,
  setOnClicks: PropTypes.func,
  generateKey: PropTypes.func
};

export default Event;
