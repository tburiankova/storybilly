import React from 'react';

const Button = ({ disabled, type, children, onClick }) => {
  return (
    <button type={type} disabled={disabled} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
