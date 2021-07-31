import { Col, Row } from 'react-grid-system';

import Anecdote from './Anecdote';
import PropTypes from 'prop-types';
import React from 'react';
import ReactHtmlParser from 'react-html-parser';

const ResourceTable = ({
  data,
  isModalActive,
  setIsModalActive,
  anecdoteData,
  openModal
}) => {
  const onCloseModal = () => {
    setIsModalActive(false);
  };

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
            className={`border-t border-black border-opacity-10 pb-4 fade-in-element`}
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
                    className={`border-t border-black border-opacity-10 pt-4 fade-in-element`}
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
                <p className={`text-black text-opacity-100 fade-in-element`}>
                  {ReactHtmlParser(entry.shortTitle)}
                </p>
              </Col>
              <Col lg={3} md={3} sm={4} xs={12} className="small-body">
                <p className={`text-black text-opacity-70 fade-in-element`}>
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
                <p className="text-black text-opacity-70 fade-in-element">
                  {entry.type}
                </p>
                <p className="text-black text-opacity-70 fade-in-element">
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

ResourceTable.propTypes = {
  data: PropTypes.arrayOf(PropTypes.shape()),
  isModalActive: PropTypes.bool,
  setIsModalActive: PropTypes.func,
  anecdoteData: PropTypes.arrayOf(PropTypes.shape()),
  openModal: PropTypes.func
};

export default ResourceTable;
