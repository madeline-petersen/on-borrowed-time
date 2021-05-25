import './Event.scss';

import { Col, Container, Row } from 'react-grid-system';
import React, { useEffect, useState } from 'react';

import Footer from '../components/Footer';
import Header from '../components/Header';
import LeftMenu from '../components/LeftMenu';
import PropTypes from 'prop-types';
import ResourceTable from '../components/ResourceTable';
import SubHeader from '../components/SubHeader';
import { useScreenClass } from 'react-grid-system';

const Event = ({
  years,
  year,
  scene,
  romanSceneNumber,
  event,
  nextParams,
  next
}) => {
  const [isMenuActive, setIsMenuActive] = useState(false);
  const [isClicked, setClicked] = useState(false);

  const openLeftMenu = entry => {
    setIsMenuActive(true);
  };

  const onCloseLeftMenu = () => {
    setIsMenuActive(false);
  };

  const screenClass = useScreenClass();
  const start = 'gray-30';
  const end = 'black';

  useEffect(() => {
    setTimeout(function() {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }, 1000);
  }, []);

  // Get the modal
  const modal = document.getElementById('myModal');

  // When the user clicks the button, open the modal
  const onClickBtn = () => {
    modal.style.display = 'block';
  };

  // When the user clicks on <span> (x), close the modal
  const onClickSpan = () => {
    modal.style.display = 'none';
  };

  // When the user clicks anywhere outside of the modal, close it
  window.onclick = function(event) {
    if (event.target == modal) {
      document.getElementById('myModal').style.display = 'none';
    }
  };

  return (
    <>
      {/* Backgrounds for page transition */}
      <div className={`h-screen bg-${end} absolute top-0 w-full`}>
        <div
          className={`h-screen bg-${start} absolute top-0 w-full ${
            isClicked ? 'screen-shrink' : ''
          }`}
        />
      </div>

      <LeftMenu
        isActive={isMenuActive}
        onCloseLeftMenu={onCloseLeftMenu}
        years={years}
      />
      <span
        className="close absolute top-2 left-6 text-3xl cursor-pointer"
        onClick={openLeftMenu}
      >
        &#8226;
      </span>

      <div className="h-auto bg-gray-30">
        <Container className="grid__container border-l md:border-gray-60 border-gray-30">
          <Header label={`${year.id} ${year.title}`} border={true} />

          <Row className="grid__row shrink-animation">
            <Col lg={12} md={12} sm={12} xs={12} />
          </Row>

          <SubHeader
            romanSceneNumber={romanSceneNumber}
            title={scene.title}
            animate={true}
          />

          {/* Event */}
          <div
            id="overflow-container"
            className={`${isClicked ? 'fade-out' : 'delayed-fade-in'}`}
          >
            <Row className={`grid__row intro-paragraph pb-24`}>
              {event.paragraphs.map(paragraph => {
                return (
                  <>
                    <Col lg={1} md={2} />
                    <Col lg={11} md={10} sm={12} xs={12}>
                      <p
                        className={`large-headline text-black`}
                        style={{
                          textIndent: ['lg', 'xl', 'xxl'].includes(screenClass)
                            ? `calc(200%/11)` // indent 2/11 columns for large
                            : ['md'].includes(screenClass)
                            ? `calc(200%/10)` // indent 2/10 columns for medium
                            : '0' // indent 0 for small, x-small
                        }}
                      >
                        {paragraph}
                        <br />
                        <br />
                      </p>
                    </Col>
                  </>
                );
              })}
            </Row>
            <ResourceTable data={event.resources} />

            <Footer
              nextParams={nextParams}
              next={next}
              changingParam={'page'}
              setClicked={setClicked}
              isClicked={isClicked}
              theme={{
                background: 'gray-30',
                text: 'black',
                border: 'gray-60'
              }}
            />
          </div>
        </Container>
      </div>
    </>
  );
};

Event.propTypes = {
  years: PropTypes.arrayOf(PropTypes.shape()),
  year: PropTypes.shape(),
  scene: PropTypes.shape(),
  romanSceneNumber: PropTypes.string,
  event: PropTypes.shape(),
  next: PropTypes.shape(),
  nextParams: PropTypes.shape()
};

export default Event;
