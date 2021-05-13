import './App.scss';

import { Col, Container, Row } from 'react-grid-system';
import { Link, Route, HashRouter as Router, Switch } from 'react-router-dom';

import Event from './pages/Event.jsx';
import GridHelper from './helpers/GridHelper.jsx';
import Imagery from './pages/Imagery.jsx';
import Index from './pages/Index.jsx';
import React from 'react';
import Reflection from './pages/Reflection.jsx';
import { ScreenClassProvider } from 'react-grid-system';
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

function App() {
  return (
    <Router>
      <ScreenClassProvider>
        <GridHelper />
        <Switch>
          <Route exact path="/">
            <Event />
          </Route>
          <Route path="/event">
            <Event />
          </Route>
          <Route path="/imagery">
            <Imagery />
          </Route>
          <Route path="/reflection">
            <Reflection />
          </Route>
          <Route path="/index">
            <Index />
          </Route>
        </Switch>
      </ScreenClassProvider>
    </Router>
  );
}

export default App;
