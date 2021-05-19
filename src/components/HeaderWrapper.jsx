import { Col, Container, Row } from 'react-grid-system';

import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import React from 'react';

const HeaderWrapper = ({ label, theme, border, isClicked, children }) => {
  /**
   * PurgeCSS:
   * bg-black
   * bg-gray-30
   * text-black
   * text-gray-30
   **/

  return (
    <>
      <div className="bg-black">
        <Container className="grid__container border-l border-gray-60">
          <Row className="grid__row screen-transition-animation" />
        </Container>
      </div>

      <div className="h-auto bg-gray-30">
        <Container
          className={`grid__container sticky top-0 ${
            border ? `border-l border-${theme.border}` : ''
          } bg-${theme.background}`}
        >
          <Row className={`grid__row pt-5 ${isClicked ? 'fade-out' : null}`}>
            <Col lg={3} md={4} sm={4} xs={4} className="medium-caption">
              <Link to="/" className={`text-${theme.text}`}>
                On Borrowed Time
              </Link>
            </Col>
            <Col lg={8} md={7} sm={4} xs={4} className="medium-caption">
              <Link className={`text-${theme.text}`}>{label}</Link>
            </Col>
            <Col lg={1} md={1} sm={4} xs={4} className="medium-caption">
              <Link to="/index" className={`text-${theme.text}`}>
                Index
              </Link>
            </Col>
          </Row>
        </Container>

        {children}
      </div>
    </>
  );
};

HeaderWrapper.defaultProps = {
  label: '',
  theme: { background: 'gray-30', text: 'black', border: 'gray-60' },
  border: true,
  isClicked: false
};

HeaderWrapper.propTypes = {
  label: PropTypes.string,
  theme: PropTypes.shape(),
  border: PropTypes.bool,
  isClicked: PropTypes.bool,
  children: PropTypes.node
};

export default HeaderWrapper;
