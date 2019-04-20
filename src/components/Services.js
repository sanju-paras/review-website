import React from "react";
import { Jumbotron, Col, Row } from "react-bootstrap";
import Box from "./Card";
import styled from "styled-components";

const Wrapper = styled.div`
  @media (min-width: 350px) {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-evenly;
  }

  margin: 1rem 0;
`;

export const Services = () => (
  <>
    <h3>Our Services</h3>
    <Wrapper>
      <Box
        title="Review your financial health"
        text="A tool to help you identify the key aspects of your financial life
              that may need attention"
        link="#"
      />

      <Box
        title="Review your super"
        text="Understand your options with superannuation savings and make the
              right steps towards building your nest egg"
        link="#"
      />

      <Box
        title="Review your insurance"
        text="A tool to help you identify the key aspects of your financial life
              that may need attention"
        link="#"
      />

      <Box
        title="Review your loans"
        text="A tool to help you identify the key aspects of your financial life
              that may need attention"
        link="#"
      />

      <Box
        title="Review your estate planning"
        text="A tool to help you identify the key aspects of your financial life
              that may need attention"
        link="#"
      />

      <Box
        title="Review your Centrelink Benefits"
        text="A tool to help you identify the key aspects of your financial life
              that may need attention"
      />
    </Wrapper>
  </>
);
