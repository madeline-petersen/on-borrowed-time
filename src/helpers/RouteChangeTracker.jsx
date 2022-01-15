import PropTypes from 'prop-types';
import React from 'react';
import ReactGA from 'react-ga';
import { withRouter } from 'react-router-dom';

const RouteChangeTracker = ({ history }) => {
  history.listen((location, action) => {
    ReactGA.set({ page: location.pathname });
    ReactGA.pageview(location.pathname);
  });

  return <div></div>;
};

RouteChangeTracker.propTypes = {
  history: PropTypes.node
};

export default withRouter(RouteChangeTracker);
