import './Event.scss';

import { Col, Container, Row } from 'react-grid-system';
import React, { useState } from 'react';

import Footer from '../components/Footer';
import Header from '../components/Header';
import ResourceTable from '../components/ResourceTable';
import SubHeader from '../components/SubHeader';
import { useScreenClass } from 'react-grid-system';

const Event = () => {
  const screenClass = useScreenClass();
  const [isClicked, setClicked] = useState(false);

  return (
    <>
      {/* <div className="bg-black">
        <Container className="grid__container border-l border-gray-50">
          <Row className="grid__row screen-transition-animation" />
        </Container>
      </div> */}

      <div className="h-auto bg-gray-10">
        <Header
          theme={{ background: 'gray-10', text: 'black' }}
          isClicked={isClicked}
        />

        <Container className="grid__container border-l border-gray-50">
          <Row className="grid__row shrink-animation">
            <Col lg={12} md={12} sm={12} xs={12} />
          </Row>
        </Container>

        <SubHeader
          theme={{ background: 'gray-10', text: 'black' }}
          isClicked={isClicked}
        />

        {/* Event */}
        <Container className="grid__container border-l border-gray-50">
          <Row className={`grid__row pt-64 pb-24 delayed-fade-in`}>
            <Col lg={1} md={2} />
            <Col lg={11} md={10} sm={12} xs={12}>
              <p
                className={`large-headline ${isClicked ? 'fade-out' : null}`}
                style={{
                  textIndent: ['lg', 'xl', 'xxl'].includes(screenClass)
                    ? `calc(200%/11)` // indent 2/11 columns for large
                    : ['md'].includes(screenClass)
                    ? `calc(200%/10)` // indent 2/10 columns for medium
                    : '0' // indent 0 for small, x-small
                }}
              >
                A high ranking official of the Chinese Communist Party, Hu
                Yaobang2 was an icon for political reform and democratic
                change1. His critique on Mao’s cult-like ideology differentiated
                from other political figures, and made him a beloved leader.
                <br />
                <br />
              </p>
            </Col>
            <Col lg={1} md={2} />
            <Col lg={11} md={10} sm={12} xs={12}>
              <p
                className={`large-headline ${isClicked ? 'fade-out' : null}`}
                style={{
                  textIndent: ['lg', 'xl', 'xxl'].includes(screenClass)
                    ? `calc(200%/11)` // indent 2/11 columns for large
                    : ['md'].includes(screenClass)
                    ? `calc(200%/10)` // indent 2/10 columns for medium
                    : '0' // indent 0 for small, x-small
                }}
              >
                The death of Hu on April 15 1989, ignited a public outcry —
                mourning3, grief, and anger quickly developed into a series of
                student-led pro-democracy demonstrations and hunger strikes
                across China.
                <br />
                <br />
              </p>
            </Col>
          </Row>
          <ResourceTable
            tableState={isClicked}
            data={[
              {
                title: 'A Champion of Liberalisation',
                source: `China's Struggle for Democracy, its Prelude, Development, Aftermath, and Impact`,
                type: 'Journal Excerpt',
                year: '1990'
              },
              {
                title: 'The Death of Hu Yaobang',
                source: `Tiananman Papers`,
                type: 'Book Excerpt',
                year: '2001'
              },
              {
                title: 'The Mourning of Hu Yaobang',
                source: `Tiananman Papers`,
                type: 'Book Excerpt',
                year: '2001'
              },
              {
                title: 'Beijing Hints on Crackdown on Students',
                source: `New York Times`,
                type: 'Article Excerpt',
                year: '1989'
              }
            ]}
          />
        </Container>

        <Footer
          pushTo="/imagery"
          upNext="Imagery"
          scene="I"
          setClicked={setClicked}
          isClicked={isClicked}
          theme={{ background: 'gray-10', text: 'black' }}
        />
      </div>
    </>
  );
};

export default Event;
