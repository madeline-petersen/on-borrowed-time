import './App.css';

import {
  Link,
  Route,
  BrowserRouter as Router,
  Switch
} from "react-router-dom";

import { ScreenClassProvider } from 'react-grid-system';

function App() {
  return (
    <Router>
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
            <div>Index</div>
          </Route>
        </Switch>
      </div>
    </ScreenClassProvider>
    </Router>
  );
}

export default App;