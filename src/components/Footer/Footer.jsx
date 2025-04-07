import React from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { FaLinkedinIn, FaFacebookF, FaTwitter } from "react-icons/fa";
import "./Footer.css"

const Footer = () => {
  return (
    <footer className="bg-dark text-light pt-4 pb-3 rounded-top-4">
      <Container>

        {/* Top Section: Logo + Nav Links + Social Icons in One Row */}
        <Row className="align-items-center mb-4">
          <Col md={4} className="mb-3 mb-md-0">
            <img src="./src/assets/Logo.svg" alt="Positivus Logo" height="120"  width='180'/>
          </Col>

          <Col md={5}>
            <ul className="list-unstyled d-flex flex-wrap gap-3 justify-content-md-start justify-content-center m-0">
              <li><a href="#" className="text-light text-decoration-none">About us</a></li>
              <li><a href="#" className="text-light text-decoration-none">Services</a></li>
              <li><a href="#" className="text-light text-decoration-none">Use Cases</a></li>
              <li><a href="#" className="text-light text-decoration-none">Pricing</a></li>
              <li><a href="#" className="text-light text-decoration-none">Blog</a></li>
            </ul>
          </Col>

          <Col md={3} className="d-flex justify-content-md-end justify-content-center gap-3">
            <a href="#" className="text-light fs-5"><FaLinkedinIn /></a>
            <a href="#" className="text-light fs-5"><FaFacebookF /></a>
            <a href="#" className="text-light fs-5"><FaTwitter /></a>
          </Col>
        </Row>

        {/* Contact + Subscribe */}
        <Row className="mb-4">
          {/* Contact */}
          <Col md={6}>
            <div className="contactus text-dark fw-semibold px-2 py-1 d-inline-block rounded mb-2">
              Contact us:
            </div>
            <p className="mb-1">Email: info@positivus.com</p>
            <p className="mb-1">Phone: 555-567-8901</p>
            <p className="mb-0">
              Address: 1234 Main St<br />
              Moonstone City, Stardust State 12345
            </p>
          </Col>

          {/* Subscribe */}
          <Col md={6} className="mt-4 mt-md-0">
            <div className="bg-secondary bg-opacity-25 p-3 rounded">
              <Form className="d-flex">
                <Form.Control
                  type="email"
                  placeholder="Email"
                  className="me-2 bg-dark text-light border-light"
                />
                <Button variant="success" className=" subscribe text-dark">
                  Subscribe to news
                </Button>
              </Form>
            </div>
          </Col>
        </Row>

        <hr className="border-secondary" />

        {/* Footer Bottom */}
        <Row className="justify-content-between align-items-center">
          <Col md={6} className="small text-muted">
            © 2023 Positivus. All Rights Reserved.
          </Col>
          <Col md={6} className="text-md-end text-center small">
            <a href="#" className="text-light text-decoration-none">Privacy Policy</a>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
