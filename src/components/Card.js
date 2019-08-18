import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const StyledCard = styled.div`
  border-top: solid 1px #e6e7e7;
  padding: 0.5rem;
  text-align: center;
  @media (min-width: 576px) {
    padding: 25px;
  }
  @media (min-width: 765px) {
    text-align: left;
    width: 18rem;
  }
`;

const Title = styled.h5`
  margin-bottom: 0.5rem;
  @media (min-width: 576px) {
    margin-bottom: 1rem;
  }
`;

const P = styled.p``;

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
