import React from "react";
import styled from "styled-components";
import { Team } from "./components/Team";
import { Process } from "./components/Process";

const H1 = styled.h1`
  text-align: center;
  margin: 2rem 1rem 1rem;
  color: #5438dc;
`;
const Title = styled.p`
  text-transform: uppercase;
  color: #fe7e14;
  margin-bottom: 0.75rem;
`;

const Content = styled.div`
  margin: 2rem;
  @media (min-width: 775px) {
    flex-basis: 60%;
  }
`;

const P = styled.p`
  text-align: center;
  margin: 1rem 20vw;
`;

const MissionContainer = styled.div`
  background-color: #f2f4ff;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`;

export const About = () => (
  <>
    <H1>About Us</H1>
    <P>
      We are Review Financial Group, a family owned business with a passion for
      demystifying finance for you.
    </P>

    <Team />

    <MissionContainer>
      <Content>
        <Title>Our Mission</Title>
        <p>
          At Review Financial Group, our vision is to work in partnership with
          our clients from different walks of life, establish a simple path to
          achieve their financial goals and lifestyle aspirations
        </p>
        <p>Together, we can do Great Things.</p>
      </Content>
    </MissionContainer>
    <Process />
  </>
);
