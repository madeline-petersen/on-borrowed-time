import './ThematicThreads.scss';
import 'fullpage.js/vendors/scrolloverflow';

import ReactFullpage from '@fullpage/react-fullpage';
import PropTypes from 'prop-types';
import React from 'react';
import { Col, Container, Row } from 'react-grid-system';
import { Helmet } from 'react-helmet';
import ReactHtmlParser from 'react-html-parser';
import { useHistory } from 'react-router-dom';

import data from '../data/thematic-threads.json';

const ThematicThreads = ({ currentBgColour }) => {
  let history = useHistory();

  const evenTitleCols = {
    xl: 11,
    lg: 11,
    md: 11,
    sm: 11
  };

  const evenTitleGutterRightCols = {
    xl: 1,
    lg: 1,
    md: 1,
    sm: 1
  };

  const evenSubtitleGutterLeftCols = {
    xl: 1,
    lg: 1,
    md: 1,
    sm: 1
  };

  const evenSubtitleCols = {
    xl: 6,
    lg: 6,
    md: 6,
    sm: 6
  };

  const evenSubtitleGutterRightCols = {
    xl: 5,
    lg: 5,
    md: 5,
    sm: 5
  };

  const oddTitleGutterLeftCols = {
    xl: 2,
    lg: 2,
    md: 2,
    sm: 2
  };

  const oddTitleCols = {
    xl: 9,
    lg: 9,
    md: 9,
    sm: 9
  };

  const oddTitleGutterRightCols = {
    xl: 1,
    lg: 1,
    md: 1,
    sm: 1
  };

  const oddSubtitleGutterLeftCols = {
    xl: 3,
    lg: 3,
    md: 3,
    sm: 3
  };

  const oddSubtitleCols = {
    xl: 8,
    lg: 8,
    md: 8,
    sm: 8
  };

  const oddSubtitleGutterRightCols = {
    xl: 1,
    lg: 1,
    md: 1,
    sm: 1
  };

  const navigateTo = (year, romanSceneNumber) => {
    if (year && romanSceneNumber) {
      history.push(`/${year}/scene-${romanSceneNumber}/event`);
    } else if (year) {
      history.push(`/${year}`);
    }
  };

  const fadeOrder = ['fade-first', 'fade-second', 'fade-third', 'fade-fourth'];

  const Page = background => {
    const content = background === 'white' ? data.white : data.black;
    const textColourClass =
      background === 'white' ? 'text-black' : 'text-white';

    return (
      <Row
        key={`page-${background}`}
        className={`page-${background} grid__row ${background === 'white' &&
          'absolute'} ${currentBgColour === background ? 'show' : 'hide'}`}
      >
        {content.map((thread, index) => {
          if (index % 2 === 0) {
            return (
              <span key={thread.title} className="contents">
                <Col className="headline__col" {...evenTitleCols}>
                  <div
                    className={`thematic-thread-headline ${textColourClass} cursor-pointer pt-9 pb-5 ${fadeOrder[index]}`}
                  >
                    {ReactHtmlParser(thread.title)}
                  </div>
                </Col>
                <Col className="grid__col" {...evenTitleGutterRightCols} />
                <Col className="grid__col" {...evenSubtitleGutterLeftCols} />
                <Col className="grid__col" {...evenSubtitleCols}>
                  {thread.subtitles.map(subtitle => {
                    return (
                      <div
                        key={subtitle}
                        className={`small-headline ${textColourClass} cursor-pointer flex mb-1 ${fadeOrder[index]}`}
                        onClick={() =>
                          navigateTo(subtitle.year, subtitle.romanSceneNumber)
                        }
                      >
                        {ReactHtmlParser(subtitle.year)}
                        <div className="md:ml-16 sm:ml-8">
                          {ReactHtmlParser(subtitle.title)}
                        </div>
                        <div className="small-body self-center lg:ml-64 md:ml-16 sm:ml-8">
                          {ReactHtmlParser(
                            `Scene&nbsp;${subtitle.romanSceneNumber}`
                          )}
                        </div>
                      </div>
                    );
                  })}
                </Col>
                <Col className="grid__col" {...evenSubtitleGutterRightCols} />
              </span>
            );
          } else {
            return (
              <span key={thread.title} className="contents">
                <Col className="grid__col" {...oddTitleGutterLeftCols} />
                <Col className="headline__col" {...oddTitleCols}>
                  <div
                    className={`thematic-thread-headline ${textColourClass} cursor-pointer pt-9 pb-5 ${fadeOrder[index]}`}
                  >
                    {ReactHtmlParser(thread.title)}
                  </div>
                </Col>
                <Col className="grid__col" {...oddTitleGutterRightCols} />
                <Col className="grid__col" {...oddSubtitleGutterLeftCols} />
                <Col className="grid__col" {...oddSubtitleCols}>
                  {thread.subtitles.map(subtitle => {
                    return (
                      <div
                        key={subtitle}
                        className={`small-headline ${textColourClass} cursor-pointer flex mb-1 ${fadeOrder[index]}`}
                        onClick={() =>
                          navigateTo(subtitle.year, subtitle.romanSceneNumber)
                        }
                      >
                        {ReactHtmlParser(subtitle.year)}
                        <div className="md:ml-16 sm:ml-8">
                          {ReactHtmlParser(subtitle.title)}
                        </div>
                        <div className="small-body self-center lg:ml-64 md:ml-16 sm:ml-8">
                          {ReactHtmlParser(
                            `Scene&nbsp;${subtitle.romanSceneNumber}`
                          )}
                        </div>
                      </div>
                    );
                  })}
                </Col>
                <Col className="grid__col" {...oddSubtitleGutterRightCols} />
              </span>
            );
          }
        })}
      </Row>
    );
  };

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
              className={`section thematic-threads h-auto black-white-background thematic-threads-fade-in ${currentBgColour}`}
            >
              <Container className="grid__container">
                {Page('white')}
                {Page('black')}
              </Container>
            </div>
          );
        }}
      />
    </>
  );
};

ThematicThreads.propTypes = {
  currentBgColour: PropTypes.string
};

export default ThematicThreads;
