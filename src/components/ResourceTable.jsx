import { Col, Row } from 'react-grid-system';

import { ArrowUpRight16 } from '@carbon/icons-react';
import Anecdote from './Anecdote';
import PropTypes from 'prop-types';
import React from 'react';
import ReactHtmlParser from 'react-html-parser';

const ResourceTable = ({
  theme,
  data,
  isModalActive,
  setIsModalActive,
  anecdoteData,
  openModal,
  matchesLength,
  textColourClass,
  borderColourClass
}) => {
  const onCloseModal = () => {
    setIsModalActive(false);
  };

  let themeTextClass = 'text-black';
  let themeBorderClass = 'border-black';

  if (theme === 'white') {
    themeTextClass = 'text-white';
    themeBorderClass = 'border-white';
  }

  if (textColourClass) {
    themeTextClass = textColourClass;
  }

  if (borderColourClass) {
    themeBorderClass = borderColourClass;
  }

  return (
    <>
      <Anecdote
        {...anecdoteData}
        title={
          anecdoteData.articleTitle ||
          anecdoteData.bookTitle ||
          anecdoteData.poemTitle
        }
        isActive={isModalActive}
        onCloseModal={onCloseModal}
      />

      {/* Resource Table */}
      <Row className={`grid__row`}>
        <Col lg={3} md={2} />
        <Col lg={9} md={10}>
          <p
            className={`border-t ${themeBorderClass} border-opacity-10 pb-4 fade-second`}
          />
        </Col>
      </Row>
      {data.map((entry, index) => {
        return (
          <Row className={`grid__row`} key={`table-row-${index}`}>
            {index !== 0 && (
              <>
                <Col lg={3} md={2} />
                <Col lg={9} md={10}>
                  <p
                    className={`border-t ${themeBorderClass} border-opacity-10 pt-4 fade-second`}
                  />
                </Col>
              </>
            )}

            <Col lg={3} md={2} />
            <span
              onClick={() => openModal(entry)}
              className="contents cursor-pointer"
            >
              <Col lg={4} md={4} sm={4} xs={12} className="small-body">
                <p className={`${themeTextClass} text-opacity-100 fade-second`}>
                  {index < matchesLength && (
                    <span className="-ml-8 pr-6">{index + 1}</span>
                  )}
                  {ReactHtmlParser(entry.shortTitle)}
                  {!entry.content && (
                    <ArrowUpRight16 className="inline-block ml-1" />
                  )}
                </p>
              </Col>
              <Col lg={3} md={3} sm={4} xs={12} className="small-body">
                <p
                  className={`${themeTextClass} text-opacity-70 fade-second`}
                  style={{ paddingRight: 'calc(100%/6)' }}
                >
                  {ReactHtmlParser(
                    `${entry.bookTitle ? entry.bookTitle : entry.publication}`
                  )}
                </p>
              </Col>
              <Col
                lg={2}
                md={3}
                sm={4}
                xs={12}
                className={`small-body`}
                style={{ display: 'flex', justifyContent: 'space-between' }}
              >
                <p className={`${themeTextClass} text-opacity-70 fade-second`}>
                  {[
                    'Journal Excerpt',
                    'Article Excerpt',
                    'Book Excerpt',
                    'Report Excerpt'
                  ].includes(entry.type)
                    ? entry.publication
                    : entry.type}
                </p>
                <p className={`${themeTextClass} text-opacity-70 fade-second`}>
                  {entry.year}
                </p>
              </Col>
            </span>
            <Col lg={3} md={2} />
            <Col lg={9} md={10} className="pb-8" />
          </Row>
        );
      })}
    </>
  );
};

ResourceTable.defaultProps = {
  theme: 'black'
};

ResourceTable.propTypes = {
  theme: PropTypes.string,
  data: PropTypes.arrayOf(PropTypes.shape()),
  isModalActive: PropTypes.bool,
  setIsModalActive: PropTypes.func,
  anecdoteData: PropTypes.arrayOf(PropTypes.shape()),
  openModal: PropTypes.func,
  matchesLength: PropTypes.number,
  textColourClass: PropTypes.string,
  borderColourClass: PropTypes.string
};

export default ResourceTable;
