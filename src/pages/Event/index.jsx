import './Event.scss';

import PropTypes from 'prop-types';
import React, { useEffect } from 'react';
import { useScreenClass } from 'react-grid-system';

import Event2020 from './Event2020';
import EventDefault from './EventDefault';

const Event = props => {
  const {
    year,
    event,
    nextParams,
    sceneIndex,
    navigateTo,
    setTransitionType,
    setAnecdoteData,
    setIsModalActive,
    onScrollOverflow,
    beforeLeave
  } = props;

  const openModal = entry => {
    if (entry.content) {
      setAnecdoteData(entry);
      setIsModalActive(true);
    } else if (entry.linkTo) {
      window.open(entry.linkTo);
    }
  };

  const screenClass = useScreenClass();
  const getTextIndent = () => {
    if (['lg', 'xl', 'xxl'].includes(screenClass)) {
      return `calc(200%/11)`; // indent 2/11 columns for large
    } else if (['md'].includes(screenClass)) {
      return `calc(200%/10)`; // indent 2/10 columns for medium
    } else {
      return '0'; // indent 0 for small, x-small
    }
  };

  const getFilteredMatches = id => {
    // get paragraphs
    const container = document.querySelector(`#${id}`);

    // get spans within paragraphs
    let filteredMatches = [];
    if (container) {
      let matches = container.querySelectorAll('span');
      let matchesArray = Array.prototype.slice.call(matches);
      filteredMatches = matchesArray.filter(
        element => element.classList.length === 0
      );
    }
    return filteredMatches;
  };

  const setOnClicks = (id, sectionIndex) => {
    const filteredMatches = getFilteredMatches(id);

    // set onclick for spans
    if (filteredMatches.length) {
      filteredMatches.forEach((match, index) => {
        match.onclick = function() {
          if (year.id === '2020') {
            openModal(
              event.sections[sectionIndex].resources[0].resources[index]
            );
          } else {
            openModal(event.resources[0].resources[index]);
          }
        };
      });
    }
  };

  useEffect(() => {
    setTransitionType(null);
  }, [event]);

  const afterLoad = (origin, destination, direction) => {
    if (destination.isLast) {
      // intra-year
      navigateTo(
        nextParams.year,
        nextParams.scene, // romanSceneNumber
        nextParams.page
      );
    }
  };

  const generateKey = () => {
    return nextParams.year
      ? `event-${nextParams.year}-${nextParams.scene}-${nextParams.page}`
      : `event-${nextParams.scene}-${nextParams.page}`;
  };

  setTimeout(() => {
    const header = document.getElementById('header');
    if (header) {
      setHeaderHeight(window.getComputedStyle(header).height);
    }
  }, 4500);

  if (year.id === '2020' && sceneIndex === 0) {
    return (
      <Event2020
        getTextIndent={getTextIndent}
        getFilteredMatches={getFilteredMatches}
        afterLoad={afterLoad}
        setOnClicks={setOnClicks}
        beforeLeave={beforeLeave}
        openModal={openModal}
        generateKey={generateKey}
        onScrollOverflow={onScrollOverflow}
        {...props}
      />
    );
  } else {
    return (
      <EventDefault
        getTextIndent={getTextIndent}
        getFilteredMatches={getFilteredMatches}
        afterLoad={afterLoad}
        beforeLeave={beforeLeave}
        openModal={openModal}
        setOnClicks={setOnClicks}
        generateKey={generateKey}
        onScrollOverflow={onScrollOverflow}
        {...props}
      />
    );
  }
};

Event.propTypes = {
  year: PropTypes.shape(),
  years: PropTypes.arrayOf(PropTypes.shape()),
  event: PropTypes.shape(),
  sceneIndex: PropTypes.number,
  next: PropTypes.shape(),
  nextParams: PropTypes.shape(),
  changingParam: PropTypes.string,
  setTransitionType: PropTypes.func,
  navigateTo: PropTypes.func,
  colourBackgroundClass: PropTypes.string,
  textColourClass: PropTypes.string,
  borderColourClass: PropTypes.string,
  setAnecdoteData: PropTypes.func,
  setIsModalActive: PropTypes.func,
  onScrollOverflow: PropTypes.func,
  beforeLeave: PropTypes.func
};

export default Event;
