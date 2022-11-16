import './Header.scss';

import cx from 'classnames/bind';
import parse from 'html-react-parser';
import PropTypes from 'prop-types';
import React from 'react';
import { Col, Container, Row, Visible } from 'react-grid-system';
import { Hidden } from 'react-grid-system';
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
  thematicThreadsBgWhite,
  timelineClasses
}) => {
  let history = useHistory();
  const navigateToUrl = url => {
    history.push(`/${url}`);
  };

  const whiteText = pageId === 'home' || pageId === 'intro';

  return (
    <span
      className={cx('absolute w-full top-0 z-10 medium-caption', {
        [timelineClasses]: !whiteText
      })}
      id="header"
    >
      <Container className="grid__container">
        <Row className="grid__row pt-5">
          <Hidden sm xs>
            <Col xl={3} lg={3} md={4} sm={0} xs={0} />
          </Hidden>
          <Col xl={6} lg={6} md={6} sm={12} xs={12}>
            <p
              className={cx({
                'contrast-text': !whiteText,
                'text-white': whiteText,
                'cursor-pointer': pageId !== 'intro',
                [colourBackgroundClass]: pageId === 'event',
                'pointer-events-none': pageId === 'intro'
              })}
              onClick={() => navigateTo(currentYear)}
            >
              {parse(label)}
            </p>
            {pageId === 'threads' && (
              <ThematicThreadsToggle
                setBackgroundColor={setBackgroundColor}
                thematicThreadsBgWhite={thematicThreadsBgWhite}
              />
            )}
          </Col>
          <Visible xxl xl lg>
            <Col xxl={1} xl={1} lg={1}>
              <span className="hover:opacity-70 transition-all">
                <p
                  className={cx('cursor-pointer float-left', {
                    'contrast-text': !whiteText,
                    'text-white': whiteText,
                    [colourBackgroundClass]: pageId === 'event',
                    transparent: pageId === 'info' || pageId === 'threads',
                    'pointer-events-none': pageId === 'index' // no pointer events if already on index page
                  })}
                  onClick={() => navigateToUrl('index')}
                >
                  Index
                </p>
              </span>
            </Col>
            <Col xxl={1} xl={1} lg={1}>
              <span className="hover:opacity-70 transition-all">
                <p
                  className={cx('cursor-pointer float-left', {
                    'contrast-text': !whiteText,
                    'text-white': whiteText,
                    [colourBackgroundClass]: pageId === 'event',
                    transparent: pageId === 'info' || pageId === 'index',
                    'pointer-events-none': pageId === 'threads' // no pointer events if already on threads page
                  })}
                  onClick={() => navigateToUrl('threads')}
                >
                  Threads
                </p>
              </span>
            </Col>
            <Col xxl={1} xl={1} lg={1}>
              <span className="hover:opacity-70 transition-all">
                <p
                  className={cx('cursor-pointer float-left', {
                    'contrast-text': !whiteText,
                    'text-white': whiteText,
                    [colourBackgroundClass]: pageId === 'event',
                    transparent: pageId === 'threads' || pageId === 'index',
                    'pointer-events-none': pageId === 'info' // no pointer events if already on editor's note page
                  })}
                  onClick={() => navigateToUrl('info')}
                >
                  Intent
                </p>
              </span>
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
          <Hidden sm xs>
            <Col lg={3} md={4} sm={0} xs={0} />
          </Hidden>
          <Col lg={9} md={8} sm={12} xs={12}>
            {pageId === 'event' && (
              <p
                key={`${currentYear}-${romanSceneNumber}-scene`}
                className={cx(
                  'medium-caption scene-animation absolute top-0 pt-2',
                  {
                    'contrast-text': !whiteText,
                    'text-white': whiteText,
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
                className={cx('medium-caption pt-2 pb-5', {
                  'contrast-text': !whiteText,
                  'text-white': whiteText,
                  [`title-animation ${colourBackgroundClass}`]:
                    pageId === 'event',
                  'cursor-pointer': pageId !== 'event',
                  'fade-out': transitionType && pageId === 'reflection',
                  'pointer-events-none': pageId === 'event'
                })}
                onClick={() =>
                  navigateTo(currentYear, romanSceneNumber, 'event')
                }
              >
                {parse(title)}
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
  thematicThreadsBgWhite: PropTypes.bool,
  timelineClasses: PropTypes.string
};

export default Header;
