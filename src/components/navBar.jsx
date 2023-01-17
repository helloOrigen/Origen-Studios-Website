import React, { Fragment,useState } from "react";
import { NavLink,Link} from "react-router-dom";
import Logo from  "../assets/OS-logo-white.png";
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import "../Styles/home.css";

 const  navBar=() =>{

  return (
    <div className="w-90 h-100 r-h-c h-pr-fl-ma">
    <Navbar collapseOnSelect expand="lg">
    <Container>
     <Navbar.Brand><img src={Logo} className="Origen"alt="O-Studios"/></Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="me-auto py-3">
          <NavLink className="px-2" to="/team" >Nosotros</NavLink>
          <NavLink  className="px-2">Estructura</NavLink>
          <NavLink  className="px-2"to="/services">Servicios</NavLink>
          <NavLink  className="px-2" to="/plans">Planes</NavLink>
          <NavLink  className="px-2">Metodologia</NavLink>
          <NavLink  className="px-2">Parámetros</NavLink>

        
        </Nav>
        
      </Navbar.Collapse>
    </Container>
  </Navbar>
 </div> );
}

export default navBar