import React from "react";
import { Container, Row, Col, Carousel } from "react-bootstrap";
import './Testimonials.css'

const testimonials = [
  {
    quote:
      "We have been working with Positivus for the past year and have seen a significant increase in website traffic and leads as a result of their efforts. The team is professional, responsive, and truly cares about the success of our business. We highly recommend Positivus to any company looking to grow their online presence.",
    name: "John Smith",
    title: "Marketing Director at XYZ Corp",
  },
  {
    quote:
      "Positivus exceeded our expectations. Their strategies are top-notch, and we saw instant growth in user engagement and sales.",
    name: "Jane Doe",
    title: "Founder at ABC Startup",
  },
  {
    quote:
      "The team at Positivus is simply amazing. Their support and dedication made a big difference in our digital marketing journey.",
    name: "Alex Johnson",
    title: "CEO at Example Inc.",
  },
];

const Testimonials = () => {
  return (
    <Container className="my-5">
      {/* Section Heading */}
      <Row className="mb-4">
        <Col md={4}>
          <h4 className="fw-bold text-black testimonial px-3 py-1 d-inline-block rounded">
            Testimonials
          </h4>
        </Col>
        <Col md={7}>
          <p className="text-muted small">
            Hear from Our Satisfied Clients: Read Our Testimonials to Learn More
            about Our Digital Marketing Services
          </p>
        </Col>
      </Row>

      {/* Carousel */}
      <Carousel
        indicators={true}
        controls={true}
        interval={null}
        className="testimonial-carousel p-4 rounded-4 bg-dark text-light"
      >
        {testimonials.map((item, idx) => (
          <Carousel.Item key={idx}>
            <Row className="justify-content-center">
              <Col md={8} lg={6}>
                <div className="border border-success p-4 rounded speech-bubble text-center">
                  <p className="fst-italic">"{item.quote}"</p>
                  <p className="mt-4 mb-0 fw-bold text-success">{item.name}</p>
                  <small className="text-light">{item.title}</small>
                </div>
              </Col>
            </Row>
          </Carousel.Item>
        ))}
      </Carousel>
    </Container>
  );
};

export default Testimonials;
