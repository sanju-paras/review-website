import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { Nav, Navbar } from "react-bootstrap";

const Styles = styled.div`
  .navbar {
    padding: 0;
    background-color: #011936;
    width: 100%;
  }
  .navbar-collapse {
    padding: 1rem;
  }
  .navbar-brand {
    padding-left: 1rem;
    color: white;
    &:hover {
      color: #fa6e0d;
    }
  }
  a,
  .navbar-nav .nav-link {
    color: white;
    &:hover {
      color: #fa6e0d;
      text-decoration: none;
    }
  }
`;

export const NavigationBar = () => (
  <Styles>
    <Navbar expand="lg">
      <Navbar.Brand href="/">Review Financial Group</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
          <Nav.Item>
            <Nav.Link>
              <Link to="/">Home</Link>
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link>
              <Link to="/about">About</Link>
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link>
              <Link to="/contact">Contact</Link>
            </Nav.Link>
          </Nav.Item>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  </Styles>
);
