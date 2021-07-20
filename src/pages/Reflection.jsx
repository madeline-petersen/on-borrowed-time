import { Col, Container, Row } from 'react-grid-system';
import React, { useEffect, useState } from 'react';

import Footer from '../components/Footer';
import HeaderSpacer from '../components/HeaderSpacer';
import PropTypes from 'prop-types';
import ReactHtmlParser from 'react-html-parser';

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
        <Container className="grid__container min-h-screen">
          <HeaderSpacer />

          {/* Final Reflection */}
          <div
            id="overflow-container"
            className={`${isClicked ? 'fade-out' : 'foreground-fade-in'}`}
          >
            <Row className="grid__row pt-64 pb-40">
              {reflection.paragraphs[0] &&
                reflection.paragraphs[0].map((paragraph, index) => {
                  return (
                    <span key={`paragraph-${index}`} className="contents">
                      <Col lg={1} />
                      <Col lg={11} md={12}>
                        <p className={`medium-headline text-white`}>
                          {ReactHtmlParser(paragraph)}
                        </p>
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
                        <p className={`medium-body text-white`}>
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
  reflection: PropTypes.shape(),
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
