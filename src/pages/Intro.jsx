import './Intro.scss';

import { Col, Container, Row } from 'react-grid-system';
import React, { useEffect, useState } from 'react';

import Footer from '../components/Footer';
import PropTypes from 'prop-types';
import ReactHtmlParser from 'react-html-parser';
import ReactFullpage from '@fullpage/react-fullpage';

const Intro = ({
  year,
  navigateTo,
  backgroundClass,
  colourBackgroundClass,
  nextBackgroundClass,
  isTransitioning,
  setIsTransitioning,
  setNextBackground,
  nextParams
}) => {
  const [isClicked, setClicked] = useState(false);

  useEffect(() => {
    setClicked(isTransitioning);
  }, [isTransitioning]);

  useEffect(() => {
    setIsTransitioning(false);
    setNextBackground(nextParams.year, nextParams.page);
  }, [year]);

  const onClickYear = () => {
    setClicked(true);
    setIsTransitioning(true);
    navigateTo(
      nextParams.year,
      nextParams.scene, // should be romanSceneNumber
      nextParams.page
    );
  };

  const afterLoad = function(origin, destination, direction) {
    if (destination.isLast) {
      onClickYear();
    }
  };

  return (
    <>
      {/* Backgrounds for page transition */}
      <div className={`absolute top-0 w-full`}>
        <div
          // fades to black before transitioning
          className={`bg-black w-full h-screen ${
            isClicked ? 'screen-shrink' : ''
          }`}
        />
        {isTransitioning && (
          <div
            className={`h-screen ${nextBackgroundClass} bg-center bg-no-repeat bg-cover w-full`}
          />
        )}
      </div>

      <ReactFullpage
        licenseKey={'518F7C98-E6514A4C-AF78105C-8D322AE9'}
        scrollingSpeed={1000}
        afterLoad={afterLoad}
        render={({ state, fullpageApi }) => {
          return (
            <ReactFullpage.Wrapper>
              <div
                className={`section intro cursor-pointer ${
                  isClicked ? 'fade-out' : 'foreground-fade-in'
                }`}
                onClick={() => fullpageApi.moveSectionDown()}
              >
                <div className={`hero-image ${backgroundClass}`}>
                  <div
                    key={`gradient-transition-${year.id}`}
                    className="gradient-transition"
                  >
                    <div className="small-headline text-white absolute w-full blurb-content">
                      <Container className="grid__container">
                        <Row className="grid__row">
                          <Col lg={5} />
                          <Col lg={7}>
                            <p className="fade-first">
                              {ReactHtmlParser(year.blurb)}
                            </p>
                          </Col>
                        </Row>
                      </Container>
                    </div>
                    <div className="absolute w-full bottom-0">
                      <Container className="grid__container">
                        <Footer
                          pageId="intro"
                          nextParams={nextParams}
                          next={year.scenes[0]}
                          changingParam="scene"
                          setClicked={setClicked}
                          setIsTransitioning={setIsTransitioning}
                          navigateTo={navigateTo}
                          onClick={() => fullpageApi.moveSectionDown()}
                        />
                      </Container>
                    </div>
                  </div>
                </div>
              </div>
              <div className={`section w-full ${colourBackgroundClass}`}>
                <Container className="grid__container">
                  <Row
                    className={`grid__row`}
                    style={{ height: '100vh' }}
                  ></Row>
                </Container>
              </div>
            </ReactFullpage.Wrapper>
          );
        }}
      />
    </>
  );
};

Intro.propTypes = {
  year: PropTypes.shape(),
  navigateTo: PropTypes.func,
  backgroundClass: PropTypes.string,
  colourBackgroundClass: PropTypes.string,
  nextBackgroundClass: PropTypes.string,
  isTransitioning: PropTypes.bool,
  setIsTransitioning: PropTypes.func,
  setNextBackground: PropTypes.func,
  nextParams: PropTypes.shape()
};

export default Intro;
