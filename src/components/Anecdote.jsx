import './Anecdote.scss';

import { Col, Container, Row, Visible } from 'react-grid-system';

import { Close20 } from '@carbon/icons-react';
import PropTypes from 'prop-types';
import React from 'react';
import ReactHtmlParser from 'react-html-parser';

const Anecdote = ({
  type,
  shortTitle,
  publication,
  year,
  title,
  author,
  preamble,
  content,
  citation,
  isActive,
  linkTo,
  onCloseModal
}) => {
  const modal = document.getElementById('modal-card');
  const overlay = document.getElementById('modal-overlay');
  const anecdoteBackground = document.getElementById(
    'anecdote-background-filler'
  );

  window.addEventListener('click', function(event) {
    // left gutter
    if (event.target === anecdoteBackground) {
      closeModal();
    }
    // above the modal
    if (event.target === modal) {
      closeModal();
    }
  });

  if (isActive) {
    modal.style.transform = 'translateX(0%)';
    overlay.style.transform = 'translateX(0%)';
    overlay.style.opacity = '1';
    document.getElementById('scroll-container').scrollTo(0, 0);
  }

  const onClickSpan = () => {
    closeModal();
  };

  const closeModal = () => {
    modal.style.transform = 'translateX(100%)';
    overlay.style.transform = 'translateX(100%)';
    overlay.style.opacity = '0';
    onCloseModal();
  };

  const excerptTypes = [
    'Article Excerpt',
    'Book Excerpt',
    'Journal Excerpt',
    'Report Excerpt',
    'Interview',
    'Diary',
    'Press',
    'Letter',
    'Interview',
    'Bill',
    'Substack',
    'Transcript',
    'Wikipedia'
  ];

  const poemTypes = ['Poem', 'Lyrics'];

  return (
    <div className="anecdote">
      <div id="modal-overlay" className="modal-overlay z-20" />
      <div id="modal-card" className="modal-card">
        <div
          id="anecdote-background-filler"
          className={`absolute anecdote-background-filler right-0 ${
            excerptTypes.includes(type)
              ? 'type-excerpt'
              : poemTypes.includes(type)
              ? 'type-poem'
              : type === 'Imagery'
              ? 'type-imagery'
              : ''
          }`}
        >
          <Container className="grid__container">
            <Row id="scroll-container" className="grid__row modal-height">
              <span
                className="close absolute top-5 right-6 z-40"
                onClick={onClickSpan}
              >
                <Close20 />
              </span>

              {excerptTypes.includes(type) && (
                <>
                  <Col lg={2} md={2} sm={1} xs={1} onClick={onClickSpan} />
                  <Col lg={1} md={2} sm={1} xs={1} />
                  <Col lg={7} md={7} sm={9} xs={9} className="pt-5">
                    <div className="bg-white z-30 pt-5 anecdote-fixed-header">
                      <div className="small-body mb-1">
                        {shortTitle !== title
                          ? ReactHtmlParser(shortTitle)
                          : ''}
                      </div>
                      <div className="small-body mb-5">{type}</div>
                    </div>
                  </Col>
                  <Col lg={2} md={1} sm={1} xs={1} />

                  <Col lg={2} md={2} sm={1} xs={1} onClick={onClickSpan} />
                  <Col lg={1} md={2} sm={1} xs={1} />
                  <Col lg={7} md={7} sm={9} xs={9} className="anecdote-content">
                    <div className="large-headline-static mb-6">
                      {ReactHtmlParser(title)}
                    </div>
                    <div className="small-headline mb-20 md:mb-10 sm:mb-10">
                      {ReactHtmlParser(author)}
                      {publication && `, ${publication}`}
                      {year && `, ${year}`}
                    </div>
                  </Col>
                  <Col lg={2} md={1} sm={1} xs={1} />

                  <Col lg={2} md={2} sm={1} xs={1} onClick={onClickSpan} />
                  <Col lg={2} md={2} sm={1} xs={1} />
                  <Col lg={5} md={7} sm={9} xs={9}>
                    <>
                      {preamble && (
                        <div className="small-body">
                          {ReactHtmlParser(preamble)}
                        </div>
                      )}
                      {content &&
                        content.map((paragraph, index) => {
                          return (
                            <div
                              className="medium-body"
                              key={`paragraph-${index}`}
                            >
                              {ReactHtmlParser(paragraph)}
                              <br />
                            </div>
                          );
                        })}
                      <div className="h-12" />
                      <p className="border-t border-black border-opacity-10 pb-5" />
                      <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href={linkTo}
                      >
                        <p className="small-body text-black text-opacity-60">
                          {ReactHtmlParser(citation)}
                        </p>
                      </a>
                      <div className="bottom-spacer" />
                    </>
                  </Col>
                  <Col lg={3} md={1} sm={1} xs={1} />
                </>
              )}

              {type === 'Imagery' && (
                <>
                  <Col lg={4} md={2} sm={1} xs={1} onClick={onClickSpan} />
                  <Col lg={1} md={2} sm={1} xs={1} />
                  <Col lg={6} md={7} sm={9} xs={9} className="pt-5">
                    <div className="bg-white z-30 pt-5 anecdote-fixed-header">
                      <div className="small-body mb-1">
                        {shortTitle !== title
                          ? ReactHtmlParser(shortTitle)
                          : ''}
                      </div>
                      <div className="small-body mb-5">{type}</div>
                    </div>
                  </Col>
                  <Col lg={1} md={1} sm={1} xs={1} />

                  <Col lg={4} md={2} sm={1} xs={1} onClick={onClickSpan} />
                  <Col lg={1} md={2} sm={1} xs={1} />
                  <Col lg={6} md={7} sm={9} xs={9} className="anecdote-content">
                    <div className="large-headline-static mb-6">
                      {ReactHtmlParser(title)}
                    </div>
                    <div className="small-headline mb-20 md:mb-10 sm:mb-10">
                      {ReactHtmlParser(author)}
                      {publication && `, ${publication}`}
                      {year && `, ${year}`}
                    </div>
                    {preamble && (
                      <div className="small-body mb-16">
                        {ReactHtmlParser(preamble)}
                      </div>
                    )}
                  </Col>
                  <Col lg={1} md={1} sm={1} xs={1} />

                  <Col lg={4} md={2} sm={1} xs={1} onClick={onClickSpan} />
                  <Col lg={1} md={2} sm={1} xs={1} />
                  <Col lg={7} md={7} sm={9} xs={9}>
                    {content &&
                      content.map((image, index) => {
                        return (
                          <div
                            className="aspect-ratio-container bg-gray-20 mb-8"
                            key={`image-${index}`}
                          ></div>
                        );
                      })}
                    <div className="h-12" />
                    <p className="border-t border-black border-opacity-10 pb-5" />
                    <a target="_blank" rel="noopener noreferrer" href={linkTo}>
                      <p className="small-body text-black text-opacity-60">
                        {ReactHtmlParser(citation)}
                      </p>
                    </a>
                    <div className="bottom-spacer" />
                  </Col>
                  <Col lg={0} md={1} sm={1} xs={1} />
                </>
              )}

              {poemTypes.includes(type) && (
                <>
                  <Col lg={6} md={2} sm={1} xs={1} onClick={onClickSpan} />
                  <Col lg={1} md={2} sm={1} xs={1} />
                  <Col lg={5} md={7} sm={9} xs={9}>
                    <div className="bg-white z-30 pt-5 anecdote-fixed-header">
                      <div className="small-body mb-1">
                        {shortTitle !== title
                          ? ReactHtmlParser(shortTitle)
                          : ''}
                      </div>
                      <div className="small-body mb-5">{type}</div>
                    </div>
                  </Col>
                  <Visible md sm xs>
                    <Col md={1} sm={1} xs={1} />
                  </Visible>

                  <Col lg={6} md={2} sm={1} xs={1} onClick={onClickSpan} />
                  <Col lg={1} md={2} sm={1} xs={1} />
                  <Col lg={5} md={7} sm={9} xs={9} className="anecdote-content">
                    <div className="large-headline-static mb-6">
                      {ReactHtmlParser(title)}
                    </div>
                    <div className="small-headline mb-20 md:mb-10 sm:mb-10">
                      {ReactHtmlParser(author)}
                      {publication && `, ${publication}`}
                      {year && `, ${year}`}
                    </div>
                    {content &&
                      content.map((paragraph, index) => {
                        return (
                          <div
                            className="medium-body"
                            key={`paragraph-${index}`}
                          >
                            {ReactHtmlParser(paragraph)}
                            <br />
                          </div>
                        );
                      })}
                    <div className="h-12" />
                    <p className="border-t border-black border-opacity-10 pb-5" />
                    <a target="_blank" rel="noopener noreferrer" href={linkTo}>
                      <p className="small-body text-black text-opacity-60">
                        {ReactHtmlParser(citation)}
                      </p>
                    </a>
                    <div className="bottom-spacer" />
                  </Col>
                  <Col lg={0} md={1} sm={1} xs={1} />
                </>
              )}
            </Row>
          </Container>
        </div>
      </div>
    </div>
  );
};

Anecdote.propTypes = {
  type: PropTypes.string,
  shortTitle: PropTypes.string,
  title: PropTypes.string,
  year: PropTypes.string,
  author: PropTypes.string,
  publication: PropTypes.string,
  preamble: PropTypes.string,
  content: PropTypes.arrayOf(PropTypes.string),
  citation: PropTypes.string,
  isActive: PropTypes.bool,
  linkTo: PropTypes.string,
  onCloseModal: PropTypes.func
};

export default Anecdote;
