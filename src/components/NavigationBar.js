import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { Nav, Navbar } from "react-bootstrap";
import logo from "../assets/optimised_logo.png";

const Image = styled.img`
  margin: auto;
  width: 150px;
  @media (min-width: 576px) {
    width: 70%;
    height: 100%;
  }
`;

const Styles = styled.div`
  .navbar {
    width: 100%;
    box-shadow: 0px 2px 30px 0px rgba(0, 0, 0, 0.12);
  }
  .navbar-collapse {
    padding: 1rem;
  }
  .navbar-brand {
    padding-left: 2rem;
    color: #252935;
    &:hover {
      color: #fa6e0d;
    }
  }
  a,
  .navbar-nav .nav-link {
    color: #252935;
    &:hover {
      color: #fa6e0d;
      text-decoration: none;
    }
  }

  .navbar-text {
    display: none;
    @media (min-width: 530px) {
      display: block;
      font-size: 1.25rem;
      font-weight: 700;
    }
  }
`;

export const NavigationBar = () => (
  <Styles>
    <Navbar expand="lg">
      <Navbar.Brand href="/">
        <Image src={logo} alt="Review Financial Group" />
      </Navbar.Brand>
      <Navbar.Text>1300 2 Review</Navbar.Text>
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
