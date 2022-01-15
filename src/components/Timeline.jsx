import './Timeline.scss';

import { roman } from '@sguest/roman-js';
import cx from 'classnames/bind';
import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';

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
    if (year === props.year?.id && props.pageId === 'intro') {
      return;
    }

    setSceneIndex(null); // disappear circle
    if (props.pageId !== 'home') {
      if (year !== props.year?.id) {
        setNumScenes(0); // collapse timeline (1s duration)
      }
    }
    props.navigateTo(year);
    setSceneIndex('intro');
  };

  const onClickScene = sceneIndex => {
    setSceneIndex(null); // disappear circle
    props.navigateTo(props.year?.id, roman.toRoman(sceneIndex + 1), 'event');
  };

  useEffect(() => {
    if (props.transitionType === 'year') {
      setNumScenes(0); // collapse timeline
    } else if (props.transitionType === 'scene') {
      setSceneIndex(null); // fade out circle immediately
    }
  }, [props.transitionType]);

  useEffect(() => {
    setNumScenes(props.year.scenes?.length || 0); // expand timeline
  }, [props.year?.id]);

  useEffect(() => {
    if (props.pageId === 'intro') {
      setSceneIndex('intro');
    } else {
      setSceneIndex(props.sceneIndex);
    }
  }, [props.year, props.sceneIndex, props.pageId]);

  const isEventPage = props.pageId === 'event';
  const hasLightText = ['1989', '1997'].includes(props.year?.id);
  const isCurrentYear = year => {
    return year.id === props.year?.id;
  };

  return (
    <span
      className={cx('timeline medium-caption pb-5 h-screen contrast-text', {
        [colourClasses[props.year?.id]]: isEventPage && !hasLightText,
        'image-background': props.pageId === 'intro' || props.pageId === 'home',
        'mix-blend-screen': hasLightText,
        'mix-blend-difference': !hasLightText
      })}
    >
      <span className={cx('timeline__years absolute', [props.timelineClasses])}>
        {props.years.map(year => {
          return (
            <div
              key={year.id}
              className={cx({
                'timeline__scenes pl-4 mb-2.5': isCurrentYear(year),
                collapsed: isCurrentYear(year) && numScenes === 0,
                [`expanded num-scenes-${numScenes}`]:
                  isCurrentYear(year) && numScenes !== 0,
                'contrast-text': isCurrentYear(year),
                [colourClasses[year.id]]: isEventPage && !hasLightText,
                'pl-4 mb-2.5': !isCurrentYear(year)
              })}
            >
              <span
                onClick={() => onClickYear(year.id)}
                className={cx('year-label contrast-text cursor-pointer', {
                  [props.colourBackgroundClass]: isEventPage && !hasLightText,
                  'opacity-60 hover:opacity-100':
                    !isCurrentYear(year) ||
                    (props.pageId === 'home' &&
                      year.id !== props.previewedYear),
                  'opacity-100':
                    props.pageId === 'home' && year.id === props.previewedYear
                })}
              >
                {year.id}
              </span>

              <span
                key="intro"
                className={cx('circle cursor-pointer', {
                  'current-scene': currentSceneIndex === 'intro',
                  [colourClasses[year.id]]: !['1989', '1997'].includes(
                    props.year?.id
                  ),
                  show: isCurrentYear(year) && numScenes > 0,
                  hide: !(isCurrentYear(year) && numScenes > 0)
                })}
                onClick={() => onClickYear(year.id)}
              >
                <span
                  className={cx('dot mt-1 left-1', {
                    [colourClasses[year.id]]: isEventPage && !hasLightText
                  })}
                />
              </span>

              {year.scenes.map((scene, index) => (
                <span
                  key={`scene-${index}`}
                  className={cx('circle cursor-pointer', {
                    'current-scene': currentSceneIndex === index,
                    [colourClasses[year.id]]: isEventPage && !hasLightText,
                    show: isCurrentYear(year) && numScenes > 0,
                    hide: !(isCurrentYear(year) && numScenes > 0)
                  })}
                  style={{
                    marginTop: `${
                      isCurrentYear(year) ? `calc((${index + 1} * 24px))` : '0'
                    }`
                  }}
                  onClick={() => onClickScene(index)}
                >
                  <span
                    className={cx('dot mt-1 left-1', {
                      [colourClasses[year.id]]: isEventPage && !hasLightText
                    })}
                  >
                    {isCurrentYear(year) && (
                      <span
                        className={cx(
                          'absolute left-4 w-max contrast-text scene-title',
                          {
                            [props.colourBackgroundClass]:
                              isEventPage && !hasLightText
                          }
                        )}
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

Timeline.propTypes = {
  years: PropTypes.arrayOf(PropTypes.shape()),
  sceneIndex: PropTypes.string,
  pageId: PropTypes.string,
  year: PropTypes.shape(), // current year, expands timeline
  timelineClasses: PropTypes.string,
  previewedYear: PropTypes.string,
  transitionType: PropTypes.string,
  colourBackgroundClass: PropTypes.string,
  navigateTo: PropTypes.func
};

export default Timeline;
