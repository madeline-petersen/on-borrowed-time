import { Col, Container, Row } from 'react-grid-system';
// import React, { useCallback, useEffect, useRef, useState } from 'react';
import React, { useEffect, useRef, useState } from 'react';

import { ArrowUpRight16 } from '@carbon/icons-react';
import Footer from '../components/Footer';
import HeaderSpacer from '../components/HeaderSpacer';
import PropTypes from 'prop-types';
import ReactHtmlParser from 'react-html-parser';
// import { useOverscroll } from '../hooks/useOverscroll';

const Reflection = ({
  reflection,
  nextParams,
  changingParam,
  next,
  nextBackgroundClass,
  isTransitioning,
  setIsTransitioning,
  navigateTo,
  setNextBackground
}) => {
  const [isClicked, setClicked] = useState(false);
  const scrollRef = useRef();
  // const onScrollEnd = useCallback(() => {
  //   setClicked(true);
  //   setIsTransitioning(true);
  //   if (changingParam === 'year') {
  //     // if year end
  //     // inter-year
  //     navigateTo(nextParams.year);
  //   } else {
  //     // else
  //     // intra-year
  //     navigateTo(
  //       nextParams.year,
  //       nextParams.scene, // should be romanSceneNumber
  //       nextParams.page
  //     );
  //   }
  // }, []);
  // useOverscroll(scrollRef, onScrollEnd);

  useEffect(() => {
    setClicked(isTransitioning);
  }, [isTransitioning]);

  useEffect(() => {
    setIsTransitioning(false);
    setNextBackground(nextParams.year, nextParams.page);
  }, [reflection]);

  const onFooterClick = () => {
    setIsTransitioning(true);
    setClicked(true);
  };

  return (
    <>
      {/* Backgrounds for page transition */}
      <div className={`absolute top-0 w-full`}>
        <div
          className={`h-screen bg-black w-full ${
            isClicked ? 'screen-shrink' : ''
          }`}
        />
        {isTransitioning && (
          <div
            className={`h-screen ${nextBackgroundClass} bg-center bg-no-repeat bg-cover w-full`}
          />
        )}
      </div>

      <div className="h-auto bg-black">
        <Container className="min-h-screen grid__container">
          <HeaderSpacer />

          {/* Final Reflection */}
          <div
            id="overflow-container"
            ref={scrollRef}
            className={`${isClicked ? 'fade-out' : 'foreground-fade-in'}`}
          >
            <div className="footer-spacer">
              <Row className="pb-5 grid__row" style={{ paddingTop: '20vh' }}>
                {reflection.paragraphs[0] &&
                  reflection.paragraphs[0].map((paragraph, index) => {
                    return (
                      <span key={`paragraph-${index}`} className="contents">
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
                      <span key={`paragraph-${index}`} className="contents">
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

            {next && (
              <Footer
                pageId="reflection"
                nextParams={nextParams}
                next={next}
                changingParam={changingParam}
                setClicked={onFooterClick}
                navigateTo={navigateTo}
                setIsTransitioning={setIsTransitioning}
              />
            )}
          </div>
        </Container>
      </div>
    </>
  );
};

Reflection.propTypes = {
  reflection: PropTypes.shape({
    paragraphs: PropTypes.arrayOf(PropTypes.shape(PropTypes.string)),
    citations: PropTypes.arrayOf(
      PropTypes.shape({ text: PropTypes.string, linkTo: PropTypes.string })
    )
  }),
  next: PropTypes.shape(),
  nextParams: PropTypes.shape(),
  changingParam: PropTypes.string,
  nextBackgroundClass: PropTypes.string,
  isTransitioning: PropTypes.bool,
  setIsTransitioning: PropTypes.func,
  navigateTo: PropTypes.func,
  setNextBackground: PropTypes.func
};

export default Reflection;
