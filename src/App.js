import './App.css';

import {
  Link,
  Route,
  BrowserRouter as Router,
  Switch
} from "react-router-dom";

import Index from './pages/Index.jsx';
import { ScreenClassProvider } from 'react-grid-system';
import { setConfiguration } from 'react-grid-system';

setConfiguration({
  // The breakpoints (minimum width) of devices in screen class sm, md, lg, xl, and xxl.
  breakpoints: [375, 756, 1056, 1440, 1800],

  // The container widths in pixels of devices in screen class sm, md, lg, xl, and xxl.
  containerWidths: [],

  // The gutter width in pixels. A gutter width of 30 means 15px on each side of a column.
  gutterWidth: 20,

  // The number of columns in the grid .
  gridColumns: 12,

  // The screen class used when the view port cannot be determined using window.
  defaultScreenClass: 'xxl',

  // The maximum screen class to be used.
  maxScreenClass: 'xxl',
});

function App() {
  console.log('*** ', process.env.PUBLIC_URL)
  return (
    <Router basename={process.env.PUBLIC_URL}>
    <ScreenClassProvider>
      <div>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/index">Index</Link>
          </li>
        </ul>

        <hr />

        {/*
          A <Switch> looks through all its children <Route>
          elements and renders the first one whose path
          matches the current URL. Use a <Switch> any time
          you have multiple routes, but you want only one
          of them to render at a time
        */}
        <Switch>
          <Route exact path="/">
            <div>Home</div>
          </Route>
          <Route path="/index">
            <Index />
          </Route>
        </Switch>
      </div>
    </ScreenClassProvider>
    </Router>
  );
}

export default App;