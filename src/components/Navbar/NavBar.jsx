import React from "react";
import { Container, Nav, Navbar, Button } from "react-bootstrap";

const NavBar = () => {
  return (
    <Navbar expand="sm" className="bg-white shadow-lg">
      <Container>
        <Navbar.Brand href="#">
          <img
            src="./src/assets/Logo.svg"
            alt="logo"
            width="80"
            height="100"
            className="d-inline-block align-top"
          />{" "}
          <strong></strong>
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />

        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mx-auto gap-4">
            <Nav.Link href="#">About us</Nav.Link>
            <Nav.Link href="#">Services</Nav.Link>
            <Nav.Link href="#">Use Cases</Nav.Link>
            <Nav.Link href="#">Pricing</Nav.Link>
            <Nav.Link href="#">Blog</Nav.Link>
          </Nav>
          <Button variant="outline-dark" className="rounded-pill px-4">
            Request a quote
          </Button>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
