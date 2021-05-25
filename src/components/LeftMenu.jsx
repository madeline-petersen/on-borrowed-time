import './LeftMenu.scss';

import { Col, Container, Row } from 'react-grid-system';

import { Close20 } from '@carbon/icons-react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import React from 'react';
import ReactHtmlParser from 'react-html-parser';

const LeftMenu = ({ isActive, onCloseLeftMenu, years }) => {
  const menu = document.getElementById('menu-card');
  const overlay = document.getElementById('menu-overlay');

  if (isActive) {
    menu.style.transform = 'translateX(0%)';
    overlay.style.transform = 'translateX(0%)';
    overlay.style.opacity = '1';
  }

  const onClickSpan = () => {
    closeModal();
  };

  window.onclick = function(event) {
    if (event.target === menu) {
      closeModal();
    }
  };

  const closeModal = () => {
    menu.style.transform = 'translateX(-100%)';
    overlay.style.transform = 'translateX(-100%)';
    overlay.style.opacity = '0';
    onCloseLeftMenu();
  };

  return (
    <div className="left-menu">
      <div id="menu-overlay" className="menu-overlay" />
      <div id="menu-card" className="menu-card">
        <div className="absolute background-color">
          <Container className="grid__container">
            <Row className="grid__row menu-height cursor-pointer">
              <Col lg={1} className="bg-black h-screen">
                <div className="flex flex-col h-full justify-end pb-14">
                  {years.map((year, index) => (
                    <div
                      className="medium-body text-white"
                      key={`year-${index}`}
                    >
                      {year.id}
                    </div>
                  ))}
                </div>
              </Col>
              <Col lg={3} className="bg-black h-screen">
                <span
                  className="close absolute top-5 right-6 z-10"
                  onClick={onClickSpan}
                >
                  <Close20 />
                </span>
                <div className="flex flex-col h-full justify-end pb-14">
                  {years.map((year, index) => (
                    <div
                      className="medium-body text-white"
                      key={`year-${index}-title`}
                    >
                      {year.title}
                    </div>
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
