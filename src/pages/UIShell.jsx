import './UIShell.scss';

import { ArrowLeft20, Close20 } from '@carbon/icons-react';
import React, { useState } from 'react';

import Artifacts from './Artifacts.jsx';
import Event from './Event.jsx';
import ThematicThreads from './ThematicThreads.jsx';
import EditorsNote from './EditorsNote';
import Header from '../components/Header';
import Home from './Home.jsx';
import Intro from './Intro.jsx';
import LeftMenu from '../components/LeftMenu';
import { Link, useHistory } from 'react-router-dom';
import PropTypes from 'prop-types';
import Reflection from './Reflection.jsx';
import Timeline from '../components/Timeline';
import { Visible } from 'react-grid-system';

const UIShell = props => {
  const [isMenuActive, setIsMenuActive] = useState(false);
  const [hash, setHash] = useState(window.location.hash.substring(1) || '1984');
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [nextBackgroundClass, setNextBackgroundClass] = useState(null);
  const [selectedYear, setSelectedYear] = useState(null);
  const [isWhite, setIsWhite] = useState(true);

  let history = useHistory();

  const navigateTo = (year, romanSceneNumber, page) => {
    let overflowContainer = document.getElementById('overflow-container');
    if (year && romanSceneNumber && page) {
      setTimeout(function() {
        if (overflowContainer) {
          overflowContainer.scrollTo(0, 0);
        }
        history.push(`/${year}/scene-${romanSceneNumber}/${page}`);
      }, 2000);
    } else if (year) {
      if (props.pageId === 'home') {
        history.push(`/${year}`); // delaying causes timeline to open abruptly
      } else {
        setTimeout(function() {
          if (overflowContainer) {
            overflowContainer.scrollTo(0, 0);
          }
          history.push(`/${year}`);
        }, 2000);
      }
    }
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

  const setNextBackground = (year, pageId = 'intro') => {
    if (pageId === 'intro') {
      setNextBackgroundClass(imageBackgroundClasses[year]);
    } else if (pageId === 'event') {
      setNextBackgroundClass(colourBackgroundClasses[year]);
    } else if (pageId === 'thematic-threads') {
      setNextBackgroundClass('bg-white');
    } else {
      // artifacts, reflection, editors note
      setNextBackgroundClass('bg-black');
    }
  };

  const toggleLeftMenu = () => {
    isMenuActive ? setIsMenuActive(false) : setIsMenuActive(true);
  };

  const onCloseLeftMenu = () => {
    setIsMenuActive(false);

    // show "On Borrowed Time" after menu closes
    setTimeout(function() {
      setSelectedYear(null);
    }, 500);
  };

  let pageComponent;
  switch (props.pageId) {
    case 'home':
      pageComponent = (
        <Home
          {...props}
          hash={hash}
          setHash={setHash}
          setIsTransitioning={setIsTransitioning}
          navigateTo={navigateTo}
        />
      );
      break;
    case 'intro':
      pageComponent = (
        <Intro
          {...props}
          navigateTo={navigateTo}
          backgroundClass={imageBackgroundClasses[props.year.id]}
          nextBackgroundClass={nextBackgroundClass}
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
          nextBackgroundClass={nextBackgroundClass}
          setNextBackground={setNextBackground}
          isTransitioning={isTransitioning}
          setIsTransitioning={setIsTransitioning}
          colourBackgroundClass={colourBackgroundClasses[props.year.id]}
          textColourClass={textColourClass[props.year.id]}
          borderColourClass={borderColourClass[props.year.id]}
        />
      );
      break;
    case 'artifacts':
      pageComponent = (
        <Artifacts
          {...props}
          navigateTo={navigateTo}
          nextBackgroundClass={nextBackgroundClass}
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
          nextBackgroundClass={nextBackgroundClass}
          setNextBackground={setNextBackground}
          navigateTo={navigateTo}
          isTransitioning={isTransitioning}
          setIsTransitioning={setIsTransitioning}
        />
      );
      break;
    case 'thematic-threads':
      pageComponent = (
        <ThematicThreads backgroundColor={isWhite ? 'white' : 'black'} />
      );
      break;
    case 'editors-note':
      pageComponent = <EditorsNote />;
      break;
    default:
      pageComponent = (
        <Home
          {...props}
          hash={hash}
          setHash={setHash}
          setIsTransitioning={setIsMenuActive}
          navigateTo={navigateTo}
        />
      );
  }

  let isYearEnd = props.isLastScene && props.isLastPage;
  let timelineClasses = 'contrast-text mix-blend-difference';

  if (isMenuActive) {
    timelineClasses = `contrast-text ${
      ['1989', '1997'].includes(props.year.id)
        ? 'mix-blend-screen'
        : 'mix-blend-difference'
    }`;
  }

  if (props.pageId === 'home') {
    timelineClasses = `contrast-text mix-blend-difference`;
  }

  if (props.pageId === 'event') {
    timelineClasses = `contrast-text ${
      colourBackgroundClasses[props.year.id]
    } ${
      ['1989', '1997'].includes(props.year.id)
        ? 'mix-blend-screen'
        : 'mix-blend-difference'
    }`;
  }

  return (
    <>
      <Header
        currentYear={props.year.id}
        label={
          props.pageId === 'home'
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
        colourBackgroundClass={colourBackgroundClasses[props.year.id]}
        setBackgroundColor={() => setIsWhite(!isWhite)}
        isWhite={isWhite}
      />
      <LeftMenu
        isActive={isMenuActive}
        onCloseLeftMenu={onCloseLeftMenu}
        years={props.years}
        navigateTo={navigateTo}
        setNextBackground={setNextBackground}
        setIsTransitioning={setIsTransitioning}
        selectedYear={selectedYear}
        setSelectedYear={setSelectedYear}
      />
      <span
        className={`absolute text-3xl cursor-pointer z-40 left-menu-bullet ${
          isMenuActive ? 'fade-out' : 'fade-in'
        } ${timelineClasses}`}
        onClick={toggleLeftMenu}
      >
        &#8226;
      </span>
      <span
        className={`absolute text-3xl cursor-pointer z-40 left-menu-close ${
          isMenuActive ? 'fade-in' : 'fade-out'
        } ${timelineClasses}`}
        onClick={
          selectedYear !== null ? () => setSelectedYear(null) : toggleLeftMenu
        }
      >
        {selectedYear !== null ? <ArrowLeft20 /> : <Close20 />}
      </span>
      <Link
        to="/home" // to do: change to "/" when homepage moves
        className={`absolute z-40 medium-caption page-title ${timelineClasses} ${
          selectedYear === null
            ? 'opacity-100 cursor-pointer'
            : 'opacity-0 pointer-events-none'
        }`}
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
      {props.pageId !== 'thematic-threads' && props.pageId !== 'editors-note' && (
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
          colourBackgroundClass={colourBackgroundClasses[props.year.id]}
          colourBackgroundClasses={colourBackgroundClasses}
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
