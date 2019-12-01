import React from 'react';
import styled from 'styled-components/macro'
import PropTypes from 'prop-types';

const StyledContainer = styled.div`
  font-size: 18px;
  font-weight: bold;
  padding: 5px;
  flex: 0 0 auto;
  display: flex;
  justify-content: center;
`;

const StyledTitle = styled.h1`
  /*text-align: center;*/ 
`;

function Header(props) {
  return (
    <StyledContainer data-test={'HeaderComponent'}>
      <StyledTitle data-test={'title'}>
        {props.appName || "ColliderChat"}
      </StyledTitle>
    </StyledContainer>
  )
}

Header.propTypes = {
  appName: PropTypes.string
};

export default Header;
