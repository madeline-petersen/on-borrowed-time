import './Anecdote.scss';

import { Col, Container, Row } from 'react-grid-system';

import { Close20 } from '@carbon/icons-react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import React from 'react';
import ReactHtmlParser from 'react-html-parser';

const Anecdote = ({
  type,
  shortTitle,
  publication,
  year,
  articleTitle,
  bookTitle,
  author,
  content,
  citation,
  isActive,
  onCloseModal
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
    onCloseModal();
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
                <div className="large-headline mb-2">
                  {bookTitle ? bookTitle : articleTitle}
                </div>
                <div className="small-headline mb-16">
                  {author},{publication && ` ${publication},`} {year}
                </div>
              </Col>
              <Col lg={2} className="bg-white" />

              <Col lg={2} />
              <Col lg={2} className="bg-white" />
              <Col lg={6} className="bg-white pb-8">
                <>
                  {content &&
                    content.map((paragraph, index) => {
                      return (
                        <div className="medium-body" key={`paragraph-${index}`}>
                          {ReactHtmlParser(paragraph)}
                          <br />
                          <br />
                        </div>
                      );
                    })}
                  <Link className="small-body pt-16">{citation}</Link>
                </>
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
  type: PropTypes.string,
  shortTitle: PropTypes.string,
  articleTitle: PropTypes.string,
  bookTitle: PropTypes.string,
  year: PropTypes.string,
  author: PropTypes.string,
  publication: PropTypes.string,
  content: PropTypes.arrayOf(PropTypes.string),
  citation: PropTypes.string,
  isActive: PropTypes.bool,
  onCloseModal: PropTypes.func
};

export default Anecdote;
