import { Col, Row } from 'react-grid-system';

import PropTypes from 'prop-types';
import React from 'react';

const ResourceTable = ({ data }) => {
  return (
    <div>
      {/* Resource Table */}
      <Row className="grid__row">
        <Col lg={3} md={2} />
        <Col lg={9} md={10}>
          <div className="border-t border-gray-70 pb-4" />
        </Col>
      </Row>
      {data.map((entry, index) => {
        return (
          <Row className="grid__row" key={index}>
            {index !== 0 && (
              <>
                <Col lg={3} md={2} />
                <Col lg={9} md={10}>
                  <div className="border-t border-gray-40 pt-4" />
                </Col>
              </>
            )}

            <Col lg={3} md={2} />
            <Col lg={4} md={4} sm={4} xs={12} className="regular-caption">
              <div className="text-gray-100 font-bold">{entry.title}</div>
            </Col>
            <Col lg={3} md={3} sm={4} xs={12} className="regular-caption">
              <div className="text-gray-40">{entry.source}</div>
            </Col>
            <Col
              lg={2}
              md={3}
              sm={4}
              xs={12}
              className="regular-caption"
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
    </div>
  );
};

ResourceTable.propTypes = {
  data: PropTypes.arrayOf(PropTypes.shape())
};

export default ResourceTable;
