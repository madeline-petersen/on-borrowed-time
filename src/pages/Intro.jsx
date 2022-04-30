import './Intro.scss';

import ReactFullpage from '@fullpage/react-fullpage';
import parse from 'html-react-parser';
import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-grid-system';

import Footer from '../components/Footer';

const Intro = ({
  year,
  navigateTo,
  imageBackgroundClass,
  colourBackgroundClass,
  setTransitionType,
  nextParams
}) => {
  useEffect(() => {
    setTransitionType(null);
  }, [year]);

  const onClickYear = () => {
    navigateTo(
      nextParams.year,
      nextParams.scene, // romanSceneNumber
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
      <div className="intro foreground-fade-in" key={`intro-${year.id}`}>
        <ReactFullpage
          licenseKey={'518F7C98-E6514A4C-AF78105C-8D322AE9'}
          scrollingSpeed={1000}
          afterLoad={afterLoad}
          render={({ state, fullpageApi }) => {
            return (
              <ReactFullpage.Wrapper>
                <div
                  className={`section hero-image cursor-pointer ${imageBackgroundClass}`}
                  key={year.id}
                  id={year.id}
                  onClick={() => fullpageApi.moveSectionDown()}
                >
                  <div
                    key={`gradient-transition-${year.id}`}
                    className="gradient-transition"
                  >
                    <div className="small-headline text-white absolute w-full blurb-content">
                      <Container className="grid__container">
                        <Row className="grid__row">
                          <Col lg={5} />
                          <Col lg={7}>
                            <p className="fade-first">{parse(year.blurb)}</p>
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
                          onClick={() => fullpageApi.moveSectionDown()}
                        />
                      </Container>
                    </div>
                  </div>
                </div>
                <div className={`section w-full ${colourBackgroundClass}`}>
                  <Container className="grid__container">
                    <Row className="grid__row h-screen" />
                  </Container>
                </div>
              </ReactFullpage.Wrapper>
            );
          }}
        />
      </div>
    </>
  );
};

Intro.propTypes = {
  year: PropTypes.shape(),
  navigateTo: PropTypes.func,
  imageBackgroundClass: PropTypes.string,
  colourBackgroundClass: PropTypes.string,
  setTransitionType: PropTypes.func,
  nextParams: PropTypes.shape()
};

export default Intro;
