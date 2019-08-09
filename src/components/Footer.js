import React from "react";
import styled from "styled-components";

const Container = styled.div`
  background-color: #343434;
  padding: 1rem 1rem 0.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const FooterText = styled.p`
  color: white;
  font-size: 0.75rem;
`;

const Link = styled.a`
  margin: 0 1rem;
  font-size: 0.75rem;
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

const Copy = styled.p`
  color: white;
  font-size: 0.75rem;
  margin-top: 0.5rem;
  margin-bottom: 0;
`;

export const Footer = () => (
  <Container>
    <FooterText>
      Yvonne Parasuraman of Simple Path Financial Solutions, ABN 84 851 340 081
      t/a REVIEW Financial Group, are Authorised Representatives of
      Garvan Financial Planning Limited ABN 96 002 071 749 Australian Financial
      Services Licensee Register Office at 105 - 153 Miller Street North Sydney
      NSW 2060
    </FooterText>

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
        href="FSG.pdf"
        target="_blank"
        data-ob="lightbox"
        data-ob_share="false"
      >
        FSG
      </Link>
      <Link href="privacypolicy.pdf" target="_blank">
        Privacy Policy
      </Link>
    </Links>
    <Copy>© 2019 Review Financial Group</Copy>
  </Container>
);
