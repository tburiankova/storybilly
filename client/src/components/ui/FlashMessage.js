import React from 'react';
import { connect } from 'react-redux';
import { Transition } from 'react-transition-group';

import { hideFlashMessage } from '../../redux/actions/messageActions';

import { Container, Message } from './FlashMessage.styles';

const FlashMessage = ({ message, showMessage, hideMessage }) => {
  return (
    <Transition in={showMessage} timeout={500}>
      {(state) => (
        <Container state={state} onClick={hideMessage}>
          <Message>{message}</Message>
        </Container>
      )}
    </Transition>
  );
};

const mapStateToProps = (state) => ({
  message: state.message.message,
  showMessage: state.message.showMessage,
});

const mapDispatchToProps = (dispatch) => ({
  hideMessage: () => dispatch(hideFlashMessage()),
});

export default connect(mapStateToProps, mapDispatchToProps)(FlashMessage);
