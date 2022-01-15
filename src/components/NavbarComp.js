import React, { Component } from "react";
import { Link, Routes, Route } from "react-router-dom";
import { Navbar, Container, Nav } from "react-bootstrap";
import Home from "../pages/home";
import Books from "../pages/books";

export default class NavbarComp extends Component {
  render() {
    return (
      <div>
        <Navbar bg="dark" variant={"dark"} expand="lg">
          <Container>
            <Navbar.Brand as={Link} to={"/home"}>Coddiwomple</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link as={Link} to={"/home"}>
                  Home
                </Nav.Link>
                <Nav.Link as={Link} to={"/books"}>
                  Books
                </Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="books" element={<Books />} />
        </Routes>
      </div>
    );
  }
}
