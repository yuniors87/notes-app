import styled, { injectGlobal, css } from 'styled-components';
export const fontSize = {
  xl: '2.4rem',
  lg: '1.8rem',
  md: '1.3rem',
  nm: '1rem',
  sm: '0.75rem'
};
export const theme1 = {
  primary: '#ff0198',
  secondary: '#01c1d6',
  danger: '#eb238e',
  light: '#f4f4f4',
  dark: '#222'
};

export const theme2 = {
  primary: '#6e27c5',
  secondary: '#ffb617',
  danger: '#f16623',
  light: '#f4f4f4',
  dark: '#222'
};

injectGlobal`

  @import url('https://fonts.googleapis.com/css?family=Montserrat:400,900|Roboto');

  body {
    padding: 0;
    margin: 0;
    font-family: Roboto, sans-serif;
  }

  h1 {
    font-family: Montserrat;
  }
`;
