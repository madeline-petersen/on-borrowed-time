import './HiddenFooter.scss';

import { ArrowDown16, ArrowRight16 } from '@carbon/icons-react';
import PropTypes from 'prop-types';
import React from 'react';
import { Col, Container, Row } from 'react-grid-system';
import ReactHtmlParser from 'react-html-parser';

const HiddenFooter = ({
  // used to determine navigation and labels
  nextParams,
  changingParam,

  // object that contains title of next page
  next,

  // current page id (event, artifacts, reflection)
  pageId,

  // colours
  textClasses
}) => {
  let borderClasses = 'border-white border-opacity-20';

  const showBorder =
    (pageId === 'reflection' && changingParam === 'year') ||
    pageId === 'artifacts';

  return (
    <Container className="grid__container">
      {showBorder && (
        <Row className={`grid__row`}>
          <Col lg={1} />
          <Col lg={11} md={12}>
            <p className={`border-t ${borderClasses}`} />
          </Col>
        </Row>
      )}
      <Row
        className="grid__row clickable-area cursor-pointer"
        onClick={() => fullpage_api.moveSectionDown()}
      >
        <Col lg={1} className="cursor-default" />
        <Col lg={2} md={3} sm={3} xs={3}>
          <p className={`small-body pb-4 pt-4 ${textClasses}`}>Up Next</p>
        </Col>
        <Col lg={2} md={2} sm={2} xs={2}>
          <p className={`small-body pb-4 pt-4 ${textClasses}`}>
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
          <p className={`small-body pb-4 pt-4 ${textClasses}`}>
            {/* next page, next scene, next year */}
            {ReactHtmlParser(next.title)}
          </p>
          <p className={`pb-4 pt-4 ${textClasses}`}>
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
