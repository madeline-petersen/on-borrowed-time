import React, { useState } from 'react';
import { Col, Container, Row } from 'react-grid-system';
import ReactHtmlParser from 'react-html-parser';
import PropTypes from 'prop-types';
import './ThematicThreads.scss';

const ThematicThreads = ({ backgroundColor }) => {
  const thematicThreads1 = [
    'Fear of Ambiguity',
    'In-between Identity',
    'Seeking to Preserve Democratic Rights &amp; Freedoms',
    'Geographical Diaspora'
  ];

  const thematicThreads2 = [
    'Solidarity & Resistance',
    'Hong Kong Identity',
    'Advocating for Genuine Democracy in the midst of Eroding Rights & Freedoms',
    'Cultural Diaspora'
  ];

  return (
    <div
      className={`thematic-threads h-auto black-white-background ${backgroundColor}`}
    >
      <Container className="grid__container min-h-screen">
        <Row
          key={`threads-1`}
          className={`grid__row pt-32 absolute ${
            backgroundColor === 'white' ? 'show' : 'hide'
          }`}
        >
          {thematicThreads1.map((thread, index) => {
            if (index % 2 === 0) {
              return (
                <Col key={thread} lg={12} md={12}>
                  <div className="thematic-thread-headline text-black cursor-pointer hover:opacity-60">
                    {ReactHtmlParser(thread)}
                  </div>
                </Col>
              );
            } else {
              return (
                <>
                  <Col key={thread} lg={3} />
                  <Col key={thread} lg={9} md={12}>
                    <div className="thematic-thread-headline text-black cursor-pointer hover:opacity-60">
                      {ReactHtmlParser(thread)}
                    </div>
                  </Col>
                </>
              );
            }
          })}
        </Row>
        <Row
          key={`threads-2`}
          className={`grid__row pt-32 ${
            backgroundColor === 'white' ? 'hide' : 'show'
          }`}
        >
          {thematicThreads2.map((thread, index) => {
            if (index % 2 === 0) {
              return (
                <Col key={thread} lg={12} md={12}>
                  <div className="thematic-thread-headline text-white cursor-pointer hover:opacity-60">
                    {ReactHtmlParser(thread)}
                  </div>
                </Col>
              );
            } else {
              return (
                <>
                  <Col key={thread} lg={3} />
                  <Col key={thread} lg={9} md={12}>
                    <div className="thematic-thread-headline text-white cursor-pointer hover:opacity-60">
                      {ReactHtmlParser(thread)}
                    </div>
                  </Col>
                </>
              );
            }
          })}
        </Row>
      </Container>
    </div>
  );
};

ThematicThreads.propTypes = {
  backgroundColor: PropTypes.string
};

export default ThematicThreads;
