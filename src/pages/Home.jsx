import { Col, Container, Row } from 'react-grid-system';

import React from 'react';

const Home = () => {
  return (
    <div className="h-screen bg-black">
      <Container className="grid__container">
        <Row className="grid__row">
          <div className="h-screen w-full flex flex-col justify-between py-5">
            <div>
              <Col lg={12} md={12} sm={12} xs={12}>
                <div className="flex justify-between items-center mb-2">
                  <h3 className="small-headline text-white">
                    A Borrowed Place, On Borrowed Time
                  </h3>
                  <h3 className="small-headline-characters text-white">
                    暫借的地方，暫借的時間
                  </h3>
                </div>
              </Col>
              <Col lg={12} md={12} sm={12} xs={12}>
                <h3 className="small-body text-white">Project coming soon</h3>
              </Col>
            </div>
            <div>
              <Col lg={12} md={12} sm={12} xs={12}>
                <h3 className="small-body text-white opacity-50">
                  The Handover — 9230 days 16:16:20
                </h3>
              </Col>
            </div>
          </div>
        </Row>
      </Container>
    </div>
  );
};

export default Home;
