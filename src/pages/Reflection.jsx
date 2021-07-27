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
            <Row className="grid__row pt- pb-40" style={{ paddingTop: '20vh' }}>
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
            {reflection.citations.map(({ text, linkTo }) => {
              return (
                <Row key={linkTo} className="grid__row">
                  <Col lg={3} />
                  <Col lg={6} md={12}>
                    <a target="_blank" rel="noopener noreferrer" href={linkTo}>
                      <p className="border-t border-white border-opacity-20 pb-5" />
                      <p className="small-body text-white text-opacity-90">
                        {ReactHtmlParser(text)}
                      </p>
                    </a>
                  </Col>
                  <Col lg={3} />
                </Row>
              );
            })}

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
