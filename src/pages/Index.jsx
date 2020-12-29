import './Index.css';

import { Col, Container, Row } from 'react-grid-system';

import React from 'react';
import cx from 'classnames/bind';
import data from '../data/index.json';
import useHover from '../hooks/useHover';

const Index = () => {
  const [hoverRef1, isHovered1] = useHover();
  const [hoverRef2, isHovered2] = useHover();
  const [hoverRef3, isHovered3] = useHover();
  const [hoverRef4, isHovered4] = useHover();
  const [hoverRef5, isHovered5] = useHover();
  const [hoverRef6, isHovered6] = useHover();
  const [hoverRef7, isHovered7] = useHover();
  console.log(data);

  return (
    <div className="Index">
      <Container className="grid__container">
        <Row className="grid__row directory">
          <Col md={3} className="medium-body directory__item-description">
            {[
              isHovered1,
              isHovered2,
              isHovered3,
              isHovered4,
              isHovered5,
              isHovered6,
              isHovered7
            ].some(x => !!x)
              ? 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque congue euismod lorem consequat vehicula. Integer eu bibendum nisl, sed ultrices dolor. Nullam dapibus, nunc vitae tempor scelerisque, mi elit rhoncus purus, quis euismod mauris sapien quis ipsum.'
              : null}
          </Col>

          <Col
            offset={{ md: 1 }}
            md={8}
            className={cx('large-headline', 'directory__list', {
              'directory__list--hover': [
                isHovered1,
                isHovered2,
                isHovered3,
                isHovered4,
                isHovered5,
                isHovered6,
                isHovered7
              ].some(x => !!x)
            })}
          >
            <span ref={hoverRef1}>All</span>
            <br />
            <span ref={hoverRef2}>Language</span>
            <br />
            <span ref={hoverRef3}>Censorship</span>
            <br />
            <span ref={hoverRef4}>Collective Memory</span>
            <br />
            <span ref={hoverRef5}>Diaspora</span>
            <br />
            <span ref={hoverRef6}>In-Betweeness</span>
            <br />
            <span ref={hoverRef7}>National Identity</span>
          </Col>
        </Row>
        <Row className="grid__row divider thick" />
        <Row className="grid__row lower-nav-bar">
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
        <Row className="grid__row divider thin" />
        {data.events.map((event, eventIndex) => {
          return (
            <>
              <Row className="grid__row event-header">
                <Col md={4} className="medium-body">
                  <div>{event.title}</div>
                  <div>1989</div>
                </Col>
              </Row>
              {event.subEvents.map((subevent, subeventIndex) => {
                return (
                  <>
                    <Row className="grid__row divider thinnest" />
                    <Row className="grid__row index-entry">
                      <Col md={4} className="regular-caption">
                        {subevent.title}
                      </Col>
                      {subevent.entries.map((entry, entryIndex) => {
                        return (
                          <>
                            <Col
                              offset={{ md: entryIndex ? 4 : 0 }}
                              md={3}
                              className="regular-caption truncate"
                            >
                              {entry.anecdote}
                            </Col>
                            <Col
                              md={3}
                              className="regular-caption light truncate"
                            >
                              {entry.source}
                            </Col>
                            <Col
                              md={2}
                              className="regular-caption light truncate"
                            >
                              {entry.type}
                            </Col>
                          </>
                        );
                      })}
                    </Row>
                  </>
                );
              })}
            </>
          );
        })}
      </Container>
    </div>
  );
};

export default Index;
