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
    <div className="Home h-auto bg-gray-10">
      {/* Header */}
      <Container
        className="grid__container sticky top-0"
        style={{ borderLeft: '1px solid #8D8D8D' }}
      >
        <Row className="grid__row pt-5">
          <Col lg={3} md={4} sm={4} xs={4} className="medium-caption">
            <Link to="/">On Borrowed Time</Link>
          </Col>
          <Col lg={8} md={3} sm={4} xs={4} className="medium-caption">
            <Link>Theme</Link>
          </Col>
          <Col lg={1} md={5} sm={4} xs={4} className="medium-caption">
            <Link to="/index">Index</Link>
          </Col>
        </Row>
      </Container>

      {/* Event */}
      <Container
        className="grid__container"
        style={{ borderLeft: '1px solid #8D8D8D' }}
      >
        <Row className="grid__row pt-64 pb-24">
          <Col lg={1} md={2} />
          <Col
            lg={11}
            md={10}
            sm={12}
            xs={12}
            className="large-headline"
            style={{
              textIndent: ['lg', 'xl', 'xxl'].includes(screenClass)
                ? `calc(200%/11)` // indent 2/11 columns for large
                : ['md'].includes(screenClass)
                ? `calc(200%/10)` // indent 2/10 columns for medium
                : '0' // indent 0 for small, x-small
            }}
          >
            Praesent eget magna purus. Aliquam imperdiet tincidunt enim, ac
            molestie dolor elementum ac. Duis eget velit quis magna suscipit
            commodo id vel odio. Sed placerat feugiat est et mattis.
            <br />
            <br />
          </Col>
          <Col lg={1} md={2} />
          <Col
            lg={11}
            md={10}
            sm={12}
            xs={12}
            className="large-headline"
            style={{
              textIndent: ['lg', 'xl', 'xxl'].includes(screenClass)
                ? `calc(200%/11)` // indent 2/11 columns for large
                : ['md'].includes(screenClass)
                ? `calc(200%/10)` // indent 2/10 columns for medium
                : '0' // indent 0 for small, x-small
            }}
          >
            Pellentesque vel sollicitudin nunc, sit amet porta turpis. In eget
            fringilla nunc. Nullam vel mauris at nibh interdum fringilla. Sed
            convallis, ipsum non semper interdum, lacus dui gravida tellus, sed
            aliquam tellus ipsum ac est..
            <br />
            <br />
          </Col>
        </Row>
        <ResourceTable />
      </Container>

      {/* Reflection */}
      <Container
        className="grid__container"
        style={{ borderLeft: '1px solid #8D8D8D' }}
      >
        <Row className="grid__row pt-64 pb-20">
          <Col lg={1} />
          <Col lg={11} md={12}>
            <img src={crowd} alt="" />
          </Col>
          <Col lg={3} />
          <Col lg={4} md={4} className="regular-caption mt-8">
            Pellentesque vel sollicitudin nunc, sit amet porta turpis. In eget
            fringilla nunc. Nullam vel mauris at nibh interdum fringilla. Sed
            convallis, ipsum non semper interdum, lacus dui gravida tellus, sed
            aliquam tellus ipsum ac est.
          </Col>
        </Row>
        <Row className="grid__row pt-20 pb-24">
          <Col lg={3} />
          <Col lg={7} md={12}>
            <img src={car} alt="" />
          </Col>
          <Col lg={3} />
          <Col lg={4} md={4} className="regular-caption mt-5">
            Pellentesque vel sollicitudin nunc, sit amet porta turpis. In eget
            fringilla nunc.
          </Col>
        </Row>
      </Container>

      {/* Final Reflection */}
      <Container
        className="grid__container"
        style={{ borderLeft: '1px solid #8D8D8D' }}
      >
        <Row className="grid__row pt-64 pb-24">
          <Col lg={1} />
          <Col
            lg={11}
            md={12}
            className="medium-headline"
            style={{ textIndent: '0' }}
          >
            Praesent eget magna purus. Aliquam imperdiet tincidunt enim, ac
            molestie dolor elementum ac. Duis eget velit quis magna suscipit
            commodo id vel odio. Sed placerat feugiat est et mattis.
            <br />
            <br />
          </Col>
          <Col lg={3} />
          <Col
            lg={7}
            md={12}
            className="medium-body"
            style={{ textIndent: '0' }}
          >
            Pellentesque vel sollicitudin nunc, sit amet porta turpis. In eget
            fringilla nunc. Nullam vel mauris at nibh interdum fringilla. Sed
            convallis, ipsum non semper interdum, lacus dui gravida tellus, sed
            aliquam tellus ipsum ac est.
            <br />
            <br />
          </Col>
          <Col lg={3} />
          <Col
            lg={7}
            md={12}
            className="medium-body"
            style={{ textIndent: '0' }}
          >
            Pellentesque vel sollicitudin nunc, sit amet porta turpis. In eget
            fringilla nunc. Nullam vel mauris at nibh interdum fringilla. Sed
            convallis, ipsum non semper interdum, lacus dui gravida tellus, sed
            aliquam tellus ipsum ac est.
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Home;
