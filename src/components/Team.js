import React from "react";
import styled from "styled-components";
import yvonne from "../assets/teamPhotos/Yvonne2.jpg";
import aaron from "../assets/teamPhotos/Aaron.jpg";
import nikki from "../assets/teamPhotos/Nikki.jpg";

const TeamContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  width: 78vw;
  @media (min-width: 765px) {
    width: 60vw;
  }
`;
const Person = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-width: 15rem;
  padding: 1rem;
  color: #333f48;
  box-shadow: 0 0.0625rem 0.1875rem 0 rgba(0, 0, 0, 0.2);
  border-radius: 0.1875rem;
  background-color: #ffffff;
  height: 100%;
  max-width: 20rem;
`;

const Link = styled.a`
  text-decoration: none;
  margin: 0.5rem 0.5rem;
  margin-left: 0;

  :hover {
    text-decoration: none;
  }
  @media (max-width: 511px) {
    margin: 0.5rem 0;
  }
  @media (min-width: 765px) {
    flex: 1;
  }
`;

const Name = styled.h3`
  font-size: 1.17rem;
  margin: 0;
`;

const Role = styled.h4`
  font-size: 1rem;
  line-height: 1.375rem;
  font-weight: normal;
  margin: 0.75rem 0;
  margin-bottom: 0
  color: #697684;
`;

const Title = styled.p`
  text-transform: uppercase;
  color: #fe7e14;
  margin-bottom: 0.75rem;
  width: 100%;
`;

const Img = styled.img`
  width: 100%;
  object-fit: contain;
`;

const Description = styled.p`
  margin-top: 0.5rem;
`;

const SupportStaff = styled.div`
  display: flex;
  flex: 1;
  margin: 1rem;
  @media (min-width: 765px) {
    width: 60vw;
    margin: 0rem 5rem;
  }
`;

const Staff = styled.div`
  margin-left: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-width: 15rem;

  padding: 1rem;
  color: #333f48;
  box-shadow: 0 0.0625rem 0.1875rem 0 rgba(0, 0, 0, 0.2);
  border-radius: 0.1875rem;
  background-color: #ffffff;
  height: 100%;
  @media (max-width: 826px) {
    max-width: 20rem;
  }
`;

const Container = styled.div`
  margin: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  @media (min-width: 550px) {
    margin: 2rem 5rem;
  }
`;

export const Team = () => (
  <Container>
    <TeamContainer>
      <Title>Our Team</Title>
      <Link>
        <Person>
          <Img src={yvonne} alt="Yvonne" width="50%" />
          <Name>
            Yvonne Parasuraman
            <p style={{ fontSize: "0.75rem", display: "inline" }}> AFP®</p>
          </Name>
          <Role>B.A., B.Ed., ADFP</Role>
          <Description>
            Our Principal Financial Adviser, has over 25 years of experience in
            the Financial Services Industry in various roles, (Bank Manager,
            Financial Planner, Wealth Adviser) and in different countries
          </Description>
        </Person>
      </Link>
      <Link>
        <Person>
          <Img
            src={nikki}
            alt="Nikki"
            width="50%"
            style={{ width: "50%", height: "50%" }}
          />
          <Name>Nikki Harris</Name>
          <Role>Adv. Dip. FP, Grad.Cert. FP</Role>
          <Description>
            Our pillar in customer service, supporting our clients in the
            implementation, maintenance and management of their insurance and
            financial planning strategies.
          </Description>
        </Person>
      </Link>
      <Link>
        <Person>
          <Img src={aaron} alt="Aaron" width="50%" />
          <Name>Aaron Whelan</Name>
          <Role>Client Services & Implementation</Role>
          <Description>
            The voice of our practice, ensuring timely REVIEW of your insurance
            policies, superannuation, and financial plan.
          </Description>
        </Person>
      </Link>
    </TeamContainer>
    <SupportStaff>
      <Link>
        <Staff>
          <Name>Mark Whelan, Amanda Reid, and Joel Reyes</Name>
          <Description>
            Members of our extended family, past and current, helping us provide
            you holistic advice
          </Description>
        </Staff>
      </Link>
    </SupportStaff>
  </Container>
);
