import React from 'react';
import styled from 'styled-components';

const StyledItem = styled.li`
  list-style: none;
  background-color: rgba(0, 0, 0, 0.05);
  background-image: linear-gradient(
    90deg,
    #ffd32e 10px,
    #eee 10px,
    #eee 11px,
    transparent 11px
  );
  padding: 10px 15px 10px 25px;
  border: 1px solid #ccc;
  box-shadow: inset 1px 1px 0 rgba(255, 255, 255, 0.5);
  margin-bottom: 5px;
  width: 100%;
  box-sizing: border-box;
  cursor: pointer;
  border-radius: 3px;
`;

const ListItem = (props) => {
  return (
    <StyledItem>
      {props.children}
    </StyledItem>
  )
};

export default ListItem;
