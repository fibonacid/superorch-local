import React from 'react'
import * as styled from './styles/StatusBar.styles';

function StatusBar(props) {
  const { appName, appVersion } = props;
  return (
    <styled.Container>
      <span>{appName} {appVersion}</span>
    </styled.Container>
  )
}

export default StatusBar;
