import React from "react";
import { Navbar } from "react-bootstrap";
import { Container } from "react-bootstrap";
import { Nav } from "react-bootstrap";
import { NavDropdown } from "react-bootstrap";
import "./NavBar.css"


function NavBar(){
    return(
        <Navbar bg="white" expand="md">
        <Container>
          <Navbar.Brand className="titulo" href="#">Outfit Reaction</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto opciones">
              <Nav.Link href="#">Home</Nav.Link>
              <Nav.Link href="#">Contacto</Nav.Link>
              <NavDropdown title="Prendas" id="basic-nav-dropdown">
                <NavDropdown.Item href="#">Camisetas</NavDropdown.Item>
                <NavDropdown.Item href="#">Buzos</NavDropdown.Item>
                <NavDropdown.Item href="#">Camperas</NavDropdown.Item>
                <NavDropdown.Item href="#">Pantalones</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#">Accesorios</NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    )
}

export default NavBar;