import './Timeline.scss';

import React, { useEffect, useState } from 'react';

import PropTypes from 'prop-types';
import { roman } from '@sguest/roman-js';

const Timeline = props => {
  const [numScenes, setNumScenes] = useState(0);
  const [currentSceneIndex, setSceneIndex] = useState(props.sceneIndex);

  const onClickYear = year => {
    props.setIsTransitioning(true);
    setSceneIndex(null);
    if (props.pageId === 'home') {
      props.navigateTo(year); // execute immediately
    } else {
      if (year !== props.currentYear.id) {
        setNumScenes(0); // collapse timeline (1s duration)
      }
      setTimeout(function() {
        // executed after 1 second
        props.navigateTo(year);
        setSceneIndex('intro');
      }, 1000);
    }
  };

  const onClickScene = sceneIndex => {
    props.setIsTransitioning(true);
    setSceneIndex(null);
    setTimeout(function() {
      // executed after 2 second
      props.navigateTo(
        props.currentYear.id,
        roman.toRoman(sceneIndex + 1),
        'event'
      );
    }, 1000);
  };

  useEffect(() => {
    if (props.isTransitioning && props.pageId === 'reflection') {
      setSceneIndex(null); // fade out circle immediately

      if (props.isYearEnd) {
        setNumScenes(0); // collapse timeline
      }
    }
  }, [props.isTransitioning]);

  useEffect(() => {
    setNumScenes(
      props.currentYear.scenes ? props.currentYear.scenes.length : 0
    ); // expand timeline
  }, [props.currentYear.id]);

  useEffect(() => {
    if (props.pageId === 'intro') {
      setSceneIndex('intro');
    } else {
      setSceneIndex(props.sceneIndex);
    }
  }, [props.sceneIndex, props.pageId]);

  return (
    <span
      className={`year-timeline medium-caption pb-5 h-screen ${props.timelineClasses}`}
    >
      <span className={`absolute bottom-0 ${props.timelineClasses}`}>
        {props.years.map(year => {
          return (
            <div
              key={year.id}
              className={`${
                year.id === props.currentYear.id
                  ? `year-timeline__scene-timeline pl-4 mb-2.5 ${
                      numScenes === 0
                        ? 'collapsed'
                        : `expanded num-scenes-${numScenes}`
                    }`
                  : `pl-4 mb-2.5 cursor-pointer`
              }`}
            >
              {/* year */}
              <span
                onClick={() => onClickYear(year.id)}
                className={`year-label cursor-pointer ${
                  (year.id === props.currentYear.id && numScenes !== 0) ||
                  (props.pageId === 'home' && props.previewedYear === year.id)
                    ? 'active'
                    : 'inactive'
                }`}
              >
                {year.id}
              </span>

              {/* first circle */}
              <span
                key="intro"
                className={`circle cursor-pointer ${currentSceneIndex ===
                  'intro' && 'current-scene'} ${
                  year.id === props.currentYear.id && numScenes > 0
                    ? 'show'
                    : 'hide'
                }`}
                onClick={() => onClickYear(year.id)}
              >
                <span className="dot mt-1 left-1" />
              </span>

              {/* other circles */}
              {year.scenes.map((scene, index) => (
                <span
                  key={`scene-${index}`}
                  className={`circle cursor-pointer ${currentSceneIndex ===
                    index && 'current-scene'} ${
                    year.id === props.currentYear.id && numScenes > 0
                      ? 'show'
                      : 'hide'
                  }`}
                  style={{
                    marginTop: `${
                      year.id === props.currentYear.id
                        ? `calc((${index + 1} * 24px))`
                        : '0'
                    }`
                  }}
                  onClick={() => onClickScene(index)}
                >
                  <span className="dot mt-1 left-1" />
                </span>
              ))}
            </div>
          );
        })}
      </span>
    </span>
  );
};

Timeline.defaultProps = {
  currentYear: { id: '', title: '' }
};

Timeline.propTypes = {
  timelineClasses: PropTypes.string,
  sceneIndex: PropTypes.string,
  pageId: PropTypes.string,
  currentYear: PropTypes.shape(),
  previewedYear: PropTypes.string,
  years: PropTypes.arrayOf(PropTypes.shape()),
  navigateTo: PropTypes.func,
  isTransitioning: PropTypes.bool,
  setIsTransitioning: PropTypes.func,
  isYearEnd: PropTypes.bool
};

export default Timeline;
