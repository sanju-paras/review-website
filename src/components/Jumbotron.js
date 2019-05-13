import React from "react";
import styled from "styled-components";
import handsImage from "../assets/hands_docs.jpg";

const StyledJumbo = styled.div`
  background: url(${handsImage}) no-repeat fixed bottom;
  background-size: cover;
  color: #efefef;
  position: absolute;
  z-index: -1;
  height: 80vh
  width: 100%;
`;

const Overlay = styled.div`
  background-color: black;
  opacity: 0.6;
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  z-index: -1;
`;

const Container = styled.div`
  padding: 2rem;
  @media (min-width: 765px) {
    padding: 10rem;
  }
  text-align: center;
`;

const H1 = styled.h1`
  color: white;
`;

const P = styled.p`
  color: white;
`;

export const Jumbotron = () => (
  <>
    <StyledJumbo>
      <Overlay />
    </StyledJumbo>
    <Container>
      <H1>Review Financial Group</H1>
      <P>
        "Important financial decisions must be REVIEWed regularly and adjusted
        to take into account changes to your circumstances and objectives. A
        plan is only as good as the timing, process and skill with which it is
        REVIEWed"
      </P>
    </Container>
  </>
);
