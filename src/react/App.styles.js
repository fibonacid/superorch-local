import styled, { createGlobalStyle } from 'styled-components'
import reset from 'styled-reset';
import normalize from "styled-normalize";

export const GlobalStyle = createGlobalStyle`
  ${normalize}
  ${reset}
  html, body {
    height: 100%;
  }
  #root {
    height: 100%;
  }
`;

// Styles
export const Container = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
`;

export const Wrapper = styled.div`
  flex: 1 1 100%;
  overflow-y: auto;
  display: flex;
  border-top: solid 1px black;
  border-bottom: solid 1px black;
`;
