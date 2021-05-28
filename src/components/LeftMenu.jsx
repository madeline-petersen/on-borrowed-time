import './LeftMenu.scss';

import { Col, Container, Row } from 'react-grid-system';

import { Close20 } from '@carbon/icons-react';
import PropTypes from 'prop-types';
import React from 'react';

const LeftMenu = ({ isActive, onCloseLeftMenu, years }) => {
  const menu = document.getElementById('menu-card');
  const overlay = document.getElementById('menu-overlay');

  const onClickSpan = () => {
    closeModal();
  };

  window.onclick = function(event) {
    if (event.target === menu) {
      closeModal();
    }
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
        <div className="absolute background-color">
          <Container className="grid__container">
            <Row className="grid__row menu-height">
              <Col lg={4} className="bg-black h-screen">
                <span
                  className="close absolute top-5 right-6 z-40"
                  onClick={onClickSpan}
                >
                  <Close20 />
                </span>
                <div
                  className="flex flex-col h-full justify-end"
                  style={{ paddingBottom: '52px' }}
                >
                  {years.map(year => (
                    <Row key={year.id} className="mb-2 cursor-pointer">
                      {/* 1/4 of 4 columns */}
                      <Col lg={3}>
                        <div className="medium-body text-white">{year.id}</div>
                      </Col>
                      {/* 3/4 of 4 columns */}
                      <Col lg={9}>
                        <div className="medium-body text-white">
                          {year.title}
                        </div>
                      </Col>
                    </Row>
                  ))}
                </div>
              </Col>
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
  years: PropTypes.arrayOf(PropTypes.shape())
};

export default LeftMenu;
