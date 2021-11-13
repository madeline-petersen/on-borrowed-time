import { Col, Row, Visible } from 'react-grid-system';
import React from 'react';

import PropTypes from 'prop-types';
import ReactHtmlParser from 'react-html-parser';
import portrait1 from '../../images/2014_Scene01_BennyTai.png';
import portrait2 from '../../images/2014_Scene01_ChuYiuMing.png';
import portrait3 from '../../images/2014_Scene01_ChanKinMan.png';

const imageLookup = {
  portrait1: portrait1,
  portrait2: portrait2,
  portrait3: portrait3
};

const Diptych = ({ images }) => {
  return (
    <Row className="grid__row pb-20">
      <Col lg={3} />
      {images.map((image, index) => (
        <>
          <Visible md sm xs>
            <Col md={4} sm={4} xs={4} />
          </Visible>
          <Col key={image.source} lg={2} md={3} sm={4}>
            <img
              className="fade-first w-full"
              src={imageLookup[image.source]}
              alt={image.alt}
            />
            <p className={`small-body mt-2.5 mb-9 fade-first`}>
              {ReactHtmlParser(image.caption)}
            </p>
          </Col>
          <Visible md sm xs>
            <Col md={5} sm={4} xs={5} />
          </Visible>
        </>
      ))}
    </Row>
  );
};

Diptych.propTypes = {
  images: PropTypes.shape()
};

export default Diptych;
