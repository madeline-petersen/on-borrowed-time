import React from 'react';
import { Col, Container, Row } from 'react-grid-system';
import ReactHtmlParser from 'react-html-parser';
import PropTypes from 'prop-types';

const ThematicThreads = ({ backgroundColor }) => {
  const thematicThreads = [
    'Fear of Ambiguity',
    'In-between Identity',
    'Seeking to Preserve Democratic Rights &amp; Freedoms',
    'Geographical Diaspora'
  ];

  let backgroundColourClasses = {
    black: 'bg-black',
    white: 'bg-white'
  };

  return (
    <div className={`h-auto ${backgroundColourClasses[backgroundColor]}`}>
      <Container className="grid__container min-h-screen">
        <Row className="grid__row pt-64 pb-20">
          {thematicThreads.map((thread, index) => {
            return (
              <>
                {index % 2 === 0 ? (
                  <>
                    <Col key={thread} lg={12} md={12}>
                      <div className="thematic-thread-headline">
                        {ReactHtmlParser(thread)}
                      </div>
                    </Col>
                  </>
                ) : (
                  <>
                    <Col lg={3} />
                    <Col key={thread} lg={9} md={12}>
                      <div className="thematic-thread-headline">
                        {ReactHtmlParser(thread)}
                      </div>
                    </Col>
                  </>
                )}
              </>
            );
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
