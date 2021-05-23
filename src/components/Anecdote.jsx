import './Anecdote.scss';

import { Col, Container, Row } from 'react-grid-system';

import { Close20 } from '@carbon/icons-react';
import PropTypes from 'prop-types';
import React from 'react';

const Anecdote = ({
  shortTitle,
  type,
  author,
  source,
  year,
  isActive,
  citation
}) => {
  const modal = document.getElementById('modal-card');
  const overlay = document.getElementById('modal-overlay');

  if (isActive) {
    modal.style.transform = 'translateX(0%)';
    overlay.style.transform = 'translateX(0%)';
    overlay.style.opacity = '1';
  }

  const onClickSpan = () => {
    closeModal();
  };

  window.onclick = function(event) {
    if (event.target === modal) {
      closeModal();
    }
  };

  const closeModal = () => {
    modal.style.transform = 'translateX(100%)';
    overlay.style.transform = 'translateX(100%)';
    overlay.style.opacity = '0';
  };

  return (
    <>
      <div id="modal-overlay" className="modal-overlay" />
      <div id="modal-card" className="modal-card">
        <div className="absolute top-24 background-color">
          <Container className="grid__container">
            <Row
              className="grid__row modal-height"
              style={{ overflow: 'scroll' }}
            >
              <span
                className="close absolute top-8 right-6 z-10"
                onClick={onClickSpan}
              >
                <Close20 />
              </span>
              <Col lg={2} />
              <Col lg={1} className="bg-white" />
              <Col lg={7} className="bg-white pt-8">
                <div className="small-body mb-1">{shortTitle}</div>
                <div className="small-body mb-12">{type}</div>
                <div className="large-headline mb-2">{source}</div>
                <div className="small-headline mb-16">
                  {author}, {year}
                </div>
              </Col>
              <Col lg={2} className="bg-white" />

              <Col lg={2} />
              <Col lg={2} className="bg-white" />
              <Col lg={6} className="bg-white pb-8">
                <div>
                  <div className="medium-body pb-16">
                    The students regarded Hu Yaobang not only as a champion of
                    liberalisation but also as one of the few top government
                    leaders not tainted by official corruption. Within hours of
                    the death of this beloved figure, before official
                    announcements had been made, students on campuses had begun
                    posting elegies. One of the most frequently quoted poems
                    began with the haunting couplet:
                    <br />
                    <br />
                    Those who should have died live,
                    <br />
                    Those who should have lived have died.
                  </div>
                  <div className="small-body">{citation}</div>
                </div>
              </Col>
              <Col lg={2} className="bg-white" />
            </Row>
          </Container>
        </div>
      </div>
    </>
  );
};

Anecdote.propTypes = {
  isActive: PropTypes.bool,
  type: PropTypes.string,
  shortTitle: PropTypes.string,
  author: PropTypes.string,
  source: PropTypes.string,
  year: PropTypes.string,
  citation: PropTypes.string
};

export default Anecdote;
