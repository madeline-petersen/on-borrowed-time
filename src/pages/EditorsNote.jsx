import ReactFullpage from '@fullpage/react-fullpage';
import PropTypes from 'prop-types';
import React from 'react';
import { Col, Container, Row, useScreenClass } from 'react-grid-system';
import { Helmet } from 'react-helmet';

import Countdown from '../components/Countdown';

const EditorsNote = ({ headerHeight }) => {
  const screenClass = useScreenClass();
  let textIndent = ['lg', 'xl', 'xxl'].includes(screenClass)
    ? `calc(50%/4)` // indent 0.5/4 columns for large
    : ['md'].includes(screenClass)
    ? `calc(50%/6)` // indent 0.5/6 columns for medium
    : `calc(100%/12)`; // indent 1/12 columns for small, x-small

  return (
    <>
      <Helmet>
        <title>Editor&rsquo;s Note | On Borrowed Time</title>
      </Helmet>
      <ReactFullpage
        licenseKey={'DNAK9-ZU2SK-BDKK8-JZ61H-YIUAK'}
        // Scrolling
        scrollingSpeed={1000}
        scrollOverflow={true}
        // Design
        paddingTop={headerHeight}
        // Custom selectors
        credits={{ enabled: false }}
        render={({ state, fullpageApi }) => {
          return (
            <div className={`section bg-blue-70 h-auto foreground-fade-in`}>
              <Container className="min-h-screen grid__container">
                <Row className={`grid__row intro-paragraph pb-16`}>
                  <Col lg={1} md={2} />
                  <Col lg={10} md={8} sm={12} xs={12}>
                    <p
                      className={`large-headline-dynamic text-white text-center fade-first`}
                    >
                      &ldquo;A Borrowed Place, On Borrowed Time.{' '}
                      <span style={{ fontFamily: 'Noto Sans' }}>
                        的地方, 暫借的時間
                      </span>
                      .&rdquo; A phrase commonly used to describe
                      Hong&nbsp;Kong&rsquo;s perpetual impermanence. The
                      region&rsquo;s intertwining history can be understood as
                      the product of two forces — a colonial legacy that it
                      struggles to reconcile itself with, and an authoritarian
                      future fraught with uncertainty.
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
                      As Britain and China negotiated the Handover, two promises
                      were woven into the constitution to &ldquo;ease the
                      hearts&rdquo; of Hong&nbsp;Kong people. The first was the
                      &ldquo;one country, two systems&rdquo; principle, an
                      arrangement that would honour the region&rsquo;s unique
                      way of life for fifty years, thus easing the transition
                      back to the motherland. The second was the &ldquo;ultimate
                      aim&rdquo; of universal suffrage, which would grant
                      Hong&nbsp;Kong people the opportunity to govern their own
                      region in the future.
                    </p>
                    <br />
                    <p
                      className={`medium-body text-white text-opacity-75 fade-second`}
                      style={{
                        textIndent: textIndent
                      }}
                    >
                      Beyond the constitutional details, these two promises held
                      symbolic meaning for a new generation of Hongkongers. They
                      inspired the hope that the region could someday dictate
                      its own future. Throughout Hong&nbsp;Kong&rsquo;s
                      conflicting history, the region has never had the
                      opportunity to experience self-determination, universal
                      suffrage, or genuine democracy. It has always been
                      beholden to forces larger than itself.
                    </p>
                    <br />
                    <p
                      className={`medium-body text-white text-opacity-75 fade-second`}
                      style={{
                        textIndent: textIndent
                      }}
                    >
                      The goal of this project is to shed light on
                      Hong&nbsp;Kong&rsquo;s journey and to document the
                      courageous measures that Hongkongers have taken in their
                      pursuit of genuine democracy.
                    </p>
                    <br />
                    <p
                      className={`medium-body text-white text-opacity-75 fade-second`}
                      style={{
                        textIndent: textIndent
                      }}
                    >
                      To tell the story of Hong Kong with accuracy and care, the
                      project is compiled into several layers. On the surface,
                      it provides a historical account of Hong&nbsp;Kong&rsquo;s
                      handover since the Sino-Joint Declaration was signed in
                      1984. Beneath that lies an archive of digital artifacts—a
                      collection of stories, imagery, and musings that capture
                      how people felt as their history unfolded. At its core,
                      this project is an anthology of reflections that attempts
                      to forge meaning from the tragic events that have
                      transpired. It invites questions. What does it mean to be
                      a Hongkonger? Can freedom survive in the absence of
                      democracy? What role does collective memory play in
                      cultivating identity?
                    </p>
                    <br />
                    <p
                      className={`medium-body text-white text-opacity-75 fade-second`}
                      style={{
                        textIndent: textIndent
                      }}
                    >
                      On a more personal note, this project has provided us, the
                      editors and curators, an opportunity to explore our
                      personal histories and sense of belonging. It has given us
                      the space to examine how our lineage is woven into our
                      identities, and has provided us a glimpse of the modest
                      role we play within a larger narrative that extends beyond
                      ourselves.
                    </p>
                    <br />
                    <p
                      className={`medium-body text-white text-opacity-75 fade-second`}
                      style={{
                        textIndent: textIndent
                      }}
                    >
                      While Hong&nbsp;Kong is no longer considered &ldquo;a
                      borrowed place&rdquo;, the region is still — in a
                      sense — on borrowed time. As the region&rsquo;s fifty year
                      period of grace slowly ends, the CCP&rsquo;s encroaching
                      influence and presence have grown larger, and the promises
                      that were once made to Hong&nbsp;Kong are now under
                      threat. New legislation, such as the National Security
                      Law, has been weaponised to silence pro-democracy
                      advocates, and has forever reshaped what can be said and
                      fought for in Hong&nbsp;Kong.
                    </p>
                    <br />
                    <p
                      className={`medium-body text-white text-opacity-75 mb-12 fade-second`}
                      style={{
                        textIndent: textIndent
                      }}
                    >
                      It is within this historical context that On Borrowed Time
                      was created. The project contributes to the shared
                      endeavour of documenting Hong&nbsp;Kong&rsquo;s unique
                      status in the face of censorship. While some may believe
                      that Hong&nbsp;Kong&rsquo;s impermanence is inevitable, it
                      is through preserving the collective memory of
                      Hong&nbsp;Kong that a common truth—and the spirit of the
                      things we love—may persist.
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
          );
        }}
      />
    </>
  );
};

export default EditorsNote;

EditorsNote.propTypes = {
  headerHeight: PropTypes.string
};
