import React from "react";
import { Jumbotron } from "./components/Jumbotron";
import { Services } from "./components/Services";
import styled from "styled-components";
import aboutIllustration from "./assets/about.png";
import Helmet from "react-helmet";

const Section = styled.div`
  padding: 3.5rem 0 4.3rem;
  width: 100%;
  background: #ffffff;
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
  width: 15rem;
  @media (min-width: 775px) {
    width: 25rem;
  }
  object-fit: contain;
  align-self: flex-end;
`;

const Title = styled.p`
  text-transform: uppercase;
  color: #fe7e14;
  margin-bottom: 0.75rem;
`;

const Container = styled.div`
  width: 100%;
  padding-right: 15px;
  padding-left: 15px;
  margin-right: auto;
  margin-left: auto;
  @media (min-width: 576px) {
    max-width: 540px;
  }
  @media (min-width: 768px) {
    max-width: 720px;
  }
  @media (min-width: 992px) {
    max-width: 980px;
  }
`;

export const Home = () => (
  <>
    <Helmet title="Home" />
    <Jumbotron />
    <Container>
      <Services />
    </Container>
    <Section>
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
