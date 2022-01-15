import './Header.scss';

import cx from 'classnames/bind';
import PropTypes from 'prop-types';
import React from 'react';
import { Col, Container, Row, Visible } from 'react-grid-system';
import ReactHtmlParser from 'react-html-parser';
import { useHistory } from 'react-router-dom';

import ThematicThreadsToggle from './ThematicThreadsToggle';

const Header = ({
  currentYear,
  label,
  pageId,
  title,
  transitionType,
  romanSceneNumber,
  navigateTo,
  colourBackgroundClass,
  setBackgroundColor,
  isWhite,
  timelineClasses
}) => {
  let history = useHistory();
  const navigateToUrl = url => {
    history.push(`/${url}`);
  };

  const onClickYear = () => {
    if (pageId !== 'intro') {
      navigateTo(currentYear);
    }
  };

  const onClickScene = () => {
    if (pageId !== 'event') {
      navigateTo(currentYear, romanSceneNumber, 'event');
    }
  };

  return (
    <span
      className={`absolute w-full top-0 z-10 medium-caption ${timelineClasses}`}
      id="header"
    >
      <Container className="grid__container">
        <Row className="grid__row pt-5">
          <Col xl={3} lg={3} md={4} sm={4} xs={4} />
          <Col xl={7} lg={5} md={6} sm={8} xs={8}>
            <p
              className={cx('contrast-text', {
                'cursor-pointer': pageId !== 'intro',
                [colourBackgroundClass]: pageId === 'event'
              })}
              onClick={onClickYear}
            >
              {ReactHtmlParser(label)}
            </p>
            {pageId === 'thematic-threads' && (
              <ThematicThreadsToggle
                setBackgroundColor={setBackgroundColor}
                isWhite={isWhite}
              />
            )}
          </Col>
          <Visible xxl xl lg>
            <Col xl={1} lg={2}>
              <p
                className={cx('cursor-pointer contrast-text', {
                  [colourBackgroundClass]: pageId === 'event',
                  transparent: pageId === 'editors-note'
                })}
                onClick={() => navigateToUrl('thematic-threads')}
              >
                Thematic&nbsp;Threads
              </p>
            </Col>
            <Col xl={1} lg={2}>
              <p
                className={cx('cursor-pointer contrast-text float-right', {
                  [colourBackgroundClass]: pageId === 'event',
                  transparent: pageId === 'thematic-threads'
                })}
                onClick={() => navigateToUrl('editors-note')}
              >
                Editor&apos;s&nbsp;Note
              </p>
            </Col>
          </Visible>
        </Row>
        {pageId === 'event' && (
          <Row
            key={`${currentYear}-${romanSceneNumber}-spacer`}
            className="grid__row shrink-animation"
          >
            <Col lg={12} md={12} sm={12} xs={12} />
          </Row>
        )}
        <Row className={`grid__row`}>
          <Col lg={3} md={4} sm={4} xs={4} />
          <Col lg={9} md={8} sm={8} xs={8}>
            {pageId === 'event' && (
              <p
                key={`${currentYear}-${romanSceneNumber}-scene`}
                className={cx(
                  'medium-caption scene-animation absolute top-0 pt-2 contrast-text',
                  {
                    [colourBackgroundClass]: pageId === 'event',
                    'fade-out': transitionType
                  }
                )}
              >
                Scene&nbsp;{romanSceneNumber}
              </p>
            )}
            {title && (
              <p
                key={`${currentYear}-${romanSceneNumber}-title`}
                className={cx('medium-caption pt-2 pb-5 contrast-text', {
                  [`title-animation ${colourBackgroundClass}`]:
                    pageId === 'event',
                  'cursor-pointer': pageId !== 'event',
                  'fade-out': transitionType && pageId === 'reflection'
                })}
                onClick={onClickScene}
              >
                {ReactHtmlParser(title)}
              </p>
            )}
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
  currentYear: PropTypes.string,
  label: PropTypes.string,
  pageId: PropTypes.string,
  title: PropTypes.string,
  transitionType: PropTypes.bool,
  romanSceneNumber: PropTypes.string,
  navigateTo: PropTypes.func,
  colourBackgroundClass: PropTypes.string,
  setBackgroundColor: PropTypes.func,
  isWhite: PropTypes.bool,
  timelineClasses: PropTypes.string
};

export default Header;
