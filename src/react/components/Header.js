import React from 'react';
import * as styled from './styles/Header.styles';
import PropTypes from 'prop-types';

function Header(props) {
  return (
    <styled.Container data-test={'HeaderComponent'}>
      <styled.Title data-test={'title'}>
        {props.appName}
      </styled.Title>
    </styled.Container>
  )
}

Header.propTypes = {
  appName: PropTypes.string
};

export default Header;
