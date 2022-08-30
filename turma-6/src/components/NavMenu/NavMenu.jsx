import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { NavLink } from "react-router-dom";

export default function NavMenu() {
  return (
    <Navbar className="bg-white shadow-sm mb-3">
      <Container>
        <Nav>
          <Nav.Link to="/agua" as={NavLink}>
            Agua
          </Nav.Link>
          <Nav.Link to="/todo" as={NavLink}>
            Todo
          </Nav.Link>
          <Nav.Link to="/counter" as={NavLink}>
            Counter
          </Nav.Link>
          <Nav.Link to="/troca-tema" as={NavLink}>
            TrocaTema
          </Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
}
