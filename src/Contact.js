import React from "react";
import styled from "styled-components";
import Helmet from "react-helmet";
import ContactForm from "./components/ContactForm";

const Container = styled.div`
  margin: 1rem;
  @media (min-width: 765px) {
    display: flex;
    justify-content: center;
    margin: 5rem;
    margin-top: 2rem;
  }
`;

const Section = styled.div`
  @media (min-width: 765px) {
    display: flex;
  }
`;

const Label = styled.p`
  margin-right: 1rem;
  font-weight: bolder;
`;

const Value = styled.p`
  text-align: left;
`;

const Details = styled.div`
  margin: 3rem;
`;

const Map = styled.iframe`
  width: 100%;
  @media (min-width: 765px) {
    width: 40%;
  }
`;

const H1 = styled.h1`
  text-align: center;
  margin: 2rem 1rem;
  color: #5438dc;
`;

export const Contact = () => (
  <>
    <Helmet title="Contact us" />
    <H1>Contact Us</H1>
    <Container>
      <Details>
        <Section>
          <Label>Street Address:</Label>
          <Value>
            Suite 11 <br />
            42-50 Stud Road
            <br />
            Wantirna. VIC 3152
          </Value>
        </Section>

        <Section>
          <Label>Opening hours: </Label>
          <Value>Mon-Fri: 9am - 5pm</Value>
        </Section>
        <Section>
          <Label>Postal Address:</Label>
          <Value>
            PO Box 5317
            <br />
            Studfield Post Office
            <br />
            Wantirna VIC 3152
          </Value>
        </Section>

        <Section>
          <Label>Phone:</Label>
          <Value>1300 273 843 (1300 2 REVIEW)</Value>
        </Section>

        <Section>
          <Label>Fax:</Label>
          <Value> 03 9738 1255</Value>
        </Section>

        <Section>
          <Label>Email: </Label>
          <a href="mailto:service@reviewfinancial.com.au">
            service@reviewfinancial.com.au
          </a>
        </Section>
      </Details>

      <Map
        title="location"
        frameBorder="0"
        scrolling="no"
        marginHeight="0"
        marginWidth="0"
        src="https://maps.google.com.au/maps?f=q&amp;source=s_q&amp;hl=en&amp;geocode=&amp;q=Suite+11,+42-50+Stud+Road,+Wantirna.+VIC+3152&amp;sll=-37.847485,145.247444&amp;sspn=0.007625,0.013937&amp;ie=UTF8&amp;hq=&amp;hnear=11%2F42-50+Stud+Rd,+Bayswater+Victoria+3153&amp;ll=-37.847485,145.247444&amp;spn=0.060717,0.111494&amp;t=m&amp;z=13&amp;iwloc=near&amp;output=embed"
      />
      <ContactForm />
    </Container>
  </>
);
