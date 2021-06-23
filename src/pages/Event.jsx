import './Event.scss';

import { Col, Container, Row } from 'react-grid-system';
import React, { useEffect, useState } from 'react';

import Footer from '../components/Footer';
import HeaderSpacer from '../components/HeaderSpacer';
import PropTypes from 'prop-types';
import ResourceTable from '../components/ResourceTable';
import { useScreenClass } from 'react-grid-system';

const Event = ({
  event,
  nextParams,
  changingParam,
  next,
  setTransitioningFromReflection,
  navigateTo,
  setIsTransitioning
}) => {
  const [isClicked, setClicked] = useState(false);
  const screenClass = useScreenClass();

  useEffect(() => {
    setIsTransitioning(false);
    setTransitioningFromReflection(false);
    setTimeout(function() {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }, 1000);
  }, []);

  return (
    <>
      {/* Backgrounds for page transition */}
      <div className={`h-screen bg-black absolute top-0 w-full`}>
        <div
          className={`h-screen bg-gray-30 absolute top-0 w-full ${
            isClicked ? 'screen-shrink' : ''
          }`}
        />
      </div>

      <div className="h-auto bg-gray-30">
        <Container className="grid__container min-h-screen">
          <HeaderSpacer />

          {/* Event */}
          {event && (
            <div
              id="overflow-container"
              className={`${isClicked ? 'fade-out' : 'delayed-fade-in'}`}
            >
              <Row className={`grid__row intro-paragraph pb-24`}>
                {event.paragraphs.map((paragraph, index) => {
                  return (
                    <div key={`paragraph-${index}`} className="contents">
                      <Col lg={1} md={2} />
                      <Col lg={11} md={10} sm={12} xs={12}>
                        <p
                          className={`large-headline-dynamic text-black`}
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
                          {paragraph}
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
                nextParams={nextParams}
                next={next}
                changingParam={changingParam}
                setClicked={setClicked}
                isClicked={isClicked}
                navigateTo={navigateTo}
                setIsTransitioning={setIsTransitioning}
                theme={{
                  background: 'gray-30',
                  text: 'black',
                  border: 'gray-60'
                }}
              />
            </div>
          )}
        </Container>
      </div>
    </>
  );
};

Event.propTypes = {
  years: PropTypes.arrayOf(PropTypes.shape()),
  event: PropTypes.shape(),
  next: PropTypes.shape(),
  nextParams: PropTypes.shape(),
  changingParam: PropTypes.string,
  setTransitioningFromReflection: PropTypes.func,
  setIsTransitioning: PropTypes.func,
  navigateTo: PropTypes.func
};

export default Event;
