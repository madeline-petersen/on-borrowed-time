import 'fullpage.js/vendors/scrolloverflow';
import './Artifacts.scss';

import ReactFullpage from '@fullpage/react-fullpage';
import { throttle } from 'lodash';
import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';
import { Container, Row } from 'react-grid-system';

import HiddenFooter from '../components/HiddenFooter';
import Custom from '../components/imageLayouts/Custom';
import Diptych from '../components/imageLayouts/Diptych';
import Triptych from '../components/imageLayouts/Triptych';

const Artifacts = ({
  artifacts,
  nextParams,
  changingParam,
  next,
  setIsTransitioning,
  navigateTo
}) => {
  const [headerHeight, setHeaderHeight] = useState('78px');
  useEffect(() => {
    setIsTransitioning(false);
  }, [artifacts]);

  const afterLoad = (origin, destination, direction) => {
    if (destination.isLast) {
      // intra-year
      navigateTo(
        nextParams.year,
        nextParams.scene, // romanSceneNumber
        nextParams.page
      );
    }
  };

  const onLeave = (origin, destination, direction) => {
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

  setTimeout(() => {
    const header = document.getElementById('header');
    if (header) {
      setHeaderHeight(window.getComputedStyle(header).height);
    }
  }, 4500);

  return (
    <>
      <div
        className="artifacts"
        key={`artifacts-${nextParams.year}-${nextParams.scene}-${nextParams.page}`}
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
          lazyLoading={false}
          paddingTop={headerHeight}
          render={({ state, fullpageApi }) => {
            return (
              <ReactFullpage.Wrapper>
                <div className={`section h-auto bg-black`}>
                  <Container className="min-h-screen grid__container caption-fade-in">
                    {/* Artifacts */}
                    {artifacts && (
                      <>
                        <div style={{ height: '20vh' }} />
                        {artifacts.imageLayout &&
                          artifacts.imageLayout.type === 'custom' && (
                            <Custom images={artifacts.imageLayout.images} />
                          )}
                        {artifacts.imageLayout &&
                          artifacts.imageLayout.type === 'triptych' && (
                            <Triptych images={artifacts.imageLayout.images} />
                          )}
                        {artifacts.imageLayout &&
                          artifacts.imageLayout.type === 'diptych' && (
                            <Diptych images={artifacts.imageLayout.images} />
                          )}

                        {/* padding below last page element */}
                        <div className="pb-44" />
                      </>
                    )}
                  </Container>
                  <div className={`hidden-footer__container bg-black`}>
                    <HiddenFooter
                      pageId="artifacts"
                      nextParams={nextParams}
                      next={next}
                      changingParam={changingParam}
                      textClasses="text-white text-opacity-90"
                    />
                  </div>
                </div>
                <div className={`section w-full bg-black`}>
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
      </div>
    </>
  );
};

Artifacts.propTypes = {
  artifacts: PropTypes.shape(),
  next: PropTypes.shape(),
  nextParams: PropTypes.shape(),
  changingParam: PropTypes.string,
  setIsTransitioning: PropTypes.func,
  navigateTo: PropTypes.func
};

export default Artifacts;
