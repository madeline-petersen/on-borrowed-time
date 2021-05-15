import { Col, Row } from 'react-grid-system';

import PropTypes from 'prop-types';
import React from 'react';
import ReactHtmlParser from 'react-html-parser';

const ResourceTable = ({ data, tableState }) => {
  return (
    <>
      {/* Resource Table */}
      <Row className={`grid__row delayed-fade-in`}>
        <Col lg={3} md={2} />
        <Col lg={9} md={10}>
          <div
            className={`border-t border-gray-70 pb-4 ${
              tableState ? 'fade-out' : null
            }`}
          />
        </Col>
      </Row>
      {data.map((entry, index) => {
        return (
          <Row className={`grid__row delayed-fade-in`} key={index}>
            {index !== 0 && (
              <>
                <Col lg={3} md={2} />
                <Col lg={9} md={10}>
                  <div
                    className={`border-t border-gray-40 pt-4 ${
                      tableState ? 'fade-out' : null
                    }`}
                  />
                </Col>
              </>
            )}

            <Col lg={3} md={2} />
            <Col lg={4} md={4} sm={4} xs={12} className="small-body">
              <div className={`${tableState ? 'fade-out' : null}`}>
                {ReactHtmlParser(entry.title)}
              </div>
            </Col>
            <Col lg={3} md={3} sm={4} xs={12} className="small-body">
              <div className={`text-gray-40 ${tableState ? 'fade-out' : null}`}>
                {entry.source}
              </div>
            </Col>
            <Col
              lg={2}
              md={3}
              sm={4}
              xs={12}
              className={`small-body ${tableState ? 'fade-out' : null}`}
              style={{ display: 'flex', justifyContent: 'space-between' }}
            >
              <div className="text-gray-40">{entry.type}</div>
              <div className="text-gray-40">{entry.year}</div>
            </Col>

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
  tableState: PropTypes.bool
};

export default ResourceTable;
