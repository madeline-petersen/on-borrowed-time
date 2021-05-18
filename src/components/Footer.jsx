import { Col, Container, Row } from 'react-grid-system';

import { ArrowDown16 } from '@carbon/icons-react';
import PropTypes from 'prop-types';
import React from 'react';
import { useHistory } from 'react-router-dom';

const Footer = ({
  isClicked,
  setClicked,
  nextParams,
  changingParam,
  next,
  theme
}) => {
  let history = useHistory();

  const handleOnClick = () => {
    setClicked(true);
    setTimeout(function() {
      // executed after 1 second
      history.push(
        `/${nextParams.year}/${nextParams.scene}/${nextParams.page}`
      );
    }, 1000);
  };

  return (
    <Container className={`grid__container border-l border-${theme.border}`}>
      <Row className={`grid__row`}>
        <Col lg={1} md={1} />
        <Col lg={11} md={11}>
          <div
            className={`border-t border-${theme.border} mt-44 ${
              isClicked ? 'fade-out' : null
            }`}
          />
        </Col>
      </Row>
      <Row
        className={`grid__row bg-${theme.background}`}
        onClick={() => handleOnClick()}
      >
        <Col lg={1} md={1} />
        <div
          className={`contents ${isClicked ? 'fade-out' : 'cursor-pointer'}`}
        >
          <Col lg={2} md={2} sm={2} xs={2}>
            <p
              className={`small-body pb-4 pt-4 text-${theme.text} ${
                isClicked ? 'fade-out' : null
              }`}
            >
              Up Next
            </p>
          </Col>
          <Col lg={2} md={2} sm={2} xs={2}>
            <p
              className={`small-body pb-4 pt-4 text-${theme.text} ${
                isClicked ? 'fade-out' : null
              }`}
            >
              {/* current scene, next scene, next year */}
              {changingParam === 'year'
                ? nextParams.year
                : nextParams.scene
                    .replace(/-/g, ' ')
                    .charAt(0)
                    .toUpperCase() +
                  nextParams.scene.replace(/-/g, ' ').slice(1)}
            </p>
          </Col>
          <Col
            lg={7}
            md={7}
            sm={7}
            xs={7}
            style={{ display: 'flex', justifyContent: 'space-between' }}
          >
            <p
              className={`small-body pb-4 pt-4 text-${theme.text} ${
                isClicked ? 'fade-out' : null
              }`}
            >
              {/* next page, next scene, next year */}
              {next.title}
            </p>
            <p
              className={`pb-4 pt-4 text-${theme.text} ${
                isClicked ? 'fade-out' : null
              }`}
            >
              <ArrowDown16 />
            </p>
          </Col>
        </div>
      </Row>
    </Container>
  );
};

Footer.defaultProps = {
  theme: { background: 'gray-30', text: 'black', border: 'gray-60' }
};

Footer.propTypes = {
  nextParams: PropTypes.string,
  next: PropTypes.shape(),
  setClicked: PropTypes.func,
  isClicked: PropTypes.bool,
  theme: PropTypes.shape(),
  changingParam: PropTypes.string
};

export default Footer;
