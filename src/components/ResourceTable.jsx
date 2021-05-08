import { Col, Row } from 'react-grid-system';

import React from 'react';

const ResourceTable = () => {
  const entries = [
    {
      title: 'Vivamus feugiat quis',
      source: 'Suspendisse tristique, pulvinar neque, at bibendum',
      type: 'Book Excerpt',
      year: '1990'
    },
    {
      title: 'In non quam in ligula',
      source: 'Suspendisse quis condimentum felis',
      type: 'Book Excerpt',
      year: '2001'
    },
    {
      title: 'In at cursus nisl',
      source: 'Maecenas auctor vulputate ex a auctor',
      type: 'Book Excerpt',
      year: '2001'
    },
    {
      title: 'Etiam sit amet nunc',
      source: 'Duis suscipit turpis',
      type: 'Article Excerpt',
      year: '1989'
    }
  ];

  return (
    <div>
      {/* Resource Table */}
      <Row className="grid__row">
        <Col lg={3} md={2} />
        <Col lg={9} md={10}>
          <div className="border-t border-gray-700 pb-4" />
        </Col>
      </Row>
      {entries.map((entry, index) => {
        return (
          <Row className="grid__row" key={index}>
            {index !== 0 && (
              <>
                <Col lg={3} md={2} />
                <Col lg={9} md={10}>
                  <div className="border-t border-gray-400 pt-4" />
                </Col>
              </>
            )}

            <Col lg={3} md={2} />
            <Col lg={4} md={4} sm={4} xs={12} className="regular-caption">
              <div className="gray-900 font-bold">{entry.title}</div>
            </Col>
            <Col
              lg={3}
              md={3}
              sm={4}
              xs={12}
              className="regular-caption text-gray-50"
            >
              <div className="text-gray-400">{entry.source}</div>
            </Col>
            <Col
              lg={2}
              md={3}
              sm={4}
              xs={12}
              className="regular-caption"
              style={{ display: 'flex', justifyContent: 'space-between' }}
            >
              <div className="text-gray-400">{entry.type}</div>
              <div className="text-gray-400">{entry.year}</div>
            </Col>

            <Col lg={3} md={2} />
            <Col lg={9} md={10} className="pb-8" />
          </Row>
        );
      })}
    </div>
  );
};

export default ResourceTable;
