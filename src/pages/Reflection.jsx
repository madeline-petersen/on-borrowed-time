import 'fullpage.js/vendors/scrolloverflow';

import { ArrowUpRight16 } from '@carbon/icons-react';
import ReactFullpage from '@fullpage/react-fullpage';
import { throttle } from 'lodash';
import PropTypes from 'prop-types';
import React, { useEffect } from 'react';
import { Col, Container, Row } from 'react-grid-system';
import ReactHtmlParser from 'react-html-parser';

import HiddenFooter from '../components/HiddenFooter';

const Reflection = ({
  reflection,
  year,
  nextParams,
  changingParam,
  next,
  setIsTransitioning,
  navigateTo,
  colourBackgroundClass,
  imageBackgroundClass
}) => {
  useEffect(() => {
    setIsTransitioning(false);
  }, [reflection]);

  const afterLoad = function(origin, destination, direction) {
    if (destination.isLast) {
      if (changingParam === 'year') {
        // inter-year
        navigateTo(nextParams.year);
      } else {
        // intra-year
        navigateTo(
          nextParams.year,
          nextParams.scene, // romanSceneNumber
          nextParams.page
        );
      }
    }
  };

  const onLeave = function(origin, destination, direction) {
    const element = document.getElementsByClassName(
      'hidden-footer__container'
    )[0];

    if (element) {
      if (element.classList.contains('show')) {
        return true;
      } else {
        element.classList.add('show');
        return false;
      }
    }
  };

  return (
    <>
      <div
        className="reflection"
        key={`reflection-${nextParams.year}-${nextParams.scene}-${nextParams.page}`}
      >
        <ReactFullpage
          licenseKey={'518F7C98-E6514A4C-AF78105C-8D322AE9'}
          scrollingSpeed={1000}
          afterLoad={afterLoad}
          onLeave={throttle(onLeave, 1000)}
          scrollOverflow={true}
          scrollOverflowOptions={{
            preventDefault: false
          }}
          paddingTop="78px"
          render={({ state, fullpageApi }) => {
            return (
              <ReactFullpage.Wrapper>
                <div className="section bg-black">
                  <Container
                    className="grid__container"
                    style={{ minHeight: `calc(100vh - 51.5px)` }}
                  >
                    {/* Final Reflection */}
                    <div className="foreground-fade-in">
                      <Row
                        className="pb-5 grid__row"
                        style={{ paddingTop: '20vh' }}
                      >
                        {reflection.paragraphs[0] &&
                          reflection.paragraphs[0].map((paragraph, index) => {
                            return (
                              <span
                                key={`paragraph-${index}`}
                                className="contents"
                              >
                                <Col lg={1} />
                                <Col lg={11} md={12}>
                                  <p
                                    className={`medium-headline text-white fade-first`}
                                  >
                                    {ReactHtmlParser(paragraph)}
                                  </p>
                                  <br />
                                  <br />
                                </Col>
                              </span>
                            );
                          })}
                        {reflection.paragraphs[1] &&
                          reflection.paragraphs[1].map((paragraph, index) => {
                            return (
                              <span
                                key={`paragraph-${index}`}
                                className="contents"
                              >
                                <Col lg={3} />
                                <Col lg={6} md={12}>
                                  <p
                                    className={`medium-body text-white text-opacity-70 fade-second`}
                                  >
                                    {ReactHtmlParser(paragraph)}
                                    <br />
                                    <br />
                                  </p>
                                </Col>
                                <Col lg={3} />
                              </span>
                            );
                          })}
                      </Row>
                      {reflection.citations && (
                        <Row className="grid__row pb-48">
                          <Col lg={3} />
                          <Col lg={6} md={12}>
                            <p className="pb-5 border-t border-white border-opacity-20 fade-second" />
                            {reflection.citations.map(({ text, linkTo }) => {
                              return (
                                <a
                                  key={linkTo}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  href={linkTo}
                                  className={`transition-all text-white text-opacity-50 small-body ${
                                    linkTo ? 'hover:text-opacity-100' : ''
                                  }`}
                                >
                                  <p className="flex mb-4 fade-second flex-start">
                                    <span>
                                      {ReactHtmlParser(text)}
                                      {linkTo && (
                                        <ArrowUpRight16
                                          className="inline-block ml-1"
                                          style={{ minWidth: '16px' }}
                                        />
                                      )}
                                    </span>
                                  </p>
                                </a>
                              );
                            })}
                          </Col>
                          <Col lg={3} />
                        </Row>
                      )}
                    </div>
                  </Container>
                  {next && (
                    <div
                      className={`hidden-footer__container ${
                        changingParam === 'year'
                          ? 'bg-black'
                          : colourBackgroundClass
                      }`}
                    >
                      <HiddenFooter
                        pageId="reflection"
                        nextParams={nextParams}
                        next={next}
                        changingParam={changingParam}
                        textClasses={
                          ['1989', '1997'].includes(year.id) ||
                          changingParam === 'year'
                            ? `text-white text-opacity-90`
                            : `text-black text-opacity-70`
                        }
                      />
                    </div>
                  )}
                </div>
                {changingParam === 'year' ? (
                  <div
                    className={`section h-screen ${imageBackgroundClass}`}
                    style={{
                      backgroundPosition: 'center',
                      backgroundRepeat: 'no-repeat',
                      backgroundSize: 'cover'
                    }}
                  />
                ) : (
                  <div className={`section w-full ${colourBackgroundClass}`}>
                    <Container className="grid__container">
                      <Row
                        className={`grid__row`}
                        style={{ height: '100vh' }}
                      />
                    </Container>
                  </div>
                )}
              </ReactFullpage.Wrapper>
            );
          }}
        />
      </div>
    </>
  );
};

Reflection.propTypes = {
  year: PropTypes.shape(),
  reflection: PropTypes.shape({
    paragraphs: PropTypes.arrayOf(PropTypes.shape(PropTypes.string)),
    citations: PropTypes.arrayOf(
      PropTypes.shape({ text: PropTypes.string, linkTo: PropTypes.string })
    )
  }),
  next: PropTypes.shape(),
  nextParams: PropTypes.shape(),
  changingParam: PropTypes.string,
  imageBackgroundClass: PropTypes.string,
  colourBackgroundClass: PropTypes.string,
  navigateTo: PropTypes.func,
  setIsTransitioning: PropTypes.func
};

export default Reflection;
