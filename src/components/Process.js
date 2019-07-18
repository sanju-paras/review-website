import React from "react";
import styled from "styled-components";

const ProcessContainer = styled.div`
  margin: 0 2rem;
  @media (min-width: 765px) {
    margin: 1rem auto;
    width: 60vw;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
`;

const LI = styled.h3`
  font-size: 1.75rem;
  margin-bottom: 0.5rem;
  font-weight: 500;
  line-height: 1.2;
  list-style-position: inside;
`;

const Box = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0.5rem;
  margin-left: 0;
  padding: 1rem;
  color: #333f48;
  box-shadow: 0 0.0625rem 0.1875rem 0 rgba(0, 0, 0, 0.2);
  border-radius: 0.1875rem;
  background-color: #ffffff;
  @media (min-width: 765px) {
    margin: 1rem;
    margin-left: 0;
  }
`;

const Title = styled.p`
  text-transform: uppercase;
  color: #fe7e14;
  margin-bottom: 0.75rem;
  width: 100%;
`;

export const Process = () => (
  <ProcessContainer>
    <Title>Our Advice Process</Title>
    <Box>
      <LI>1. Discovery</LI>
      <p>
        This first step in your simple path enables us to understand your
        personal and financial circumstances, your financial and lifestyle
        objectives, and your appetite for various types of investments. We get
        to know each other, enabling you to query and seek additional
        information, and ask questions during our initial discovery meeting.
      </p>
    </Box>
    <Box>
      <LI>2. Strategy</LI>
      <p>
        After we receive your agreement to proceed, as part of the strategy, we
        analyse the gathered information, conduct market research and put
        forward strategies along with our recommendations specifically designed
        to achieve your objectives.
      </p>
    </Box>
    <Box>
      <LI>3. Presentation</LI>
      <p>
        We present the detailed Statement of Advice containing our strategies
        and recommendations, explaining to you in simple language, each of the
        recommendations, the benefits and how they will be the pathway to
        achieve your objectives, in addition to the fees and charges. We ensure
        that you understand, and are comfortable with the plan and our fees to
        implement the advice.
      </p>
    </Box>
    <Box>
      <LI>4. Implementation</LI>
      <p>
        Once approved we implement the advice, to set you on the right path to
        achieve your objectives. We contact service providers to ensure
        implementation as per your instructions.
      </p>
    </Box>
    <Box>
      <LI>5. Review & Calibrate</LI>
      <p>
        Should you choose to accept our services on an ongoing basis, we monitor
        and manage your financial position, making the required tweaks triggered
        by changes to your personal circumstances, and/or by market conditions.
        This is key in ensuring that you remain on track to achieve your
        long-term objectives accommodating changes to the plan, if required,
        should your needs or circumstances change over time.
      </p>
    </Box>
  </ProcessContainer>
);
