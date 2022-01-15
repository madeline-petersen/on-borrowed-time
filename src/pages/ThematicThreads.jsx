import './ThematicThreads.scss';

import PropTypes from 'prop-types';
import React from 'react';
import { Col, Container, Row, Visible } from 'react-grid-system';
import { Helmet } from 'react-helmet';
import ReactHtmlParser from 'react-html-parser';

import data from '../data/thematic-threads.json';

const ThematicThreads = ({ backgroundColor }) => {
  const first = { content: 11, rightGutter: 1 };
  const firstSubtitles = { leftGutter: 1, content: 10, rightGutter: 1 };
  const second = { leftGutter: 4, content: 7, rightGutter: 1 };
  const secondSubtitles = { leftGutter: 5, content: 7 };

  return (
    <div
      className={`thematic-threads h-auto black-white-background ${backgroundColor}`}
    >
      <Helmet>
        <title>Thematic Threads | On Borrowed Time</title>
      </Helmet>
      <Container className="grid__container">
        <Row
          key="page-1"
          className={`grid__row pt-32 absolute ${
            backgroundColor === 'white' ? 'show' : 'hide'
          }`}
        >
          {data.white.map((thread, index) => {
            if (index % 2 === 0) {
              return (
                <span key={thread.title} className="contents">
                  <Col
                    xl={first.content}
                    lg={first.content}
                    md={first.content}
                    sm={first.content}
                  >
                    <div className="thematic-thread-headline text-black cursor-pointer">
                      {ReactHtmlParser(thread.title)}
                    </div>
                  </Col>
                  <Col
                    xl={first.rightGutter}
                    lg={first.rightGutter}
                    md={first.rightGutter}
                    sm={first.rightGutter}
                  />
                  <Col
                    xl={firstSubtitles.leftGutter}
                    lg={firstSubtitles.leftGutter}
                    md={firstSubtitles.leftGutter}
                    sm={firstSubtitles.leftGutter}
                  />
                  <Col
                    xl={firstSubtitles.content}
                    lg={firstSubtitles.content}
                    md={firstSubtitles.content}
                    sm={firstSubtitles.content}
                  >
                    {thread.subtitles.map(subtitle => {
                      return (
                        <div
                          key={subtitle}
                          className="small-headline text-black cursor-pointer flex"
                        >
                          {ReactHtmlParser(subtitle.year)}
                          <div className="ml-16">
                            {ReactHtmlParser(subtitle.title)}
                          </div>
                        </div>
                      );
                    })}
                  </Col>
                  <Col
                    xl={firstSubtitles.rightGutter}
                    lg={firstSubtitles.rightGutter}
                    md={firstSubtitles.rightGutter}
                    sm={firstSubtitles.rightGutter}
                  />
                </span>
              );
            } else {
              return (
                <span key={thread.title} className="contents">
                  <Col
                    xl={second.leftGutter}
                    lg={second.leftGutter}
                    md={second.leftGutter}
                    sm={second.leftGutter}
                  />
                  <Col
                    xl={second.content}
                    lg={second.content}
                    md={second.content}
                    sm={second.content}
                  >
                    <div className="thematic-thread-headline text-black cursor-pointer">
                      {ReactHtmlParser(thread.title)}
                    </div>
                  </Col>
                  <Col
                    xl={second.rightGutter}
                    lg={second.rightGutter}
                    md={second.rightGutter}
                    sm={second.rightGutter}
                  />
                  <Col
                    xl={secondSubtitles.leftGutter}
                    lg={secondSubtitles.leftGutter}
                    md={secondSubtitles.leftGutter}
                    sm={secondSubtitles.leftGutter}
                  />
                  <Col
                    xl={secondSubtitles.content}
                    lg={secondSubtitles.content}
                    md={secondSubtitles.content}
                    sm={secondSubtitles.content}
                  >
                    {thread.subtitles.map(subtitle => {
                      return (
                        <div
                          key={subtitle}
                          className="small-headline text-black cursor-pointer flex"
                        >
                          {ReactHtmlParser(subtitle.year)}
                          <div className="ml-16">
                            {ReactHtmlParser(subtitle.title)}
                          </div>
                        </div>
                      );
                    })}
                  </Col>
                </span>
              );
            }
          })}
        </Row>
        <Row
          key="page-2"
          className={`grid__row pt-32 ${
            backgroundColor === 'white' ? 'hide' : 'show'
          }`}
        >
          {data.white.map((thread, index) => {
            if (index % 2 === 0) {
              return (
                <span key={thread.title} className="contents">
                  <Col
                    xl={first.content}
                    lg={first.content}
                    md={first.content}
                    sm={first.content}
                  >
                    <div className="thematic-thread-headline text-white cursor-pointer">
                      {ReactHtmlParser(thread.title)}
                    </div>
                  </Col>
                  <Col
                    xl={first.rightGutter}
                    lg={first.rightGutter}
                    md={first.rightGutter}
                    sm={first.rightGutter}
                  />
                  <Col
                    xl={firstSubtitles.leftGutter}
                    lg={firstSubtitles.leftGutter}
                    md={firstSubtitles.leftGutter}
                    sm={firstSubtitles.leftGutter}
                  />
                  <Col
                    xl={firstSubtitles.content}
                    lg={firstSubtitles.content}
                    md={firstSubtitles.content}
                    sm={firstSubtitles.content}
                  >
                    {thread.subtitles.map(subtitle => {
                      return (
                        <div
                          key={subtitle}
                          className="small-headline text-white cursor-pointer flex"
                        >
                          {ReactHtmlParser(subtitle.year)}
                          <div className="ml-16">
                            {ReactHtmlParser(subtitle.title)}
                          </div>
                        </div>
                      );
                    })}
                  </Col>
                  <Col
                    xl={firstSubtitles.rightGutter}
                    lg={firstSubtitles.rightGutter}
                    md={firstSubtitles.rightGutter}
                    sm={firstSubtitles.rightGutter}
                  />
                </span>
              );
            } else {
              return (
                <span key={thread.title} className="contents">
                  <Col
                    xl={second.leftGutter}
                    lg={second.leftGutter}
                    md={second.leftGutter}
                    sm={second.leftGutter}
                  />
                  <Col
                    xl={second.content}
                    lg={second.content}
                    md={second.content}
                    sm={second.content}
                  >
                    <div className="thematic-thread-headline text-white cursor-pointer">
                      {ReactHtmlParser(thread.title)}
                    </div>
                  </Col>
                  <Col
                    xl={second.rightGutter}
                    lg={second.rightGutter}
                    md={second.rightGutter}
                    sm={second.rightGutter}
                  />
                  <Col
                    xl={secondSubtitles.leftGutter}
                    lg={secondSubtitles.leftGutter}
                    md={secondSubtitles.leftGutter}
                    sm={secondSubtitles.leftGutter}
                  />
                  <Col
                    xl={secondSubtitles.content}
                    lg={secondSubtitles.content}
                    md={secondSubtitles.content}
                    sm={secondSubtitles.content}
                  >
                    {thread.subtitles.map(subtitle => {
                      return (
                        <div
                          key={subtitle}
                          className="small-headline text-white cursor-pointer flex"
                        >
                          {ReactHtmlParser(subtitle.year)}
                          <div className="ml-16">
                            {ReactHtmlParser(subtitle.title)}
                          </div>
                        </div>
                      );
                    })}
                  </Col>
                </span>
              );
            }
          })}
        </Row>
      </Container>
    </div>
  );
};

ThematicThreads.propTypes = {
  backgroundColor: PropTypes.string
};

export default ThematicThreads;
