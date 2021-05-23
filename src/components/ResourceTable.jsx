import { Col, Row } from 'react-grid-system';

import Anecdote from './Anecdote';
import PropTypes from 'prop-types';
import React from 'react';
import ReactHtmlParser from 'react-html-parser';

const ResourceTable = ({ data }) => {
  return (
    <>
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

            <Col lg={3} md={2} />
            <Anecdote {...entry} key={`anecdote-${index}`}>
              <Col lg={4} md={4} sm={4} xs={12} className="small-body">
                <p className={`text-gray-70`}>{ReactHtmlParser(entry.title)}</p>
              </Col>
              <Col lg={3} md={3} sm={4} xs={12} className="small-body">
                <p className={`text-gray-70`}>{entry.source}</p>
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
            </Anecdote>

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
