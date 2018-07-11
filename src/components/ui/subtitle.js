import React from 'react';
import styled from 'styled-components';

const SubtitleStyled = styled.h2`
  font-size: 1.5rem;
  font-weight: 400;
  margin: 5px 0;
  border-bottom: 2px solid ${props => props.theme.dark};
`;

const Subtitle = props => {
  return <SubtitleStyled>{props.subtitle}</SubtitleStyled>;
};

export default Subtitle;
