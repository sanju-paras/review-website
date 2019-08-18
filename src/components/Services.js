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
          title="Review your Cash flow budget"
          text="Review your household or business cash flow to feel more in control over your spending. 
          All it takes is a little bit of thought and planning."
        />

        <Card
          title="Review your super"
          text="Understand your options with superannuation savings and make the
              right steps towards building your nest egg"
          link="#"
        />

        <Card
          title="Review your insurance"
          text="Understand the various insurance options available to you and get help 
          to decide which risks worth insuring"
          link="#"
        />

        <Card
          title="Review your loans"
          text="Restructure your debt to find the right loan for you. We can help
           you to save many thousands of dollars over the life of the loan."
          link="#"
        />

        <Card
          title="Review your estate planning"
          text="Sort out your Power of Attorney, executors, and determine the best way 
          to distribute your assets in the most tax effective manner."
          link="#"
        />

        <Card
          title="Review your Centrelink Benefits"
          text="Find what your entitlements may be, and get help with filling out 
          and lodging any forms."
        />
      </Wrapper>
    </Root>
  </>
);
