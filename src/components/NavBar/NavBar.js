import React from "react";
import {Link} from 'react-router-dom'
import { Navbar } from "react-bootstrap";
import { Container } from "react-bootstrap";
import { Nav } from "react-bootstrap";
import { NavDropdown } from "react-bootstrap";
import carrito from "../img/carrito.png";
import "./NavBar.css"






function NavBar(){
    return(
      <div navBox>
        <Navbar bg="white" expand="md">
        <Container>
          <Link className="titulo" to="/">Outfit Reaction</Link>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto opciones">
              <Link className="navegable" to="/">Home</Link>
              <NavDropdown title="Prendas" id="basic-nav-dropdown">
                <Link className="ropa" to="/categoria/remeras">Remeras</Link>
                <Link className="ropa" to="/categoria/buzos">Buzos</Link>
                <Link className="ropa" to="/categoria/camperas">Camperas</Link>
                <Link className="ropa" to="/categoria/pantalones">Pantalones</Link>
                <NavDropdown.Divider />
                <Link className="ropa" to="/categoria/accesorios">Accesorios</Link>
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




export default NavBar ; 



