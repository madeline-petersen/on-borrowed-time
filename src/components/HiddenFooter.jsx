import { Col, Container, Row } from 'react-grid-system';

import { ArrowRight16, ArrowDown16 } from '@carbon/icons-react';
import PropTypes from 'prop-types';
import React from 'react';
import ReactHtmlParser from 'react-html-parser';
import './HiddenFooter.scss';

const HiddenFooter = ({
  // used to determine navigation and labels
  nextParams,
  changingParam,

  // object that contains title of next page
  next,

  // current page id (event, reflection)
  pageId,

  // colours
  textClasses
}) => {
  return (
    <Container className="grid__container">
      <Row
        className="grid__row clickable-area cursor-pointer"
        onClick={() => {}}
      >
        <Col lg={1} className="cursor-default" />
        <Col lg={2} md={3} sm={3} xs={3}>
          <p className={`small-body pb-4 pt-4 ${textClasses} fade-in-element`}>
            Up Next
          </p>
        </Col>
        <Col lg={2} md={2} sm={2} xs={2}>
          <p className={`small-body pb-4 pt-4 ${textClasses} fade-in-element`}>
            {/* current scene, next scene, next year */}
            {changingParam === 'year'
              ? nextParams.year
              : ReactHtmlParser(`Scene&nbsp;${nextParams.scene}`)}
          </p>
        </Col>
        <Col
          lg={7}
          md={7}
          sm={7}
          xs={7}
          style={{ display: 'flex', justifyContent: 'space-between' }}
        >
          <p className={`small-body pb-4 pt-4 ${textClasses} fade-in-element`}>
            {/* next page, next scene, next year */}
            {ReactHtmlParser(next.title)}
          </p>
          <p className={`pb-4 pt-4 ${textClasses} fade-in-element`}>
            {pageId === 'intro' ? <ArrowRight16 /> : <ArrowDown16 />}
          </p>
        </Col>
      </Row>
    </Container>
  );
};

HiddenFooter.defaultProps = {};

HiddenFooter.propTypes = {
  nextParams: PropTypes.shape(),
  changingParam: PropTypes.string,
  next: PropTypes.shape(),
  pageId: PropTypes.string,
  textClasses: PropTypes.string
};

export default HiddenFooter;
