import React from 'react';
import PropTypes from 'prop-types';

function FlashMessage(props) {
  return (
    <div data-test={'FlashMessageComponent'} >
      {props.message}
    </div>
  )
}

FlashMessage.propTypes = {
  message: PropTypes.string,
  type: PropTypes.string
};

export default FlashMessage;

