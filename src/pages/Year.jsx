import {
  Link,
  Route,
  BrowserRouter as Router,
  Switch,
  useParams,
  useRouteMatch
} from 'react-router-dom';

import Event from './Event.jsx';
import Imagery from './Imagery.jsx';
import React from 'react';
import Reflection from './Reflection.jsx';
import data from '../data/years.json';
import { roman } from '@sguest/roman-js';

function Years() {
  let match = useRouteMatch();

  return (
    // The Years page has its own <Switch> with more routes
    // that build on the /{year} URL path. You can think of the
    <Switch>
      <Route path={`${match.path}/:sceneId/:topicId`}>
        <Page />
      </Route>
    </Switch>
  );
}

function Page() {
  let { sceneId } = useParams();
  let { topicId } = useParams();

  const romanSceneNumber = sceneId.split('-')[1].toUpperCase();
  const sceneNumber = roman.parseRoman(romanSceneNumber);
  const year = data.years[0]; // number, title
  const scene = year.scenes[sceneNumber - 1]; // title, event, imagery, reflection
  const event = scene.event; // paragraphs, resources

  switch (topicId) {
    case 'event':
      return (
        <Event
          year={year}
          scene={scene}
          sceneNumber={romanSceneNumber}
          event={event}
        />
      );
      break;
    case 'imagery':
      return (
        <Imagery
          year={year}
          scene={scene}
          sceneNumber={romanSceneNumber}
          event={event}
        />
      );
      break;
    case 'reflection':
      return (
        <Reflection
          year={year}
          scene={scene}
          sceneNumber={romanSceneNumber}
          event={event}
        />
      );
      break;
    default:
      return (
        <Event
          year={year}
          scene={scene}
          sceneNumber={romanSceneNumber}
          event={event}
        />
      );
  }
}

export default Years;
