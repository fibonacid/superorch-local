import React from 'react';
import PropTypes from 'prop-types';
import * as styled from 'styles/FlashMessage.styles';

function FlashMessage(props) {
  return (
    <styled.Container
      data-test={'FlashMessageComponent'} >
      {props.message}
    </styled.Container>
  )
}

FlashMessage.PropTypes = {
  message: PropTypes.string.required,
  type: PropTypes.string.required
};

export default FlashMessage;

