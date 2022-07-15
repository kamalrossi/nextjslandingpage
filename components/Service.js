import React from 'react';
import { Container, Row, Col } from "reactstrap";

const Service = () => {
  const services = [

    { title : "Pro", desc : "Enjoy customer care with services" },
    { title : "Advanced", desc : "Enjoy 5% discount on all service" },
    { title : "Premius", desc : "Enjoy 10% discount on all service" },
    
  ]
  
  return (
    <section className="section" id="service">
      <Container>
        <Row className="justify-content-center">
          <Col lg={6} md={8}>
            <div className="title text-center mb-5">
              <h3 className="font-weight-normal text-dark"><span className="text-warning">Pricing</span></h3>
              <p className="text-muted">From  Pro to Advanced, Premium options, we provide different packages based on your usages and needs</p>
            </div>
          </Col>
        </Row>
        <Row>
          {
            services.map((service, key) =>
              <Col key={key} lg={4} md={6}>
                <div>
                  <div className="mb-5">
                      <i className={service.icon}></i>
                  </div>
                  <h5 className="text-dark font-weight-normal pt-1 mb-4">{service.title}</h5>
                  <p className="text-muted mb-4">{service.desc}</p>
                </div>
              </Col>
            )
          }
        </Row>
      </Container>
    </section>
  );
}

export default Service;
