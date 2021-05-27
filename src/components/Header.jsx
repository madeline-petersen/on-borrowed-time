import { Col, Container, Row } from 'react-grid-system';

import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import React from 'react';

const Header = ({ label, pageId }) => {
  let textClasses = pageId === 'intro' ? 'text-white' : 'contrast-text';

  return (
    <span
      className={`absolute w-full top-0 z-10 medium-caption ${textClasses}`}
    >
      <Container className="grid__container">
        <Row className={`grid__row pt-5`}>
          <Col lg={3} md={4} sm={4} xs={4}>
            <Link to="/" className={textClasses}>
              On Borrowed Time
            </Link>
          </Col>
          <Col lg={3} md={3} sm={3} xs={3}>
            <Link to="/" className={textClasses}>
              {label}
            </Link>
          </Col>
          <Col lg={5} md={4} sm={4} xs={4} />
          <Col lg={1} md={1} sm={1} xs={1}>
            <Link to="/" className={textClasses}>
              Index
            </Link>
          </Col>
        </Row>
      </Container>
    </span>
  );
};

Header.defaultProps = {
  label: ''
};

Header.propTypes = {
  label: PropTypes.string,
  pageId: PropTypes.string
};

export default Header;
