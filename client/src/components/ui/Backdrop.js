import React from 'react';
import ReactDOM from 'react-dom';

import { BackdropDiv } from './Backdrop.styles';

const Backdrop = ({ onClick }) => {
  const content = <BackdropDiv onClick={onClick} />;
  return ReactDOM.createPortal(content, document.getElementById('backdrop'));
};

export default Backdrop;
