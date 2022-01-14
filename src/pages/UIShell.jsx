import './UIShell.scss';

import { ArrowLeft20, Close20 } from '@carbon/icons-react';
import React, { useState, useEffect } from 'react';

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
import Artifacts from './Artifacts.jsx';
import Timeline from '../components/Timeline';
import Anecdote from '../components/Anecdote';
import { Visible } from 'react-grid-system';
import { Helmet } from 'react-helmet';
import ReactHtmlParser from 'react-html-parser';

const UIShell = props => {
  const [isMenuActive, setIsMenuActive] = useState(false);
  const [showSiteTitle, setShowSiteTitle] = useState(true);
  const [hash, setHash] = useState(window.location.hash.substring(1) || '1984');
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [selectedYear, setSelectedYear] = useState(null);
  const [isWhite, setIsWhite] = useState(true);
  const [anecdoteData, setAnecdoteData] = useState({});
  const [isModalActive, setIsModalActive] = useState(false);

  let history = useHistory();

  const navigateTo = (year, romanSceneNumber, page) => {
    setIsTransitioning(true);
    if (year && romanSceneNumber && page) {
      history.push(`/${year}/scene-${romanSceneNumber}/${page}`);
    } else if (year) {
      if (year !== props.year.id && props.pageId !== 'home') {
        // inter-year
        setTimeout(() => {
          history.push(`/${year}`);
        }, 1000);
      } else {
        // intra-year
        history.push(`/${year}`);
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

  useEffect(() => {
    if (isMenuActive) {
      // disabling all scrolling while modals are open
      fullpage_api.setAllowScrolling(false);
      fullpage_api.setKeyboardScrolling(false);
    } else {
      // enable scrolling while modals are closed
      fullpage_api.setAllowScrolling(true);
      fullpage_api.setKeyboardScrolling(true);
    }
  }, [isMenuActive]);

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

  if (props.pageId === 'editors-note') {
    timelineClasses = `contrast-text bg-blue-70 mix-blend-screen`;
  }
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
          colourBackgroundClass={colourBackgroundClasses[props.year.id]}
          setIsTransitioning={setIsTransitioning}
        />
      );
      break;
    case 'event':
      pageComponent = (
        <Event
          {...props}
          navigateTo={navigateTo}
          setIsTransitioning={setIsTransitioning}
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
      pageComponent = <Artifacts {...props} navigateTo={navigateTo} />;
      break;
    case 'reflection':
      pageComponent = (
        <Reflection
          {...props}
          imageBackgroundClass={imageBackgroundClasses[props.nextParams.year]}
          colourBackgroundClass={colourBackgroundClasses[props.year.id]}
          navigateTo={navigateTo}
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

  return (
    <>
      <Helmet>
        <title>{`${ReactHtmlParser(
          props.scene?.title || `${props.year?.id} ${props.year?.title}`
        )} | On Borrowed Time`}</title>
      </Helmet>
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
        setIsTransitioning={setIsTransitioning}
        navigateTo={navigateTo}
        colourBackgroundClass={colourBackgroundClasses[props.year.id]}
        setBackgroundColor={() => setIsWhite(!isWhite)}
        isWhite={isWhite}
        timelineClasses={timelineClasses}
      />
      <LeftMenu
        isActive={isMenuActive}
        onCloseLeftMenu={onCloseLeftMenu}
        years={props.years}
        navigateTo={navigateTo}
        setIsTransitioning={setIsTransitioning}
        selectedYear={selectedYear}
        setSelectedYear={setSelectedYear}
        setShowSiteTitle={setShowSiteTitle}
      />
      <Anecdote
        {...anecdoteData}
        title={
          anecdoteData.articleTitle ||
          anecdoteData.bookTitle ||
          anecdoteData.poemTitle
        }
        isActive={isModalActive}
        onCloseModal={() => setIsModalActive(false)}
      />

      <span
        className={`absolute cursor-pointer z-40 left-menu-bullet ${
          isMenuActive ? 'fade-out' : 'fade-in'
        } ${timelineClasses}`}
        onClick={toggleLeftMenu}
      >
        &#8226;
      </span>
      <span
        className={`absolute cursor-pointer z-40 left-menu-close ${
          isMenuActive ? 'fade-in' : 'fade-out'
        } ${timelineClasses}`}
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
        className={`absolute z-40 medium-caption page-title ${timelineClasses} ${
          showSiteTitle
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
      {props.pageId !== 'thematic-threads' &&
        props.pageId !== 'editors-note' && (
          <Timeline
            {...props}
            timelineClasses={timelineClasses}
            previewedYear={hash}
            setIsTransitioning={setIsTransitioning}
            isTransitioning={isTransitioning}
            navigateTo={navigateTo}
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
