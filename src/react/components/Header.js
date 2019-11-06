import React from 'react';
import * as styled from './styles/Header.styles';

function Header(props) {
  return (
    <styled.Container data-test={'HeaderComponent'}>
      <styled.Title data-test={'title'}>
        {props.appName}
      </styled.Title>
    </styled.Container>
  )
}

export default Header;
