import React from 'react';
import { Container, Row, Col } from "reactstrap";

const Footer = () => {
  const links = [
    { id : 1, title : "Wallet Benefits",
      child : [
          { title : "Mobile Banking", link : "/" },
          { title : "Utility", link : "/" },
          { title : "Air-ticket", link : "/" },
          { title : "E-commerce", link : "/" }
      ]
    },
    { id : 2, title : "About Us",
      child : [
          { title : "Company history", link : "/" },
          { title : "Contact us", link : "/" },
          
      ]
    },
  ];
  
  return (
    <section className="footer section">
      <Container>
        <Row>
          <Col lg={4}>
              <div className="mb-4">
                <p className="text-muted mt-4 mb-2">info@eleganwallet.xyz</p>
                <h6 className="text-muted font-weight-normal">+42 1234-5678-9</h6>
              </div>
          </Col>
          <Col lg={8}>
            <Row>
              {
                links.map((link, key) =>
                  <Col key={key} md={4}>
                    <h6 className="text-dark mb-3">{link.title}</h6>
                    <ul className="list-unstyled company-sub-menu">
                      {
                        link.child.map((fLink, key) =>
                          <li key={key}><a href={fLink.link}>{fLink.title}</a></li>
                        )
                      }
                    </ul>
                  </Col>
                )
              }
              
              <Col md={4}>
                <h6 className="text-dark mb-3">Headquarter</h6>
                <p className="text-muted f-14">67-Free School Street, Prague, Czech Republic</p>
                <h6 className="text-muted pb-2">Email: info@elegantwallet.xyz</h6>
                <ul className="list-unstyled footer-social-list mt-4">
                  <li className="list-inline-item"><a href="#"><i className="mdi mdi-github"></i></a></li>
                 
                </ul>
              </Col>
            </Row>
          </Col>
        </Row>

        <Row className="mt-5">
          <Col md={12}>
            <div className="text-center text-muted">
              <p className="mb-0 f-15">ElegantWallet 2022</p>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Footer;