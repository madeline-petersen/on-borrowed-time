import { Col, Container, Row } from 'react-grid-system';

import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import React from 'react';

const Header = ({ label, theme, border, isClicked }) => {
  /**
   * PurgeCSS:
   * bg-black
   * bg-gray-30
   * text-black
   * text-gray-30
   **/

  return (
    <Container
      className={`grid__container sticky top-0 ${
        border ? `border-l border-${theme.border}` : ''
      } bg-${theme.background}`}
    >
      <Row className={`grid__row pt-5 ${isClicked ? 'fade-out' : null}`}>
        <Col
          lg={3}
          md={4}
          sm={4}
          xs={4}
          className="medium-caption foreground-fade-in"
        >
          <Link to="/" className={`text-${theme.text}`}>
            On Borrowed Time
          </Link>
        </Col>
        <Col
          lg={8}
          md={7}
          sm={4}
          xs={4}
          className="medium-caption foreground-fade-in"
        >
          <Link className={`text-${theme.text}`}>{label}</Link>
        </Col>
        <Col
          lg={1}
          md={1}
          sm={4}
          xs={4}
          className="medium-caption foreground-fade-in"
        >
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
  theme: { background: 'gray-30', text: 'black', border: 'gray-60' },
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
