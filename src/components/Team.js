import React from "react";
import styled from "styled-components";
import yvonne from "../assets/teamPhotos/optimisedYvonne.png";
import paras from "../assets/teamPhotos/paras.jpg";
import vincent from "../assets/teamPhotos/optimisedVincent1.png";
import chenthen from "../assets/teamPhotos/chenthen.jpg";
import danny from "../assets/teamPhotos/danny.jpg"

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
  justify-content: flex-start;
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
`;

const Name = styled.h3`
  font-size: 1.17rem;
  margin: 0.5rem 0 0;
`;

const Role = styled.h4`
  text-align: center;
  font-size: 1rem;
  line-height: 1.375rem;
  font-weight: normal;
  margin: 0.75rem 0;
  margin-bottom: 0;
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
  height: 40%;
`;

const Description = styled.p`
  margin-top: 0.5rem;
  text-align: center;
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
            <p style={{ fontSize: "0.75rem", display: "inline" }}> CFP®</p>
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
          <Img src={paras} alt="Paras" />
          <Name>Paras Chandran<p style={{ fontSize: "0.75rem", display: "inline" }}> AFP®</p></Name>
          <Role>B.E, ADFP</Role>
          <Description>
            Our Director, has over 30 years of multi-disciplinary experience in
            various roles, ensuring clients and the REVIEW team are well
            supported in delivery of personalised advice and care.
          </Description>
        </Person>
      </Link>
      <Link>
        <Person>
          <Img src={vincent} alt="Vincent" />
          <Name>Vincent Nguyen</Name>
          <Role>Associate - Research and Strategies</Role>
          <Description>
            Our budding finance professional supporting our clients and advisers
            with financial product research, data analysis and preparation of
            financial plans including superannuation, investments, insurance
            strategies and cash flow modelling.
          </Description>
        </Person>
      </Link>
      <Link>
        <Person>
          <Img src={chenthen} alt="Chenthen" />
          <Name>Chenthen Ragunathan</Name>
          <Role>Associate - Client Services & Implementation</Role>
          <Description>
            The voice of our practice, ensuring timely implementation and REVIEW
            of your insurance policies, superannuation, and financial plan.
            strategies.
          </Description>
        </Person>
      </Link>
      <Link>
        <Person>
          <Img src={danny} alt="Danny" />
          <Name>Danny Liu</Name>
          <Role>Administrative Assistant</Role>
          <Description>
            Danny is our go to person at the office, bringing his energy,
            enthusiasm and cheer to fore, taking care of the office
            administration with a smile, ensuring clients are well taken care
            of.
          </Description>
        </Person>
      </Link>
    </TeamContainer>
  </Container>
);
