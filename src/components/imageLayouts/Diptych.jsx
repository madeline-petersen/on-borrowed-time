import parse from 'html-react-parser';
import PropTypes from 'prop-types';
import React from 'react';
import { Col, Row, Visible } from 'react-grid-system';

const Diptych = ({ images, headerHeight }) => {
  return (
    <Row className="grid__row pb-20">
      <Col lg={3} />
      {images.map(image => (
        <>
          <Visible md sm xs>
            <Col md={4} sm={4} xs={4} />
          </Visible>
          <Col key={image.source} lg={2} md={3} sm={4}>
            <div
              className="aspect-ratio reveal"
              style={{
                paddingTop: `calc(${image.height}/${image.width} * 100%)`,
                marginTop: `max((100vh - ${headerHeight} - ${image.height}/${image.width} * 100%) / 2, 80px)`,
                backgroundImage: `url('/images/${image.source}')`
              }}
            />
            <p className={`small-body mt-2.5 mb-9 text-white fade-in-element`}>
              {parse(image.caption)}
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
  headerHeight: PropTypes.string,
  images: PropTypes.shape()
};

export default Diptych;
