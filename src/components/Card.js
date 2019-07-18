import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const StyledCard = styled.div`
  border-top: solid 1px #e6e7e7;
  @media (min-width: 765px) {
    width: 18rem;
  }
  padding: 25px;
`;

const Title = styled.h5`
  margin-bottom: 1rem;
`;

const P = styled.p`
  display: block;
  @media (max-width: 576px) {
    display: none;
  }
`;

const Card = ({ title, text, link, ...props }) => (
  <StyledCard>
    <Title>{title}</Title>
    <P>{text}</P>
  </StyledCard>
);

Card.propTypes = {
  title: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  link: PropTypes.string
};

export default Card;
