import { Col, Container, Row } from 'react-grid-system';
import React, { useEffect, useState } from 'react';

import { ArrowUpRight16 } from '@carbon/icons-react';
import Footer from '../components/Footer';
import PropTypes from 'prop-types';
import ReactHtmlParser from 'react-html-parser';
import ReactFullpage from '@fullpage/react-fullpage';
import HiddenFooter from '../components/HiddenFooter';
import { throttle } from 'lodash';

const Reflection = ({
  reflection,
  year,
  nextParams,
  changingParam,
  next,

  isTransitioning,
  setIsTransitioning,
  navigateTo,

  colourBackgroundClass,
  imageBackgroundClass
}) => {
  useEffect(() => {
    setIsTransitioning(false);
  }, [reflection]);

  const onFooterClick = () => {
    setIsTransitioning(true);
  };

  const afterLoad = function(origin, destination, direction) {
    if (destination.isLast) {
      setIsTransitioning(true);
      if (changingParam === 'year') {
        // if year end
        // inter-year
        navigateTo(nextParams.year);
      } else {
        // else
        // intra-year
        navigateTo(
          nextParams.year,
          nextParams.scene, // should be romanSceneNumber
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
          paddingTop="78px"
          render={({ state, fullpageApi }) => {
            return (
              <ReactFullpage.Wrapper>
                <div className="section h-auto bg-black">
                  <Container className="grid__container">
                    {/* Final Reflection */}
                    <div className="foreground-fade-in">
                      <div className="footer-spacer">
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
                          <Row className="grid__row">
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
                    </div>
                  </Container>
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
                      ></Row>
                    </Container>
                  </div>
                )}
              </ReactFullpage.Wrapper>
            );
          }}
        />
      </div>
      {next && (
        <div
          className={`hidden-footer__container ${
            changingParam === 'year'
              ? imageBackgroundClass
              : colourBackgroundClass
          }`}
          style={{
            backgroundPosition: '0 0',
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover'
          }}
        >
          <HiddenFooter
            pageId="reflection"
            nextParams={nextParams}
            next={next}
            changingParam={changingParam}
            textClasses={
              ['1989', '1997'].includes(year.id)
                ? `text-white text-opacity-90`
                : `text-black text-opacity-70`
            }
          />
        </div>
      )}
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

  isTransitioning: PropTypes.bool,
  setIsTransitioning: PropTypes.func,
  navigateTo: PropTypes.func,

  colourBackgroundClass: PropTypes.string,
  imageBackgroundClass: PropTypes.string
};

export default Reflection;
