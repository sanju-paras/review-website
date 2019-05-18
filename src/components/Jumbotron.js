import React from "react";
import styled from "styled-components";
import handsImage from "../assets/HandsDocs.png";

const Image = styled.img`
  display: none;
  @media (min-width: 765px) {
    display: block;
    width: 60%;
    height: 100%;
  }
`;

const Container = styled.div`
  width: 90%;
  margin: 3rem;
  @media (min-width: 765px) {
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

const ActionButton = styled.a`
  color: #ffffff;
  text-transform: uppercase;
  background: #fe7e14;
  padding: 0.5rem;
  border: 2px solid #fe7e14;
  border-radius: 6px;
  display: inline-block;
  :hover {
    color: #ffffff;
    background: #e86800;
    border-color: #e86800;
    transition: all 0.3s ease 0s;
    text-decoration: none;
  }
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Jumbotron = () => (
  <Wrapper>
    <Container>
      <H1>Review your finances </H1>
      <P>
        Important financial decisions must be REVIEWed regularly and adjusted to
        take into account changes to your circumstances and objectives.
      </P>
      <div class="button_cont" align="center">
        <ActionButton class="example_c" href="add-website-here" target="_blank">
          Book a free review
        </ActionButton>
      </div>
    </Container>
    <Image src={handsImage} alt="HandsDocs.png" />
  </Wrapper>
);
