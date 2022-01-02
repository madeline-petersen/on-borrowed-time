import React from 'react';
import PropTypes from 'prop-types';
import { Col, Container, Row } from 'react-grid-system';
import Countdown from '../components/Countdown';
import './Splash.scss';

const EditorsNote = () => {
  return (
    <>
      <div className={`bg-blue-70 h-auto foreground-fade-in`}>
        <Container className="min-h-screen grid__container">
          {/* top container */}
          <div className="w-full flex flex-col justify-between p-4 md:p-5">
            <div className="flex justify-between items-center lg:mb-2 md:mb-1">
              <h3
                className={`hidden md:block small-headline text-white fade-in-element`}
              >
                A Borrowed Place, On Borrowed Time
              </h3>
              <h3
                className={`block md:hidden mobile-headline text-white fade-in-element mt-3.5 pt-px mb-1`}
              >
                A Borrowed Place, On Borrowed Time
              </h3>

              {/* hide below md breakpoint */}
              <h3 className="headline-characters text-white md:block hidden fade-in-element">
                暫借的地方, 暫借的時間
              </h3>
            </div>

            {/* show below md breakpoint */}
            <h3 className="mobile-characters text-white md:hidden mb-3.5 pb-px block fade-in-element">
              暫借的地方, 暫借的時間
            </h3>

            <h3 className="small-body text-gray-60 fade-in-element">
              Anthology coming soon
            </h3>
          </div>

          <Row className={`grid__row intro-paragraph pb-16`}>
            <Col lg={1} md={2} />
            <Col lg={10} md={8} sm={12} xs={12}>
              <p
                className={`large-headline-dynamic text-white text-center fade-first`}
              >
                “A Borrowed Place, On Borrowed Time.{' '}
                <span style={{ fontFamily: 'NotoSerifTC-Regular' }}>
                  的地方, 暫借的時間
                </span>
                .” A phrase commonly used to describe Hong Kong’s unending state
                of impermanence. The region’s transient nature and intertwining
                history can be understood in two-folds — a colonial legacy that
                it has struggled to reconcile, and an authoritarian future that
                has been difficult to predict.
              </p>
            </Col>
            <Col lg={1} md={2} />
          </Row>
          <Row>
            <Col lg={4} md={3} />
            <Col lg={4} md={6} sm={12} xs={12}>
              <p
                className={`small-body-2 text-white text-opacity-80 fade-second`}
              >
                In order to tell the story of Hong Kong with accuracy and care,
                the project is broken down into several layers. At the surface,
                it outlines the historical account of Hong Kong’s handover since
                the Sino-Joint Declaration was signed in 1984. From another
                perspective, it is an archive of digital artefacts that
                resurface a collection of stories, imagery, and musings of how
                people felt in a particular moment in time. And at its core, it
                is an anthology of reflections that attempts to forge meaning
                from the tragic events that have transpired. It invites the
                question, what does it mean to be a Hongkonger? Can freedom
                survive in the absence of democracy? And what role does memory
                play in cultivating identity?
              </p>
              <br />
              <p
                className={`small-body-2 text-white text-opacity-80 fade-second`}
              >
                On a more personal note, this project has also provided the
                editors of the work an opportunity to explore our own personal
                history and sense of belonging. It has given us the space to
                examine how our lineage is woven into our identities, and has
                provided us a glimpse of the modest role we play within a larger
                narrative that extends beyond ourselves. While Hong Kong is no
                longer considered “a borrowed place”, the region is still — in a
                sense — on borrowed time. As the region’s fifty year grace
                period slowly ends, China’s encroaching influence and presence
                have grown larger, and the promises that were once made to Hong
                Kong are now under threat. New legislation, such as the National
                Security Law, has been weaponised to silence pro-democracy
                advocates, and has forever reshaped what can be said and fought
                for in Hong Kong.
              </p>
              <br />
              <p
                className={`small-body-2 text-white text-opacity-80 mb-12 fade-second`}
              >
                It is within this historical context that On Borrowed Time was
                created. The project contributes to the shared endeavour of
                documenting Hong Kong’s unique status in the face of censorship.
                While some may argue that Hong Kong’s impermanence is
                inevitable, it is through preserving the collective memory of
                Hong Kong that a common truth—and the spirit of the things we
                love—may persist.
              </p>

              <p
                className={`small-body-2 text-white text-opacity-80 text-center mb-8 fade-second`}
              >
                A.C., M.L., M.P.
                <br />
                30. 11. 2021
              </p>

              <h3
                className={`small-body-2 text-white text-opacity-80 text-center lg:mb-40 md:mb-20 sm:mb-10 fade-second`}
              >
                The Expiry — <Countdown />
              </h3>
            </Col>
            <Col lg={4} md={3} />
          </Row>
        </Container>
      </div>
    </>
  );
};

export default EditorsNote;

EditorsNote.propTypes = {
  timelineClasses: PropTypes.string
};
