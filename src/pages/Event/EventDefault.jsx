import './Event.scss';

import ReactFullpage from '@fullpage/react-fullpage';
import parse from 'html-react-parser';
import { throttle } from 'lodash';
import PropTypes from 'prop-types';
import React from 'react';
import { Col, Container, Row } from 'react-grid-system';

import HiddenFooter from '../../components/HiddenFooter';
import ResourceTable from '../../components/ResourceTable';
import hasLightText from '../../helpers/hasLightText';

const Event = ({
  year,
  event,
  nextParams,
  changingParam,
  next,
  headerHeight,
  colourBackgroundClass,
  textColourClass,
  borderColourClass,
  getFilteredMatches,
  openModal,
  getTextIndent,
  afterLoad,
  beforeLeave,
  setOnClicks,
  generateKey,
  onScrollOverflow
}) => {
  return (
    <>
      <div className="event" key={() => generateKey()}>
        <ReactFullpage
          licenseKey={'DNAK9-ZU2SK-BDKK8-JZ61H-YIUAK'}
          // Scrolling
          scrollingSpeed={1000}
          scrollOverflow={true}
          // Design
          paddingTop={headerHeight}
          // Custom selectors
          credits={{ enabled: false }}
          lazyLoading={false}
          // Events
          afterLoad={afterLoad}
          beforeLeave={throttle(beforeLeave, 1000)}
          onScrollOverflow={onScrollOverflow}
          render={({ state, fullpageApi }) => {
            return (
              <ReactFullpage.Wrapper>
                <div className={`section h-auto ${colourBackgroundClass}`}>
                  {event && (
                    <div className="delayed-fade-in">
                      <Container className="grid__container">
                        <Row
                          className="grid__row intro-paragraph pb-12 lg:pb-24"
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
                                  className={`highlight transition-all ${
                                    hasLightText(year.id) ? 'light' : 'dark'
                                  }`}
                                >
                                  <p
                                    className={`large-headline-dynamic ${year.id ===
                                      '2020' && 'text-white'} fade-first`}
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
                      <Container className="grid__container resource-table-container transition-all">
                        {event.resources && (
                          <ResourceTable
                            data={event.resources}
                            openModal={openModal}
                            matches={getFilteredMatches('event-paragraphs')}
                            textColourClass={textColourClass}
                            borderColourClass={borderColourClass}
                            setOnClicks={() => setOnClicks('event-paragraphs')}
                          />
                        )}
                      </Container>

                      <div className="pb-44" />
                    </div>
                  )}
                </div>
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
  year: PropTypes.shape(),
  event: PropTypes.shape(),
  next: PropTypes.shape(),
  nextParams: PropTypes.shape(),
  headerHeight: PropTypes.string,
  changingParam: PropTypes.string,
  colourBackgroundClass: PropTypes.string,
  textColourClass: PropTypes.string,
  borderColourClass: PropTypes.string,
  getFilteredMatches: PropTypes.func,
  afterLoad: PropTypes.func,
  getTextIndent: PropTypes.func,
  openModal: PropTypes.func,
  beforeLeave: PropTypes.func,
  setOnClicks: PropTypes.func,
  generateKey: PropTypes.func,
  onScrollOverflow: PropTypes.func
};

export default Event;
