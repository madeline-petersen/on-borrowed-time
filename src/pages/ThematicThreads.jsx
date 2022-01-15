import './ThematicThreads.scss';

import PropTypes from 'prop-types';
import React from 'react';
import { Col, Container, Row } from 'react-grid-system';
import { Helmet } from 'react-helmet';
import ReactHtmlParser from 'react-html-parser';

import data from '../data/thematic-threads.json';

const ThematicThreads = ({ backgroundColor }) => {
  return (
    <div
      className={`thematic-threads h-auto black-white-background ${backgroundColor}`}
    >
      <Helmet>
        <title>Thematic Threads | On Borrowed Time</title>
      </Helmet>
      <Container className="grid__container min-h-screen">
        <Row
          key="threads-1"
          className={`grid__row pt-32 absolute ${
            backgroundColor === 'white' ? 'show' : 'hide'
          }`}
        >
          {data.white.map(({ title }, index) => {
            if (index % 2 === 0) {
              return (
                <Col key={title} lg={12} md={12}>
                  <div className="thematic-thread-headline text-black cursor-pointer">
                    {ReactHtmlParser(title)}
                  </div>
                </Col>
              );
            } else {
              return (
                <>
                  <Col key={title} lg={3} />
                  <Col key={title} lg={9} md={12}>
                    <div className="thematic-thread-headline text-black cursor-pointer">
                      {ReactHtmlParser(title)}
                    </div>
                  </Col>
                </>
              );
            }
          })}
        </Row>
        <Row
          key="threads-2"
          className={`grid__row pt-32 ${
            backgroundColor === 'white' ? 'hide' : 'show'
          }`}
        >
          {data.black.map(({ title }, index) => {
            if (index % 2 === 0) {
              return (
                <Col key={title} lg={12} md={12}>
                  <div className="thematic-thread-headline text-white cursor-pointer">
                    {ReactHtmlParser(title)}
                  </div>
                </Col>
              );
            } else {
              return (
                <>
                  <Col key={title} lg={3} />
                  <Col key={title} lg={9} md={12}>
                    <div className="thematic-thread-headline text-white cursor-pointer">
                      {ReactHtmlParser(title)}
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
