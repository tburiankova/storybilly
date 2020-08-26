import React from 'react';

import { StyledButton } from './Button.styles';

const Button = ({
  disabled,
  type,
  children,
  onClick,
  size,
  danger,
  center,
}) => {
  return (
    <StyledButton
      type={type}
      disabled={disabled}
      onClick={onClick}
      size={size}
      danger={danger}
      center={center}
    >
      {children}
    </StyledButton>
  );
};

export default Button;
