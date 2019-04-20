import React from "react";
import { Card } from "react-bootstrap";
import styled from "styled-components";
import PropTypes from "prop-types";

const StyledCard = styled.div`
  box-shadow: 0px 0px 2px 2px #ccc;
  margin: 1rem 0;
  width: 18rem;
`;

const Box = ({ title, text, link, ...props }) => (
  <StyledCard>
    <Card.Body>
      <Card.Title>{title}</Card.Title>
      <Card.Text>{text}</Card.Text>
      <Card.Link href={link}>See more</Card.Link>
    </Card.Body>
  </StyledCard>
);

Box.propTypes = {
  title: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  link: PropTypes.string
};

export default Box;
