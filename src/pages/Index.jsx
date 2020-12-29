import './Index.css';

import { Col, Container, Row } from 'react-grid-system';

const Index = () => {
  return (
    <Container debug className="container-1">
        <Row debug className="col">
            <Col offset={{ md: 4 }} debug md={8} className="col">All<br />Language<br />Censorship<br />Collective Memory<br />Diaspora<br />In-Betweeness<br />National Identity</Col>
        </Row>
    </Container>
  );
}

export default Index;