import React from 'react'
import * as styled from './styles/StatusBar.styles';
import PropTypes from 'prop-types';

function StatusBar(props) {
  const { appName, appVersion } = props;
  return (
    <styled.Container
      data-test={'StatusBarComponent'} >
      <span data-test={'app-info'}>
        {appName} {appVersion}
    </span>
    </styled.Container>
  )
}

StatusBar.propTypes = {
  appName: PropTypes.string,
  appVersion: PropTypes.string
};

export default StatusBar;
