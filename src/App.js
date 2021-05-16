import './App.scss';

import {
  Route,
  BrowserRouter as Router,
  Switch,
  useParams
} from 'react-router-dom';

import Event from './pages/Event.jsx';
import GridHelper from './helpers/GridHelper.jsx';
import Imagery from './pages/Imagery.jsx';
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
  console.log(yearId, sceneId, pageId);

  const romanSceneNumber = sceneId.split('-')[1].toUpperCase();
  const sceneNumber = roman.parseRoman(romanSceneNumber);
  const year = data.years.find(year => year.year === yearId); // year, title
  const scene = year.scenes[sceneNumber - 1]; // title, event, imagery, reflection
  const event = scene.event; // paragraphs, resources
  const imagery = scene.imagery; // array of images
  const reflection = scene.reflection; // paragraphs

  switch (pageId) {
    case 'event':
      return (
        <Event
          year={year}
          scene={scene}
          romanSceneNumber={romanSceneNumber}
          event={event}
        />
      );
      break;
    case 'imagery':
      return (
        <Imagery
          year={year}
          scene={scene}
          romanSceneNumber={romanSceneNumber}
          imagery={imagery}
        />
      );
      break;
    case 'reflection':
      return (
        <Reflection
          year={year}
          scene={scene}
          romanSceneNumber={romanSceneNumber}
          reflection={reflection}
        />
      );
      break;
    default:
      return (
        <Event
          year={year}
          scene={scene}
          romanSceneNumber={romanSceneNumber}
          event={event}
        />
      );
  }
}

function App() {
  return (
    <Router>
      <ScreenClassProvider>
        <GridHelper />
        <ScrollToTop>
          <Switch>
            {/* <Route path="/">
              <Year />
            </Route> */}
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
