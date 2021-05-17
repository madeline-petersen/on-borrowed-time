import './Event.scss';

import { Col, Container, Row } from 'react-grid-system';
import React, { useState } from 'react';

import Footer from '../components/Footer';
import Header from '../components/Header';
import PropTypes from 'prop-types';
import ResourceTable from '../components/ResourceTable';
import SubHeader from '../components/SubHeader';
import { useScreenClass } from 'react-grid-system';

const Event = ({ year, scene, romanSceneNumber, event }) => {
  const screenClass = useScreenClass();
  const [isClicked, setClicked] = useState(false);

  return (
    <>
      <div className="bg-black">
        <Container className="grid__container border-l border-gray-50">
          <Row className="grid__row screen-transition-animation" />
        </Container>
      </div>

      <div className="h-auto bg-gray-10">
        <Header
          label={`${year.year} ${year.title}`}
          theme={{ background: 'gray-10', text: 'black' }}
          border={true}
          isClicked={isClicked}
        />

        <Container className="grid__container border-l border-gray-50">
          <Row className="grid__row shrink-animation">
            <Col lg={12} md={12} sm={12} xs={12} />
          </Row>
        </Container>

        <SubHeader
          theme={{ background: 'gray-10', text: 'black' }}
          isClicked={isClicked}
          romanSceneNumber={romanSceneNumber}
          title={scene.title}
        />

        {/* Event */}
        <Container className="grid__container border-l border-gray-50">
          <Row className={`grid__row pt-64 pb-24 delayed-fade-in`}>
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
          pushTo="artifacts"
          upNext="Artifacts"
          romanSceneNumber={romanSceneNumber}
          setClicked={setClicked}
          isClicked={isClicked}
          theme={{ background: 'gray-10', text: 'black' }}
        />
      </div>
    </>
  );
};

Event.propTypes = {
  year: PropTypes.shape(),
  scene: PropTypes.shape(),
  romanSceneNumber: PropTypes.string,
  event: PropTypes.shape()
};

export default Event;
