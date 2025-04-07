import React from "react";
import { Container, Accordion, Card, Row, Col } from "react-bootstrap";
import { useState } from "react";
import './WorkProcess.css'

const WorkProcess = () => {
  const [activeKey, setActiveKey] = useState("0");

  const handleToggle = (key) => {
    setActiveKey(activeKey === key ? null : key);
  };

  const processSteps = [
    {
      number: "01",
      title: "Consultation",
      content:
        "During the initial consultation, we will discuss your business goals and objectives, target audience, and current marketing efforts. This will allow us to understand your needs and tailor our services to best fit your requirements.",
    },
    {
      number: "02",
      title: "Research and Strategy Development",
      content:
        "We dive deep into market research and develop a tailored strategy to achieve your business goals effectively.",
    },
    // Add more steps here if needed
  ];

  return (
    <Container className="my-5">
      {/* Heading */}
      <Row className="mb-4">
        <Col md={4}>
          <h4 className="fw-bold accordion-default px-3 py-1 d-inline-block rounded">
            Our Working Process
          </h4>
        </Col>
        <Col md={8}>
          <p className="text-muted small">
            Step-by-Step Guide to Achieving Your Business Goals
          </p>
        </Col>
      </Row>

      {/* Accordion */}
      <Accordion activeKey={activeKey}>
        {processSteps.map((step, index) => (
          <Accordion.Item
            eventKey={index.toString()}
            key={index}
            className={`mb-3 border-0 rounded-4 ${
              activeKey === index.toString()
                ? "accordion-default bg-opacity-75 text-dark"
                : "bg-white"
            } shadow-sm`}
          >
            <Accordion.Header onClick={() => handleToggle(index.toString())}>
              <div className="d-flex align-items-center w-100">
                <div className="me-3 fs-4 fw-bold">{step.number}</div>
                <div className="fw-semibold">{step.title}</div>
              </div>
            </Accordion.Header>
            <Accordion.Body className="pt-0">
              <hr />
              <p>{step.content}</p>
            </Accordion.Body>
          </Accordion.Item>
        ))}
      </Accordion>
    </Container>
  );
};

export default WorkProcess;
