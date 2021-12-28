import { Col, Row, Visible } from 'react-grid-system';
import React from 'react';

import PropTypes from 'prop-types';
import ReactHtmlParser from 'react-html-parser';
import imageLookup from '../../images';

const Triptych = ({ images }) => {
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
            <p className={`small-body mt-2.5 mb-9 text-white fade-first`}>
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

Triptych.propTypes = {
  images: PropTypes.shape()
};

export default Triptych;
