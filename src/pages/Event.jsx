import './Event.scss';

import { Col, Container, Row } from 'react-grid-system';
import React, { useEffect, useState } from 'react';

import Footer from '../components/Footer';
import PropTypes from 'prop-types';
import ResourceTable from '../components/ResourceTable';
import SubHeader from '../components/SubHeader';
import { useScreenClass } from 'react-grid-system';

const Event = ({ year, scene, romanSceneNumber, event, nextParams, next }) => {
  const screenClass = useScreenClass();
  const [isClicked, setClicked] = useState(false);

  useEffect(() => {
    setTimeout(function() {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }, 1000);
  }, []);

  return (
    <>
      <Container className="grid__container border-l border-gray-60">
        <Row className="grid__row shrink-animation">
          <Col lg={12} md={12} sm={12} xs={12} />
        </Row>
      </Container>

      <SubHeader
        theme={{ background: 'gray-30', text: 'black', border: 'gray-60' }}
        isClicked={isClicked}
        romanSceneNumber={romanSceneNumber}
        title={scene.title}
      />

      {/* Event */}
      <Container className="grid__container border-l border-gray-60">
        <Row className={`grid__row intro-paragraph pb-24 delayed-fade-in`}>
          {event.paragraphs.map(paragraph => {
            return (
              <>
                <Col lg={1} md={2} />
                <Col lg={11} md={10} sm={12} xs={12}>
                  <p
                    className={`large-headline ${
                      isClicked ? 'fade-out' : null
                    }`}
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
        <ResourceTable tableState={isClicked} data={event.resources} />
      </Container>

      <Footer
        nextParams={nextParams}
        next={next}
        changingParam={'page'}
        setClicked={setClicked}
        isClicked={isClicked}
        theme={{ background: 'gray-30', text: 'black', border: 'gray-60' }}
      />
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
