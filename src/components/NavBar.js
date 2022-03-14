import React from "react";
import { Navbar } from "react-bootstrap";
import { Container } from "react-bootstrap";
import { Nav } from "react-bootstrap";
import { NavDropdown } from "react-bootstrap";
import carrito from "./img/carrito.png";
import "./NavBar.css"


function NavBar(){
    return(
      <div navBox>
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
          <div className="carritoBox">
          <img className="carrito" src={carrito} alt="Carrito"/>
          <p id="compras" className="numero">0</p>
          </div>
          
        </Container>

      </Navbar>
     </div>
    )
}

export function ItemListContainer(){
  return(

  <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odio odit, veniam ipsa vitae tempore earum sit molestiae. Est explicabo veritatis porro corrupti eos aliquam deleniti perferendis sequi ratione veniam. Possimus.</p>

  )
}



export default NavBar ; 



