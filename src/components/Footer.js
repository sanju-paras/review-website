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
  text-align: center;
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
      Yvonne Parasuraman and Simple Path Financial Solutions, ABN 84 851 340 081
      t/a REVIEW Financial Group, are Authorised Representatives of Consultum
      Financial Advisers Pty Ltd I ABN 65 006 373 995 I AFSL 230323 I Part of
      the IOOF group, Level 6, 161 Collins Street, Melbourne VIC 3000
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
