import './App.scss';

import { roman } from '@sguest/roman-js';
import React from 'react';
import ReactGA from 'react-ga';
import {
  ScreenClassProvider,
  setConfiguration,
  useScreenClass
} from 'react-grid-system';
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
  useParams
} from 'react-router-dom';

import data from './data/years.json';
import GridHelper from './helpers/GridHelper.jsx';
import RouteChangeTracker from './helpers/RouteChangeTracker';
import Index from './pages/Index.jsx';
import NoMatch from './pages/NoMatch.jsx';
import Splash from './pages/Splash.jsx';
import UIShell from './pages/UIShell.jsx';
import ScrollToTop from './ScrollToTop.jsx';

const TRACKING_ID = 'G-LKR7ENMRG3';
ReactGA.initialize(TRACKING_ID, {
  standardImplementation: true
});

setConfiguration({
  // The breakpoints (minimum width) of devices in screen class sm, md, lg, xl, and xxl.
  breakpoints: [375, 756, 1056, 1440, 1800],

  // The container widths in pixels of devices in screen class sm, md, lg, xl, and xxl.
  containerWidths: [],

  // The gutter width in pixels. A gutter width of 30 means 15px on each side of a column.
  gutterWidth: 24,

  // The number of columns in the grid .
  gridColumns: 12,

  // The screen class used when the view port cannot be determined using window.
  defaultScreenClass: 'lg',

  // The maximum screen class to be used.
  maxScreenClass: 'xxl'
});

function HomeWrapper() {
  return <UIShell pageId="home" years={data.years} />;
}

function EditorsNoteWrapper() {
  return <UIShell pageId="editors-note" years={data.years} />;
}

function ThematicThreadsWrapper() {
  return <UIShell pageId="thematic-threads" years={data.years} />;
}

function Page() {
  let { yearId } = useParams();
  let { sceneId } = useParams();
  let { pageId } = useParams();

  let yearIndex = data.years.findIndex(year => year.id === yearId);
  let year;
  let nextYear;
  if (yearIndex > -1) {
    year = data.years[yearIndex]; // year, title
    nextYear = data.years[yearIndex + 1];
  } else {
    return <NoMatch />;
  }

  if (sceneId) {
    let romanChar = sceneId.split('-')[1];
    let romanSceneNumber;
    if (romanChar) {
      romanSceneNumber = romanChar.toUpperCase();
    } else {
      return <NoMatch />;
    }

    const sceneIndex = roman.parseRoman(romanSceneNumber) - 1;
    const scene = year.scenes[sceneIndex]; // title, pages

    let nextScene;
    let nextRomanSceneNumber;
    if (scene) {
      nextScene = year.scenes[sceneIndex + 1]; // title, pages
      nextRomanSceneNumber = roman.toRoman(sceneIndex + 2);
    } else {
      return <NoMatch />;
    }

    let pageIndex = scene.pages.findIndex(page => page.type === pageId);
    let page;
    let nextPage;
    if (pageIndex > -1) {
      page = scene.pages[pageIndex];
      nextPage = scene.pages[pageIndex + 1];
    } else {
      return <NoMatch />;
    }

    const isLastYear = yearIndex === data.years.length - 1;
    const isLastScene = sceneIndex === year.scenes.length - 1;
    const isLastPage = pageIndex === scene.pages.length - 1;

    const next = isLastPage
      ? isLastScene
        ? isLastYear
          ? null
          : nextYear
        : nextScene
      : nextPage;

    const changingParam = isLastPage
      ? isLastScene
        ? isLastYear
          ? null
          : 'year'
        : 'scene'
      : 'page';

    const nextParams = isLastPage
      ? isLastScene
        ? isLastYear
          ? null
          : {
              year: nextYear.id // next year
            } // nextYear.id nextYear.title
        : {
            year: year.id,
            scene: nextRomanSceneNumber, // next scene
            page: 'event'
          } // scene nextScene.title
      : {
          year: year.id,
          scene: romanSceneNumber,
          page: nextPage.type // next page;
        }; // Scene {romanSceneNumber}  nextPage.title

    return (
      <UIShell
        pageId={pageId}
        years={data.years}
        year={year}
        scene={scene}
        sceneIndex={sceneIndex}
        romanSceneNumber={romanSceneNumber}
        event={page}
        artifacts={page}
        reflection={page}
        next={next}
        nextParams={nextParams}
        changingParam={changingParam}
      />
    );
  } else {
    let { yearId } = useParams();

    let yearIndex = data.years.findIndex(year => year.id === yearId);
    let year;
    if (yearIndex > -1) {
      year = data.years[yearIndex]; // year, title
    } else {
      return <NoMatch />;
    }

    const nextScene = year.scenes[0]; // title, pages
    const nextRomanSceneNumber = 'I';

    const next = nextScene;
    const changingParam = 'scene';
    const nextParams = {
      year: year.id,
      scene: nextRomanSceneNumber,
      page: 'event'
    };

    return (
      <UIShell
        pageId="intro"
        intro={year.intro}
        years={data.years}
        year={year}
        next={next}
        changingParam={changingParam}
        nextParams={nextParams}
      />
    );
  }
}

function App() {
  const screenClass = useScreenClass();
  console.log('Screen class: ', screenClass);

  return (
    <Router>
      <RouteChangeTracker />
      <ScreenClassProvider>
        {process.env.NODE_ENV === 'development' && <GridHelper />}
        <ScrollToTop>
          <Switch>
            <Route exact path="/">
              <Splash />
            </Route>
            <Route exact path="/home">
              <HomeWrapper />
            </Route>
            <Route path="/index">
              <Index />
            </Route>
            <Route path="/editors-note">
              <EditorsNoteWrapper />
            </Route>
            <Route path="/thematic-threads">
              <ThematicThreadsWrapper />
            </Route>
            <Route exact path="/:yearId">
              <Page />
            </Route>
            <Redirect
              exact
              from="/:yearId/:sceneId"
              to="/:yearId/:sceneId/event"
            />
            <Route path={`/:yearId/:sceneId/:pageId`}>
              <Page />
            </Route>
            <Route path="*">
              <NoMatch />
            </Route>
          </Switch>
        </ScrollToTop>
      </ScreenClassProvider>
    </Router>
  );
}

export default App;
