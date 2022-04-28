import ReactFullpage from '@fullpage/react-fullpage';
import React from 'react';
import { Col, Container, Row } from 'react-grid-system';
import { Helmet } from 'react-helmet';

import ResourceTable from '../components/ResourceTable';

const resources = [
  {
    type: 'Journal Excerpt',
    publication: 'United Nations Treaty',
    shortTitle: 'The Sino-British Joint Declaration',
    bookTitle: 'The Sino-British Joint Declaration',
    year: '1985',
    author: 'United Nations Treaty Series',
    content: [
      'Following are excerpts from the agreement on Hong&nbsp;Kong that was initialed today by Britain and China, as made public by the British Foreign Office: The Government of the United Kingdom of Great Britain and Northern Ireland and the Government of the People&rsquo;s Republic of China have reviewed with satisfaction the friendly relations existing between the two Governments and peoples in recent years and agreed that a proper negotiated settlement of the question of Hong&nbsp;Kong, which is left over from the past, is conducive to the maintenance of the prosperity and stability of Hong&nbsp;Kong and to the further strengthening and development of the relations between the two countries on a new basis.<br>',
      '<br/>(1) Upholding national unity and territorial integrity and taking account of the history of Hong&nbsp;Kong and its realities, the People&rsquo;s Republic of China has decided to establish, in accordance with the provisions of Article 31 of the Constitution of the People&rsquo;s Republic of China, a Hong&nbsp;Kong Special Administrative Region upon resuming the exercise of sovereignty over Hong&nbsp;Kong.<br>',
      '<br/>[...]<br>',
      '<br/>(5) The current social and economic systems in Hong&nbsp;Kong will remain unchanged, and so will the life style. Rights and freedoms, including those of the person, of speech, of the press, of assembly, of association, of travel, of movement, of correspondence, of strike, of choice of occupation, of academic research and of religious belief will be insured by law in the Hong&nbsp;Kong Special Administrative Region. Private property, ownership of enterprises, legitimate right of inheritance and foreign investment will be protected by law.<br>',
      '<br/>[...]<br>',
      '(12) The above-stated basic policies of the People&rsquo;s Republic of China regarding Hong&nbsp;Kong and the elaboration of them in Annex I to this joint declaration will be stipulated, in a Basic Law of the Hong&nbsp;Kong Special Administrative Region of the People&rsquo;s Republic of China, by the National People&rsquo;s Congress of the People&rsquo;s Republic of China, and they will remain unchanged for 50 years.'
    ],
    citation:
      '&ldquo;Treaties and International Agreements Registered or Filed and Recorded with the Secretarial of the United Nations.&rdquo; New York, 1985, United Nations Treaty Series, vol. 1399, No. 23391, p. 39-94.',
    linkTo:
      'https://treaties.un.org/doc/Publication/UNTS/Volume%201399/v1399.pdf'
  },
  {
    type: 'Journal Excerpt',
    publication: 'Modern Asian Studies',
    shortTitle: 'Basic Law',
    bookTitle:
      'The Basic Law of the Hong Kong Special Adminstration Region of the People&rsquo;s Republic of China',
    year: '2021',
    author: 'Government of Hong Kong',
    content: [
      'Hong&nbsp;Kong has been part of the territory of China since ancient times; it was occupied by Britain after the Opium War in 1840. On 19 December 1984, the Chinese and British Governments signed the Joint Declaration on the Question of Hong&nbsp;Kong, affirming that the Government of the People’s Republic of China will resume the exercise of sovereignty over Hong&nbsp;Kong with effect from 1 July 1997, thus fulfilling the long-cherished common aspiration of the Chinese people for the recovery of Hong&nbsp;Kong.<br>',
      '<br/>Upholding national unity and territorial integrity, maintaining the prosperity and stability of Hong&nbsp;Kong, and taking account of its history and realities, the People’s Republic of China has decided that upon China’s resumption of the exercise of sovereignty over Hong&nbsp;Kong, a Hong&nbsp;Kong Special Administrative Region will be established in accordance with the provisions of Article 31 of the Constitution of the People’s Republic of China, and that under the principle of “one country, two systems”, the socialist system and policies will not be practised in Hong&nbsp;Kong. The basic policies of the People’s Republic of China regarding Hong&nbsp;Kong have been elaborated by the Chinese Government in the Sino-British Joint Declaration.<br>',
      '<br/>In accordance with the Constitution of the People’s Republic of China, the National People’s Congress hereby enacts the Basic Law of the Hong&nbsp;Kong Special Administrative Region of the People’s Republic of China, prescribing the systems to be practised in the Hong&nbsp;Kong Special Administrative Region, in order to ensure the implementation of the basic policies of the People’s Republic of China regarding Hong&nbsp;Kong.'
    ],
    citation:
      'Chin, Angelina Y. “Diasporic Memories and Conceptual Geography in Post-Colonial Hong&nbsp;Kong.” <em>Modern Asian Studies</em> 48, no. 6 (November 2014): 1566–67. ',
    linkTo: 'https://www.jstor.org/stable/24494641?seq=1'
  },
  {
    type: 'Journal Excerpt',
    publication: 'An American Review',
    shortTitle: 'Characteristics of One Country, Two Systems',
    bookTitle: 'One Country, Two Systems: A Theoretical Analysis',
    year: '1987',
    author: 'Chien-Min Chao',
    content: [
      'In order to justify &ldquo;one country, two systems,&rdquo; Communist China cannot avoid taking a step backward and announcing publicly that socialism has not yet been achieved in mainland China. Under these circumstances, a careful examination of &ldquo;one country, two systems&rdquo; will reveal the following characteristic:',
      '<br/><em>Unevenness</em>—In order to account for the discrepancies and discord that might exist in a society operating under two conflicting systems, Peking has stated that the dialectical principle of the &ldquo;unity of contradictions is the basic and most important objective theoretical source of &rsquo;one country, two systems,&rdquo; thus arguing that there is unevenness in the existence and development of things. On the one hand, this interpretation conforms with Mao Tse-tung&rsquo;s belief that &ldquo;contradictions still prevail in a socialist society&rdquo;; on the other hand, it rejects Mao&rsquo;s &ldquo;theory of continued revolution under the dictatorship of the proletariat,&rdquo; proclaiming that two different systems can coexist and that obstacles to socialism do not have to be removed immediately.',
      '<br/><em>Historicity</em>—Although in 1895 Taiwan was ceded to Japan as a result of its military defeat of the Ch&rsquo;ing government, and in 1842 Hong&nbsp;Kong passed into British hands, both Taiwan and Hong&nbsp;Kong are integral parts of Chinese territory. Peking has linked &ldquo;one country, two systems&rdquo; with Chinese history, saying that it is designed to end the national division and separation caused by the confrontation between the two parties (Nationalist and Communist). &ldquo;One country, two systems&rdquo; has been used by Peking to arouse nationalistic and patriotic sentiment among Chinese, as part of the united &ldquo;frontline&rdquo; for patriotism, for the purpose of achieving the four modernizations and ultimately the reunification of China.<br>',
      '<br/><em>Realism</em>—The single most important reason for &ldquo;one country and two systems&rdquo; is that socialism is not attractive to and Hong&nbsp;Kong. In exchange for sovereignty, Peking is willing to guarantee their present lifestyles and economic prosperity. For Hong&nbsp;Kong to maintain its status as an international financial centre the capitalist system should be retained. If the current system is changed artificially, its superiority and prosperity will be lost...<br>',
      '<br/><em>Transition</em>—According to communist theory, human society evolves through stages from primitive communism, slave society, capitalism, socialism, and ultimately to communism. A process of development takes place within each stage. Marx said that socialist society, having been born out of capitalism, still carries tinges of the old capitalist society. Mao elaborated this further by distinguishing between minimum and maximum programs for socialism. Thus, in line with Marxist theory, the current Chinese Communist leadership claims that &ldquo;one country, two systems&rdquo; acts as a &ldquo;historical transition before this country can thoroughly replace the capitalist system with a socialist system.&rdquo; In other words, the two systems will be merged into one after the transitional period.<br>',
      '<br/><em>Subordination</em>—The scope and definition of the autonomy of Taiwan and Hong&nbsp;Kong will, of course, be decided by the central government in Peking. Governments in Taiwan and Hong&nbsp;Kong will be subordinate governments powerless to declare war, conduct their own defense, foreign affairs, or peace negotiations. Socialism will be the main political system, because the 1 billion people on the mainland will continue to practice socialism. Capitalism will be allowed to exist as a &ldquo;supplement to the development of socialism.&rdquo;<br>'
    ],
    citation:
      'Chao, Chien-Min. “One Country, Two Systems.” Asian Affairs: An American Review 14, no. 2 (1987): 109-113.',
    linkTo: 'https://www.jstor.org/stable/24494641?seq=1'
  },
  {
    type: 'Journal Excerpt',
    publication: 'Hong Kong Law Journal',
    shortTitle: 'Uncharted Sea',
    bookTitle: 'Basic Law and Constitutional Review: The First Decade',
    year: '2007',
    author: 'Johannes SC. Chan',
    content: [
      '<br>The model of &ldquo;one country, two systems&rdquo; envisages the co-existence of two distinct legal systems alongside one another. On one side of the border, there is a well established common law system that is based on Western liberalism and the doctrine of separation of powers. The judiciary is the guard-ian of human rights and the rule of law, and enjoys an exclusive power to interpret legislation and declare the common law. On the other side of the border, legal order has been re-established only since 1978. The country is still in the process of seeking a proper model of legal system that befits the characteristics of a developing economic power under a constitution that is shaped by Socialism/Maoism and Chinese history and culture. The Chinese legal system is based on both the socialist system and the civil law system, but it is subject to increasing influence from the common law system in recent years. A major characteristic of the Chinese legal system, as inherited from the socialist tradition, is its rejection of the doctrine of separation of powers. All powers are vested in the supreme soviet, namely the National People&rsquo;s Congress (NPC). As an elected body representing the people, the NPC exercises legislative, executive and judicial powers. The power of final interpretation of law is vested in the legislative rather than the judicial organ. While there is gradual acceptance of the desirability of having a judiciary exercising independent adjudicatory power (as opposed to having an independent judiciary), the judiciary on the Mainland remains a relatively weak institution and the PRC Constitution is by and large not justiciable in courts. Thus, there is a huge ideological gap between the two systems. This gap manifests itself and results in conflicts when the two systems interact with one another. The Basic Law itself provides the best example of the interface of the two systems. In Ma Wai Kwan Davidv HKSAR, Chief Judge Chan described perceptively the nature of the Basic Law as follows:<br>',
      '<br/>&ldquo;The Basic Law is a unique document. It reflects a treaty made between two nations. It deals with the relationship between the sovereign and an autonomous region which practises a different system. It stipulates the organisations and functions of the different branches of government. It sets out the rights and obligations of the citizens. Hence, it has at least three dimensions: international, domestic and constitutional. It must also be borne in mind that it was not drafted by common law lawyers. It was drafted in the Chinese language with an official English version but the Chinese version takes precedence in case of discrepancies. That being the background and features of the Basic Law, it is obvious that there will be difficulties in the interpretation of its various provisions.&rdquo;<br>',
      '<br/>&ldquo;Alongside the huge ideological gap and the vastly different stages of development between the HKSAR and the Mainland legal systems lies the great imbalance of political powers between the Special Administrative Region and its sovereign. When there is no clear demarcation of when two systems end and one country begins, and when mutual trust has not been fully established, it is not surprising that attempts were made by both sides to explore and perhaps also to exploit the boundary separating the two systems. This inevitably leads to controversies and conflicts, and is best exemplified by the conflicts arising from the dual nature of the Basic Law as a piece of national legislation of the PRC and as a constitution of the HKSAR. In a way, the first decade of constitutional experience in Hong&nbsp;Kong can be said to be a story of a delicate exploration in an uncharted sea.&rdquo;<br>'
    ],
    citation:
      'Chan, Johannes SC. “Basic Law and Constitutional Review: The First Decade.” <em>Hong&nbsp;Kong Law Journal</em> 37, no. 2 (2007): 407–9.',
    linkTo: 'https://hub.hku.hk/bitstream/10722/87975/3/content.pdf?accept=1'
  }
];

const Index = () => {
  return (
    <>
      <Helmet>
        <title>Index | On Borrowed Time</title>
      </Helmet>
      <ReactFullpage
        licenseKey={'518F7C98-E6514A4C-AF78105C-8D322AE9'}
        scrollingSpeed={1000}
        scrollOverflow={true}
        scrollOverflowOptions={{
          preventDefault: false
        }}
        paddingTop="78px"
        render={() => {
          return (
            <>
              <div className="Index section bg-white">
                <Container className="grid__container">
                  <Row className="grid__row">
                    <Col md={3} />
                    <Col md={6}>
                      <div className="small-headline">
                        A curated collection of articles, papers, and stories
                        that contribute to shaping Hong Kong’s collective
                        memory.
                      </div>
                    </Col>
                  </Row>
                </Container>
                <Container className="grid__container resource-table-container transition-all">
                  <ResourceTable
                    theme="black"
                    data={resources}
                    matches={[]}
                    setOnClicks={() => {}}
                    openModal={() => {}}
                    textColourClass="text-black"
                    borderColourClass="border-black"
                    fullWidth={true}
                  />
                </Container>
              </div>
            </>
          );
        }}
      />
    </>
  );
};

export default Index;
