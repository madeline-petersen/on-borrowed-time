import { Col, Row } from 'react-grid-system';
import React from 'react';

import PropTypes from 'prop-types';
import ReactHtmlParser from 'react-html-parser';
import candles from '../../images/candles.png';
import car from '../../images/car.png';
import crowd from '../../images/crowd.png';
import tanks from '../../images/tanks.png';
import one from '../../images/1997-01.jpeg';
import two from '../../images/1997-02.jpeg';
import three from '../../images/1997-03.jpeg';
import four from '../../images/1997-04.jpeg';

const imageLookup = {
  car: car,
  crowd: crowd,
  tanks: tanks,
  one: one,
  two: two,
  three: three,
  four: four,
  candles: candles
};

const Large = ({ images, textColourClass }) => {
  return (
    <>
      {images.map((image, index) => {
        return index % 2 === 0 ? (
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
              <p className={`small-body ${textColourClass} mt-8 fade-first`}>
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
              <p className={`small-body ${textColourClass} mt-5 fade-second`}>
                {ReactHtmlParser(image.caption)}
              </p>
            </Col>
          </Row>
        );
      })}
    </>
  );
};

Large.propTypes = {
  images: PropTypes.shape(),
  textColourClass: PropTypes.string
};

export default Large;
