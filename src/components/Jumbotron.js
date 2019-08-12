import React from "react";
import styled from "styled-components";
import handsImage from "../assets/HandsDocs.jpeg";

const Image = styled.img`
  display: none;
  object-fit: cover;
  @media (min-width: 765px) {
    display: block;
    width: 50vw;
    height: 100%;
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
    <Image src={handsImage} alt="HandsDocs.jpg" />
  </Wrapper>
);
