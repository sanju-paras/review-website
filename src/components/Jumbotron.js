import React from "react";
import { Jumbotron as Jumbo, Container } from "react-bootstrap";
import styled from "styled-components";
import handsImage from "../assets/hands_docs.jpg";

const Styles = styled.div`
  .jumbo {
    background: url(${handsImage}) no-repeat fixed bottom;
    background-size: cover;
    color: #efefef;
    position: relative;
    z-index: -2;
  }
  .overlay {
    background-color: #000;
    opacity: 0.6;
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    z-index: -1;
  }
`;

export const Jumbotron = () => (
  <Styles>
    <Jumbo fluid className="jumbo">
      <div className="overlay" />
      <Container>
        <h1>Review Financial Group</h1>
        <p>
          "Important financial decisions must be REVIEWed regularly and adjusted
          to take into account changes to your circumstances and objectives. A
          plan is only as good as the timing, process and skill with which it is
          REVIEWed"
        </p>
      </Container>
    </Jumbo>
  </Styles>
);
