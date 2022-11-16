import './Footer.scss';

import { ArrowDown16, ArrowRight16 } from '@carbon/icons-react';
import parse from 'html-react-parser';
import PropTypes from 'prop-types';
import React from 'react';
import { Col, Row } from 'react-grid-system';

const Footer = ({
  // action on click footer
  onClick,

  // used to determine navigation and labels
  nextParams,
  changingParam,

  // object that contains title of next page
  next,

  // current page id (intro, event, artifacts, reflection)
  pageId
}) => {
  let textClasses =
    'pb-4 pt-4 small-body text-white text-opacity-90 fade-in-element';
  let borderClasses = 'border-t border-white border-opacity-10 fade-in-element';

  return (
    <>
      <Row className="grid__row">
        <Col lg={1} />
        <Col lg={11} md={12}>
          <p className={`${borderClasses} mt-44`} />
        </Col>
      </Row>
      <Row
        className="grid__row clickable-area cursor-pointer"
        onClick={onClick}
      >
        {/* override cursor-pointer for left gutter */}
        <Col lg={1} className="cursor-default" />
        <Col lg={2} md={3} sm={3} xs={3}>
          <p className={textClasses}>
            {/* current scene number, next scene number, or next year */}
            {changingParam === 'year'
              ? nextParams.year
              : parse(`Scene&nbsp;${nextParams.scene}`)}
          </p>
        </Col>
        <Col lg={8} md={8} sm={8} xs={8}>
          <p className={textClasses}>
            {/* next page, next scene, or next year */}
            {parse(next.title)}
          </p>
        </Col>
        <Col lg={1} md={1} sm={1} xs={1} className="flex justify-end">
          <p className={textClasses}>
            {pageId === 'intro' ? <ArrowRight16 /> : <ArrowDown16 />}
          </p>
        </Col>
      </Row>
    </>
  );
};

Footer.propTypes = {
  pageId: PropTypes.string,
  nextParams: PropTypes.shape(),
  next: PropTypes.shape(),
  changingParam: PropTypes.string,
  onClick: PropTypes.func
};

export default Footer;
