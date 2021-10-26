import React, { useState } from 'react';
import { Col, Container, Row } from 'react-grid-system';
import ReactHtmlParser from 'react-html-parser';
import PropTypes from 'prop-types';
import './ThematicThreads.scss';

const ThematicThreads = ({ backgroundColor }) => {
  const thematicThreads1 = [
    'Fear of Ambiguity',
    'In-between Identity',
    'Seeking to Preserve Democratic Rights &amp; Freedoms',
    'Geographical Diaspora'
  ];

  const thematicThreads2 = [
    'Solidarity & Resistance',
    'Hong Kong Identity',
    'Advocating for Genuine Democracy in the midst of Eroding Rights & Freedoms',
    'Cultural Diaspora'
  ];

  let backgroundColourClasses = {
    black: 'bg-black',
    white: 'bg-white'
  };

  return (
    <div
      key={`black-white-background-${Math.random}`}
      className={`thematic-threads h-auto black-white-background ${backgroundColor}`}
    >
      <Container className="grid__container min-h-screen"></Container>
    </div>
  );
};

ThematicThreads.propTypes = {
  backgroundColor: PropTypes.string
};

export default ThematicThreads;
