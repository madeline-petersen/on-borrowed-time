import PropTypes from 'prop-types';
import React, { Fragment, useEffect } from 'react';
import { withRouter } from 'react-router-dom';

function ScrollToTop({ history, children }) {
  useEffect(() => {
    const unlisten = history.listen(() => {
      window.scrollTo(0, 0);
    });
    return () => {
      unlisten();
    };
  }, []);

  return <Fragment>{children}</Fragment>;
}

ScrollToTop.propTypes = {
  history: PropTypes.shape(),
  children: PropTypes.shape()
};

export default withRouter(ScrollToTop);
