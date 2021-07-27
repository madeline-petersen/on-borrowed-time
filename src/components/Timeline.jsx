import './Timeline.scss';

import React, { useEffect, useState } from 'react';

import PropTypes from 'prop-types';
import { roman } from '@sguest/roman-js';

const Timeline = props => {
  const [numScenes, setNumScenes] = useState(0);
  const [currentSceneIndex, setSceneIndex] = useState(props.sceneIndex);

  let colourClasses = {
    '1984': 'gray-30',
    '1989': 'red',
    '1997': 'blue',
    '2003': 'green',
    '2014': 'yellow',
    '2019': 'purple',
    '2020': 'black'
  };

  const onClickYear = year => {
    if (year === props.currentYear.id && props.pageId === 'intro') {
      return;
    }

    props.setNextBackground(year);
    props.setIsTransitioning(true);
    setSceneIndex(null); // disappear circle
    if (props.pageId !== 'home') {
      if (year !== props.currentYear.id) {
        setNumScenes(0); // collapse timeline (1s duration)
      }
    }
    props.navigateTo(year);
    setSceneIndex('intro');
  };

  const onClickScene = sceneIndex => {
    props.setNextBackground(props.currentYear.id, 'event');
    props.setIsTransitioning(true);
    setSceneIndex(null); // disappear circle
    props.navigateTo(
      props.currentYear.id,
      roman.toRoman(sceneIndex + 1),
      'event'
    );
  };

  useEffect(() => {
    if (props.isTransitioning) {
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
  }, [props.currentYear, props.sceneIndex, props.pageId]);

  return (
    <span
      className={`year-timeline medium-caption pb-5 h-screen contrast-text`}
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
                    } contrast-text ${props.colourBackgroundClass} ${
                      props.pageId === 'event' ? colourClasses[year.id] : ''
                    }`
                  : `pl-4 mb-2.5`
              }`}
            >
              {/* year */}
              <span
                onClick={() => onClickYear(year.id)}
                className={`year-label contrast-text ${
                  props.pageId === 'event' ? props.colourBackgroundClass : ''
                }
                ${
                  year.id !== props.currentYear.id
                    ? 'cursor-pointer opacity-60 hover:opacity-100'
                    : 'cursor-default'
                }
                ${
                  props.pageId === 'home'
                    ? year.id !== props.previewedYear
                      ? 'cursor-pointer opacity-60 hover:opacity-100'
                      : 'opacity-100'
                    : ''
                }
                `}
              >
                {year.id}
              </span>

              {/* first circle */}
              <span
                key="intro"
                className={`circle cursor-pointer ${currentSceneIndex ===
                  'intro' && 'current-scene'} ${props.pageId === 'event' &&
                  colourClasses[year.id]}
                  ${
                    year.id === props.currentYear.id && numScenes > 0
                      ? 'show'
                      : 'hide'
                  }`}
                onClick={() => onClickYear(year.id)}
              >
                <span
                  className={`dot mt-1 left-1 ${props.pageId === 'event' &&
                    colourClasses[year.id]}`}
                />
              </span>

              {/* other circles */}
              {year.scenes.map((scene, index) => (
                <span
                  key={`scene-${index}`}
                  className={`circle cursor-pointer ${currentSceneIndex ===
                    index && 'current-scene'} ${props.pageId === 'event' &&
                    colourClasses[year.id]}
                    ${
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
                  <span
                    className={`dot mt-1 left-1 ${props.pageId === 'event' &&
                      colourClasses[year.id]}`}
                  />
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
  currentYear: { id: '', title: '', scenes: [] }
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
  isYearEnd: PropTypes.bool,
  setNextBackground: PropTypes.func,
  colourBackgroundClass: PropTypes.string,
  colourBackgroundClasses: PropTypes.shape()
};

export default Timeline;
