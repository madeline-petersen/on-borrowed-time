import './UIShell.scss';

import React, { useState } from 'react';

import Artifacts from './Artifacts.jsx';
import Event from './Event.jsx';
import LeftMenu from '../components/LeftMenu';
import PropTypes from 'prop-types';
import Reflection from './Reflection.jsx';

const UIShell = props => {
  const [isMenuActive, setIsMenuActive] = useState(false);

  const openLeftMenu = () => {
    setIsMenuActive(true);
  };

  const onCloseLeftMenu = () => {
    setIsMenuActive(false);
  };

  let pageComponent;
  switch (props.pageId) {
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
      <span className="absolute bottom-14 text-3xl cursor-pointer z-10 left-timeline contrast-text medium-caption">
        {props.years.map((year, index) => (
          <div
            key={index}
            className={`pb-2.5 ${
              year.id === props.year.id ? 'opacity-100 mb-12' : 'opacity-60'
            }`}
          >
            {year.id}
          </div>
        ))}
      </span>
      {pageComponent}
    </>
  );
};

UIShell.propTypes = {
  pageId: PropTypes.string,
  year: PropTypes.shape,
  years: PropTypes.arrayOf(PropTypes.shape)
};

export default UIShell;
