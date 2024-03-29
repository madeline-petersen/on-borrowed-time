import './ThematicThreads.scss';

import ReactFullpage from '@fullpage/react-fullpage';
import parse from 'html-react-parser';
import PropTypes from 'prop-types';
import React from 'react';
import {
  Col,
  Container,
  Hidden,
  Row,
  useScreenClass,
  Visible
} from 'react-grid-system';
import { Helmet } from 'react-helmet';
import { useHistory } from 'react-router-dom';

import data from '../data/threads.json';

const ThematicThreads = ({ currentBgColour }) => {
  let history = useHistory();
  const screenClass = useScreenClass();

  const evenCols = {
    titleGutterLeft: {
      xxl: 0,
      xl: 3,
      lg: 3,
      md: 0,
      sm: 0
    },
    title: {
      xxl: 12,
      xl: 9,
      lg: 9,
      md: 12,
      sm: 12
    },
    titleGutterRight: {
      xxl: 0,
      xl: 0,
      lg: 0,
      md: 0,
      sm: 0
    },
    subtitleGutterLeft: {
      xxl: 1,
      xl: 4,
      lg: 4,
      md: 1,
      sm: 0
    },
    subtitle: {
      xxl: 11,
      xl: 6,
      lg: 6,
      md: 11,
      sm: 12
    },
    subtitleGutterRight: {
      xxl: 0,
      xl: 2,
      lg: 2,
      md: 0,
      sm: 0
    }
  };

  const oddCols = {
    // titleGutterLeft: {
    //   xxl: 0,
    //   xl: 0,
    //   lg: 0,
    //   md: 0,
    //   sm: 0
    // },
    title: {
      xxl: 12,
      xl: 11,
      lg: 11,
      md: 12,
      sm: 12
    },
    titleGutterRight: {
      xxl: 0,
      xl: 1,
      lg: 1,
      md: 0,
      sm: 0
    },
    subtitleGutterLeft: {
      xxl: 1,
      xl: 1,
      lg: 1,
      md: 1,
      sm: 0
    },
    subtitle: {
      xxl: 11,
      xl: 6,
      lg: 6,
      md: 11,
      sm: 12
    },
    subtitleGutterRight: {
      xxl: 0,
      xl: 5,
      lg: 5,
      md: 0,
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

  const getBlurbWidth = index => {
    const cols = index % 2 === 0 ? evenCols.title : oddCols.title;
    if (['xxl'].includes(screenClass)) {
      return `calc(200%/${cols.xxl})`;
    } else if (['xl'].includes(screenClass)) {
      return `calc(200%/${cols.xl})`;
    } else if (['lg'].includes(screenClass)) {
      return `calc(200%/${cols.lg})`;
    } else if (['md'].includes(screenClass)) {
      return `calc(600%/${cols.md})`;
    } else if (['sm'].includes(screenClass)) {
      return `calc(600%/${cols.sm})`;
    } else {
      return `calc(600%/${cols.sm})`;
    }
  };

  const getBlurbIndent = index => {
    const cols = index % 2 === 0 ? evenCols.title : oddCols.title;
    if (index % 2 === 0) {
      if (['xxl'].includes(screenClass)) {
        return `calc(700%/${cols.xxl})`;
      } else if (['xl'].includes(screenClass)) {
        return `calc(-300%/${cols.xl})`;
      } else if (['lg'].includes(screenClass)) {
        return `calc(-300%/${cols.lg})`;
      } else if (['md'].includes(screenClass)) {
        return `calc(600%/${cols.md})`;
      } else if (['sm'].includes(screenClass)) {
        return `calc(600%/${cols.sm})`;
      } else {
        return `calc(600%/${cols.sm})`;
      }
    } else {
      if (['xxl'].includes(screenClass)) {
        return `calc(700%/${cols.xxl})`;
      } else if (['xl'].includes(screenClass)) {
        return `calc(900%/${cols.xl})`;
      } else if (['lg'].includes(screenClass)) {
        return `calc(1000%/${cols.lg})`;
      } else if (['md'].includes(screenClass)) {
        return `calc(600%/${cols.md})`;
      } else if (['sm'].includes(screenClass)) {
        return `calc(600%/${cols.sm})`;
      } else {
        return `calc(600%/${cols.sm})`;
      }
    }
  };

  const getTitleIndent = type => {
    const cols = type === 'even' ? evenCols.subtitle : oddCols.subtitle;
    if (['xxl'].includes(screenClass)) {
      return `calc(100%/${cols.xxl})`;
    } else if (['xl'].includes(screenClass)) {
      return `calc(100%/${cols.xl})`;
    } else if (['lg'].includes(screenClass)) {
      return `calc(100%/${cols.lg})`;
    } else if (['md'].includes(screenClass)) {
      return `calc(100%/${cols.md})`;
    } else if (['sm'].includes(screenClass)) {
      return `calc(200%/${cols.sm})`;
    } else {
      return `calc(200%/${cols.sm})`;
    }
  };

  const getSceneIndent = type => {
    const cols = type === 'even' ? evenCols.subtitle : oddCols.subtitle;
    if (['xxl'].includes(screenClass)) {
      return `calc(500%/${cols.xxl})`;
    } else if (['xl'].includes(screenClass)) {
      return `calc(500%/${cols.xl})`;
    } else if (['lg'].includes(screenClass)) {
      return `calc(600%/${cols.lg})`;
    } else if (['md'].includes(screenClass)) {
      return `calc(700%/${cols.md})`;
    } else if (['sm'].includes(screenClass)) {
      return `calc(1100%/${cols.sm})`;
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
              {type === 'even' && (
                <Visible lg xl>
                  <Col className="grid__col" {...cols.titleGutterLeft} />
                </Visible>
              )}
              <Col
                className={`headline__col ${fadeOrder[index]}`}
                {...cols.title}
              >
                <div
                  className={`thematic-thread-headline ${textColourClass} pt-9 pb-5`}
                >
                  {parse(thread.title)}
                  <Hidden sm xs>
                    <div
                      className="small-body self-center absolute transition-all"
                      style={{
                        left: getBlurbIndent(index),
                        width: getBlurbWidth(index),
                        paddingLeft: '0.5rem',
                        top: '36px', // to match pt-9 on title
                        paddingTop: ['xxl', 'xl', 'lg'].includes(screenClass)
                          ? '32px' // makes up for tall line height
                          : '0px'
                      }}
                    >
                      {parse(thread.blurb)}
                    </div>
                  </Hidden>
                </div>
              </Col>
              {index % 2 !== 0 && (
                <Visible lg xl>
                  <Col className="grid__col" {...cols.titleGutterRight} />
                </Visible>
              )}
              <Visible md lg xl xxl>
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
                      {parse(subtitle.year)}
                      <div
                        className="subtitle__title absolute left-0"
                        style={{
                          left: getTitleIndent(type),
                          paddingLeft: '0.5rem'
                        }}
                      >
                        {parse(subtitle.title)}
                      </div>
                      <div
                        className="small-body self-center absolute left-0 transition-all"
                        style={{
                          left: getSceneIndent(type),
                          paddingLeft: '0.5rem'
                        }}
                      >
                        {parse(`Scene&nbsp;${subtitle.romanSceneNumber}`)}
                      </div>
                    </div>
                  );
                })}
              </Col>
              {index !== 3 && (
                <Visible lg xl>
                  <Col className="grid__col" {...cols.subtitleGutterRight} />
                </Visible>
              )}
            </span>
          );
        })}
        {background === 'black' && <div className="w-full mt-24" />}
      </Row>
    );
  };

  return (
    <>
      <Helmet>
        <title>Thematic Threads | On Borrowed Time</title>
      </Helmet>
      <ReactFullpage
        licenseKey={'DNAK9-ZU2SK-BDKK8-JZ61H-YIUAK'}
        // Scrolling
        scrollingSpeed={1000}
        scrollOverflow={true}
        // Design
        paddingTop={'78px'}
        // Custom selectors
        credits={{ enabled: false }}
        render={({ state, fullpageApi }) => {
          return (
            <div
              className={`section threads h-auto black-white-background threads-fade-in ${currentBgColour}`}
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
