import React from 'react';
import styled from 'styled-components';

const StyledList = styled.ul`
  margin: 0 auto;
  padding: 0;
  overflow-y: auto;
  border: 1px solid rgba(0, 0, 0, 0.1);
  border-left: none;
  border-right: none;
`;

const List = props => {
  return <StyledList>{props.children}</StyledList>;
};

export default List;
