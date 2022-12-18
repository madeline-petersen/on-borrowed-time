import './LeftMenu.scss';

import { roman } from '@sguest/roman-js';
import parse from 'html-react-parser';
import PropTypes from 'prop-types';
import React from 'react';
import { Col, Container, Row, Visible } from 'react-grid-system';
import { useHistory } from 'react-router-dom';

const LeftMenu = ({
  isActive,
  onCloseLeftMenu,
  years,
  navigateTo,
  selectedYear,
  setSelectedYear,
  setShowSiteTitle
}) => {
  let history = useHistory();
  const menu = document.getElementById('menu-card');
  const menuBackground = document.getElementById('menu-background-filler');
  const overlay = document.getElementById('menu-overlay');

  window.addEventListener('click', function(event) {
    if (event.target === menuBackground) {
      closeModal();
    }
  });

  const onClickScene = (year, sceneIndex) => {
    closeModal();
    let romanSceneNumber = roman.toRoman(sceneIndex + 1).toUpperCase();
    setTimeout(function() {
      navigateTo(year, romanSceneNumber, 'event');
    }, 500); // delay 500ms to close menu
  };

  const onClickYear = year => {
    setShowSiteTitle(true);
    closeModal();
    setTimeout(function() {
      navigateTo(year);
    }, 500); // delay 500ms to close menu
  };

  const onSelectYear = (year, index) => {
    setShowSiteTitle(false);
    setSelectedYear({
      id: year.id,
      index: index,
      ...year
    });
  };

  const navigateToUrl = url => {
    history.push(`/${url}`);
  };

  const onClickLink = url => {
    closeModal();
    setTimeout(function() {
      navigateToUrl(url);
    }, 1000); // delay 1s to close menu
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
                    selectedYear !== null ? 'transform' : 'years-menu'
                  }`}
                  style={{
                    paddingTop: `${
                      selectedYear !== null
                        ? `calc(264px - ${(selectedYear.index + 1) * 33}px)`
                        : '264px'
                    }`
                  }}
                >
                  <div className="dim-menu">
                    {years.map((year, index) => (
                      <>
                        <span key={year.id}>
                          <Row
                            className={`left-menu__year mb-2 cursor-pointer ${selectedYear &&
                              selectedYear.id !== year.id &&
                              'fade-out-content'}`}
                            onClick={() =>
                              selectedYear === null
                                ? onSelectYear(year, index)
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
                                {parse(year.title)}
                              </div>
                            </Col>
                          </Row>
                        </span>
                      </>
                    ))}

                    <span key="page-divider">
                      <Row
                        className={`left-menu__year page-divider ${selectedYear &&
                          'fade-out-content'} pt-6`}
                      >
                        <Col lg={11} md={11} sm={11} xs={11}>
                          {/* dividing line */}
                          <p className="border-t border-white border-opacity-10 pt-8" />
                        </Col>
                        {/* 1/4 of 4 columns */}
                        <Col lg={3} md={3} sm={2} xs={2} />
                        {/* 3/4 of 4 columns */}
                        <Col lg={9} md={9} sm={10} xs={10}></Col>
                      </Row>
                    </span>

                    <span key="index">
                      <Row
                        className={`left-menu__year mb-2 ${selectedYear &&
                          'fade-out-content'}`}
                        onClick={() => onClickLink('index')}
                      >
                        <Col lg={11} md={11} sm={11} xs={11}></Col>
                        {/* 1/4 of 4 columns */}
                        <Col lg={3} md={3} sm={2} xs={2} />
                        {/* 3/4 of 4 columns */}
                        <Col lg={9} md={9} sm={10} xs={10}>
                          <div className="medium-body text-white cursor-pointer fit-content">
                            Index
                          </div>
                        </Col>
                      </Row>
                    </span>

                    <span key="threads">
                      <Row
                        className={`left-menu__year mb-2 ${selectedYear &&
                          'fade-out-content'}`}
                        onClick={() => onClickLink('threads')}
                      >
                        <Col lg={11} md={11} sm={11} xs={11}></Col>
                        {/* 1/4 of 4 columns */}
                        <Col lg={3} md={3} sm={2} xs={2} />
                        {/* 3/4 of 4 columns */}
                        <Col lg={9} md={9} sm={10} xs={10}>
                          <div className="medium-body text-white cursor-pointer fit-content">
                            Threads
                          </div>
                        </Col>
                      </Row>
                    </span>

                    <span key="info">
                      <Row
                        className={`left-menu__year mb-2 ${selectedYear &&
                          'fade-out-content'}`}
                        onClick={() => onClickLink('info')}
                      >
                        {/* 1/4 of 4 columns */}
                        <Col lg={3} md={3} sm={2} xs={2} />
                        {/* 3/4 of 4 columns */}
                        <Col lg={9} md={9} sm={10} xs={10}>
                          <div className="medium-body text-white cursor-pointer fit-content">
                            Intent
                          </div>
                        </Col>
                      </Row>
                    </span>
                  </div>

                  {selectedYear !== null && (
                    <span
                      className={`left-menu__scenes absolute scenes-fade-in`}
                    >
                      <Row className={`small-body text-white`}>
                        <Col lg={3} md={3} sm={2} xs={2} />
                        <Col lg={9} md={9} sm={10} xs={10}>
                          <div className="pb-10 pr-12">
                            {selectedYear && parse(selectedYear.description)}
                          </div>
                        </Col>
                      </Row>
                      <Row className={`small-body text-white scene-container`}>
                        {selectedYear &&
                          selectedYear.scenes.map((scene, index) => (
                            <span
                              key={`scene-${index}`}
                              className="contents cursor-pointer"
                              onClick={() =>
                                onClickScene(selectedYear.id, index)
                              }
                            >
                              <Col lg={11} md={11} sm={11} xs={11}>
                                <p className="border-t border-white border-opacity-10 pt-4" />
                              </Col>
                              <Col lg={3} md={3} sm={2} xs={2}>
                                <div
                                  className={`small-body text-white text-opacity-50`}
                                >
                                  Scene&nbsp;{roman.toRoman(index + 1)}
                                </div>
                              </Col>
                              <Col lg={9} md={9} sm={10} xs={10}>
                                <div>{parse(scene.title)}</div>
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
  selectedYear: PropTypes.shape(),
  setSelectedYear: PropTypes.func,
  setShowSiteTitle: PropTypes.func
};

export default LeftMenu;
