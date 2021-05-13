import { Col, Container, Row } from 'react-grid-system';
import React, { useEffect } from 'react';

import { ArrowDown16 } from '@carbon/icons-react';
import { Link } from 'react-router-dom';
import car from '../images/car.png';
import crowd from '../images/crowd.png';

const Reflection = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="h-auto bg-black">
      {/* Header */}
      <Container className="grid__container sticky top-0 border-l border-gray-50 bg-black">
        <Row className="grid__row pt-5">
          <Col lg={3} md={4} sm={4} xs={4} className="medium-caption">
            <Link to="/" className="text-gray-10">
              On Borrowed Time
            </Link>
          </Col>
          <Col lg={8} md={3} sm={4} xs={4} className="medium-caption">
            <Link className="text-gray-10">
              1989 &ldquo;The June Fourth Incident&rdquo;
            </Link>
          </Col>
          <Col lg={1} md={5} sm={4} xs={4} className="medium-caption">
            <Link to="/index" className="text-gray-10">
              Index
            </Link>
          </Col>
        </Row>
      </Container>

      {/* Event intro */}
      <Container className="grid__container sticky top-8 border-l border-gray-50">
        {/* solid black background */}
        <Row className="grid__row bg-black">
          <Col lg={3} md={3} />
          <Col lg={9} md={9} sm={12} xs={12}>
            <p className="medium-caption scene-animation pt-2 absolute top-0 text-gray-50">
              Scene I
            </p>
            <p className="small-body title-animation pt-2 pb-2 text-gray-50">
              Death of an Icon
            </p>
          </Col>
        </Row>
      </Container>

      {/* Final Reflection */}
      <Container className="grid__container border-l border-gray-50">
        <Row className="grid__row pt-64 pb-40">
          <Col lg={1} />
          <Col lg={11} md={12}>
            <p className="medium-headline text-gray-40 pb-16">
              After Hu Yaobang’s death, there was an emerging vitality to
              China’s pro-democracy movement. Overseas, Hong Kong citizens
              contributed to the movement by providing moral and material
              support; in the hopes that the reunification process would be
              smoother if liberal reforms could be achieved in China before the
              handover.
            </p>
          </Col>
          <Col lg={3} />
          <Col lg={7} md={12}>
            <p className="medium-body text-gray-40">
              The inhabitants of Hong Kong usually reserve their deepest
              passions for business, not politics. But last week, in the largest
              and most emotional outburst ever seen in the British colony, more
              than 500,000 demonstrators marched through Hong Kong&apos;s narrow
              streets, waving pro-democracy banners and singing anthems like We
              Shall Overcome. Including the spectators who cheered and
              applauded, an estimated 1 million people, one-sixth of Hong
              Kong&apos;s populace, turned out to proclaim their support for the
              embattled students in China.
              <br />
              <br />
            </p>
          </Col>
          <Col lg={3} />
          <Col lg={7} md={12}>
            <p className="medium-body text-gray-40">
              The unprecedented outcry reflected Hong Kong&apos;s growing
              anxiety over its return to China in 1997. A sleek modern city on
              the South China Sea, Hong Kong has become a hotbed of capitalism
              during 147 years of British rule. But Britain&apos;s sovereignty
              is set to run out under an Anglo-Chinese agreement reached in
              1984. Now Hong Kong&apos;s residents, the vast majority of whom
              are descendants of refugees from the mainland, scrutinize the
              crisis in China for clues to the fate of the colony under
              Communist control. Declared a banner that Hong Kong students
              carried last week: TODAY&apos;S CHINA IS TOMORROW&apos;S HONG
              KONG. (Times, Greenwald, 1989)
            </p>
          </Col>
        </Row>
      </Container>

      {/* Footer */}
      <Container className="grid__container border-l border-gray-50">
        <Row className="grid__row">
          <Col lg={1} md={1} />
          <Col lg={11} md={11}>
            <div className="border-t border-gray-60 mt-44" />
          </Col>
        </Row>
        <Row className="grid__row bg-black">
          <Col lg={1} md={1} />
          <Link to="/event" className="contents cursor-pointer">
            <Col lg={2} md={2} sm={2} xs={2}>
              <p className="small-body text-gray-40 pb-4 pt-4">Up Next</p>
            </Col>
            <Col lg={2} md={2} sm={2} xs={2}>
              <p className="small-body text-gray-40 pb-4 pt-4">Scene II</p>
            </Col>
            <Col
              lg={7}
              md={7}
              sm={7}
              xs={7}
              style={{ display: 'flex', justifyContent: 'space-between' }}
            >
              <p className="small-body text-gray-40 pb-4 pt-4">
                Tiananman Square Massacre
              </p>
              <p className="text-gray-40 pb-4 pt-4">
                <ArrowDown16 />
              </p>
            </Col>
          </Link>
        </Row>
      </Container>
    </div>
  );
};

export default Reflection;
