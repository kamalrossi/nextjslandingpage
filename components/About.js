import React from 'react';
import { Container, Row, Col } from "reactstrap";


const About = () => {

  return (
    <section className="section bg-light" id="about">
      <Container>
        <Row className="justify-content-center">
          <Col lg={6} md={8}>
            <div className="title text-center mb-5">
              <h3 className="font-weight-normal text-dark">Story of <span className="text-warning">ElegantWallet</span></h3>
              <p className="text-muted">
                ElegantWallet starts it journey with conventional app development in payment sectors. Now it has expanded into banking, utility and
                marketplace software usecases
                
                </p>
            </div>
          </Col>
        </Row>
        <Row>
          <Col md={4}>
            <h2 className="font-weight-light line-height-1_6 text-dark mb-4">No Hidden Charge, Enjoy pay on the go</h2>
          </Col>
          <Col md={{ size:7, offset :1 }}>
            <Row>
              <Col md={6}>
                <h6 className="text-dark font-weight-light f-20 mb-3">Services</h6>
                <p className="text-muted font-weight-light">Banking, utilities and ecommerce are our service areas.</p>
              </Col>
              <Col md={6}>
                <h6 className="text-dark font-weight-light f-20 mb-3"> Business goal</h6>
                <p className="text-muted font-weight-light">We care to save money of consumers</p>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default About;
