import React from 'react'
import PropTypes from 'prop-types';
import styled from 'styled-components/macro'

export const StyledContainer = styled.div`
  padding: 5px;
  text-align: right;
  font-size: 14px;
  flex: 0 0 auto;
`;

function StatusBar(props) {
  const { appName, appVersion } = props;
  return (
    <StyledContainer
      data-test={'StatusBarComponent'} >
      <span data-test={'app-info'}>
        {appName} {appVersion}
    </span>
    </StyledContainer>
  )
}

StatusBar.propTypes = {
  appName: PropTypes.string,
  appVersion: PropTypes.string
};

export default StatusBar;
