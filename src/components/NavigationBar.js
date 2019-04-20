import React from "react";
import styled from "styled-components";
import logo from "../assets/logo.jpg";

const Styles = styled.div`
  .navbar {
    background-color: #222;
  }
  .navbar-brand,
  .navbar-nav .nav-link {
    color: #bbb;
    &:hover {
      color: white;
    }
  }
`;

export const NavigationBar = () => (
  <Styles>
    <header expand="lg">
      <a href="/">
        <img
          alt=""
          src={logo}
          width="150"
          height="50"
          className="d-inline-block align-top"
        />
      </a>
      <nav id="basic-navbar-nav">
        <ul className="ml-auto">
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/about">About</a>
          </li>
          <li>
            <a href="/contact">Contact</a>
          </li>
        </ul>
      </nav>
    </header>
  </Styles>
);
