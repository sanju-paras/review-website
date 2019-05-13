import React from "react";
import { Container } from "react-bootstrap";
import { Jumbotron } from "./components/Jumbotron";
import { Services } from "./components/Services";

export const Home = () => (
  <>
    <Jumbotron />
    <Container>
      <Services />
    </Container>
  </>
);
