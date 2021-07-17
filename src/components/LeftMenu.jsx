import './LeftMenu.scss';

import { Col, Container, Row, Visible } from 'react-grid-system';
import React, { useState } from 'react';

import { ArrowLeft16 } from '@carbon/icons-react';
import PropTypes from 'prop-types';
import { roman } from '@sguest/roman-js';

const LeftMenu = ({
  isActive,
  onCloseLeftMenu,
  years,
  navigateTo,
  setNextBackground,
  setIsTransitioning
}) => {
  const [selectedYear, setSelectedYear] = useState(null);
  const menu = document.getElementById('menu-card');
  const menuBackground = document.getElementById('menu-background-filler');
  const overlay = document.getElementById('menu-overlay');

  window.addEventListener('click', function(event) {
    if (event.target === menuBackground) {
      closeModal();
    }
  });

  const onClickScene = (year, sceneIndex) => {
    setNextBackground('gray-30');
    setIsTransitioning(true);
    closeModal();
    let romanSceneNumber = roman.toRoman(sceneIndex + 1).toUpperCase();
    setTimeout(function() {
      navigateTo(year, romanSceneNumber, 'event');
      setSelectedYear(null);
    }, 500);
  };

  const onClickYear = year => {
    setNextBackground(year);
    setIsTransitioning(true);
    closeModal();
    setTimeout(function() {
      navigateTo(year);
      setSelectedYear(null);
    }, 500);
  };

  const closeModal = () => {
    // offscreen left
    if (menu) {
      menu.style.transform = 'translateX(-100%)';
      overlay.style.transform = 'translateX(-100%)';
      overlay.style.opacity = '0';
      onCloseLeftMenu();
    }
  };

  if (isActive) {
    // onscreen
    menu.style.transform = 'translateX(0%)';
    overlay.style.transform = 'translateX(0%)';
    overlay.style.opacity = '1';
  } else {
    closeModal();
  }

  return (
    <div className="left-menu">
      <div id="menu-overlay" className="menu-overlay z-20" />
      <div id="menu-card" className="menu-card z-30">
        <div
          id="menu-background-filler"
          className="absolute menu-background-filler"
        >
          <Container className="grid__container">
            <Row className="grid__row">
              <Col
                xxl={4}
                xl={4}
                lg={4}
                md={8}
                sm={12}
                xs={12}
                className="h-screen overflow-y-auto overflow-x-hidden"
              >
                {selectedYear !== null && (
                  <span
                    className={`text-white absolute top-24 z-40 cursor-pointer`}
                    onClick={() => setSelectedYear(null)}
                  >
                    <ArrowLeft16 />
                  </span>
                )}
                <div
                  className={`left-menu__list flex flex-col h-full justify-end ${
                    selectedYear !== null ? 'transform' : ''
                  }`}
                  style={{
                    paddingBottom: '52px',
                    transform: `${
                      selectedYear !== null
                        ? `translate(0%, calc(-40% - ${selectedYear.index *
                            33}px))`
                        : ''
                    }`
                  }}
                >
                  {years.map((year, index) => (
                    <span key={year.id}>
                      <Row
                        className={`left-menu__year mb-2 cursor-pointer ${selectedYear &&
                          selectedYear.id !== year.id &&
                          'fade-out-content'}`}
                        onClick={() =>
                          selectedYear === null
                            ? setSelectedYear({
                                id: year.id,
                                index: index,
                                ...year
                              })
                            : onClickYear(year.id)
                        }
                      >
                        {/* 1/4 of 4 columns */}
                        <Col lg={3} md={3} sm={2} xs={2}>
                          <div className="medium-body text-white">
                            {year.id}
                          </div>
                        </Col>
                        {/* 3/4 of 4 columns */}
                        <Col lg={9} md={9} sm={10} xs={10}>
                          <div className="medium-body text-white">
                            {year.title}
                          </div>
                        </Col>
                      </Row>
                    </span>
                  ))}
                </div>
                <span
                  className={`left-menu__scenes absolute ${selectedYear ===
                    null && 'fade-out-content'}`}
                  style={{ top: '26%' }}
                >
                  <Row className={`small-body text-white`}>
                    <Col lg={3} md={3} sm={2} xs={2} />
                    <Col lg={9} md={9} sm={10} xs={10}>
                      <div className="pb-10 pr-12">
                        {selectedYear && selectedYear.blurb}
                      </div>
                    </Col>
                    {selectedYear &&
                      selectedYear.scenes.map((scene, index) => (
                        <span
                          key={index}
                          className="contents cursor-pointer"
                          onClick={() => onClickScene(selectedYear.id, index)}
                        >
                          <Col lg={11} md={11} sm={11} xs={11}>
                            <p className="border-t border-gray-70 pt-4" />
                          </Col>
                          <Col lg={3} md={3} sm={2} xs={2}>
                            <div className={`small-body text-gray-40`}>
                              Scene {roman.toRoman(index + 1)}
                            </div>
                          </Col>
                          <Col lg={9} md={9} sm={10} xs={10}>
                            <div>{scene.title}</div>
                          </Col>
                          <Col lg={11} md={11} sm={11} xs={11}>
                            <p className="pb-8" />
                          </Col>
                        </span>
                      ))}
                  </Row>
                </span>
              </Col>
              <Visible xxl xl lg md>
                <Col xxl={8} xl={8} lg={8} md={4} onClick={closeModal} />
              </Visible>
            </Row>
          </Container>
        </div>
      </div>
    </div>
  );
};

LeftMenu.propTypes = {
  isActive: PropTypes.bool,
  onCloseLeftMenu: PropTypes.func,
  years: PropTypes.arrayOf(PropTypes.shape()),
  navigateTo: PropTypes.func,
  setNextBackground: PropTypes.func,
  setIsTransitioning: PropTypes.func
};

export default LeftMenu;
