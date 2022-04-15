import './Index.scss';

import ReactFullpage from '@fullpage/react-fullpage';
import React from 'react';
import { Col, Container, Row } from 'react-grid-system';
import { Helmet } from 'react-helmet';

const Index = () => {
  return (
    <>
      <Helmet>
        <title>Index | On Borrowed Time</title>
      </Helmet>
      <ReactFullpage
        licenseKey={'518F7C98-E6514A4C-AF78105C-8D322AE9'}
        scrollingSpeed={1000}
        scrollOverflow={true}
        scrollOverflowOptions={{
          preventDefault: false
        }}
        paddingTop="78px"
        render={() => {
          return (
            <>
              <div className="Index section bg-white">
                <Container className="grid__container">
                  <Row className="grid__row">
                    <Col md={3} />
                    <Col md={6}>
                      <div>
                        A curated collection of articles, papers, and stories
                        that contribute to shaping Hong Kong’s collective
                        memory.
                      </div>
                    </Col>
                  </Row>
                </Container>
              </div>
            </>
          );
        }}
      />
    </>
  );
};

export default Index;
