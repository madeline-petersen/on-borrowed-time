import './Timeline.scss';

import React, { useEffect, useState } from 'react';

import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';

const Timeline = props => {
  let history = useHistory();

  const [scenes, setScenes] = useState(
    props.pageId === 'home'
      ? props.year.scenes
        ? props.year.scenes.length
        : 0
      : 0
  );

  const onClickYear = year => {
    setScenes(0);
    setTimeout(function() {
      // executed after 1 second
      history.push(`/${year}`);
    }, 1000);
  };

  useEffect(() => {
    setScenes(props.year.scenes ? props.year.scenes.length : 0);
  }, [props.year]);

  return (
    <span
      className={`year-timeline medium-caption pb-5 h-screen ${props.timelineClasses}`}
    >
      <span className={`absolute bottom-0 ${props.timelineClasses}`}>
        {props.years.map((year, index) => {
          return year.id === props.year.id ? (
            <div
              key={year.id}
              className={`year-timeline__scene-timeline pl-4 mb-2.5`}
              style={{ paddingBottom: `calc(${scenes} * 24px)` }}
            >
              <span
                key="intro"
                className={`circle ${props.pageId === 'intro' &&
                  'current-scene'}`}
              >
                <span className="dot mt-1 left-1" />
              </span>
              {year.scenes.map((scene, index) => (
                <span
                  key={`scene-${index}`}
                  className={`circle ${props.sceneIndex === index &&
                    'current-scene'}`}
                  style={{
                    marginTop: `calc((${index + 1} * 24px))`
                  }}
                >
                  <span className="dot mt-1 left-1" />
                </span>
              ))}
              {year.id}
            </div>
          ) : (
            <div
              key={year.id}
              className={`pl-4 mb-2.5 opacity-30 cursor-pointer`}
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
  sceneIndex: PropTypes.string,
  pageId: PropTypes.string,
  year: PropTypes.shape(),
  years: PropTypes.arrayOf(PropTypes.shape()),
  isYearEnd: PropTypes.bool,
  isClicked: PropTypes.bool
};

export default Timeline;
