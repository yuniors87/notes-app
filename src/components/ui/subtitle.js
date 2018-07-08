import React from 'react';
import styled from 'styled-components';

const SubtitleStyled = styled.h2`
  font-size: 1.5rem;
  text-decoration: underline;
  margin: 5px 0;
`;

const Subtitle = props => {
  return <SubtitleStyled>{props.subtitle}</SubtitleStyled>;
};

export default Subtitle;
