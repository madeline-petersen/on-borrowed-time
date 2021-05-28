import './UIShell.scss';

import React, { useState } from 'react';

import Artifacts from './Artifacts.jsx';
import Event from './Event.jsx';
import Header from '../components/Header';
import Home from './Home.jsx';
import Intro from './Intro.jsx';
import LeftMenu from '../components/LeftMenu';
import PropTypes from 'prop-types';
import Reflection from './Reflection.jsx';
import { useHistory } from 'react-router-dom';

const UIShell = props => {
  const [isMenuActive, setIsMenuActive] = useState(false);
  const [isClicked, setClicked] = useState(false);

  let history = useHistory();

  const openLeftMenu = () => {
    setIsMenuActive(true);
  };

  const onCloseLeftMenu = () => {
    setIsMenuActive(false);
  };

  const onClickYear = year => {
    setTimeout(function() {
      // executed after 1 second
      history.push(`/${year}`);
    }, 1000);
  };

  let pageComponent;
  switch (props.pageId) {
    case 'home':
      pageComponent = (
        <Home {...props} isClicked={isClicked} setClicked={setClicked} />
      );
      break;
    case 'intro':
      pageComponent = (
        <Intro {...props} isClicked={isClicked} setClicked={setClicked} />
      );
      break;
    case 'event':
      pageComponent = (
        <Event {...props} isClicked={isClicked} setClicked={setClicked} />
      );
      break;
    case 'artifacts':
      pageComponent = (
        <Artifacts {...props} isClicked={isClicked} setClicked={setClicked} />
      );
      break;
    case 'reflection':
      pageComponent = (
        <Reflection {...props} isClicked={isClicked} setClicked={setClicked} />
      );
      break;
    default:
      pageComponent = (
        <Event {...props} isClicked={isClicked} setClicked={setClicked} />
      );
  }

  let isNewYear = props.pageId === 'event' && props.romanSceneNumber === 'I';
  let isYearEnd = props.isLastScene && props.isLastPage;
  let timelineClasses =
    props.pageId === 'home' || props.pageId === 'intro'
      ? 'text-white'
      : props.pageId === 'event'
      ? 'contrast-text gray'
      : 'contrast-text';

  return (
    <>
      <Header
        label={
          props.pageId === 'intro'
            ? ''
            : props.pageId === 'home'
            ? props.year.blurb
            : `${props.year.id} ${props.year.title}`
        }
        pageId={props.pageId}
        title={props.scene ? props.scene.title : ''}
        isClicked={isClicked}
        romanSceneNumber={props.romanSceneNumber}
      />
      <LeftMenu
        isActive={isMenuActive}
        onCloseLeftMenu={onCloseLeftMenu}
        years={props.years}
      />
      <span
        className={`absolute text-3xl cursor-pointer z-10 left-menu-bullet ${timelineClasses}`}
        onClick={openLeftMenu}
      >
        &#8226;
      </span>
      <span
        className={`absolute top-0 pb-5 text-3xl left-timeline medium-caption border-l border-white pl-4 h-screen ${timelineClasses}`}
      >
        <span className={`absolute bottom-0 ${timelineClasses}`}>
          {props.years.map((year, index) => {
            return year.id === props.year.id ? (
              <div key={index} className={`pb-2.5`}>
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
  romanSceneNumber: PropTypes.string,
  isLastScene: PropTypes.bool,
  isLastPage: PropTypes.bool,
  years: PropTypes.arrayOf(PropTypes.shape())
};

export default UIShell;
