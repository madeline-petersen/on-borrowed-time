import './Anecdote.scss';

import { Col, Container, Row } from 'react-grid-system';

import { Close20 } from '@carbon/icons-react';
import PropTypes from 'prop-types';
import React from 'react';

const Anecdote = ({ title, type, children }) => {
  const modal = document.getElementById('anecdoteModal');

  const onClickBtn = () => {
    document.getElementById('anecdoteModal').style.transform = 'translateX(0%)';
  };

  const onClickSpan = () => {
    document.getElementById('anecdoteModal').style.transform =
      'translateX(100%)';
  };

  // window.onclick = function(event) {
  //   if (event.target == modal) {
  //     document.getElementById('anecdoteModal').style.display = 'none';
  //   }
  // };

  return (
    <>
      {/* <!-- Trigger/Open The Modal --> */}
      <div onClick={onClickBtn} className="contents cursor-pointer">
        {children}
      </div>

      <div id="modal-overlay" className="modal-overlay">
        <div id="anecdoteModal" className="modal">
          <div className="absolute top-24 background-color">
            <Container className="grid__container">
              <Row
                className="grid__row modal-height"
                style={{ overflow: 'scroll' }}
              >
                <span
                  className="close absolute top-8 right-6 z-10"
                  onClick={onClickSpan}
                >
                  <Close20 />
                </span>
                <Col lg={2} />
                <Col lg={1} className="bg-white" />
                <Col lg={9} className="bg-white pt-8 pb-8">
                  <div className="small-body mb-1">{title}</div>
                  <div className="small-body mb-12">{type}</div>
                  <div className="large-headline mb-4">{title}</div>
                  <div className="small-headline mb-16">
                    Winston L.Y. and Marsha L. Wagner
                  </div>
                  {/* </Col>

            <Col lg={2} />
            <Col lg={2} className="bg-white" />
            <Col lg={8} className="bg-white"> */}
                  <div>
                    <div className="medium-body">
                      On April 17 student mourning activities began to spread
                      from the Beijing campuses into the nation&rsquo;s symbolic
                      central space, Tiananmen Square. The Square lies at the
                      geographic center of the capital city and just southeast
                      of Zhongnanhai, where the last dynasty&rsquo;s emperors
                      had their hunting park and where the top Communist leaders
                      now work. Beginning with the May Fourth Movement in 1919,
                      Tiananmen has also become a traditional site for popular
                      protests. These protests have often been led by university
                      students, who are especially numerous here because Beijing
                      is the country&rsquo;s preeminent center of higher
                      education.
                    </div>
                    <br />
                    <div className="medium-body">
                      At People&rsquo;s University a &ldquo;Democracy
                      Wall&rdquo; appeared on the evening of April 17.
                      Spontaneous memorial activities took place on other
                      campuses that until now had been quiet. In addition to
                      pasting up eulogies, memorial couplets, and posters,
                      students made speeches, set up symbolic biers, and
                      delivered wreaths to the Square. Some even demanded to
                      attend the funeral. In a single day, ninety-three
                      handwritten memorial couplets appeared at the Beijing
                      University of Science and Engineering.
                    </div>
                    <br />
                    <div className="medium-body">
                      At People&rsquo;s University a &ldquo;Democracy
                      Wall&rdquo; appeared on the evening of April 17.
                      Spontaneous memorial activities took place on other
                      campuses that until now had been quiet. In addition to
                      pasting up eulogies, memorial couplets, and posters,
                      students made speeches, set up symbolic biers, and
                      delivered wreaths to the Square. Some even demanded to
                      attend the funeral. In a single day, ninety-three
                      handwritten memorial couplets appeared at the Beijing
                      University of Science and Engineering.
                    </div>
                    <br />
                    <div className="medium-body">
                      At People&rsquo;s University a &ldquo;Democracy
                      Wall&rdquo; appeared on the evening of April 17.
                      Spontaneous memorial activities took place on other
                      campuses that until now had been quiet. In addition to
                      pasting up eulogies, memorial couplets, and posters,
                      students made speeches, set up symbolic biers, and
                      delivered wreaths to the Square. Some even demanded to
                      attend the funeral. In a single day, ninety-three
                      handwritten memorial couplets appeared at the Beijing
                      University of Science and Engineering.
                    </div>
                  </div>
                </Col>
              </Row>
            </Container>
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
