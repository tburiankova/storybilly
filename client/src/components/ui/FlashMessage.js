import React from 'react';
import { connect } from 'react-redux';

import { hideFlashMessage } from '../../redux/actions/messageActions';

import { Container, Message } from './FlashMessage.styles';

const FlashMessage = ({ message, showMessage, hideMessage }) => {
  if (showMessage) {
    return (
      <Container onClick={hideMessage}>
        <Message>{message}</Message>
      </Container>
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
