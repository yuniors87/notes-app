import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Head = styled.header`
  max-width: 100%;
  height: 60px;
  line-height: 60px;
  background: #65c0ba;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const StyledLink = styled.div`
  color: #fff;
  display: inline-block;
  padding: 10px 15px;
  line-height: 1;
  text-decoration: none;
  border-radius: 2px;
  cursor: pointer;
  &:hover {
    box-shadow: 0 0 0 1px #fff;
  }
`;

class Header extends Component {
  render() {
    return (
      <Head>
        <Link to="/">
          <StyledLink>Home</StyledLink>
        </Link>
        <Link to="/notes">
          <StyledLink>Notes</StyledLink>
        </Link>
        <Link to="/companies">
          <StyledLink>Companies</StyledLink>
        </Link>
      </Head>
    );
  }
}

export default Header;
