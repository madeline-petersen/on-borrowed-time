import './ResourceTable.scss';

import { ArrowUpRight16 } from '@carbon/icons-react';
import parse from 'html-react-parser';
import PropTypes from 'prop-types';
import React, { useEffect } from 'react';
import { Col, Hidden, Row } from 'react-grid-system';

const ResourceTable = ({
  theme,
  data,
  openModal,
  matches,
  textColourClass,
  borderColourClass,
  setOnClicks,
  width
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

  const columnsDefault = {
    gutterLeft: {
      lg: 3,
      md: 2,
      sm: 0
    },
    tableWidth: {
      lg: 9,
      md: 10,
      sm: 12
    },
    title: {
      lg: 4,
      md: 4,
      sm: 4
    },
    publication: {
      lg: 3,
      md: 3,
      sm: 4
    },
    author: {
      lg: 2,
      md: 3,
      sm: 4
    }
  };

  const columnsFull = {
    gutterLeft: {
      lg: 1,
      md: 2,
      sm: 0
    },
    tableWidth: {
      lg: 11,
      md: 10,
      sm: 12
    },
    title: {
      lg: 5,
      md: 4,
      sm: 4
    },
    publication: {
      lg: 4,
      md: 3,
      sm: 4
    },
    author: {
      lg: 2,
      md: 3,
      sm: 4
    }
  };

  const columnsMax = {
    section: {
      lg: 3,
      md: 3,
      sm: 3
    },
    gutterLeft: {
      lg: 0,
      md: 0,
      sm: 0
    },
    tableWidth: {
      lg: 12,
      md: 12,
      sm: 12
    },
    title: {
      lg: 4,
      md: 4,
      sm: 4
    },
    publication: {
      lg: 3,
      md: 3,
      sm: 3
    },
    author: {
      lg: 2,
      md: 2,
      sm: 2
    }
  };

  const columns =
    width === 'full'
      ? columnsFull
      : width === 'max'
      ? columnsMax
      : columnsDefault;

  return (
    <>
      {width === 'max' && (
        <Row className="grid__row resource-table-row transition-all cursor-pointer">
          <>
            {width !== 'max' && <Col {...columns.gutterLeft} />}
            <Col {...columns.tableWidth}>
              <p
                className={`md:-ml-8 border-t ${themeBorderClass} border-opacity-50 pt-4 fade-second`}
              />
            </Col>
          </>

          <>
            <Hidden sm>
              {width !== 'max' && <Col {...columns.gutterLeft} />}
            </Hidden>
            {width === 'max' && <Col {...columns.section} />}
            <Col {...columns.title} className="small-body">
              <p
                className={`${themeTextClass} text-opacity-100 flex fade-second`}
              >
                <div className="sm:ml-8 md:ml-0">Title</div>
              </p>
            </Col>

            {/* publication */}
            <Col {...columns.publication} className="small-body">
              <p
                className={`${themeTextClass} resource-title text-opacity-70 fade-second`}
              >
                Publication
              </p>
            </Col>

            {/* author, date */}
            <Col
              {...columns.author}
              className="small-body flex justify-between"
            >
              <p
                className={`${themeTextClass} entry-type text-opacity-70 fade-second`}
              >
                Author
              </p>
              <p className={`${themeTextClass} text-opacity-70 fade-second`}>
                Date
              </p>
            </Col>
          </>

          <Col lg={12} className="pb-8" />
        </Row>
      )}
      {data.map(section => {
        return section.resources.map((entry, index) => {
          return (
            <Row
              className="grid__row resource-table-row transition-all cursor-pointer"
              key={`table-row-${index}`}
              onClick={() => openModal(entry)}
            >
              <>
                {width !== 'max' && <Col {...columns.gutterLeft} />}
                <Col {...columns.tableWidth}>
                  <p
                    className={`md:-ml-8 ${width === 'max' &&
                      index === 0 &&
                      'border-t'} ${width !== 'max' &&
                      'border-t'} ${themeBorderClass} border-opacity-10 pt-4 fade-second`}
                  />
                </Col>
              </>

              <>
                <Hidden sm>
                  {width !== 'max' && <Col {...columns.gutterLeft} />}
                </Hidden>

                {width === 'max' && (
                  <Col {...columns.section} className="small-headline">
                    {index === 0 && (
                      <p>
                        {section.sectionTitle}({parse(section.resources.length)}
                        )
                      </p>
                    )}
                  </Col>
                )}

                <Col {...columns.title} className="small-body">
                  <p
                    className={`${themeTextClass} text-opacity-100 flex fade-second`}
                  >
                    {index < matches.length && (
                      <span className="absolute md:-ml-8">{index + 1}</span>
                    )}
                    <div className="sm:ml-8 md:ml-0">
                      {parse(entry.shortTitle)}
                    </div>
                    {!entry.content && (
                      <ArrowUpRight16 className="inline-block ml-1" />
                    )}
                  </p>
                </Col>

                {/* publication */}
                <Col {...columns.publication} className="small-body">
                  <p
                    className={`${themeTextClass} resource-title text-opacity-70 fade-second`}
                  >
                    {parse(
                      `${entry.bookTitle ? entry.bookTitle : entry.publication}`
                    )}
                  </p>
                </Col>

                {/* author, date */}
                <Col
                  {...columns.author}
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
                  <p
                    className={`${themeTextClass} text-opacity-70 fade-second`}
                  >
                    {entry.year}
                  </p>
                </Col>
              </>

              <Col lg={12} className="pb-8" />
            </Row>
          );
        });
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
  width: PropTypes.bool
};

export default ResourceTable;
