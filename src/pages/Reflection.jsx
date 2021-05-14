import { Col, Container, Row } from 'react-grid-system';
import React, { useState } from 'react';

import Footer from '../components/Footer';
import Header from '../components/Header';
import SubHeader from '../components/SubHeader';

const Reflection = () => {
  const [isClicked, setClicked] = useState(false);

  return (
    <>
      <div className="bg-black">
        <Container className="grid__container border-l border-gray-50">
          <Row className="grid__row screen-transition-animation" />
        </Container>
      </div>

      <div className="h-auto bg-black">
        <Header
          theme={{ background: 'black', text: 'gray-10' }}
          isClicked={isClicked}
        />

        <SubHeader
          theme={{ background: 'black', text: 'gray-10' }}
          isClicked={isClicked}
        />

        {/* Final Reflection */}
        <Container className="grid__container border-l border-gray-50">
          <Row className="grid__row foreground-fade-in pt-64 pb-40">
            <Col lg={1} />
            <Col lg={11} md={12}>
              <p
                className={`medium-headline text-gray-40 pb-16 ${
                  isClicked ? 'fade-out' : null
                }`}
              >
                After Hu Yaobang’s death, there was an emerging vitality to
                China’s pro-democracy movement. Overseas, Hong Kong citizens
                contributed to the movement by providing moral and material
                support; in the hopes that the reunification process would be
                smoother if liberal reforms could be achieved in China before
                the handover.
              </p>
            </Col>
            <Col lg={3} />
            <Col lg={7} md={12}>
              <p
                className={`medium-body text-gray-40 ${
                  isClicked ? 'fade-out' : null
                }`}
              >
                The inhabitants of Hong Kong usually reserve their deepest
                passions for business, not politics. But last week, in the
                largest and most emotional outburst ever seen in the British
                colony, more than 500,000 demonstrators marched through Hong
                Kong&apos;s narrow streets, waving pro-democracy banners and
                singing anthems like We Shall Overcome. Including the spectators
                who cheered and applauded, an estimated 1 million people,
                one-sixth of Hong Kong&apos;s populace, turned out to proclaim
                their support for the embattled students in China.
                <br />
                <br />
              </p>
            </Col>
            <Col lg={3} />
            <Col lg={7} md={12}>
              <p
                className={`medium-body text-gray-40 ${
                  isClicked ? 'fade-out' : null
                }`}
              >
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

        <Footer
          pushTo="/event"
          upNext="Event"
          scene="II"
          setClicked={setClicked}
          isClicked={isClicked}
          theme={{ background: 'black', text: 'gray-40' }}
        />
      </div>
    </>
  );
};

export default Reflection;
