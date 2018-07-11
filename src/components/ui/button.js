import React from 'react';
import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';

const StyledButton = styled.button`
  font-size: 1rem;
  border-radius: 5px;
  padding: 0.25rem 1rem;
  margin: 0.5rem 0;
  background: transparent;
  color: ${props => props.theme.primary};
  border: 2px solid ${props => props.theme.primary};
  cursor: pointer;
  ${props =>
    props.primary &&
    css`
      background: ${props => props.theme.primary};
      color: white;
    `};
  &:hover {
    transform: translateY(1px);
    box-shadow: 0 2px 3px rgba(0, 0, 0, 0.15);
  }
`;

const Button = props => {
  const { to, tag, primary } = props;
  if (!to) {
    return <StyledButton primary={primary}>{tag}</StyledButton>;
  }
  return (
    <Link to={to}>
      <StyledButton primary={primary}>{tag}</StyledButton>
    </Link>
  );
};

export default Button;
