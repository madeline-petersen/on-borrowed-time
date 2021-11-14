import './LeftMenu.scss';

import { Col, Container, Row, Visible } from 'react-grid-system';

import PropTypes from 'prop-types';
import React from 'react';
import ReactHtmlParser from 'react-html-parser';
import { roman } from '@sguest/roman-js';
import { useHistory } from 'react-router-dom';

const LeftMenu = ({
  isActive,
  onCloseLeftMenu,
  years,
  navigateTo,
  setNextBackground,
  setIsTransitioning,
  selectedYear,
  setSelectedYear
}) => {
  const menu = document.getElementById('menu-card');
  const menuBackground = document.getElementById('menu-background-filler');
  const overlay = document.getElementById('menu-overlay');
  let history = useHistory();

  window.addEventListener('click', function(event) {
    if (event.target === menuBackground) {
      closeModal();
    }
  });

  const onClickScene = (year, sceneIndex) => {
    setNextBackground(year, 'event');
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

  const onClickLink = url => {
    setNextBackground(null, url);
    setIsTransitioning(true);
    closeModal();
    setTimeout(function() {
      navigateTo(url);
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
                <div
                  className={`left-menu__list flex-col h-full ${
                    selectedYear !== null ? 'transform' : ''
                  }`}
                  style={{
                    paddingTop: `${
                      selectedYear !== null
                        ? `calc(264px - ${(selectedYear.index + 1) * 33}px)`
                        : '264px'
                    }`
                  }}
                >
                  {years.map((year, index) => (
                    <>
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
                              {ReactHtmlParser(year.title)}
                            </div>
                          </Col>
                        </Row>
                      </span>
                    </>
                  ))}

                  <span key="editors-note">
                    <Row
                      className={`left-menu__year mb-2 ${selectedYear &&
                        'fade-out-content'} pt-6`}
                      onClick={() => onClickLink('editors-note')}
                    >
                      <Col lg={11} md={11} sm={11} xs={11}>
                        {/* dividing line */}
                        <p className="border-t border-white border-opacity-20 pt-8" />
                      </Col>
                      {/* 1/4 of 4 columns */}
                      <Col lg={3} md={3} sm={2} xs={2} />
                      {/* 3/4 of 4 columns */}
                      <Col lg={9} md={9} sm={10} xs={10}>
                        <div className="medium-body text-white cursor-pointer fit-content">
                          Editor&apos;s Note
                        </div>
                      </Col>
                    </Row>
                  </span>

                  <span key="thematic-threads">
                    <Row
                      className={`left-menu__year mb-2 ${selectedYear &&
                        'fade-out-content'}`}
                      onClick={() => onClickLink('thematic-threads')}
                    >
                      {/* 1/4 of 4 columns */}
                      <Col lg={3} md={3} sm={2} xs={2} />
                      {/* 3/4 of 4 columns */}
                      <Col lg={9} md={9} sm={10} xs={10}>
                        <div className="medium-body text-white cursor-pointer fit-content">
                          Thematic Threads
                        </div>
                      </Col>
                    </Row>
                  </span>

                  {selectedYear !== null && (
                    <span
                      className={`left-menu__scenes absolute scenes-fade-in`}
                    >
                      <Row className={`small-body text-white`}>
                        <Col lg={3} md={3} sm={2} xs={2} />
                        <Col lg={9} md={9} sm={10} xs={10}>
                          <div className="pb-10 pr-12">
                            {selectedYear &&
                              ReactHtmlParser(selectedYear.description)}
                          </div>
                        </Col>
                        {selectedYear &&
                          selectedYear.scenes.map((scene, index) => (
                            <span
                              key={index}
                              className="contents cursor-pointer"
                              onClick={() =>
                                onClickScene(selectedYear.id, index)
                              }
                            >
                              <Col lg={11} md={11} sm={11} xs={11}>
                                <p className="border-t border-white border-opacity-20 pt-4" />
                              </Col>
                              <Col lg={3} md={3} sm={2} xs={2}>
                                <div
                                  className={`small-body text-white text-opacity-50`}
                                >
                                  Scene {roman.toRoman(index + 1)}
                                </div>
                              </Col>
                              <Col lg={9} md={9} sm={10} xs={10}>
                                <div>{ReactHtmlParser(scene.title)}</div>
                              </Col>
                              <Col lg={11} md={11} sm={11} xs={11}>
                                <p className="pb-8" />
                              </Col>
                            </span>
                          ))}
                      </Row>
                    </span>
                  )}
                </div>
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
  setIsTransitioning: PropTypes.func,
  selectedYear: PropTypes.shape(),
  setSelectedYear: PropTypes.func
};

export default LeftMenu;
