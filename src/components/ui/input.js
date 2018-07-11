import React from 'react';
import styled from 'styled-components';

const StyledInput = styled.input`
  display: inline-block;
  border: none;
  border-radius: 5px;
  background: #fff;
  border: solid 1px ${props => props.theme.dark};
`;

const Input = () => {
  return (
      <StyledInput type="text" />
  );
};

export default Input;
