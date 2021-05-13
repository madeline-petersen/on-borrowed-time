import './Event.scss';

import { Col, Container, Row } from 'react-grid-system';
import React, { useEffect } from 'react';

import { ArrowDown16 } from '@carbon/icons-react';
import { Link } from 'react-router-dom';
import ResourceTable from '../components/ResourceTable';
import { useScreenClass } from 'react-grid-system';

const Event = () => {
  const screenClass = useScreenClass();

  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, []);

  return (
    <>
      <div className="h-auto bg-black">
        <Container className="grid__container border-l border-gray-50">
          <Row className="grid__row screen-transition-animation" />
        </Container>
      </div>

      <div className="h-auto bg-gray-10">
        {/* Header */}
        <Container className="grid__container sticky top-0 border-l border-gray-50 bg-gray-10">
          <Row className="grid__row pt-5">
            <Col lg={3} md={4} sm={4} xs={4} className="medium-caption">
              <Link to="/">On Borrowed Time</Link>
            </Col>
            <Col lg={8} md={3} sm={4} xs={4} className="medium-caption">
              <Link>1989 &ldquo;The June Fourth Incident&rdquo;</Link>
            </Col>
            <Col lg={1} md={5} sm={4} xs={4} className="medium-caption">
              <Link to="/index">Index</Link>
            </Col>
          </Row>
        </Container>

        <Container className="grid__container border-l border-gray-50">
          <Row className="grid__row shrink-animation">
            <Col lg={12} md={12} sm={12} xs={12} />
          </Row>
        </Container>

        {/* Event intro */}
        <Container className="grid__container sticky top-8 border-l border-gray-50">
          {/* solid gray background */}
          <Row className="grid__row bg-gray-10">
            <Col lg={3} md={3} />
            <Col lg={9} md={9} sm={12} xs={12}>
              <p className="medium-caption scene-animation pt-2 absolute top-0">
                Scene I
              </p>
              <p className="small-body title-animation pt-2 pb-2">
                Death of an Icon
              </p>
            </Col>
          </Row>
        </Container>

        {/* Event */}
        <Container className="grid__container border-l border-gray-50">
          <Row className="grid__row pt-64 pb-24 delayed-fade-in">
            <Col lg={1} md={2} />
            <Col lg={11} md={10} sm={12} xs={12}>
              <p
                className="large-headline"
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
                className="large-headline"
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

        {/* Footer */}
        <Container className="grid__container border-l border-gray-50">
          <Row className="grid__row delayed-fade-in">
            <Col lg={1} md={1} />
            <Col lg={11} md={11}>
              <div className="border-t border-gray-60 mt-44" />
            </Col>
          </Row>
          <Row className="grid__row bg-gray-10 delayed-fade-in">
            <Col lg={1} md={1} />
            <Link to="/imagery" className="contents cursor-pointer">
              <Col lg={2} md={2} sm={2} xs={2}>
                <p className="small-body pb-4 pt-4">Up Next</p>
              </Col>
              <Col lg={2} md={2} sm={2} xs={2}>
                <p className="small-body pb-4 pt-4">Scene I</p>
              </Col>
              <Col
                lg={7}
                md={7}
                sm={7}
                xs={7}
                style={{ display: 'flex', justifyContent: 'space-between' }}
              >
                <p className="small-body pb-4 pt-4">Imagery</p>
                <p className="pb-4 pt-4">
                  <ArrowDown16 />
                </p>
              </Col>
            </Link>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default Event;
