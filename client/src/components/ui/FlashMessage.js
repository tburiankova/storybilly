import React from 'react';
import { connect } from 'react-redux';

import { hideFlashMessage } from '../../redux/actions/messageActions';

const styles = {
  position: 'absolute',
  top: '200px',
  left: '50%',
  transform: 'translateX(-50%)',
  backgroundColor: 'black',
  color: 'white',
  padding: '20px 30px',
};

const FlashMessage = ({ message, showMessage, hideMessage }) => {
  if (showMessage) {
    return (
      <div style={styles} onClick={hideMessage}>
        {message}
      </div>
    );
  } else {
    return null;
  }
};

const mapStateToProps = (state) => ({
  message: state.message.message,
  showMessage: state.message.showMessage,
});

const mapDispatchToProps = (dispatch) => ({
  hideMessage: () => dispatch(hideFlashMessage()),
});

export default connect(mapStateToProps, mapDispatchToProps)(FlashMessage);
