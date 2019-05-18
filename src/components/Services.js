import React from "react";
import Card from "./Card";
import styled from "styled-components";

const Wrapper = styled.div`
  @media (min-width: 765px) {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-around;
  }
`;

const Container = styled.div`
  background-color: #2e1f78;
  padding: 1.5rem;
  display: flex;
  justify-content: center;
`;

const Root = styled.div`
  margin-top: 1rem;
  margin-bottom: 2rem;
  background-color: white;
  box-shadow: 0px 2px 30px 0px rgba(0, 0, 0, 0.12);
`;

export const Services = () => (
  <>
    <Root>
      <Container>
        <h2>Our Services</h2>
      </Container>
      <Wrapper>
        <Card
          title="Review your financial health"
          text="A tool to help you identify the key aspects of your financial life
              that may need attention"
          link="#"
        />

        <Card
          title="Review your super"
          text="Understand your options with superannuation savings and make the
              right steps towards building your nest egg"
          link="#"
        />

        <Card
          title="Review your insurance"
          text="A tool to help you identify the key aspects of your financial life
              that may need attention"
          link="#"
        />

        <Card
          title="Review your loans"
          text="A tool to help you identify the key aspects of your financial life
              that may need attention"
          link="#"
        />

        <Card
          title="Review your estate planning"
          text="A tool to help you identify the key aspects of your financial life
              that may need attention"
          link="#"
        />

        <Card
          title="Review your Centrelink Benefits"
          text="A tool to help you identify the key aspects of your financial life
              that may need attention"
        />
      </Wrapper>
    </Root>
  </>
);
