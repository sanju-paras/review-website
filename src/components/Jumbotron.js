import React from "react";
import styled from "styled-components";
import handsImage from "../assets/hands_docs.png";

const ImageContainer = styled.div`
  display: none;
  @media (min-width: 765px) {
    background: url(${handsImage}) no-repeat center left;
    background-size: cover;
    position: absolute;
    top: 4px;
    left: 4px;
    right: 4px;
    bottom: 4px;
    display: block;
  }
  @media (min-width: 1025px) {
    clip-path: polygon(
      54% 0,
      100% 0,
      100% 43%,
      100% 100%,
      65% 100%,
      38% 89%,
      18% 71%,
      5% 40%,
      0 0
    );
    top: 0px;
    left: 18px;
    right: 0px;
    bottom: 6px;
  }
`;

const ImageBorder = styled.div`
  display: none;
  @media (min-width: 765px) {
    position: relative;
    background: #fe7e14;
    background-size: cover;
    width: 60vw;
    height: 35vh;
    margin: 1rem;
    display: block;
  }
  @media (min-width: 1025px) {
    clip-path: polygon(
      54% 0,
      100% 0,
      100% 43%,
      100% 100%,
      65% 100%,
      38% 89%,
      18% 71%,
      5% 40%,
      0 0
    );
    width: 60vw;
    height: 70vh;
    margin: 0;
  }
`;

const Container = styled.div`
  width: 90%;
  margin: 3rem;
  @media (min-width: 765px) {
    margin-left: 5rem;
    width: 40%;
  }
  text-align: center;
  flex-shrink: 1;
`;

const H1 = styled.h1`
  color: #5438dc;
`;

const P = styled.p`
  /* color: white; */
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media (min-width: 775px) {
    margin-left: 3rem;
  }
`;

export const Jumbotron = () => (
  <Wrapper>
    <Container>
      <H1>Review your finances</H1>
      <P>
        Important financial decisions must be reviewed regularly and adjusted to
        take into account changes to your circumstances and objectives.
      </P>
    </Container>
    <ImageBorder>
      <ImageContainer />
    </ImageBorder>
  </Wrapper>
);
