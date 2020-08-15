import React from 'react';

const Button = ({ disabled, type, children }) => {
  return (
    <button type={type} disabled={disabled}>
      {children}
    </button>
  );
};

export default Button;
