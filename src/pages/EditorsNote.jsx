import React from 'react';
import PropTypes from 'prop-types';
import { Col, Container, Row, useScreenClass } from 'react-grid-system';
import Countdown from '../components/Countdown';

const EditorsNote = () => {
  const screenClass = useScreenClass();
  let textIndent = ['lg', 'xl', 'xxl'].includes(screenClass)
    ? `calc(50%/4)` // indent 0.5/4 columns for large
    : ['md'].includes(screenClass)
    ? `calc(50%/6)` // indent 0.5/6 columns for medium
    : `calc(100%/12)`; // indent 1/12 columns for small, x-small

  return (
    <>
      <div className={`bg-blue-70 h-auto foreground-fade-in`}>
        <Container className="min-h-screen grid__container">
          <Row className={`grid__row intro-paragraph pb-16`}>
            <Col lg={1} md={2} />
            <Col lg={10} md={8} sm={12} xs={12}>
              <p
                className={`large-headline-dynamic text-white text-center fade-first`}
              >
                &ldquo;A Borrowed Place, On Borrowed Time.{' '}
                <span style={{ fontFamily: 'NotoSerifTC-Regular' }}>
                  的地方, 暫借的時間
                </span>
                .&rdquo; A phrase commonly used to describe
                Hong&nbsp;Kong&apos;s unending state of impermanence. The
                region&apos;s transient nature and intertwining history can be
                understood in two-folds — a colonial legacy that it has
                struggled to reconcile, and an authoritarian future that has
                been difficult to predict.
              </p>
            </Col>
            <Col lg={1} md={2} />
          </Row>
          <Row>
            <Col lg={4} md={3} />
            <Col lg={4} md={6} sm={12} xs={12}>
              <p
                className={`medium-body text-white text-opacity-75 fade-second`}
                style={{
                  textIndent: textIndent
                }}
              >
                As Britain and China negotiated the conditions of the Handover,
                two promises were woven into the constitution in order to
                &ldquo;ease the hearts&rdquo; of Hong&nbsp;Kong people about the
                transition. The first assurance came under the &ldquo;one
                country, two systems&rdquo; principle, an arrangement that would
                honour the region&apos;s unique way of life for fifty years to
                ensure a peaceful transition back to the motherland. The second
                agreement promised Hong&nbsp;Kong the &ldquo;ultimate aim&rdquo;
                of universal suffrage, which would allow Hong&nbsp;Kong people
                to fully govern their own region in the future.
              </p>
              <br />
              <p
                className={`medium-body text-white text-opacity-75 fade-second`}
                style={{
                  textIndent: textIndent
                }}
              >
                Beyond the constitutional details, these two promises would hold
                a more symbolic meaning to a new generation of Hongkongers, and
                inspire a sense of hope that the region could someday dictate
                its own future. Throughout Hong&nbsp;Kong&apos;s conflicting
                history, the region has never had the opportunity to experience
                democratic qualities such as self-determination, universal
                suffrage, or genuine democracy. Hong&nbsp;Kong&apos;s fate has
                always been beholden to forces larger than itself.
              </p>
              <br />
              <p
                className={`medium-body text-white text-opacity-75 fade-second`}
                style={{
                  textIndent: textIndent
                }}
              >
                Therefore, the underlying purpose of this project is to shed
                light on the journey that Hong&nbsp;Kong has undergone, and to
                document the courageous measures that Hongkongers have
                undertaken in its pursuit for genuine democracy.
              </p>
              <br />
              <p
                className={`medium-body text-white text-opacity-75 fade-second`}
                style={{
                  textIndent: textIndent
                }}
              >
                In order to tell the story of Hong&nbsp;Kong with accuracy and
                care, the project is presented in several layers. At the
                surface, it outlines the historical account of
                Hong&nbsp;Kong&apos;s handover since the Sino-Joint Declaration
                was signed in 1984. From another perspective, it is an archive
                of digital artifacts that resurface a collection of stories,
                imagery, and musings of how people felt in that particular
                moment in history. And at its core, it is an anthology of
                reflections that attempts to forge meaning from the tragic
                events that have transpired. It invites the question, what does
                it mean to be a Hongkonger? Can freedom survive in the absence
                of democracy? And what role does collective memory play in
                cultivating identity?
              </p>
              <br />
              <p
                className={`medium-body text-white text-opacity-75 fade-second`}
                style={{
                  textIndent: textIndent
                }}
              >
                On a more personal note, this project has also provided the
                editors an opportunity to explore our own personal history and
                sense of belonging. It has given us the space to examine how our
                lineage is woven into our identities, and has provided us a
                glimpse of the modest role we play within a larger narrative
                that extends beyond ourselves.
              </p>
              <br />
              <p
                className={`medium-body text-white text-opacity-75 fade-second`}
                style={{
                  textIndent: textIndent
                }}
              >
                While Hong&nbsp;Kong is no longer considered &ldquo;a borrowed
                place&rdquo;, the region is still — in a sense — on borrowed
                time. As the region&rsquo;s fifty year period of grace slowly
                ends, the CCP&rsquo;s encroaching influence and presence have
                grown larger, and the promises that were once made to
                Hong&nbsp;Kong are now under threat. New legislation, such as
                the National Security Law, has been weaponised to silence
                pro-democracy advocates, and has forever reshaped what can be
                said and fought for in Hong&nbsp;Kong.
              </p>
              <br />
              <p
                className={`medium-body text-white text-opacity-75 mb-12 fade-second`}
                style={{
                  textIndent: textIndent
                }}
              >
                It is within this historical context that On Borrowed Time was
                created. The project contributes to the shared endeavour of
                documenting Hong&nbsp;Kong&rsquo;s unique status in the face of
                censorship. While some may believe that Hong&nbsp;Kong&rsquo;s
                impermanence is inevitable, it is through preserving the
                collective memory of Hong&nbsp;Kong that a common truth—and the
                spirit of the things we love—may persist.
              </p>

              <p
                className={`small-body-2 text-white text-center mb-8 fade-second`}
              >
                A.C., M.L., M.P.
                <br />
                01. 01. 2022
              </p>

              <h3
                className={`small-body-2 text-white text-center lg:mb-40 md:mb-20 sm:mb-10 fade-second`}
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
