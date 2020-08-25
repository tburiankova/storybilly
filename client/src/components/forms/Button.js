import React from 'react';

import { StyledButton } from './Button.styles';

const Button = ({ disabled, type, children, onClick, size, danger }) => {
  return (
    <StyledButton
      type={type}
      disabled={disabled}
      onClick={onClick}
      size={size}
      danger={danger}
    >
      {children}
    </StyledButton>
  );
};

export default Button;
