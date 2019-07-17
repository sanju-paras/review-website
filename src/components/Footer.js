import React from "react";
import styled from "styled-components";

const Container = styled.div`
  background-color: #343434;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const FooterText = styled.p`
  color: white;
`;

const Link = styled.a`
  margin: 0 1rem;
`;

const Links = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  @media (max-width: 540px) {
    flex-direction: column;
    justify-content: flex-start;
  }
  margin: 0 1rem;
`;

export const Footer = () => (
  <Container>
    <FooterText>
      Yvonne Parasuraman of Simple Path Financial Solutions, ABN 84 851 340 081
      t/a REVIEW Financial Group Pty Ltd, are Authorised Representatives of
      Garvan Financial Planning Limited ABN 96 002 071 749 Australian Financial
      Services Licensee Register Office at 105 - 153 Miller Street North Sydney
      NSW 2060
    </FooterText>
    <FooterText>© 2019 Review Financial Group Ltd</FooterText>
    <Links>
      <Link
        href="/license"
        data-ob_iframe="true"
        data-ob="lightbox"
        data-ob_share="false"
      >
        General Advice Warning
      </Link>
      <Link
        href="/static/documents/FSG.pdf"
        data-ob="lightbox"
        data-ob_share="false"
      >
        FSG
      </Link>
      <Link
        href="/static/documents/privacypolicy.pdf"
        data-ob="lightbox"
        data-ob_share="false"
      >
        Privacy Policy
      </Link>
    </Links>
  </Container>
);
