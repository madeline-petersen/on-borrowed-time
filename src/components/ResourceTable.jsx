import { Col, Row } from 'react-grid-system';
import React, { useState } from 'react';

import Anecdote from './Anecdote';
import PropTypes from 'prop-types';
import ReactHtmlParser from 'react-html-parser';

const ResourceTable = ({ data }) => {
  const [anecdoteData, setAnecdoteData] = useState({});
  const [isModalActive, setIsModalActive] = useState(false);

  const openModal = entry => {
    console.log(entry);
    setAnecdoteData(entry);
    setIsModalActive(true);
  };

  return (
    <>
      <Anecdote {...anecdoteData} isActive={isModalActive} />

      {/* Resource Table */}
      <Row className={`grid__row`}>
        <Col lg={3} md={2} />
        <Col lg={9} md={10}>
          <p className={`border-t border-gray-60 pb-4`} />
        </Col>
      </Row>
      {data.map((entry, index) => {
        return (
          <Row className={`grid__row`} key={`table-row-${index}`}>
            {index !== 0 && (
              <>
                <Col lg={3} md={2} />
                <Col lg={9} md={10}>
                  <p className={`border-t border-gray-40 pt-4`} />
                </Col>
              </>
            )}

            <div
              onClick={() => openModal(entry)}
              className="contents cursor-pointer"
            >
              <Col lg={3} md={2} />
              <Col lg={4} md={4} sm={4} xs={12} className="small-body">
                <p className={`text-gray-70`}>
                  {ReactHtmlParser(entry.shortTitle)}
                </p>
              </Col>
              <Col lg={3} md={3} sm={4} xs={12} className="small-body">
                <p className={`text-gray-70`}>
                  {entry.source ? entry.source : entry.title}
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
                <p className="text-gray-70">{entry.type}</p>
                <p className="text-gray-70">{entry.year}</p>
              </Col>
            </div>

            <Col lg={3} md={2} />
            <Col lg={9} md={10} className="pb-8" />
          </Row>
        );
      })}
    </>
  );
};

ResourceTable.propTypes = {
  data: PropTypes.arrayOf(PropTypes.shape())
};

export default ResourceTable;
