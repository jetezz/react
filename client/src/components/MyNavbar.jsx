import React from 'react'
import { Link } from 'react-router-dom'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

const MyNavbar = () => {
  return (
  //   <div className="container">
  //   <Navbar>
  //     <Navbar.Toggle aria-controls='responsive-navbar-nav'>
  //       <Navbar.Collapse>
  //         <Nav>
  //           <Link to={`/`}>
  //             Home 
  //           </Link>   
  //           <Link to={`/login`}>
  //             Login 
  //           </Link>   
  //           <Link to={`/register`}>
  //             Register 
  //           </Link>  
  //         </Nav>
  //       </Navbar.Collapse>
  //     </Navbar.Toggle>
  //   </Navbar>
  // </div>

  <Navbar expand="lg" className="bg-body-tertiary">
  <Container>
    <Navbar.Brand>My page</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="me-auto">
        <Navbar.Brand><Link to={`/`}>Home</Link></Navbar.Brand>
        <Navbar.Brand><Link to={`/write`}>Write</Link></Navbar.Brand>
        <Navbar.Brand><Link to={`/login`}>Login</Link></Navbar.Brand>
        <Navbar.Brand><Link to={`/register`}>Register</Link></Navbar.Brand>
        <NavDropdown title="Category" id="basic-nav-dropdown">         
        <Navbar.Brand><Link to={`/?cat=a`}>One</Link></Navbar.Brand>    
        </NavDropdown>
      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>
  )
}

export default MyNavbar