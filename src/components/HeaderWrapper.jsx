import { Container, Row } from 'react-grid-system';
import React, { useEffect } from 'react';

import Header from '../components/Header';
import PropTypes from 'prop-types';

const HeaderWrapper = ({ year, theme, prevTheme, children }) => {
  useEffect(() => {
    setTimeout(function() {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }, 1000);
  }, []);

  return (
    <>
      <div className={`bg-${prevTheme.background}`}>
        <Container
          className={`grid__container border-l border-${prevTheme.border}`}
        >
          <Row className="grid__row screen-transition-animation" />
        </Container>
      </div>

      <div className={`h-auto bg-${theme.background}`}>
        <Header
          label={`${year.id} ${year.title}`}
          theme={theme}
          border={true}
        />

        {children}
      </div>
    </>
  );
};

HeaderWrapper.defaultProps = {
  theme: {
    background: 'gray-30',
    text: 'black',
    border: 'gray-60'
  },
  prevTheme: {
    background: 'black',
    text: 'gray-30',
    border: 'gray-80'
  }
};

HeaderWrapper.propTypes = {
  year: PropTypes.shape(),
  theme: PropTypes.shape({
    background: PropTypes.string,
    text: PropTypes.string,
    border: PropTypes.string
  }),
  prevTheme: PropTypes.shape({
    background: PropTypes.string,
    text: PropTypes.string,
    border: PropTypes.string
  }),
  children: PropTypes.node
};

export default HeaderWrapper;
