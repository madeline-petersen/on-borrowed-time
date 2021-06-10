import './Timeline.scss';

import React, { useEffect, useState } from 'react';

import PropTypes from 'prop-types';
import { roman } from '@sguest/roman-js';
import { useHistory } from 'react-router-dom';

const Timeline = props => {
  // timeline is absolutely positioned and overlayed on every page (except index)
  // on the homepage, the year being previewed is highlighted
  // on specific year pages, the year is highlighted and the scene timeline is active
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

  const onClickScene = sceneIndex => {
    history.push(
      `/${props.year.id}/scene-${roman.toRoman(sceneIndex + 1)}/event`
    );
  };

  useEffect(() => {
    setScenes(props.year.scenes ? props.year.scenes.length : 0);
  }, [props.year]);

  return (
    <span
      className={`year-timeline medium-caption pb-5 h-screen ${props.timelineClasses}`}
    >
      <span className={`absolute bottom-0 ${props.timelineClasses}`}>
        {props.pageId === 'home'
          ? props.years.map((year, index) => {
              /* home page */
              return (
                <div
                  key={year.id}
                  className={`pl-4 mb-2.5 cursor-pointer ${
                    year.id === props.previewedYear
                      ? 'opacity-100' // highlight previewed year
                      : 'opacity-30'
                  }`}
                >
                  <span
                    onClick={() => onClickYear(year.id)}
                    className="cursor-pointer"
                  >
                    {year.id}
                  </span>
                </div>
              );
            })
          : props.years.map((year, index) => {
              /* other pages */
              return year.id === props.year.id ? (
                // current year
                // scene timeline
                <div
                  key={year.id}
                  className={`year-timeline__scene-timeline pl-4 mb-2.5`}
                  style={{ paddingBottom: `calc(${scenes} * 24px)` }}
                >
                  {/* intro circle */}
                  <span
                    key="intro"
                    className={`circle cursor-pointer ${props.pageId ===
                      'intro' && 'current-scene'}`}
                    onClick={() => onClickYear(year.id)}
                  >
                    <span className="dot mt-1 left-1" />
                  </span>

                  {/* year */}
                  <span
                    onClick={() => onClickYear(year.id)}
                    className="cursor-pointer"
                  >
                    {year.id}
                  </span>

                  {/* other scenes */}
                  {year.scenes.map((scene, index) => (
                    <span
                      key={`scene-${index}`}
                      className={`circle cursor-pointer ${props.sceneIndex ===
                        index && 'current-scene'}`}
                      style={{
                        marginTop: `calc((${index + 1} * 24px))`
                      }}
                      onClick={() => onClickScene(index)}
                    >
                      <span className="dot mt-1 left-1" />
                    </span>
                  ))}
                </div>
              ) : (
                // other years
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
  previewedYear: PropTypes.string,
  years: PropTypes.arrayOf(PropTypes.shape()),
  isYearEnd: PropTypes.bool,
  isClicked: PropTypes.bool
};

export default Timeline;
