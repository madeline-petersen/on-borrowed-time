import './Home.scss';

import { Col, Container, Row } from 'react-grid-system';

import { Link } from 'react-router-dom';
import React from 'react';
import ResourceTable from '../components/ResourceTable';
import car from '../images/car.png';
import crowd from '../images/crowd.png';
import { useScreenClass } from 'react-grid-system';

const Home = () => {
  const screenClass = useScreenClass();

  return (
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
            <p className="medium-caption pt-2 scene-animation absolute top-0">
              Scene I
            </p>
            <p className="medium-caption pt-2 title-animation">
              Death of an Icon
            </p>
          </Col>
        </Row>
        {/* gray to transparent background gradient */}
        <Row className="grid__row h-48 bg-gradient-to-b from-gray-10" />
      </Container>

      {/* Event */}
      <Container className="grid__container border-l border-gray-50">
        <Row className="grid__row pt-64 pb-24">
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
              Yaobang2 was an icon for political reform and democratic change1.
              His critique on Mao’s cult-like ideology differentiated from other
              political figures, and made him a beloved leader.
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
              student-led pro-democracy demonstrations and hunger strikes across
              China.
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

      {/* Reflection */}
      {/* <Container className="grid__container border-l border-gray-50">
        <Row className="grid__row pt-64 pb-20">
          <Col lg={1} />
          <Col lg={11} md={12}>
            <img src={crowd} alt="" />
          </Col>
          <Col lg={3} />
          <Col lg={4} md={4}>
            <p className="small-body mt-8">
              Some two hundred thousand pro-democracy students staged an
              unauthorized demonstration in Tiananmen Square during the funeral
              ceremony of the Chinese Communist Party leader and liberal
              reformer Hu Yaobang, on April 22, 1989. Photograph by Catherine
              Henriette/AFP/Getty.
            </p>
          </Col>
        </Row>
        <Row className="grid__row pt-20 pb-24">
          <Col lg={3} />
          <Col lg={7} md={12}>
            <img src={car} alt="" />
          </Col>
          <Col lg={3} />
          <Col lg={4} md={4}>
            <p className="small-body mt-5">
              A weary protester pleads with a PLA officer sitting in his truck
              to not crackdown on the student demonstrators in Tiananmen Square.
              (Photo by Peter Turnley/Getty Images)
            </p>
          </Col>
        </Row>
      </Container> */}

      {/* Final Reflection */}
      {/* <Container className="grid__container border-l border-gray-50">
        <Row className="grid__row pt-64 pb-40">
          <Col lg={1} />
          <Col lg={11} md={12}>
            <p className="medium-headline pb-16">
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
            <p className="medium-body">
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
            <p className="medium-body">
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
      </Container> */}
    </div>
  );
};

export default Home;
