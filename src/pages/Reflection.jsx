import './Reflection.scss';

import { ArrowUpRight16 } from '@carbon/icons-react';
import ReactFullpage from '@fullpage/react-fullpage';
import parse from 'html-react-parser';
import { throttle } from 'lodash';
import PropTypes from 'prop-types';
import React, { useEffect } from 'react';
import { Col, Container, Row } from 'react-grid-system';

import HiddenFooter from '../components/HiddenFooter';
import hasLightText from '../helpers/hasLightText';

const Reflection = ({
  reflection,
  year,
  nextParams,
  changingParam,
  next,
  headerHeight,
  setTransitionType,
  navigateTo,
  colourBackgroundClass,
  imageBackgroundClass,
  onScrollOverflow,
  beforeLeave
}) => {
  useEffect(() => {
    setTransitionType(null);
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

  return (
    <>
      <div
        className="reflection"
        key={`reflection-${nextParams.year}-${nextParams.scene}-${nextParams.page}`}
      >
        <ReactFullpage
          licenseKey={'DNAK9-ZU2SK-BDKK8-JZ61H-YIUAK'}
          // Scrolling
          scrollingSpeed={1000}
          scrollOverflow={true}
          // Design
          paddingTop={headerHeight}
          // Custom selectors
          credits={{ enabled: false }}
          lazyLoading={false}
          // Events
          afterLoad={afterLoad}
          beforeLeave={throttle(beforeLeave, 1000)}
          onScrollOverflow={onScrollOverflow}
          render={({ state, fullpageApi }) => {
            return (
              <ReactFullpage.Wrapper>
                <div className="section bg-black">
                  <Container className="grid__container reflection__container">
                    {/* Final Reflection */}
                    <div className="foreground-fade-in">
                      <Row className="pb-5 grid__row reflection__paragraph-container">
                        {reflection.paragraphs[0] &&
                          reflection.paragraphs[0].map((paragraph, index) => {
                            return (
                              <span
                                key={`paragraph-${index}`}
                                className="contents"
                              >
                                <Col lg={1} />
                                <Col lg={11} md={12}>
                                  <p className="large-headline-dynamic-small text-white fade-first">
                                    {parse(paragraph)}
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
                                    {parse(paragraph)}
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
                            <p className="pb-5 border-t border-white border-opacity-10 fade-second" />
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
                                      {parse(text)}
                                      {linkTo && (
                                        <ArrowUpRight16 className="link-to inline-block ml-1" />
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
                </div>
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
                        hasLightText(year.id) || changingParam === 'year'
                          ? `text-white text-opacity-90`
                          : `text-black text-opacity-90`
                      }
                    />
                  </div>
                )}
                {changingParam === 'year' ? (
                  <div
                    className={`section h-screen next-image-class ${imageBackgroundClass}`}
                  />
                ) : (
                  <div className={`section w-full ${colourBackgroundClass}`}>
                    <Container className="grid__container">
                      <Row className="grid__row h-screen" />
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
  headerHeight: PropTypes.string,
  navigateTo: PropTypes.func,
  setTransitionType: PropTypes.func,
  onScrollOverflow: PropTypes.func,
  beforeLeave: PropTypes.func
};

export default Reflection;
