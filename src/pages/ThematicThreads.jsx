import './ThematicThreads.scss';
import 'fullpage.js/vendors/scrolloverflow';

import ReactFullpage from '@fullpage/react-fullpage';
import PropTypes from 'prop-types';
import React from 'react';
import {
  Col,
  Container,
  Row,
  useScreenClass,
  Visible
} from 'react-grid-system';
import { Helmet } from 'react-helmet';
import ReactHtmlParser from 'react-html-parser';
import { useHistory } from 'react-router-dom';

import data from '../data/thematic-threads.json';

const ThematicThreads = ({ currentBgColour }) => {
  let history = useHistory();
  const screenClass = useScreenClass();

  const evenCols = {
    title: {
      xl: 11,
      lg: 11,
      md: 11,
      sm: 12
    },
    titleGutterRight: {
      xl: 1,
      lg: 1,
      md: 1,
      sm: 0
    },
    subtitleGutterLeft: {
      xl: 1,
      lg: 1,
      md: 1,
      sm: 0
    },
    subtitle: {
      xl: 6,
      lg: 6,
      md: 8,
      sm: 12
    },
    subtitleGutterRight: {
      xl: 5,
      lg: 5,
      md: 3,
      sm: 0
    }
  };

  const oddCols = {
    titleGutterLeft: {
      xl: 2,
      lg: 2,
      md: 2,
      sm: 0
    },
    title: {
      xl: 9,
      lg: 9,
      md: 9,
      sm: 12
    },
    titleGutterRight: {
      xl: 1,
      lg: 1,
      md: 1,
      sm: 0
    },
    subtitleGutterLeft: {
      xl: 3,
      lg: 3,
      md: 3,
      sm: 0
    },
    subtitle: {
      xl: 6,
      lg: 6,
      md: 8,
      sm: 12
    },
    subtitleGutterRight: {
      xl: 3,
      lg: 3,
      md: 1,
      sm: 0
    }
  };

  const navigateTo = (year, romanSceneNumber) => {
    if (year && romanSceneNumber) {
      history.push(`/${year}/scene-${romanSceneNumber}/event`);
    } else if (year) {
      history.push(`/${year}`);
    }
  };

  const getTitleIndent = type => {
    const cols = type === 'even' ? evenCols.subtitle : oddCols.subtitle;
    if (['xl', 'xxl'].includes(screenClass)) {
      return `calc(100%/${cols.xl})`;
    } else if (['lg'].includes(screenClass)) {
      return `calc(100%/${cols.lg})`;
    } else if (['md'].includes(screenClass)) {
      return `calc(100%/${cols.md})`;
    } else {
      return `calc(200%/${cols.sm})`;
    }
  };

  const getSceneIndent = type => {
    const cols = type === 'even' ? evenCols.subtitle : oddCols.subtitle;
    if (['xl', 'xxl'].includes(screenClass)) {
      return `calc(500%/${cols.xl})`;
    } else if (['lg'].includes(screenClass)) {
      return `calc(600%/${cols.lg})`;
    } else if (['md'].includes(screenClass)) {
      return `calc(700%/${cols.md})`;
    } else {
      return `calc(1100%/${cols.sm})`;
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
          const type = index % 2 === 0 ? 'even' : 'odd';
          const cols = type === 'even' ? evenCols : oddCols;

          return (
            <span key={thread.title} className="contents hover-container">
              {type === 'odd' && (
                <Visible md lg xl>
                  <Col className="grid__col" {...cols.titleGutterLeft} />
                </Visible>
              )}
              <Col
                className={`headline__col ${fadeOrder[index]}`}
                {...cols.title}
              >
                <div
                  className={`thematic-thread-headline ${textColourClass} cursor-pointer pt-9 pb-5`}
                >
                  {ReactHtmlParser(thread.title)}
                </div>
              </Col>
              <Visible md lg xl>
                <Col className="grid__col" {...cols.titleGutterRight} />
                <Col className="grid__col" {...cols.subtitleGutterLeft} />
              </Visible>
              <Col
                className={`grid__col ${fadeOrder[index]}`}
                {...cols.subtitle}
              >
                {thread.subtitles.map(subtitle => {
                  return (
                    <div
                      key={subtitle}
                      className={`small-headline ${textColourClass} cursor-pointer flex mb-1`}
                      onClick={() =>
                        navigateTo(subtitle.year, subtitle.romanSceneNumber)
                      }
                    >
                      {ReactHtmlParser(subtitle.year)}
                      <div
                        className="subtitle__title absolute left-0"
                        style={{
                          left: getTitleIndent(type),
                          paddingLeft: '0.5rem'
                        }}
                      >
                        {ReactHtmlParser(subtitle.title)}
                      </div>
                      <div
                        className="small-body self-center absolute left-0"
                        style={{
                          left: getSceneIndent(type),
                          paddingLeft: '0.5rem'
                        }}
                      >
                        {ReactHtmlParser(
                          `Scene&nbsp;${subtitle.romanSceneNumber}`
                        )}
                      </div>
                    </div>
                  );
                })}
              </Col>
              <Visible md lg xl>
                <Col className="grid__col" {...cols.subtitleGutterRight} />
              </Visible>
            </span>
          );
        })}
        {background === 'black' && <div className="h-24 mt-24" />}
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
