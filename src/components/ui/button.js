import React from 'react';
import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';

const Button3 = styled.button`
  font-size: 1rem;
  border-radius: 5px;
  padding: 0.25rem 1rem;
  margin: 0.5rem 1rem;
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
  return (
    <Link to={to}>
      <Button3 primary={primary}>{tag}</Button3>
    </Link>
  );
};

export default Button;
