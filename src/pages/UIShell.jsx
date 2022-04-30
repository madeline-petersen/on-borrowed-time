import './UIShell.scss';

import { ArrowLeft20, Close20 } from '@carbon/icons-react';
import cx from 'classnames/bind';
import parse from 'html-react-parser';
import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';
import { Visible } from 'react-grid-system';
import { Helmet } from 'react-helmet';
import { Link, useHistory } from 'react-router-dom';

import Anecdote from '../components/Anecdote';
import Header from '../components/Header';
import LeftMenu from '../components/LeftMenu';
import Timeline from '../components/Timeline';
import Artifacts from './Artifacts.jsx';
import EditorsNote from './EditorsNote';
import Event from './Event.jsx';
import Home from './Home.jsx';
import Index from './Index.jsx';
import Intro from './Intro.jsx';
import Reflection from './Reflection.jsx';
import ThematicThreads from './ThematicThreads.jsx';

const UIShell = props => {
  const [isMenuActive, setIsMenuActive] = useState(false);
  const [showSiteTitle, setShowSiteTitle] = useState(true);
  const [hash, setHash] = useState(window.location.hash.substring(1) || '1984');
  const [transitionType, setTransitionType] = useState(null);
  const [selectedYear, setSelectedYear] = useState(null);
  const [thematicThreadsBgWhite, setThematicThreadsBgWhite] = useState(
    // unless hash is white page, default to black
    window.location.hash.substring(1) === '1984-2003'
  );
  const [anecdoteData, setAnecdoteData] = useState({});
  const [isModalActive, setIsModalActive] = useState(false);

  let history = useHistory();

  const navigateTo = (year, romanSceneNumber, page) => {
    let delay = 0;
    if (year !== props.year.id) {
      setTransitionType('year');
      delay = 1000; // delay 1s to collapse timeline
    } else if (romanSceneNumber !== props.romanSceneNumber) {
      setTransitionType('scene');
      delay = 1000; // delay 1s to fade circle
    }

    if (props.pageId === 'home') {
      delay = 0;
    }

    if (year && romanSceneNumber && page) {
      setTimeout(() => pushPage(year, romanSceneNumber, page), delay);
    } else if (year) {
      setTimeout(() => pushYear(year), delay);
    }
  };

  const pushYear = year => {
    history.push(`/${year}`);
  };

  const pushPage = (year, romanSceneNumber, page) => {
    history.push(`/${year}/scene-${romanSceneNumber}/${page}`);
  };

  let imageBackgroundClasses = {
    '1984': 'bg-1984',
    '1989': 'bg-1989',
    '1997': 'bg-1997',
    '2003': 'bg-2003',
    '2014': 'bg-2014',
    '2019': 'bg-2019',
    '2020': 'bg-2020'
  };

  let colourBackgroundClasses = {
    '1984': 'bg-gray-30',
    '1989': 'bg-red',
    '1997': 'bg-blue-50',
    '2003': 'bg-brown',
    '2014': 'bg-yellow',
    '2019': 'bg-purple',
    '2020': 'bg-black'
  };

  let textColourClass = {
    '1984': 'text-black',
    '1989': 'text-gray-10',
    '1997': 'text-blue-10',
    '2003': 'text-black',
    '2014': 'text-black',
    '2019': 'text-black',
    '2020': 'text-white'
  };

  let borderColourClass = {
    '1984': 'border-black',
    '1989': 'border-gray-10',
    '1997': 'border-blue-10',
    '2003': 'border-black',
    '2014': 'border-black',
    '2019': 'border-black',
    '2020': 'border-white'
  };

  const toggleLeftMenu = () => {
    isMenuActive ? setIsMenuActive(false) : setIsMenuActive(true);
  };

  const onCloseLeftMenu = () => {
    setIsMenuActive(false);

    // show "On Borrowed Time" after menu closes
    setTimeout(function() {
      setShowSiteTitle(true);
    }, 750);

    // reset menu to initial state
    setTimeout(function() {
      setSelectedYear(null);
    }, 1500);
  };

  const pagesWithOverscroll = [
    'home',
    'intro',
    'event',
    'artifacts',
    'reflection',
    'threads',
    'info'
  ];

  const pagesWithTimeline = [
    'home',
    'intro',
    'event',
    'artifacts',
    'reflection'
  ];

  useEffect(() => {
    if (pagesWithOverscroll.includes(props.pageId)) {
      if (isMenuActive) {
        // disabling all scrolling while modals are open
        fullpage_api.setAllowScrolling(false);
        fullpage_api.setKeyboardScrolling(false);
      } else {
        // enable scrolling while modals are closed
        fullpage_api.setAllowScrolling(true);
        fullpage_api.setKeyboardScrolling(true);
      }
    }
  }, [isMenuActive]);

  let timelineClasses = 'contrast-text mix-blend-difference';
  const mixBlendMode = ['1989', '1997'].includes(props.year.id)
    ? 'mix-blend-screen'
    : 'mix-blend-difference';

  if (isMenuActive) {
    timelineClasses = `contrast-text ${mixBlendMode}`;
  }

  if (props.pageId === 'home') {
    timelineClasses = 'contrast-text mix-blend-difference';
  }

  if (props.pageId === 'event') {
    timelineClasses = `contrast-text ${
      isMenuActive ? 'bg-black' : colourBackgroundClasses[props.year.id]
    } ${mixBlendMode}`;
  }

  if (props.pageId === 'info') {
    timelineClasses = 'contrast-text bg-blue-70 mix-blend-screen';
  }
  let pageComponent;
  switch (props.pageId) {
    case 'home':
      pageComponent = (
        <Home
          {...props}
          hash={hash}
          setHash={setHash}
          setTransitionType={setTransitionType}
          navigateTo={navigateTo}
        />
      );
      break;
    case 'intro':
      pageComponent = (
        <Intro
          {...props}
          navigateTo={navigateTo}
          imageBackgroundClass={imageBackgroundClasses[props.year.id]}
          colourBackgroundClass={colourBackgroundClasses[props.year.id]}
          setTransitionType={setTransitionType}
        />
      );
      break;
    case 'event':
      pageComponent = (
        <Event
          {...props}
          navigateTo={navigateTo}
          setTransitionType={setTransitionType}
          colourBackgroundClass={colourBackgroundClasses[props.year.id]}
          textColourClass={textColourClass[props.year.id]}
          borderColourClass={borderColourClass[props.year.id]}
          setAnecdoteData={setAnecdoteData}
          isModalActive={isModalActive}
          setIsModalActive={setIsModalActive}
        />
      );
      break;
    case 'artifacts':
      pageComponent = (
        <Artifacts
          {...props}
          setTransitionType={setTransitionType}
          navigateTo={navigateTo}
        />
      );
      break;
    case 'reflection':
      pageComponent = (
        <Reflection
          {...props}
          imageBackgroundClass={imageBackgroundClasses[props.nextParams.year]}
          colourBackgroundClass={colourBackgroundClasses[props.year.id]}
          navigateTo={navigateTo}
          setTransitionType={setTransitionType}
        />
      );
      break;
    case 'threads':
      pageComponent = (
        <ThematicThreads
          currentBgColour={thematicThreadsBgWhite ? 'white' : 'black'}
        />
      );
      break;
    case 'info':
      pageComponent = <EditorsNote />;
      break;
    case 'index':
      pageComponent = <Index />;
      break;
    default:
      pageComponent = (
        <Home
          {...props}
          hash={hash}
          setHash={setHash}
          setTransitionType={setTransitionType}
          navigateTo={navigateTo}
        />
      );
  }

  return (
    <>
      <Helmet>
        <title>{`${parse(
          props.scene?.title || `${props.year?.id} ${props.year?.title}`
        )} | On Borrowed Time`}</title>
      </Helmet>
      <Header
        {...props}
        currentYear={props.year.id}
        label={props.year.title}
        title={props.scene ? props.scene.title : ''}
        transitionType={transitionType}
        romanSceneNumber={props.romanSceneNumber}
        navigateTo={navigateTo}
        colourBackgroundClass={colourBackgroundClasses[props.year.id]}
        setBackgroundColor={setThematicThreadsBgWhite}
        thematicThreadsBgWhite={thematicThreadsBgWhite}
        timelineClasses={timelineClasses}
      />
      <LeftMenu
        {...props}
        isActive={isMenuActive}
        onCloseLeftMenu={onCloseLeftMenu}
        navigateTo={navigateTo}
        selectedYear={selectedYear}
        setSelectedYear={setSelectedYear}
        setShowSiteTitle={setShowSiteTitle}
      />
      <Anecdote
        {...anecdoteData}
        isActive={isModalActive}
        onCloseModal={() => setIsModalActive(false)}
      />

      <span
        className={cx('absolute cursor-pointer z-40 left-menu-bullet', {
          [timelineClasses]: true,
          'fade-out': isMenuActive,
          'fade-in': !isMenuActive
        })}
        onClick={toggleLeftMenu}
      >
        &#8226;
      </span>
      <span
        className={cx('absolute cursor-pointer z-40 left-menu-close', {
          [timelineClasses]: true,
          'fade-out': !isMenuActive,
          'fade-in': isMenuActive
        })}
        onClick={
          selectedYear !== null
            ? () => {
                setSelectedYear(null);
                setShowSiteTitle(true);
              }
            : toggleLeftMenu
        }
      >
        {selectedYear !== null ? <ArrowLeft20 /> : <Close20 />}
      </span>
      <Link
        to="/home" // to do: change to "/" when homepage moves
        className={cx('absolute z-40 medium-caption page-title', {
          [timelineClasses]: true,
          'opacity-100 cursor-pointer': showSiteTitle,
          'opacity-0 pointer-events-none': !showSiteTitle,
          'pointer-events-none': props.pageId === 'home'
        })}
      >
        On{' '}
        <Visible sm xs>
          <br />
        </Visible>
        Borrowed{' '}
        <Visible sm xs>
          <br />
        </Visible>
        Time
      </Link>
      {pagesWithTimeline.includes(props.pageId) && (
        <Timeline
          {...props}
          timelineClasses={timelineClasses}
          previewedYear={hash}
          transitionType={transitionType}
          colourBackgroundClass={colourBackgroundClasses[props.year.id]}
          navigateTo={navigateTo}
        />
      )}
      {pageComponent}
    </>
  );
};

UIShell.defaultProps = {
  year: { id: '', title: '', scenes: [] }
};

UIShell.propTypes = {
  pageId: PropTypes.string,
  year: PropTypes.shape(),
  scene: PropTypes.shape(),
  sceneIndex: PropTypes.number,
  romanSceneNumber: PropTypes.string,
  isLastScene: PropTypes.bool,
  isLastPage: PropTypes.bool,
  nextParams: PropTypes.shape(),
  changingParam: PropTypes.string,
  years: PropTypes.arrayOf(PropTypes.shape())
};

export default UIShell;
