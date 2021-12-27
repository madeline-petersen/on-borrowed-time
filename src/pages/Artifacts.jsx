import { Col, Container, Row } from 'react-grid-system';
import React, { useCallback, useEffect, useRef, useState } from 'react';

import Footer from '../components/Footer';
import HeaderSpacer from '../components/HeaderSpacer';
import PropTypes from 'prop-types';
import ReactHtmlParser from 'react-html-parser';
import imageLookup from '../images';
import { useOverscroll } from '../hooks/useOverscroll';

const Artifacts = ({
  artifacts,
  changingParam,
  nextParams,
  next,
  navigateTo,
  nextBackgroundClass,
  isTransitioning,
  setIsTransitioning,
  setNextBackground,
  headerHeight
}) => {
  const [isClicked, setClicked] = useState(false);
  const scrollRef = useRef();
  const onScrollEnd = useCallback(() => {
    setClicked(true);
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
  }, []);

  useOverscroll(scrollRef, onScrollEnd);

  useEffect(() => {
    setClicked(isTransitioning);
  }, [isTransitioning]);

  useEffect(() => {
    setIsTransitioning(false);
    setNextBackground(nextParams.year, nextParams.page);
  }, [artifacts]);

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

      <div className="h-screen bg-black">
        <Container className="h-screen grid__container">
          <HeaderSpacer />

          {/* Reflection */}
          <div
            id="overflow-container"
            style={{ height: `calc(100vh - ${headerHeight}px)` }}
            ref={scrollRef}
            className={`${isClicked ? 'fade-out' : 'foreground-fade-in'}`}
          >
            {artifacts.images.map((image, index) => {
              return index % 2 === 0 ? (
                <Row key={`image-${index}`} className="pt-64 pb-20 grid__row">
                  <Col lg={1} />
                  <Col lg={11} md={12}>
                    <img
                      className="fade-first"
                      src={imageLookup[image.source]}
                      alt=""
                    />
                  </Col>
                  <Col lg={3} />
                  <Col lg={4} md={4}>
                    <p className={`small-body text-white mt-8 fade-first`}>
                      {ReactHtmlParser(image.caption)}
                    </p>
                  </Col>
                </Row>
              ) : (
                <Row key={`image-${index}`} className="pt-20 pb-24 grid__row">
                  <Col lg={3} />
                  <Col lg={7} md={12}>
                    <img
                      className="fade-second"
                      src={imageLookup[image.source]}
                      alt=""
                    />
                  </Col>
                  <Col lg={3} />
                  <Col lg={4} md={4}>
                    <p className={`small-body text-white mt-5 fade-second`}>
                      {ReactHtmlParser(image.caption)}
                    </p>
                  </Col>
                </Row>
              );
            })}
          </div>
          <Footer
            pageId="artifacts"
            nextParams={nextParams}
            next={next}
            changingParam={changingParam}
            setClicked={setClicked}
            navigateTo={navigateTo}
            setIsTransitioning={setIsTransitioning}
            nextBackgroundClass={nextBackgroundClass}
          />
        </Container>
      </div>
      <div className={`${nextBackgroundClass} translate-y-full`}>
        <Container className="grid__container">
          <Footer
            pageId="artifacts"
            nextParams={nextParams}
            next={next}
            changingParam={changingParam}
            setClicked={setClicked}
            navigateTo={navigateTo}
            setIsTransitioning={setIsTransitioning}
            nextBackgroundClass={nextBackgroundClass}
          />
        </Container>
      </div>
    </>
  );
};

Artifacts.propTypes = {
  artifacts: PropTypes.shape(),
  next: PropTypes.shape(),
  nextParams: PropTypes.shape(),
  changingParam: PropTypes.string,
  navigateTo: PropTypes.func,
  nextBackgroundClass: PropTypes.string,
  isTransitioning: PropTypes.bool,
  setIsTransitioning: PropTypes.func,
  setNextBackground: PropTypes.func,
  headerHeight: PropTypes.number
};

export default Artifacts;
