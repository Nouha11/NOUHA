import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import {Container, Nav, Navbar} from 'react-bootstrap';

const NavBar = () => {
    return(
<Navbar bg="dark" variant="dark">
    <Container>
    <Navbar.Brand href="#home">Hello!</Navbar.Brand>
    <Nav className="me-auto">
      <Nav.Link href="#home">Home</Nav.Link>
    </Nav>
    </Container>
  </Navbar>
  )
}

export default NavBar;