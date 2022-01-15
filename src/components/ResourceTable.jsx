import './ResourceTable.scss';

import { ArrowUpRight16 } from '@carbon/icons-react';
import PropTypes from 'prop-types';
import React, { useEffect } from 'react';
import { Col, Row } from 'react-grid-system';
import ReactHtmlParser from 'react-html-parser';

const ResourceTable = ({
  theme,
  data,
  openModal,
  matches,
  textColourClass,
  borderColourClass,
  setOnClicks,
  fullWidth
}) => {
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

  useEffect(() => {
    setOnClicks();
  }, []);

  let columns = fullWidth ? [1, 11, 5, 4] : [3, 9, 4, 3];

  return (
    <>
      {data.map((entry, index) => {
        return (
          <Row
            className="grid__row resource-table-row transition-all cursor-pointer"
            key={`table-row-${index}`}
            onClick={() => openModal(entry)}
          >
            <>
              <Col lg={columns[0]} md={2} />
              <Col lg={columns[1]} md={10}>
                <p
                  className={`border-t ${themeBorderClass} border-opacity-10 pt-4 fade-second`}
                />
              </Col>
            </>

            <Col lg={columns[0]} md={2} />
            <Col lg={columns[2]} md={4} sm={4} xs={12} className="small-body">
              <p className={`${themeTextClass} text-opacity-100 fade-second`}>
                {index < matches.length && (
                  <span className="absolute sm:-left-4 md:-left-8">
                    {index + 1}
                  </span>
                )}
                {ReactHtmlParser(entry.shortTitle)}
                {!entry.content && (
                  <ArrowUpRight16 className="inline-block ml-1" />
                )}
              </p>
            </Col>
            <Col lg={columns[3]} md={3} sm={4} xs={12} className="small-body">
              <p
                className={`${themeTextClass} resource-title text-opacity-70 fade-second`}
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
              className="small-body flex justify-between"
            >
              <p
                className={`${themeTextClass} entry-type text-opacity-70 fade-second`}
              >
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
  openModal: PropTypes.func,
  matches: PropTypes.arrayOf(PropTypes.node),
  textColourClass: PropTypes.string,
  borderColourClass: PropTypes.string,
  setOnClicks: PropTypes.func,
  fullWidth: PropTypes.bool
};

export default ResourceTable;
