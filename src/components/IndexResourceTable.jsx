import './IndexResourceTable.scss';

import parse from 'html-react-parser';
import PropTypes from 'prop-types';
import React from 'react';
import { Col, Hidden, Row, Visible } from 'react-grid-system';

const IndexResourceTable = ({
  theme,
  data,
  textColourClass,
  borderColourClass
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

  const columns = {
    section: {
      lg: 3,
      md: 3,
      sm: 12
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
      sm: 12
    },
    publication: {
      lg: 2,
      md: 2,
      sm: 12
    },
    author: {
      lg: 3,
      md: 3,
      sm: 12
    }
  };

  return (
    <>
      <Hidden sm xs>
        <Row className="grid__row resource-table-row transition-all cursor-pointer">
          <>
            <Col {...columns.tableWidth}>
              <p
                className={`border-t ${themeBorderClass} border-opacity-50 pt-4 fade-second`}
              />
            </Col>
          </>

          <Col {...columns.section} />
          <Col {...columns.title} className="small-body">
            <p className={`${themeTextClass} text-gray-100 flex fade-second`}>
              <div className="md:ml-0">Title</div>
            </p>
          </Col>

          {/* publication */}
          <Col {...columns.publication} className="small-body">
            <p className={`${themeTextClass} resource-title fade-second`}>
              Publication
            </p>
          </Col>

          {/* author, date */}
          <Col {...columns.author} className="small-body flex justify-between">
            <p className={`${themeTextClass} entry-type fade-second`}>Author</p>
            <p className={`${themeTextClass} fade-second`}>Date</p>
          </Col>

          <Col lg={12} className="pb-4" />
        </Row>
      </Hidden>

      {data.map(section => {
        return section.resources.map((entry, index) => {
          return (
            <Row
              className="grid__row resource-table-row transition-all cursor-pointer"
              key={`table-row-${index}`}
              onClick={() => window.open(entry.linkTo)}
            >
              <>
                <Col {...columns.tableWidth}>
                  <p
                    className={`${index === 0 &&
                      'border-t'} ${themeBorderClass} border-opacity-10 pt-4 fade-second`}
                  />
                </Col>
              </>

              <>
                <Col
                  {...columns.section}
                  className="small-headline section-title mb-4 md:mb-0"
                >
                  {index === 0 && (
                    <p>
                      {parse(section.sectionTitle)}(
                      {parse(section.resources.length.toString())})
                    </p>
                  )}
                </Col>

                <Col {...columns.title} className="small-body">
                  <p
                    className={`${themeTextClass} text-opacity-100 flex fade-second`}
                  >
                    <div className="md:ml-0">{parse(entry.shortTitle)}</div>
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
                    {entry.author}
                    <Visible sm xs>
                      , {entry.year}
                    </Visible>
                  </p>

                  {/* hide right-aligned year on small and x-small screens */}
                  <Hidden sm xs>
                    <p
                      className={`${themeTextClass} text-opacity-70 fade-second`}
                    >
                      {entry.year}
                    </p>
                  </Hidden>
                </Col>
              </>

              <Col lg={12} className="pb-4" />
            </Row>
          );
        });
      })}
    </>
  );
};

IndexResourceTable.defaultProps = {
  theme: 'black'
};

IndexResourceTable.propTypes = {
  theme: PropTypes.string,
  data: PropTypes.arrayOf(PropTypes.shape()),
  textColourClass: PropTypes.string,
  borderColourClass: PropTypes.string
};

export default IndexResourceTable;
