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
    '1997': 'blue-50',
    '2003': 'brown',
    '2014': 'yellow',
    '2019': 'purple',
    '2020': 'black'
  };

  const onClickYear = year => {
    if (year === props.currentYear.id && props.pageId === 'intro') {
      return;
    }

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
      if (props.pageId === 'reflection' || props.pageId === 'intro') {
        setSceneIndex(null); // fade out circle immediately
      }

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
      className={`timeline medium-caption pb-5 h-screen contrast-text ${
        props.pageId === 'event' &&
        !['1989', '1997'].includes(props.currentYear.id)
          ? colourClasses[props.currentYear.id]
          : ''
      } ${props.pageId === 'intro' ? 'image-background' : ''} ${
        props.pageId === 'home' ? 'image-background' : ''
      } ${
        ['1989', '1997'].includes(props.currentYear.id)
          ? 'mix-blend-screen'
          : 'mix-blend-difference'
      }
      `}
    >
      <span
        className={`absolute ${props.timelineClasses}`}
        style={{ bottom: '6px' }}
      >
        {props.years.map(year => {
          return (
            <div
              key={year.id}
              className={`${
                year.id === props.currentYear.id
                  ? `timeline__scenes pl-4 mb-2.5 ${
                      numScenes === 0
                        ? 'collapsed'
                        : `expanded num-scenes-${numScenes}`
                    } contrast-text ${
                      props.pageId === 'event' &&
                      !['1989', '1997'].includes(props.currentYear.id)
                        ? colourClasses[year.id]
                        : ''
                    }`
                  : `pl-4 mb-2.5`
              }`}
            >
              <span
                onClick={() => onClickYear(year.id)}
                className={`year-label contrast-text ${
                  props.pageId === 'event' &&
                  !['1989', '1997'].includes(props.currentYear.id)
                    ? props.colourBackgroundClass
                    : ''
                }
                ${
                  year.id !== props.currentYear.id
                    ? 'cursor-pointer opacity-60 hover:opacity-100'
                    : 'cursor-pointer'
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

              <span
                key="intro"
                className={`circle cursor-pointer ${currentSceneIndex ===
                  'intro' && 'current-scene'} ${props.pageId === 'event' &&
                  !['1989', '1997'].includes(props.currentYear.id) &&
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
                    !['1989', '1997'].includes(props.currentYear.id) &&
                    colourClasses[year.id]}`}
                />
              </span>

              {year.scenes.map((scene, index) => (
                <span
                  key={`scene-${index}`}
                  className={`circle cursor-pointer ${currentSceneIndex ===
                    index && 'current-scene'} ${props.pageId === 'event' &&
                    !['1989', '1997'].includes(props.currentYear.id) &&
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
                      !['1989', '1997'].includes(props.currentYear.id) &&
                      colourClasses[year.id]}`}
                  >
                    {year.id === props.currentYear.id && (
                      <span
                        className={`absolute left-4 w-max contrast-text scene-title ${
                          props.pageId === 'event' &&
                          !['1989', '1997'].includes(props.currentYear.id)
                            ? props.colourBackgroundClass
                            : ''
                        }`}
                      >
                        {scene.title}
                      </span>
                    )}
                  </span>
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
  colourBackgroundClass: PropTypes.string
};

export default Timeline;
