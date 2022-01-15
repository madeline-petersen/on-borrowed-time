import PropTypes from 'prop-types';
import React from 'react';

const ThematicThreadsToggle = ({ setBackgroundColor, isWhite }) => {
  return (
    <div
      className="flex items-center"
      onClick={() => setBackgroundColor(!isWhite)}
    >
      <div className={`${isWhite ? 'white' : 'black'}`}>
        <span className="slider round max-w-min" />
        <span className="slider round max-w-min" />
      </div>
      <div className="pl-4">{isWhite ? `1984-2003` : `2003—2020`}</div>
    </div>
  );
};

ThematicThreadsToggle.propTypes = {
  setBackgroundColor: PropTypes.func,
  isWhite: PropTypes.bool
};

export default ThematicThreadsToggle;
