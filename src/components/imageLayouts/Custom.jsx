import { Col, Row } from 'react-grid-system';
import React from 'react';

import PropTypes from 'prop-types';
import ReactHtmlParser from 'react-html-parser';
import imageLookup from '../../images';

const Custom = ({ images }) => {
  return (
    <>
      {images.map((image, index) => {
        return image.type === 'large' ? (
          <Row key={`image-${index}`} className="grid__row pb-20">
            <Col lg={1} />
            <Col lg={11} md={12}>
              <img
                className="fade-first"
                src={imageLookup[image.source]}
                alt=""
              />
            </Col>
            <Col lg={3} />
            <Col lg={4} md={4}>
              <p className={`small-body text-white mt-8 fade-first`}>
                {ReactHtmlParser(image.caption)}
              </p>
            </Col>
          </Row>
        ) : (
          <Row key={`image-${index}`} className="grid__row pt-20 pb-24">
            <Col lg={3} />
            <Col lg={7} md={12}>
              <img
                className="fade-second"
                src={imageLookup[image.source]}
                alt=""
              />
            </Col>
            <Col lg={3} />
            <Col lg={4} md={4}>
              <p className={`small-body text-white mt-5 fade-second`}>
                {ReactHtmlParser(image.caption)}
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
