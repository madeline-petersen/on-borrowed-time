import { Col, Container, Row } from 'react-grid-system';

import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import React from 'react';

const Header = ({ label, theme, border, isClicked }) => {
  /**
   * PurgeCSS:
   * bg-black
   * bg-gray-10
   * text-black
   * text-gray-10
   **/

  return (
    <Container
      className={`grid__container sticky top-0 ${
        border ? 'border-l border-gray-50' : ''
      } bg-${theme.background}`}
    >
      <Row className={`grid__row pt-5 ${isClicked ? 'fade-out' : null}`}>
        <Col lg={3} md={4} sm={4} xs={4} className="medium-caption">
          <Link to="/" className={`text-${theme.text}`}>
            On Borrowed Time
          </Link>
        </Col>
        <Col lg={8} md={3} sm={4} xs={4} className="medium-caption">
          <Link className={`text-${theme.text}`}>{label}</Link>
        </Col>
        <Col lg={1} md={5} sm={4} xs={4} className="medium-caption">
          <Link to="/index" className={`text-${theme.text}`}>
            Index
          </Link>
        </Col>
      </Row>
    </Container>
  );
};

Header.defaultProps = {
  label: '',
  theme: { background: 'gray-10', text: 'black' },
  border: true,
  isClicked: false
};

Header.propTypes = {
  label: PropTypes.string,
  theme: PropTypes.shape(),
  border: PropTypes.bool,
  isClicked: PropTypes.bool
};

export default Header;
