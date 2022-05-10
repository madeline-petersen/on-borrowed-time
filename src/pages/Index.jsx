import ReactFullpage from '@fullpage/react-fullpage';
import React from 'react';
import { Col, Container, Row } from 'react-grid-system';
import { Helmet } from 'react-helmet';

import ResourceTable from '../components/ResourceTable';
import resources from '../data/index.json';

const Index = () => {
  return (
    <>
      <Helmet>
        <title>Index | On Borrowed Time</title>
      </Helmet>
      <ReactFullpage
        licenseKey={'7K067-1U2MK-3MUI9-JIYX7-UXLKN'}
        scrollingSpeed={1000}
        scrollOverflow={true}
        paddingTop="78px"
        render={() => {
          return (
            <>
              <div className="Index section bg-white">
                <Container className="grid__container">
                  <Row className="grid__row">
                    <Col md={3} />
                    <Col md={6}>
                      <div className="small-headline mb-12">
                        A curated collection of articles, papers, and stories
                        that contribute to shaping Hong Kong’s collective
                        memory.
                      </div>
                    </Col>
                  </Row>
                </Container>
                <Container className="grid__container resource-table-container transition-all">
                  <ResourceTable
                    theme="black"
                    data={resources}
                    openModal={() => {}}
                    matches={[]}
                    textColourClass=""
                    borderColourClass=""
                    setOnClicks={() => {}}
                    width="max"
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

export default Index;
