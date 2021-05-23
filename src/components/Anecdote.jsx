import './Anecdote.scss';

import PropTypes from 'prop-types';
import React from 'react';

const Anecdote = ({ title, type, children }) => {
  const modal = document.getElementById('anecdoteModal');

  const onClickBtn = () => {
    document.getElementById('anecdoteModal').style.display = 'block';
  };

  const onClickSpan = () => {
    document.getElementById('anecdoteModal').style.display = 'none';
  };

  window.onclick = function(event) {
    if (event.target == modal) {
      document.getElementById('anecdoteModal').style.display = 'none';
    }
  };

  return (
    <>
      {/* <!-- Trigger/Open The Modal --> */}
      <div onClick={onClickBtn} className="contents cursor-pointer">
        {children}
      </div>

      {/* <!-- The Modal --> */}
      <div id="anecdoteModal" className="modal">
        {/* <!-- Modal content --> */}
        <div className="modal-content">
          <span className="close" onClick={onClickSpan}>
            &times;
          </span>
          <div className="small-body">{type}</div>
          <div className="large-headline">{title}</div>
          <div className="regular-headline">
            Winston L.Y. and Marsha L. Wagner
          </div>
          <div>
            <div className="medium-body">
              On April 17 student mourning activities began to spread from the
              Beijing campuses into the nation&rsquo;s symbolic central space,
              Tiananmen Square. The Square lies at the geographic center of the
              capital city and just southeast of Zhongnanhai, where the last
              dynasty&rsquo;s emperors had their hunting park and where the top
              Communist leaders now work. Beginning with the May Fourth Movement
              in 1919, Tiananmen has also become a traditional site for popular
              protests. These protests have often been led by university
              students, who are especially numerous here because Beijing is the
              country&rsquo;s preeminent center of higher education.
            </div>
            <br />
            <div className="medium-body">
              At People&rsquo;s University a &ldquo;Democracy Wall&rdquo;
              appeared on the evening of April 17. Spontaneous memorial
              activities took place on other campuses that until now had been
              quiet. In addition to pasting up eulogies, memorial couplets, and
              posters, students made speeches, set up symbolic biers, and
              delivered wreaths to the Square. Some even demanded to attend the
              funeral. In a single day, ninety-three handwritten memorial
              couplets appeared at the Beijing University of Science and
              Engineering.
            </div>
            <div className="small-body">
              Nicholas D. Kristof, “Beijing Hints at Crackdown on Students,” New
              York Times, April 26, 1989
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

Anecdote.propTypes = {
  children: PropTypes.node,
  title: PropTypes.string,
  type: PropTypes.string
};

export default Anecdote;
