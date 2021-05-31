import './Timeline.scss';

import React, { useEffect, useState } from 'react';

import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';

const Timeline = props => {
  const [scenes, setScenes] = useState(props.year.scenes.length);
  let history = useHistory();

  const onClickYear = year => {
    setScenes(0);
    setTimeout(function() {
      // executed after 1 second
      history.push(`/${year}`);
    }, 1000);
  };

  useEffect(() => {
    setScenes(props.year.scenes.length);
  }, [props.year]);

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
