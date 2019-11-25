import React from 'react';
import styled from 'styled-components/macro'
import PropTypes from 'prop-types';
import SocketSettings from "../containers/SocketSettings";

const StyledContainer = styled.div`
  font-size: 18px;
  font-weight: bold;
  padding: 5px;
  flex: 0 0 auto;
  display: flex;
  flex-direction: row-reverse;
  justify-content: space-between;
`;

const StyledTitle = styled.h1`
  /*text-align: center;*/ 
`;

function Header(props) {
  return (
    <StyledContainer data-test={'HeaderComponent'}>
      {/*<StyledTitle data-test={'title'}>
        {props.appName || "ColliderChat"}
      </StyledTitle>*/}
      <SocketSettings/>
    </StyledContainer>
  )
}

Header.propTypes = {
  appName: PropTypes.string
};

export default Header;
