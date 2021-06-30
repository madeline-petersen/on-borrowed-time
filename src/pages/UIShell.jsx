import './UIShell.scss';

import React, { useState } from 'react';

import Artifacts from './Artifacts.jsx';
import Event from './Event.jsx';
import Header from '../components/Header';
import Home from './Home.jsx';
import Intro from './Intro.jsx';
import LeftMenu from '../components/LeftMenu';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import Reflection from './Reflection.jsx';
import Timeline from '../components/Timeline';
import { useHistory } from 'react-router-dom';

const UIShell = props => {
  const [isMenuActive, setIsMenuActive] = useState(false);
  const [hash, setHash] = useState(window.location.hash.substring(1) || '1984');
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [nextBackground, setNextBackground] = useState(null);
  let history = useHistory();

  const navigateTo = (year, romanSceneNumber, page) => {
    if (year && romanSceneNumber && page) {
      setTimeout(function() {
        history.push(`/${year}/scene-${romanSceneNumber}/${page}`);
      }, 2000);
    } else if (year) {
      if (props.pageId === 'home') {
        history.push(`/${year}`); // delaying causes timeline to open abruptly
      } else {
        setTimeout(function() {
          history.push(`/${year}`);
        }, 2000);
      }
    }
  };

  const toggleLeftMenu = () => {
    isMenuActive ? setIsMenuActive(false) : setIsMenuActive(true);
  };

  const onCloseLeftMenu = () => {
    setIsMenuActive(false);
  };

  let pageComponent;
  switch (props.pageId) {
    case 'home':
      pageComponent = <Home {...props} hash={hash} setHash={setHash} />;
      break;
    case 'intro':
      pageComponent = (
        <Intro
          {...props}
          navigateTo={navigateTo}
          nextBackground={nextBackground === null ? 'gray-30' : nextBackground}
          setNextBackground={setNextBackground}
          isTransitioning={isTransitioning}
          setIsTransitioning={setIsTransitioning}
        />
      );
      break;
    case 'event':
      pageComponent = (
        <Event
          {...props}
          navigateTo={navigateTo}
          nextBackground={nextBackground === null ? 'black' : nextBackground}
          setNextBackground={setNextBackground}
          isTransitioning={isTransitioning}
          setIsTransitioning={setIsTransitioning}
        />
      );
      break;
    case 'artifacts':
      pageComponent = (
        <Artifacts
          {...props}
          navigateTo={navigateTo}
          nextBackground={nextBackground === null ? 'black' : nextBackground}
          setNextBackground={setNextBackground}
          isTransitioning={isTransitioning}
          setIsTransitioning={setIsTransitioning}
        />
      );
      break;
    case 'reflection':
      pageComponent = (
        <Reflection
          {...props}
          nextBackground={
            nextBackground === null
              ? props.changingParam === 'year'
                ? props.nextParams.year
                : 'gray-30'
              : nextBackground
          }
          setNextBackground={setNextBackground}
          navigateTo={navigateTo}
          isTransitioning={isTransitioning}
          setIsTransitioning={setIsTransitioning}
        />
      );
      break;
    default:
      pageComponent = <Home {...props} hash={hash} setHash={setHash} />;
  }

  let isNewYear = props.pageId === 'event' && props.romanSceneNumber === 'I';
  let isYearEnd = props.isLastScene && props.isLastPage;
  let timelineClasses = isMenuActive
    ? 'contrast-text'
    : props.pageId === 'home'
    ? 'text-white'
    : props.pageId === 'event'
    ? 'contrast-text gray'
    : 'contrast-text';

  return (
    <>
      <Header
        currentYear={props.year.id}
        label={
          props.pageId === 'intro'
            ? ''
            : props.pageId === 'home'
            ? props.year.blurb
            : `${props.year.id} ${props.year.title}`
        }
        pageId={props.pageId}
        title={props.scene ? props.scene.title : ''}
        isTransitioning={isTransitioning}
        romanSceneNumber={props.romanSceneNumber}
        setNextBackground={setNextBackground}
        setIsTransitioning={setIsTransitioning}
        navigateTo={navigateTo}
      />
      <LeftMenu
        isActive={isMenuActive}
        onCloseLeftMenu={onCloseLeftMenu}
        years={props.years}
        navigateTo={navigateTo}
        setNextBackground={setNextBackground}
        setIsTransitioning={setIsTransitioning}
      />
      <span
        className={`absolute text-3xl cursor-pointer z-40 left-menu-bullet ${timelineClasses}`}
        onClick={toggleLeftMenu}
      >
        &#8226;
      </span>
      <Link
        to="/home" // to do: change to "/" when homepage moves
        className={`absolute text-3xl cursor-pointer z-40 medium-caption page-title ${timelineClasses}`}
      >
        On Borrowed Time
      </Link>
      <Timeline
        timelineClasses={timelineClasses}
        pageId={props.pageId}
        sceneIndex={props.sceneIndex}
        previewedYear={hash}
        years={props.years}
        currentYear={props.year} // expands timeline
        setIsTransitioning={setIsTransitioning}
        isTransitioning={isTransitioning}
        isYearEnd={isYearEnd}
        navigateTo={navigateTo}
        setNextBackground={setNextBackground}
      />
      {pageComponent}
    </>
  );
};

UIShell.defaultProps = {
  year: { id: '', title: '' }
};

UIShell.propTypes = {
  pageId: PropTypes.string,
  year: PropTypes.shape(),
  scene: PropTypes.shape(),
  sceneIndex: PropTypes.string,
  romanSceneNumber: PropTypes.string,
  isLastScene: PropTypes.bool,
  isLastPage: PropTypes.bool,
  nextParams: PropTypes.shape(),
  changingParam: PropTypes.string,
  years: PropTypes.arrayOf(PropTypes.shape())
};

export default UIShell;
