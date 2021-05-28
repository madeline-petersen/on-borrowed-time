import { Col, Row } from 'react-grid-system';

import React from 'react';

const HeaderSpacer = () => {
  return (
    <Row className={`grid__row`}>
      <Col lg={3} md={4} sm={4} xs={4} />
      <Col lg={9} md={8} sm={8} xs={8}>
        <p className={`small-body pt-2 pb-5`} style={{ marginTop: '34px' }}>
          &nbsp;
        </p>
      </Col>
    </Row>
  );
};

HeaderSpacer.defaultProps = {};

HeaderSpacer.propTypes = {};

export default HeaderSpacer;
