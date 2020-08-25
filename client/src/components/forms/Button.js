import React from 'react';

import { StyledButton } from './Button.styles';

const Button = ({ disabled, type, children, onClick, size }) => {
  return (
    <StyledButton type={type} disabled={disabled} onClick={onClick} size={size}>
      {children}
    </StyledButton>
  );
};

export default Button;
