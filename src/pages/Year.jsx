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

// const Year = () => {
//   const year = data.years[0]; // number, title
//   const scene = data.years[0].scenes[0]; // title, event, imagery, reflection
//   const event = data.years[0].scenes[0].event; // paragraphs, resources
//   let match = useRouteMatch();
//   console.log('match ', match);

//   return (
//     <div className="Year">
//       <Event year={year} event={event} scene={scene} />
//     </div>
//   );
// };

function Years() {
  let match = useRouteMatch();

  return (
    // The Years page has its own <Switch> with more routes
    // that build on the /topics URL path. You can think of the
    // 2nd <Route> here as an "index" page for all topics, or
    // the page that is shown when no topic is selected

    <Switch>
      <Route path={`${match.path}/:topicId`}>
        <Page />
      </Route>
      <Route path={match.path}>
        <h3>Please select a topic.</h3>
      </Route>
    </Switch>
  );
}

function Page() {
  let { topicId } = useParams();
  const year = data.years[0]; // number, title
  const scene = data.years[0].scenes[0]; // title, event, imagery, reflection
  const event = data.years[0].scenes[0].event; // paragraphs, resources

  switch (topicId) {
    case 'event':
      return <Event year={year} scene={scene} event={event} />;
      break;
    case 'imagery':
      return <Imagery year={year} scene={scene} event={event} />;
      break;
    case 'reflection':
      return <Reflection year={year} scene={scene} event={event} />;
      break;
    default:
      return <Event year={year} scene={scene} event={event} />;
  }
}

export default Years;
