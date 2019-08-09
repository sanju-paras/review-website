import React from "react";
import { Container } from "react-bootstrap";
import { Jumbotron } from "./components/Jumbotron";
import { Services } from "./components/Services";
import styled from "styled-components";
import aboutIllustration from "./assets/about-1.png";

const Section = styled.div`
  padding: 3.5rem 0 4.3rem;
  width: 100%;
  background: #ffffff;
`;

const Overlay = styled.div`
  background: url("./assets/pattern-2.png") right top no-repeat;
`;

const AboutContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`;

const Content = styled.div`
  margin: 2rem;
  @media (min-width: 775px) {
    flex-basis: 40%;
  }
`;

const Image = styled.img`
  width: 25rem;
  object-fit: contain;
  align-self: flex-end;
`;

const Title = styled.p`
  text-transform: uppercase;
  color: #fe7e14;
  margin-bottom: 0.75rem;
`;

export const Home = () => (
  <>
    <Jumbotron />
    <Container>
      <Services />
    </Container>
    <Section>
      <Overlay />
      <AboutContainer>
        <Content>
          <Title>Who we are</Title>
          <h3>Trusted financial experts.</h3>
          <p>
            We are a team of passionate advisors who do our best work together.
          </p>
          <p>
            We provide client-centric financial advice, based on the foundation
            of lasting partnership, assisting our clients grow, consolidate and
            protect their Wealth, so that they can enjoy life's experience to
            the fullest. We provide our clients with the highest quality
            financial advice, resources and ongoing support. We are dedicated to
            partner with busy professionals, executives, retirees and small
            business owners achieve their long-term goals and objectives.
          </p>
        </Content>
        <Image src={aboutIllustration} alt="about-people" />
      </AboutContainer>
    </Section>
  </>
);
