import React from 'react';
import { Container, Row, Col } from 'reactstrap';

const Hero = () => {
  return (
    <section className="section position-relative">
      <Container>
        <Row className="align-items-center">
          <Col lg={6}>
            <div className="pr-lg-5">
              <p className="text-uppercase text-primary font-weight-medium f-14 mb-4">Elegant Wallet</p>
              <h1 className="mb-4 font-weight-normal line-height-1_4">Pay on the go<span className="text-primary font-weight-medium">!</span></h1>
              <p className="text-muted mb-4 pb-2">Enjoy banking, pay utilities and buy products online with ElegantWallet with discounts</p>
              <a href="#" className="btn btn-warning">
                Try now <span className="ml-2 right-icon">&#8594;</span>
              </a>
            </div>
          </Col>
          <Col lg={6}>
            <div className="mt-5 mt-lg-0">
              <img src="/images/ezwallet.png" alt="" className="img-fluid mx-auto d-block"/>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Hero;
