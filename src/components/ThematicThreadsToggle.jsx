import PropTypes from 'prop-types';
import React, { useEffect } from 'react';

const ThematicThreadsToggle = ({
  setBackgroundColor,
  thematicThreadsBgWhite
}) => {
  useEffect(() => {
    // set background based on hash
    let hash = window.location.hash.substring(1);
    console.log('hash ', hash);
    if (hash === '2003-2020') {
      setBackgroundColor(false); // black
    } else {
      setBackgroundColor(true); // white
    }
  }, []);

  useEffect(() => {
    // set hash based on background
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
      <div className={`${thematicThreadsBgWhite ? 'white' : 'black'}`}>
        <span className="slider round max-w-min" />
        <span className="slider round max-w-min" />
      </div>
      <div className="pl-4">
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
