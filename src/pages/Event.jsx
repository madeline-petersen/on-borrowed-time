import './Event.scss';

import { Col, Container, Row } from 'react-grid-system';
import React, { useEffect, useState } from 'react';

import Footer from '../components/Footer';
import Header from '../components/Header';
import PropTypes from 'prop-types';
import ResourceTable from '../components/ResourceTable';
import SubHeader from '../components/SubHeader';
import { useScreenClass } from 'react-grid-system';

const Event = ({ year, scene, romanSceneNumber, event, nextParams, next }) => {
  const screenClass = useScreenClass();
  const start = 'gray-30';
  const end = 'black';
  const [isClicked, setClicked] = useState(false);

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
        <Container className="grid__container border-l border-gray-60">
          <Header
            label={`${year.id} ${year.title}`}
            theme={{ background: 'gray-30', text: 'black', border: 'gray-60' }}
            border={true}
          />

          <Row className="grid__row shrink-animation">
            <Col lg={12} md={12} sm={12} xs={12} />
          </Row>

          <SubHeader
            theme={{ background: 'gray-30', text: 'black', border: 'gray-60' }}
            romanSceneNumber={romanSceneNumber}
            title={scene.title}
          />

          {/* Event */}
          <div
            id="overflow-container"
            className={`${isClicked ? 'fade-out' : 'delayed-fade-in'}`}
          >
            <Row className={`grid__row intro-paragraph pb-24`}>
              {event.paragraphs.map(paragraph => {
                return (
                  <>
                    <Col lg={1} md={2} />
                    <Col lg={11} md={10} sm={12} xs={12}>
                      <p
                        className={`large-headline`}
                        style={{
                          textIndent: ['lg', 'xl', 'xxl'].includes(screenClass)
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
                  </>
                );
              })}
            </Row>
            <ResourceTable data={event.resources} />

            <Footer
              nextParams={nextParams}
              next={next}
              changingParam={'page'}
              setClicked={setClicked}
              isClicked={isClicked}
              theme={{
                background: 'gray-30',
                text: 'black',
                border: 'gray-60'
              }}
            />
          </div>
        </Container>
      </div>
    </>
  );
};

Event.propTypes = {
  year: PropTypes.shape(),
  scene: PropTypes.shape(),
  romanSceneNumber: PropTypes.string,
  event: PropTypes.shape(),
  next: PropTypes.shape(),
  nextParams: PropTypes.string
};

export default Event;
