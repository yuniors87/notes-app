import React from 'react';
import styled from 'styled-components';

const StyledLabel = styled.div`
  margin-right: 1rem;
  display: inline-block;
`;

const Label = props => {
  return <StyledLabel>{props.tag}</StyledLabel>;
};

export default Label;
