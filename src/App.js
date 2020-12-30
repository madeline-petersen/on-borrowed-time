import './App.css';

import { Col, Container, Row } from 'react-grid-system';
import { Link, Route, HashRouter as Router, Switch } from 'react-router-dom';

import GridHelper from './helpers/GridHelper.jsx';
import Index from './pages/Index.jsx';
import React from 'react';
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
        <div className="nav-bar__container">
          <Container className="grid__container">
            <Row className="grid__row nav-bar">
              <Col md={4} className="medium-caption">
                <Link to="/">On Borrowed Time</Link>
              </Col>
              <Col md={3} className="medium-caption">
                <Link>Theme</Link>
              </Col>
              <Col md={4} className="medium-caption">
                <Link to="/index">Index</Link>
              </Col>
              <Col md={1} className="medium-caption">
                <Link>English</Link>
              </Col>
            </Row>
          </Container>
        </div>

        <Switch>
          <Route exact path="/">
            <div>Home</div>
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
