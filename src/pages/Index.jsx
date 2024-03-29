import ReactFullpage from '@fullpage/react-fullpage';
import PropTypes from 'prop-types';
import React from 'react';
import { Col, Container, Row } from 'react-grid-system';
import { Helmet } from 'react-helmet';

import IndexResourceTable from '../components/IndexResourceTable';
import resources from '../data/index.json';

const Index = ({ headerHeight }) => {
  return (
    <>
      <Helmet>
        <title>Index | On Borrowed Time</title>
      </Helmet>
      <ReactFullpage
        licenseKey={'DNAK9-ZU2SK-BDKK8-JZ61H-YIUAK'}
        // Scrolling
        scrollingSpeed={1000}
        scrollOverflow={true}
        // Design
        paddingTop={headerHeight}
        // Custom selectors
        credits={{ enabled: false }}
        render={() => {
          return (
            <>
              <div className="Index section bg-white">
                <Container className="grid__container mt-16">
                  <Row className="grid__row">
                    <Col md={3} />
                    <Col md={8}>
                      <div className="large-headline-static mb-12">
                        A curated collection of articles, academic journals{' '}
                        <span>&</span> stories that contribute to shaping Hong
                        Kong’s collective memory.
                      </div>
                    </Col>
                  </Row>
                </Container>
                <Container className="grid__container index-resource-table-container transition-all">
                  <IndexResourceTable
                    theme="black"
                    data={resources}
                    textColourClass=""
                    borderColourClass=""
                  />
                </Container>
              </div>
            </>
          );
        }}
      />
    </>
  );
};

Index.propTypes = {
  headerHeight: PropTypes.string
};

export default Index;
