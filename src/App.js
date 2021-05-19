import './App.scss';

import {
  Route,
  BrowserRouter as Router,
  Switch,
  useParams
} from 'react-router-dom';

import Artifacts from './pages/Artifacts.jsx';
import Event from './pages/Event.jsx';
import GridHelper from './helpers/GridHelper.jsx';
import HeaderWrapper from './components/HeaderWrapper.jsx';
import Home from './pages/Home.jsx';
import Index from './pages/Index.jsx';
import React from 'react';
import Reflection from './pages/Reflection.jsx';
import { ScreenClassProvider } from 'react-grid-system';
import ScrollToTop from './ScrollToTop.jsx';
import data from './data/years.json';
import { roman } from '@sguest/roman-js';
import { setConfiguration } from 'react-grid-system';

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

function Page() {
  let { yearId } = useParams();
  let { sceneId } = useParams();
  let { pageId } = useParams();

  const yearIndex = data.years.findIndex(year => year.id === yearId);
  const year = data.years[yearIndex]; // year, title
  const nextYear = data.years[yearIndex + 1];

  const romanSceneNumber = sceneId.split('-')[1].toUpperCase();
  const sceneIndex = roman.parseRoman(romanSceneNumber) - 1;
  const scene = year.scenes[sceneIndex]; // title, pages
  const nextScene = year.scenes[sceneIndex + 1]; // title, pages
  const nextRomanSceneNumber = roman.toRoman(sceneIndex + 2);

  const pageIndex = scene.pages.findIndex(page => page.type === pageId);
  const page = scene.pages[pageIndex];
  const nextPage = scene.pages[pageIndex + 1];

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
            year: nextYear.id, // next year
            scene: `scene-I`,
            page: 'event'
          } // nextYear.id nextYear.title
      : {
          year: year.id,
          scene: `scene-${nextRomanSceneNumber}`, // next scene
          page: 'event'
        } // scene nextScene.title
    : {
        year: year.id,
        scene: `scene-${romanSceneNumber}`,
        page: nextPage.type // next page;
      }; // Scene {romanSceneNumber}  nextPage.title

  switch (pageId) {
    case 'event':
      return (
        <HeaderWrapper year={year}>
          <Event
            year={year}
            scene={scene}
            romanSceneNumber={romanSceneNumber}
            event={page}
            next={next}
            nextParams={nextParams}
          />
        </HeaderWrapper>
      );
      break;
    case 'artifacts':
      return (
        <Artifacts
          year={year}
          scene={scene}
          romanSceneNumber={romanSceneNumber}
          artifacts={page}
          next={next}
          nextParams={nextParams}
        />
      );
      break;
    case 'reflection':
      return (
        <Reflection
          year={year}
          scene={scene}
          romanSceneNumber={romanSceneNumber}
          reflection={page}
          next={next}
          nextParams={nextParams}
          changingParam={changingParam}
        />
      );
      break;
    default:
      return (
        <Event
          year={year}
          scene={scene}
          romanSceneNumber={romanSceneNumber}
          event={page}
          next={next}
          nextParams={nextParams}
        />
      );
  }
}

function App() {
  return (
    <Router>
      <ScreenClassProvider>
        {process.env.NODE_ENV === 'development' && <GridHelper />}
        <ScrollToTop>
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path={`/:yearId/:sceneId/:pageId`}>
              <Page />
            </Route>
            <Route path="/index">
              <Index />
            </Route>
          </Switch>
        </ScrollToTop>
      </ScreenClassProvider>
    </Router>
  );
}

export default App;
