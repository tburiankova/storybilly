import React, { useReducer, useEffect } from 'react';

import { validate } from '../../utils/validators';
import { StyledInput, TextArea, Label, ErrorMessage } from './Input.styles';

const inputReducer = (state, action) => {
  switch (action.type) {
    case 'CHANGE':
      return {
        ...state,
        value: action.value,
        isValid: validate(action.value, action.validators),
      };
    case 'TOUCH':
      return {
        ...state,
        isTouched: true,
      };
    default:
      return state;
  }
};

const Input = ({
  id,
  value,
  label,
  type,
  rows,
  placeholder,
  inputType,
  errorMessage,
  validators,
  onInput,
  valid,
  size,
}) => {
  const [inputState, dispatch] = useReducer(inputReducer, {
    value: value || '',
    isValid: valid || false,
    isTouched: false,
  });

  useEffect(() => {
    onInput(id, inputState.value, inputState.isValid);
  }, [id, onInput, inputState.value, inputState.isValid]);

  const onChangeHandler = (e) => {
    dispatch({ type: 'CHANGE', value: e.target.value, validators });
  };

  const onBlurHandler = () => {
    dispatch({ type: 'TOUCH' });
  };

  const input =
    inputType === 'textarea' ? (
      <TextArea
        id={id}
        rows={rows || 20}
        onChange={onChangeHandler}
        onBlur={onBlurHandler}
        value={inputState.value}
      />
    ) : (
      <StyledInput
        id={id}
        type={type}
        placeholder={placeholder}
        onChange={onChangeHandler}
        onBlur={onBlurHandler}
        value={inputState.value}
        size={size}
      />
    );
  return (
    <>
      {size !== 'small' && (
        <Label htmlFor={id} size={size}>
          {label}
        </Label>
      )}
      {input}
      {!inputState.isValid && inputState.isTouched && (
        <ErrorMessage size={size}>{errorMessage}</ErrorMessage>
      )}
    </>
  );
};

export default Input;
