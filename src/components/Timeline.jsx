import './Timeline.scss';

import cx from 'classnames/bind';
import PropTypes from 'prop-types';
import React from 'react';

const Timeline = props => {
  let colourClasses = {
    '1984': 'gray-30',
    '1989': 'slate',
    '1997': 'blue-50',
    '2003': 'brown',
    '2014': 'yellow',
    '2019': 'purple',
    '2020': 'black'
  };

  const onClickYear = year => {
    if (isCurrentYear(year) && isIntroPage) {
      return;
    }

    props.navigateTo(year.id);
  };

  const isEventPage = props.pageId === 'event';
  const isHomePage = props.pageId === 'home';
  const isIntroPage = props.pageId === 'intro';
  const hasLightText = ['1989', '2003'].includes(props.year?.id);

  const isCurrentYear = year => {
    return year.id === props.year?.id;
  };

  const previewingCurrentYear = year => {
    return year.id === props.previewedYear;
  };

  return (
    <span
      className={cx('timeline medium-caption pb-5 h-screen contrast-text', {
        [colourClasses[props.year?.id]]: isEventPage && !hasLightText,
        'image-background': isIntroPage || isHomePage,
        'mix-blend-screen': hasLightText,
        'mix-blend-difference': !hasLightText
      })}
    >
      <span className={cx('timeline__years absolute', [props.timelineClasses])}>
        {props.years.map(year => {
          return (
            <div
              key={year.id}
              className={cx('pl-4 mb-2.5', {
                [colourClasses[year.id]]: isEventPage && !hasLightText
              })}
            >
              <span
                onClick={() => onClickYear(year)}
                className={cx('year-label contrast-text cursor-pointer', {
                  [props.colourBackgroundClass]: isEventPage && !hasLightText,
                  'opacity-60 hover:opacity-100':
                    !isCurrentYear(year) ||
                    (isHomePage && !previewingCurrentYear(year)),
                  'opacity-100': isHomePage && previewingCurrentYear(year)
                })}
              >
                {year.id}
              </span>
            </div>
          );
        })}
      </span>
    </span>
  );
};

Timeline.propTypes = {
  years: PropTypes.arrayOf(PropTypes.shape()),
  pageId: PropTypes.string,
  year: PropTypes.shape(), // current year
  timelineClasses: PropTypes.string,
  previewedYear: PropTypes.string,
  colourBackgroundClass: PropTypes.string,
  navigateTo: PropTypes.func
};

export default Timeline;
