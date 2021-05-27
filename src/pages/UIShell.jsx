import './UIShell.scss';

import React, { useState } from 'react';

import Artifacts from './Artifacts.jsx';
import Event from './Event.jsx';
import Header from '../components/Header';
import Home from './Home.jsx';
import Intro from './Intro.jsx';
import LeftMenu from '../components/LeftMenu';
import PropTypes from 'prop-types';
import Reflection from './Reflection.jsx';
import { useHistory } from 'react-router-dom';

const UIShell = props => {
  const [isMenuActive, setIsMenuActive] = useState(false);
  const [yearIsClicked, setYearIsClicked] = useState(false);

  let history = useHistory();

  const openLeftMenu = () => {
    setIsMenuActive(true);
  };

  const onCloseLeftMenu = () => {
    setIsMenuActive(false);
  };

  const onClickYear = year => {
    setYearIsClicked(true);
    setTimeout(function() {
      // executed after 1 second
      history.push(`/${year}`);
    }, 1000);
  };

  let pageComponent;
  switch (props.pageId) {
    case 'home':
      pageComponent = <Home {...props} />;
      break;
    case 'intro':
      pageComponent = <Intro {...props} />;
      break;
    case 'event':
      pageComponent = <Event {...props} />;
      break;
    case 'artifacts':
      pageComponent = <Artifacts {...props} />;
      break;
    case 'reflection':
      pageComponent = <Reflection {...props} />;
      break;
    default:
      pageComponent = <Event {...props} />;
  }

  let isNewYear = props.pageId === 'event' && props.romanSceneNumber === 'I';
  let isYearEnd = props.isLastScene && props.isLastPage;

  return (
    <>
      <Header
        label={
          props.pageId === 'intro'
            ? ''
            : props.pageId === 'home'
            ? props.year.blurb
            : `${props.year.id} ${props.year.title}`
        }
        pageId={props.pageId}
        border={true}
      />
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
      <span className="absolute top-0 pb-5 text-3xl left-timeline medium-caption border-l border-white pl-4 h-screen">
        <span className="absolute bottom-0 text-white">
          {props.years.map((year, index) => {
            let classes = isNewYear
              ? 'timeline-animation'
              : isYearEnd
              ? 'reverse-timeline-animation'
              : 'static-margin';

            return year.id === props.year.id ? (
              <div
                key={index}
                className={`pb-2.5 ${classes} ${yearIsClicked &&
                  'reverse-timeline-animation'}`}
              >
                {year.id}
              </div>
            ) : (
              <div
                key={index}
                className={`pb-2.5 opacity-30 cursor-pointer`}
                onClick={() => onClickYear(year.id)}
              >
                {year.id}
              </div>
            );
          })}
        </span>
      </span>
      {pageComponent}
    </>
  );
};

UIShell.defaultProps = {
  year: { id: '', title: '' }
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
