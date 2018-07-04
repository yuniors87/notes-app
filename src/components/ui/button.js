import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const StyledLink = styled.button`
  font-size: 1rem;
  border-radius: 5px;
  padding: 0.4rem 1rem;
  margin: 1rem 0;
  background: transparent;
  border: 2px solid #55acee;
  cursor: pointer;
  &:hover {
    transform: translateY(1px);
    box-shadow: 0 2px 3px rgba(0, 0, 0, 0.15);
  }
`;

const Button = props => {
  return (
    <Link to={props.to}>
      <StyledLink>{props.tag}</StyledLink>
    </Link>
  );
};

export default Button;
