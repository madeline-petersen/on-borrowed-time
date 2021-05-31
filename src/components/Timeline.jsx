import './Timeline.scss';

import PropTypes from 'prop-types';
import React from 'react';
import { useHistory } from 'react-router-dom';

const Timeline = props => {
  let history = useHistory();

  const onClickYear = year => {
    setTimeout(function() {
      // executed after 1 second
      history.push(`/${year}`);
    }, 1000);
  };

  let scenes = props.year.scenes.length;

  return (
    <span
      className={`left-timeline absolute top-0 z-10 pb-5 text-3xl medium-caption border-l border-white pl-4 h-screen ${props.timelineClasses}`}
    >
      <span className={`absolute bottom-0 ${props.timelineClasses}`}>
        {props.years.map((year, index) => {
          return year.id === props.year.id ? (
            <div
              key={index}
              className={`pb-2.5 left-timeline__current-year`}
              style={{ marginBottom: `calc(${scenes} * 24px)` }}
            >
              {year.id}
            </div>
          ) : (
            <div
              key={index}
              className={`pb-2.5 opacity-30 cursor-pointer`}
              onClick={() => onClickYear(year.id)}
            >
              {year.id}
            </div>
          );
        })}
      </span>
    </span>
  );
};

Timeline.defaultProps = {
  year: { id: '', title: '' }
};

Timeline.propTypes = {
  timelineClasses: PropTypes.string,
  year: PropTypes.shape(),
  years: PropTypes.arrayOf(PropTypes.shape())
};

export default Timeline;
