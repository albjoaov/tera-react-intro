import { Container, Nav, Navbar as NavBarBS } from "react-bootstrap";
import { NavLink as Navigator } from "react-router-dom";

const NavBar = () => {
  return (
    <NavBarBS className="bg-white shadow-sm mb-3">
      <Container>
        <Nav>
          <Nav.Link to="/agua" as={Navigator}>
            Agua
          </Nav.Link>

          <Nav.Link to="/contador" as={Navigator}>
            Contador
          </Nav.Link>

          <Nav.Link to="/todo" as={Navigator}>
            Todo
          </Nav.Link>

          <Nav.Link to="/troca-tema" as={Navigator}>
            Troca-tema
          </Nav.Link>
        </Nav>
      </Container>
    </NavBarBS>
  );
};

export default NavBar;
