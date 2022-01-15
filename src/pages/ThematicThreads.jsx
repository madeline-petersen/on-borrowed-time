import './ThematicThreads.scss';
import 'fullpage.js/vendors/scrolloverflow';

import ReactFullpage from '@fullpage/react-fullpage';
import PropTypes from 'prop-types';
import React from 'react';
import { Col, Container, Row } from 'react-grid-system';
import { Helmet } from 'react-helmet';
import ReactHtmlParser from 'react-html-parser';

import data from '../data/thematic-threads.json';

const ThematicThreads = ({ backgroundColor }) => {
  const first = { content: 11, rightGutter: 1 };
  const firstSubtitles = { leftGutter: 1, content: 10, rightGutter: 1 };
  const second = { leftGutter: 4, content: 7, rightGutter: 1 };
  const secondSubtitles = { leftGutter: 5, content: 7 };

  return (
    <>
      <Helmet>
        <title>Thematic Threads | On Borrowed Time</title>
      </Helmet>
      <ReactFullpage
        licenseKey={'518F7C98-E6514A4C-AF78105C-8D322AE9'}
        scrollingSpeed={1000}
        scrollOverflow={true}
        scrollOverflowOptions={{
          preventDefault: false
        }}
        paddingTop="78px"
        render={({ state, fullpageApi }) => {
          return (
            <div
              className={`section thematic-threads h-auto black-white-background ${backgroundColor}`}
            >
              <Container className="grid__container">
                <Row
                  key="page-white"
                  className={`page-white grid__row absolute ${
                    backgroundColor === 'white' ? 'show' : 'hide'
                  }`}
                >
                  {data.white.map((thread, index) => {
                    if (index % 2 === 0) {
                      return (
                        <span key={thread.title} className="contents">
                          <Col
                            className="headline__col"
                            xl={first.content}
                            lg={first.content}
                            md={first.content}
                            sm={first.content}
                          >
                            <div className="thematic-thread-headline text-black cursor-pointer pt-10 pb-5">
                              {ReactHtmlParser(thread.title)}
                            </div>
                          </Col>
                          <Col
                            className="grid__col"
                            xl={first.rightGutter}
                            lg={first.rightGutter}
                            md={first.rightGutter}
                            sm={first.rightGutter}
                          />
                          <Col
                            className="grid__col"
                            xl={firstSubtitles.leftGutter}
                            lg={firstSubtitles.leftGutter}
                            md={firstSubtitles.leftGutter}
                            sm={firstSubtitles.leftGutter}
                          />
                          <Col
                            className="grid__col"
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
                                  <div className="md:ml-16 sm:ml-8">
                                    {ReactHtmlParser(subtitle.title)}
                                  </div>
                                </div>
                              );
                            })}
                          </Col>
                          <Col
                            className="grid__col"
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
                            className="grid__col"
                            xl={second.leftGutter}
                            lg={second.leftGutter}
                            md={second.leftGutter}
                            sm={first.leftGutter}
                          />
                          <Col
                            className="headline__col"
                            xl={second.content}
                            lg={second.content}
                            md={second.content}
                            sm={first.content}
                          >
                            <div className="thematic-thread-headline text-black cursor-pointer pt-10 pb-5">
                              {ReactHtmlParser(thread.title)}
                            </div>
                          </Col>
                          <Col
                            className="grid__col"
                            xl={second.rightGutter}
                            lg={second.rightGutter}
                            md={second.rightGutter}
                            sm={first.rightGutter}
                          />
                          <Col
                            className="grid__col"
                            xl={secondSubtitles.leftGutter}
                            lg={secondSubtitles.leftGutter}
                            md={secondSubtitles.leftGutter}
                            sm={firstSubtitles.leftGutter}
                          />
                          <Col
                            className="grid__col"
                            xl={secondSubtitles.content}
                            lg={secondSubtitles.content}
                            md={secondSubtitles.content}
                            sm={firstSubtitles.content}
                          >
                            {thread.subtitles.map(subtitle => {
                              return (
                                <div
                                  key={subtitle}
                                  className="small-headline text-black cursor-pointer flex"
                                >
                                  {ReactHtmlParser(subtitle.year)}
                                  <div className="md:ml-16 sm:ml-8">
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
                  key="page-black"
                  className={`page-black grid__row ${
                    backgroundColor === 'white' ? 'hide' : 'show'
                  }`}
                >
                  {data.black.map((thread, index) => {
                    if (index % 2 === 0) {
                      return (
                        <span key={thread.title} className="contents">
                          <Col
                            className="headline__col"
                            xl={first.content}
                            lg={first.content}
                            md={first.content}
                            sm={first.content}
                          >
                            <div className="thematic-thread-headline text-white cursor-pointer pt-10 pb-5">
                              {ReactHtmlParser(thread.title)}
                            </div>
                          </Col>
                          <Col
                            className="grid__col"
                            xl={first.rightGutter}
                            lg={first.rightGutter}
                            md={first.rightGutter}
                            sm={first.rightGutter}
                          />
                          <Col
                            className="grid__col"
                            xl={firstSubtitles.leftGutter}
                            lg={firstSubtitles.leftGutter}
                            md={firstSubtitles.leftGutter}
                            sm={firstSubtitles.leftGutter}
                          />
                          <Col
                            className="grid__col"
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
                                  <div className="md:ml-16 sm:ml-8">
                                    {ReactHtmlParser(subtitle.title)}
                                  </div>
                                </div>
                              );
                            })}
                          </Col>
                          <Col
                            className="grid__col"
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
                            className="grid__col"
                            xl={second.leftGutter}
                            lg={second.leftGutter}
                            md={second.leftGutter}
                            sm={first.leftGutter}
                          />
                          <Col
                            className="headline__col"
                            xl={second.content}
                            lg={second.content}
                            md={second.content}
                            sm={first.content}
                          >
                            <div className="thematic-thread-headline text-white cursor-pointer pt-10 pb-5">
                              {ReactHtmlParser(thread.title)}
                            </div>
                          </Col>
                          <Col
                            className="grid__col"
                            xl={second.rightGutter}
                            lg={second.rightGutter}
                            md={second.rightGutter}
                            sm={first.rightGutter}
                          />
                          <Col
                            className="grid__col"
                            xl={secondSubtitles.leftGutter}
                            lg={secondSubtitles.leftGutter}
                            md={secondSubtitles.leftGutter}
                            sm={firstSubtitles.leftGutter}
                          />
                          <Col
                            className="grid__col"
                            xl={secondSubtitles.content}
                            lg={secondSubtitles.content}
                            md={secondSubtitles.content}
                            sm={firstSubtitles.content}
                          >
                            {thread.subtitles.map(subtitle => {
                              return (
                                <div
                                  key={subtitle}
                                  className="small-headline text-white cursor-pointer flex"
                                >
                                  {ReactHtmlParser(subtitle.year)}
                                  <div className="md:ml-16 sm:ml-8">
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
        }}
      />
    </>
  );
};

ThematicThreads.propTypes = {
  backgroundColor: PropTypes.string
};

export default ThematicThreads;
