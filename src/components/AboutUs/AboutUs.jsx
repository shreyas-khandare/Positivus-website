import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import "./AboutUs.css";

const AboutUs = () => {
  return (
    <section className=" bg-white">
      <Container>
        <Row className=" mt-0 align-items-center">
          {/* LEFT COLUMN */}
          <Col md={6}>
            <h1 className="display-5 fw-bold mb-4">
              Navigating the <br />
              digital landscape <br />
              for success
            </h1>
            <p className="text-muted mb-4">
              Our digital marketing agency helps businesses grow and succeed
              online through a range of services including SEO, PPC, social
              media marketing, and content creation.
            </p>
            <Button variant="dark" size="sm" className="round">
              Book a consultation
            </Button>
            {/* Logos */}
           
          </Col>

          {/* RIGHT COLUMN */}
          <Col md={6} className="text-center">
            <img
              src="./src/assets/hero-img.svg"
              alt="Hero-img"
              className="img-fluid"
              style={{ 
                maxWidth:'800px'
               }}
            />
          </Col>
        </Row>
        <div className="d-flex flex-wrap align-items-center mt-5 justify-content-between">
              <img src="./src/assets/amazon-logo.jpg" className="mx-3" alt="Amazon" height="30" />
              <img src="./src/assets/dribbble-logo.png" className="mx-3" alt="Dribbble" height="30" />
              <img src="./src/assets/hubspot-logo.png" className="mx-3" alt="HubSpot" height="30" />
              <img src="./src/assets/notion-logo.png" className="mx-3" alt="Notion" height="30" />
              <img src="./src/assets/netflix-logo.png" className="mx-3" alt="Netflix" height="30" />
              <img src="./src/assets/zoom-logo.png" className="mx-3" alt="Zoom" height="30" />
            </div>
      </Container>
    </section>
  );
};

export default AboutUs;
