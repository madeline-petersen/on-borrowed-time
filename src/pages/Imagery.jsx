import './Imagery.scss';

import { Col, Container, Row } from 'react-grid-system';
import React, { useEffect } from 'react';

import { ArrowDown16 } from '@carbon/icons-react';
import { Link } from 'react-router-dom';
import car from '../images/car.png';
import crowd from '../images/crowd.png';

const Imagery = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="h-auto background-animation">
      {/* Header */}
      <Container className="grid__container sticky top-0 border-l border-gray-50 background-animation">
        <Row className="grid__row pt-5 foreground-fade-in">
          <Col lg={3} md={4} sm={4} xs={4} className="medium-caption">
            <Link to="/" className="text-gray-10">
              On Borrowed Time
            </Link>
          </Col>
          <Col lg={8} md={3} sm={4} xs={4} className="medium-caption">
            <Link className="text-gray-10">
              1989 &ldquo;The June Fourth Incident&rdquo;
            </Link>
          </Col>
          <Col lg={1} md={5} sm={4} xs={4} className="medium-caption">
            <Link to="/index" className="text-gray-10">
              Index
            </Link>
          </Col>
        </Row>
      </Container>

      {/* Event intro */}
      <Container className="grid__container sticky top-8 border-l border-gray-50">
        {/* solid black background */}
        <Row className="grid__row bg-black background-animation">
          <Col lg={3} md={3} />
          <Col lg={9} md={9} sm={12} xs={12}>
            <p className="medium-caption scene-animation pt-2 absolute top-0 text-gray-50">
              Scene I
            </p>
            <p className="small-body title-animation pt-2 pb-2 text-gray-50">
              Death of an Icon
            </p>
          </Col>
        </Row>
      </Container>

      {/* Reflection */}
      <Container className="grid__container border-l border-gray-50">
        <Row className="grid__row pt-64 pb-20 foreground-fade-in">
          <Col lg={1} />
          <Col lg={11} md={12}>
            <img src={crowd} alt="" />
          </Col>
          <Col lg={3} />
          <Col lg={4} md={4}>
            <p className="small-body text-gray-40 mt-8">
              Some two hundred thousand pro-democracy students staged an
              unauthorized demonstration in Tiananmen Square during the funeral
              ceremony of the Chinese Communist Party leader and liberal
              reformer Hu Yaobang, on April 22, 1989. Photograph by Catherine
              Henriette/AFP/Getty.
            </p>
          </Col>
        </Row>
        <Row className="grid__row pt-20 pb-24 foreground-fade-in">
          <Col lg={3} />
          <Col lg={7} md={12}>
            <img src={car} alt="" />
          </Col>
          <Col lg={3} />
          <Col lg={4} md={4}>
            <p className="small-body text-gray-40 mt-5">
              A weary protester pleads with a PLA officer sitting in his truck
              to not crackdown on the student demonstrators in Tiananmen Square.
              (Photo by Peter Turnley/Getty Images)
            </p>
          </Col>
        </Row>
      </Container>

      {/* Footer */}
      <Container className="grid__container border-l border-gray-50">
        <Row className="grid__row">
          <Col lg={1} md={1} />
          <Col lg={11} md={11}>
            <div className="border-t border-gray-60 mt-44" />
          </Col>
        </Row>
        <Row className="grid__row bg-black">
          <Col lg={1} md={1} />
          <Link to="/reflection" className="contents cursor-pointer">
            <Col lg={2} md={2} sm={2} xs={2}>
              <p className="small-body text-gray-40 pb-4 pt-4">Up Next</p>
            </Col>
            <Col lg={2} md={2} sm={2} xs={2}>
              <p className="small-body text-gray-40 pb-4 pt-4">Scene I</p>
            </Col>
            <Col
              lg={7}
              md={7}
              sm={7}
              xs={7}
              style={{ display: 'flex', justifyContent: 'space-between' }}
            >
              <p className="small-body text-gray-40 pb-4 pt-4">Reflection</p>
              <p className="text-gray-40 pb-4 pt-4">
                <ArrowDown16 />
              </p>
            </Col>
          </Link>
        </Row>
      </Container>
    </div>
  );
};

export default Imagery;
