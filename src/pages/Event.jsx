import './Event.scss';

import { Col, Container, Row } from 'react-grid-system';
import React, { useEffect, useState } from 'react';

import Footer from '../components/Footer';
import PropTypes from 'prop-types';
import ResourceTable from '../components/ResourceTable';
import SubHeader from '../components/SubHeader';
import { useScreenClass } from 'react-grid-system';

const Event = ({
  year,
  scene,
  romanSceneNumber,
  event,
  nextParams,
  changingParam,
  next
}) => {
  const [isClicked, setClicked] = useState(false);
  const screenClass = useScreenClass();
  const start = 'gray-30';
  const end = 'black';

  useEffect(() => {
    setTimeout(function() {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }, 1000);
  }, []);

  return (
    <>
      {/* Backgrounds for page transition */}
      <div className={`h-screen bg-${end} absolute top-0 w-full`}>
        <div
          className={`h-screen bg-${start} absolute top-0 w-full ${
            isClicked ? 'screen-shrink' : ''
          }`}
        />
      </div>

      <div className="h-auto bg-gray-30">
        <Container className="grid__container min-h-screen">
          <Row className="grid__row shrink-animation">
            <Col lg={12} md={12} sm={12} xs={12} />
          </Row>

          <SubHeader
            romanSceneNumber={romanSceneNumber}
            title={scene.title}
            animate={true}
          />

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
                          className={`large-headline text-black`}
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
  year: PropTypes.shape(),
  scene: PropTypes.shape(),
  romanSceneNumber: PropTypes.string,
  event: PropTypes.shape(),
  next: PropTypes.shape(),
  nextParams: PropTypes.shape(),
  changingParam: PropTypes.string
};

export default Event;
