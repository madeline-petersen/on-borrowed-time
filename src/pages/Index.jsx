import './Index.scss';

import { Col, Container, Row } from 'react-grid-system';
import React, { useEffect } from 'react';

import Header from '../components/Header';
import cx from 'classnames/bind';
import data from '../data/index.json';
import useHover from '../hooks/useHover';
import { useState } from 'react';

const Index = () => {
  const [selectedTheme, setSelectedTheme] = useState(null);
  const [showMiniMenu, setShowMiniMenu] = useState(false);

  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, []);

  const [hoverRef1, isHovered1] = useHover();
  const [hoverRef2, isHovered2] = useHover();
  const [hoverRef3, isHovered3] = useHover();
  const [hoverRef4, isHovered4] = useHover();
  const [hoverRef5, isHovered5] = useHover();
  const [hoverRef6, isHovered6] = useHover();
  const [hoverRef7, isHovered7] = useHover();

  const anyIsHovered = () => {
    return [
      isHovered1,
      isHovered2,
      isHovered3,
      isHovered4,
      isHovered5,
      isHovered6,
      isHovered7
    ].some(x => !!x);
  };

  const anyIsSelected = () => {
    return selectedTheme !== null;
  };

  const isSelected = id => {
    return id === selectedTheme;
  };

  const onThemeSelect = id => {
    if (selectedTheme === null) {
      setSelectedTheme(id);
      setShowMiniMenu(false);
      window.scroll({ top: 389, left: 0, behavior: 'smooth' });
    } else {
      setSelectedTheme(null);
      setShowMiniMenu(true);
      window.scroll({ top: 0, left: 0, behavior: 'smooth' });
    }
  };

  return (
    <div className="Index">
      <Header
        theme={{ background: 'white', text: 'black' }}
        label="Theme"
        border={false}
      />

      <div
        className={cx('page-container', {
          'page-container--mini': showMiniMenu
        })}
      >
        <Container
          className={cx('grid__container', 'directory__container', 'sticky', {
            'directory__container--mini': showMiniMenu
          })}
        >
          <Row className={cx('grid__row', 'directory')}>
            <Col md={3} className="directory__item-description">
              {anyIsHovered() ? (
                <div className="directory__item-description--visible">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Quisque congue euismod lorem consequat vehicula. Integer eu
                  bibendum nisl, sed ultrices dolor. Nullam dapibus, nunc vitae
                  tempor scelerisque, mi elit rhoncus purus, quis euismod mauris
                  sapien quis ipsum.
                </div>
              ) : (
                <div className="directory__item-description--hidden">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Quisque congue euismod lorem consequat vehicula. Integer eu
                  bibendum nisl, sed ultrices dolor. Nullam dapibus, nunc vitae
                  tempor scelerisque, mi elit rhoncus purus, quis euismod mauris
                  sapien quis ipsum.
                </div>
              )}
            </Col>
            <Col
              offset={{ md: 1 }}
              md={8}
              className={cx('directory__list', 'pt-16', {
                'directory__list--hover': anyIsHovered(),
                'directory__list--unselected': !anyIsSelected(),
                'directory__list--selected': anyIsSelected()
              })}
            >
              <span
                ref={hoverRef1}
                id="all"
                onClick={e => onThemeSelect(e.target.id)}
                className={cx('directory__list-item', {
                  'sticky directory__list-item--selected': isSelected('all')
                })}
              >
                All
              </span>
              <span
                ref={hoverRef2}
                id="language"
                onClick={e => onThemeSelect(e.target.id)}
                className={cx('directory__list-item', {
                  'sticky directory__list-item--selected': isSelected(
                    'language'
                  )
                })}
              >
                Language
              </span>
              <span
                ref={hoverRef3}
                id="censorship"
                onClick={e => {
                  onThemeSelect(e.target.id);
                }}
                className={cx('directory__list-item', {
                  'sticky directory__list-item--selected': isSelected(
                    'censorship'
                  )
                })}
              >
                Censorship
              </span>
              <span
                ref={hoverRef4}
                id="collective_memory"
                onClick={e => onThemeSelect(e.target.id)}
                className={cx('directory__list-item', {
                  'sticky directory__list-item--selected': isSelected(
                    'collective_memory'
                  )
                })}
              >
                Collective Memory
              </span>
              <span
                ref={hoverRef5}
                id="diaspora"
                onClick={e => onThemeSelect(e.target.id)}
                className={cx('directory__list-item', {
                  'sticky directory__list-item--selected': isSelected(
                    'diaspora'
                  )
                })}
              >
                Diaspora
              </span>
              <span
                ref={hoverRef6}
                id="in_betweeness"
                onClick={e => onThemeSelect(e.target.id)}
                className={cx('directory__list-item', {
                  'sticky directory__list-item--selected': isSelected(
                    'in_betweeness'
                  )
                })}
              >
                In-Betweeness
              </span>
              <span
                ref={hoverRef7}
                id="national_identity"
                onClick={e => onThemeSelect(e.target.id)}
                className={cx('directory__list-item', {
                  'sticky directory__list-item--selected': isSelected(
                    'national_identity'
                  )
                })}
              >
                National Identity
              </span>
            </Col>
          </Row>
        </Container>
        <Container className="grid__container lower-nav__container sticky">
          <Row className="grid__row">
            <Col lg={12} md={12}>
              <div className="border-t border-gray-100 opacity-75" />
            </Col>
          </Row>
          <Row className="grid__row lower-nav-bar pt-2 pb-8">
            <Col md={4} className="medium-caption">
              Event
            </Col>
            <Col md={3} className="medium-caption">
              Anecdotes
            </Col>
            <Col md={3} className="medium-caption">
              Source
            </Col>
            <Col md={2} className="medium-caption">
              Type
            </Col>
          </Row>
          <Row className="grid__row">
            <Col lg={12} md={12}>
              <div className="border-t border-gray-100 opacity-25" />
            </Col>
          </Row>
        </Container>
        <Container className="grid__container event__container sticky bg-white">
          {data.events.map((event, eventIndex) => {
            return (
              <>
                <Row className="grid__row pt-5 pb-12">
                  <Col md={4} className="medium-body">
                    <div>{event.title}</div>
                    <div>1989</div>
                  </Col>
                </Row>
                <Row className="grid__row">
                  <Col lg={12} md={12}>
                    <div className="border-t border-gray-100 opacity-25" />
                  </Col>
                </Row>
              </>
            );
          })}
        </Container>
        {data.events.map((event, eventIndex) => {
          return event.subEvents.map((subevent, subeventIndex) => {
            return (
              <Container key={subeventIndex} className="grid__container pt-4">
                <Row className="grid__row index-entry">
                  <Col md={4} className="small-body pb-4">
                    {subevent.title}
                  </Col>
                  {subevent.entries.map((entry, entryIndex) => {
                    return (
                      <>
                        <Col
                          offset={{ md: entryIndex ? 4 : 0 }}
                          md={3}
                          className="small-body truncate pb-4"
                        >
                          {entry.anecdote}
                        </Col>
                        <Col md={3} className="small-body light truncate pb-4">
                          {entry.source}
                        </Col>
                        <Col md={2} className="small-body light truncate pb-4">
                          {entry.type}
                        </Col>
                      </>
                    );
                  })}
                </Row>
                <Row className="grid__row divider thinnest" />
              </Container>
            );
          });
        })}
      </div>
    </div>
  );
};

export default Index;
