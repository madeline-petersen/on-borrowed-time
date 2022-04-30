import parse from 'html-react-parser';
import PropTypes from 'prop-types';
import React from 'react';
import { Col, Row } from 'react-grid-system';

const Custom = ({ images }) => {
  const getMargin = (image, index) => {
    let margin = '80px';

    if (index === 0) {
      margin = `max((100vh - 78px - ${image.height}/${image.width} * 100%) / 2, 80px)`;
    }

    return margin;
  };

  return (
    <>
      {images.map((image, index) => {
        return image.type === 'large' ? (
          <Row key={`image-${index}`} className="grid__row pb-20">
            <Col lg={1} />
            <Col lg={11} md={12}>
              <div
                className="aspect-ratio reveal"
                style={{
                  paddingTop: `calc(${image.height}/${image.width} * 100%)`,
                  marginTop: getMargin(image, index),
                  backgroundImage: `url('/images/${image.source}')`
                }}
              />
            </Col>
            <Col lg={3} />
            <Col lg={4} md={4}>
              <p className={`small-body text-white mt-8 fade-in-element`}>
                {parse(image.caption)}
              </p>
            </Col>
          </Row>
        ) : (
          <Row key={`image-${index}`} className="grid__row pb-24">
            <Col lg={3} />
            <Col lg={7} md={12}>
              <div
                className="aspect-ratio reveal"
                style={{
                  paddingTop: `calc(${image.height}/${image.width} * 100%)`,
                  marginTop: getMargin(image, index),
                  backgroundImage: `url('/images/${image.source}')`
                }}
              />
            </Col>
            <Col lg={3} />
            <Col lg={4} md={4}>
              <p className={`small-body text-white mt-5 fade-in-element`}>
                {parse(image.caption)}
              </p>
            </Col>
          </Row>
        );
      })}
    </>
  );
};

Custom.propTypes = {
  images: PropTypes.shape()
};

export default Custom;
