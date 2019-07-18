import React from "react";
import styled from "styled-components";

const TeamContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  @media (min-width: 765px) {
    width: 60vw;
  }
`;
const Person = styled.div`
  margin-left: 0;
  display: flex;
  flex-direction: column;
  align-items: left;
  min-width: 15rem;
  padding: 1rem;
  color: #333f48;
  box-shadow: 0 0.0625rem 0.1875rem 0 rgba(0, 0, 0, 0.2);
  border-radius: 0.1875rem;
  background-color: #ffffff;
`;

const Link = styled.a`
  text-decoration: none;
  margin: 0.5rem 0.5rem;
  margin-left: 0;
  flex: 1;
  :hover {
    text-decoration: none;
  }
  @media (max-width: 511px) {
    margin: 0.5rem 0;
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
  color: #697684;
`;

const Title = styled.p`
  text-transform: uppercase;
  color: #fe7e14;
  margin-bottom: 0.75rem;
  width: 100%;
`;

export const Team = () => (
  <TeamContainer>
    <Title>Our Team</Title>
    <Link href="/about">
      <Person>
        <Name>Yvonne Parasuraman</Name>
        <Role>Director/Principal Advisor</Role>
      </Person>
    </Link>
    <Link href="/about">
      <Person>
        <Name>Nikki Harris</Name>
        <Role>Role</Role>
      </Person>
    </Link>
    <Link href="/about">
      <Person>
        <Name>Aaron Whelan</Name>
        <Role>Role</Role>
      </Person>
    </Link>
    <Link href="/about">
      <Person>
        <Name>Amanda Reid</Name>
        <Role>Role</Role>
      </Person>
    </Link>
    <Link href="/about">
      <Person>
        <Name>Debbie Lagden</Name>
        <Role>Role</Role>
      </Person>
    </Link>
    <Link href="/about">
      <Person>
        <Name>Joel Reyes</Name>
        <Role>Role</Role>
      </Person>
    </Link>
  </TeamContainer>
);
