import { Navbar, Nav, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import { FaCoffee } from "react-icons/fa";

export default function Navigation() {
  return (
    <Navbar expand="lg" className="custom-navbar" variant="dark" sticky="top">
      <Container>

        <Navbar.Brand as={Link} to="/" className="logo">
          <FaCoffee className="coffee-icon" />
          CoffeeHub
        </Navbar.Brand>

        <Navbar.Toggle
          aria-controls="basic-navbar-nav"
          className="custom-toggler"
        />

        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">

            <Nav.Link as={Link} to="/">
              Home
            </Nav.Link>

            <Nav.Link as={Link} to="/menu">
              Menu
            </Nav.Link>

            <Nav.Link as={Link} to="/contact">
              Contact
            </Nav.Link>

          </Nav>
        </Navbar.Collapse>

      </Container>
    </Navbar>
  );
}