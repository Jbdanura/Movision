import {Navbar,Container,Nav,NavDropdown,Form,FormControl,Button} from "react-bootstrap"
import React from 'react';

const Menu = ({genres}) => {
   return(
      <Navbar bg="dark" expand="lg" variant="dark">
      <Container>
         <Navbar.Brand href="#home">Moviestar</Navbar.Brand>
         <Navbar.Toggle aria-controls="basic-navbar-nav" />
         <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
            <NavDropdown title="Genres" id="basic-nav-dropdown">
               {genres.map(genre=>{
                  return <NavDropdown.Item key={genre.name}>{genre.name}</NavDropdown.Item>
               })}
            </NavDropdown>
            <Nav.Link href="#home">Top</Nav.Link>
            <Nav.Link href="#home">New</Nav.Link>
            </Nav>
            <Form className="d-flex">
               <FormControl
                  type="search"
                  placeholder="Search"
                  className="me-2"
                  aria-label="Search"
               />
               <Button variant="success">Search</Button>
            </Form>
         </Navbar.Collapse>
      </Container>
      </Navbar>
   )
}

export default Menu