import React from "react";
import styled from "styled-components";

const Container = styled.div`
  margin: 1rem;
`;

export const Footer = () => (
  <Container>
    <div>
      <span>© 2019 Review Financial Group Ltd</span>
    </div>
    <div>
      Yvonne Parasuraman of Simple Path Financial Solutions, ABN 84 851 340 081
      t/a REVIEW Financial Group Pty Ltd, are Authorised Representatives of
      Garvan Financial Planning Limited ABN 96 002 071 749 Australian Financial
      Services Licensee Register Office at 105 - 153 Miller Street North Sydney
      NSW 2060
    </div>
    <p>
      <a
        href="/license"
        data-ob_iframe="true"
        data-ob="lightbox"
        data-ob_share="false"
      >
        General Advice Warning
      </a>
      &nbsp;&nbsp;|&nbsp;&nbsp;
      <a
        href="/static/documents/FSG.pdf"
        data-ob="lightbox"
        data-ob_share="false"
      >
        FSG
      </a>
      &nbsp;&nbsp;|&nbsp;&nbsp;
      <a
        href="/static/documents/privacypolicy.pdf"
        data-ob="lightbox"
        data-ob_share="false"
      >
        Privacy Policy
      </a>
      &nbsp;&nbsp;|&nbsp;&nbsp;
    </p>
  </Container>
);
