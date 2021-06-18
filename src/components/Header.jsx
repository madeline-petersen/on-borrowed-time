import { Col, Container, Row } from 'react-grid-system';

import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import React from 'react';

const Header = ({
  label,
  pageId,
  title,
  isTransitioningFromReflection,
  romanSceneNumber
}) => {
  let textClasses =
    pageId === 'home' || pageId === 'intro'
      ? 'text-white'
      : pageId === 'event'
      ? 'contrast-text gray'
      : 'contrast-text';

  return (
    <span
      className={`absolute w-full top-0 z-10 medium-caption ${textClasses}`}
    >
      <Container className="grid__container">
        <Row className={`grid__row pt-5`}>
          <Col lg={3} md={4} sm={4} xs={4} />
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
        {pageId === 'event' && (
          <Row className="grid__row shrink-animation">
            <Col lg={12} md={12} sm={12} xs={12} />
          </Row>
        )}
        <Row className={`grid__row`}>
          <Col lg={3} md={4} sm={4} xs={4} />
          <Col lg={9} md={8} sm={8} xs={8}>
            {pageId === 'event' && (
              <p
                className={`medium-caption scene-animation absolute top-0 pt-2 ${textClasses}`}
              >
                Scene {romanSceneNumber}
              </p>
            )}
            <p
              className={`small-body ${pageId === 'event' &&
                'title-animation'} ${pageId === 'reflection' &&
                isTransitioningFromReflection &&
                'fade-out'} pt-2 pb-5 ${textClasses}`}
            >
              {title}
            </p>
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
  pageId: PropTypes.string,
  title: PropTypes.string,
  isTransitioningFromReflection: PropTypes.bool,
  romanSceneNumber: PropTypes.string
};

export default Header;
