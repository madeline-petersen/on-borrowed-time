import './UIShell.scss';

import React, { useState } from 'react';

import Artifacts from './Artifacts.jsx';
import Event from './Event.jsx';
import LeftMenu from '../components/LeftMenu';
import PropTypes from 'prop-types';
import Reflection from './Reflection.jsx';

const UIShell = props => {
  const [isMenuActive, setIsMenuActive] = useState(false);
  const [isClicked, setClicked] = useState(false);

  const openLeftMenu = () => {
    setIsMenuActive(true);
  };

  const onCloseLeftMenu = () => {
    setIsMenuActive(false);
  };

  let pageComponent;
  switch (props.pageId) {
    case 'event':
      pageComponent = (
        <Event {...props} isClicked={isClicked} setClicked={setClicked} />
      );
      break;
    case 'artifacts':
      pageComponent = (
        <Artifacts {...props} isClicked={isClicked} setClicked={setClicked} />
      );
      break;
    case 'reflection':
      pageComponent = (
        <Reflection {...props} isClicked={isClicked} setClicked={setClicked} />
      );
      break;
    default:
      pageComponent = (
        <Event {...props} isClicked={isClicked} setClicked={setClicked} />
      );
  }

  let isNewYear = props.pageId === 'event' && props.romanSceneNumber === 'I';
  let isYearEnd = props.isLastScene && props.isLastPage;

  return (
    <>
      <LeftMenu
        isActive={isMenuActive}
        onCloseLeftMenu={onCloseLeftMenu}
        years={props.years}
      />
      <span
        className="absolute text-3xl cursor-pointer z-10 left-menu-bullet contrast-text"
        onClick={openLeftMenu}
      >
        &#8226;
      </span>
      <span className="absolute bottom-5 text-3xl cursor-pointer z-10 left-timeline contrast-text medium-caption">
        {props.years.map((year, index) => {
          let classes = isNewYear ? 'timeline-animation' : 'static-margin';

          return year.id === props.year.id ? (
            <div key={index} className={`pb-2.5 opacity-100 ${classes}`}>
              {year.id}
            </div>
          ) : (
            <div key={index} className={`pb-2.5 opacity-60`}>
              {year.id}
            </div>
          );
        })}
      </span>
      {pageComponent}
    </>
  );
};

UIShell.propTypes = {
  pageId: PropTypes.string,
  year: PropTypes.shape,
  romanSceneNumber: PropTypes.string,
  isLastScene: PropTypes.bool,
  isLastPage: PropTypes.bool,
  years: PropTypes.arrayOf(PropTypes.shape)
};

export default UIShell;
