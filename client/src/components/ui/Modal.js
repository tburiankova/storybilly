import React from 'react';
import ReactDOM from 'react-dom';
import { Transition } from 'react-transition-group';

import { Container, Message } from './Modal.styles';
import Button from '../forms/Button';
import Backdrop from '../ui/Backdrop';
import Login from '../navigation/Login';
import MarkdownCheatsheet from '../others/MarkdownCheatsheet';

const ModalOverlay = ({
  heading,
  message,
  confirm,
  closeModal,
  confirmModal,
  cheatsheet,
  login,
  state,
}) => {
  const content = (
    <Container state={state}>
      <h2>{heading}</h2>
      <Message>{message}</Message>
      {cheatsheet && <MarkdownCheatsheet />}
      {login && <Login />}
      {confirm ? (
        <div>
          <Button onClick={closeModal} size="medium">
            Cancel
          </Button>
          <Button onClick={confirmModal} size="medium" danger>
            Confirm
          </Button>
        </div>
      ) : (
        <Button onClick={closeModal} size="medium">
          Close
        </Button>
      )}
    </Container>
  );

  return ReactDOM.createPortal(content, document.getElementById('modal'));
};

const Modal = (props) => {
  return (
    <>
      {props.showModal && <Backdrop onClick={props.closeModal} />}
      <Transition in={props.showModal} timeout={500}>
        {(state) => <ModalOverlay {...props} state={state} />}
      </Transition>
    </>
  );
};

export default Modal;
