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
  setTransitionType,
  navigateTo,
  onScrollOverflow,
  beforeLeave
}) => {
  const [headerHeight, setHeaderHeight] = useState('78px');
  useEffect(() => {
    setTransitionType(null);
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
          licenseKey={'DNAK9-ZU2SK-BDKK8-JZ61H-YIUAK'}
          scrollingSpeed={1000}
          afterLoad={afterLoad}
          beforeLeave={throttle(beforeLeave, 1000)}
          scrollOverflow={true}
          onScrollOverflow={onScrollOverflow}
          lazyLoading={false}
          paddingTop={headerHeight}
          render={({ state, fullpageApi }) => {
            return (
              <ReactFullpage.Wrapper>
                <div className="section h-auto bg-black">
                  <Container className="min-h-screen grid__container caption-fade-in">
                    {/* Artifacts */}
                    {artifacts && (
                      <>
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
                </div>
                <div className="hidden-footer__container bg-black">
                  <HiddenFooter
                    pageId="artifacts"
                    nextParams={nextParams}
                    next={next}
                    changingParam={changingParam}
                    textClasses="text-white text-opacity-90"
                  />
                </div>
                <div className="section w-full bg-black">
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

Artifacts.propTypes = {
  artifacts: PropTypes.shape(),
  next: PropTypes.shape(),
  nextParams: PropTypes.shape(),
  changingParam: PropTypes.string,
  setTransitionType: PropTypes.func,
  navigateTo: PropTypes.func,
  onScrollOverflow: PropTypes.func,
  beforeLeave: PropTypes.func
};

export default Artifacts;
