import './ThematicThreads.scss';

import PropTypes from 'prop-types';
import React from 'react';
import { Col, Container, Row } from 'react-grid-system';
import { Helmet } from 'react-helmet';
import ReactHtmlParser from 'react-html-parser';

const ThematicThreads = ({ backgroundColor }) => {
  const thematicThreads1 = [
    'Fear o<span>f</span> Ambiguity',
    'In-between Identity',
    'Seeking to Preserve Democratic Rights <span>&amp;</span> Freedoms',
    'Geographical Diaspora'
  ];

  const thematicThreads2 = [
    'Solidarity <span>&amp;</span> Resistance',
    'Hong Kong Identity',
    'Advocating <span>f</span>or Genuine Democracy in the midst o<span>f</span> Eroding Rights <span>&amp;</span> Freedoms',
    '<span>Cultural</span> Diaspora'
  ];

  return (
    <div
      className={`thematic-threads h-auto black-white-background ${backgroundColor}`}
    >
      <Helmet>
        <title>Thematic Threads | On Borrowed Time</title>
      </Helmet>
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
