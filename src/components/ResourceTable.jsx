import { Col, Row } from 'react-grid-system';

import React from 'react';

const ResourceTable = () => {
  const entries = [
    {
      title: 'Vivamus feugiat quis',
      source: 'Suspendisse tristique pulvinar neque at bibendum',
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
      {entries.map((entry, index) => {
        return (
          <Row className="grid__row" key={index}>
            <Col md={3} />
            <Col md={9} className="border-t pt-3" />

            <Col md={3} />
            <Col md={4} className="regular-caption">
              {entry.title}
              <br />
              {entry.source}
            </Col>
            <Col md={2} />
            <Col md={2} className="regular-caption">
              {entry.type}
            </Col>
            <Col md={1} className="regular-caption">
              {entry.year}
            </Col>

            <Col md={3} />
            <Col md={9} className="pb-8" />
          </Row>
        );
      })}
    </div>
  );
};

export default ResourceTable;
