import React from 'react';
import styled from 'styled-components';

const StyledContainer = styled.div`
  font-size: 20px;
  font-weight: bold;
  padding: 5px;
  flex: 0 0 auto;
`;


const StyledTitle = styled.h1`
  text-align: center; 
`;

const Header = props => (
  <StyledContainer>
    <StyledTitle>ColliderChat</StyledTitle>
  </StyledContainer>
);

export default Header;
