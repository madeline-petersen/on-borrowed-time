import PropTypes from 'prop-types';
import React, { useEffect } from 'react';

const ThematicThreadsToggle = ({
  setBackgroundColor,
  thematicThreadsBgWhite
}) => {
  useEffect(() => {
    // set background based on hash
    let hash = window.location.hash.substring(1);
    if (hash === '1984-2003') {
      setBackgroundColor(true); // white
    } else {
      // unless hash is white page, default to black
      setBackgroundColor(false); // black
    }
  }, []);

  useEffect(() => {
    // update hash when bg is toggled
    let yearRange = thematicThreadsBgWhite ? `1984-2003` : `2003-2020`;
    if (history.pushState) {
      // IE10, Firefox, Chrome, etc.
      window.history.pushState(null, null, '#' + yearRange);
    } else {
      // IE9, IE8, etc
      window.location.hash = '#!' + yearRange;
    }
  }, [thematicThreadsBgWhite]);

  return (
    <div
      className="flex items-center"
      onClick={() => setBackgroundColor(!thematicThreadsBgWhite)}
    >
      <div
        className={`cursor-pointer ${
          thematicThreadsBgWhite ? 'white' : 'black'
        }`}
      >
        <span className="slider round max-w-min" />
        <span className="slider round max-w-min" />
      </div>
      <div className="cursor-pointer pl-4">
        {thematicThreadsBgWhite ? `1984—2003` : `2003—2020`}
      </div>
    </div>
  );
};

ThematicThreadsToggle.propTypes = {
  setBackgroundColor: PropTypes.func,
  thematicThreadsBgWhite: PropTypes.bool
};

export default ThematicThreadsToggle;
