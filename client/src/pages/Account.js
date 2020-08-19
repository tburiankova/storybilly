import React, { useState } from 'react';
import { connect } from 'react-redux';

import {
  VALIDATOR_EMAIL,
  VALIDATOR_MINLENGTH,
  VALIDATOR_REQUIRE,
} from '../utils/validators';
import { useForm } from '../hooks/useForm';
import { signup, login } from '../redux/actions';

import Button from '../components/forms/Button';
import Input from '../components/forms/Input';

const Account = ({ login, signup }) => {
  const [loginMode, setLoginMode] = useState(true);

  const [formState, inputHandler, setFormData] = useForm(
    {
      email: {
        value: '',
        isValid: false,
      },
      password: {
        value: '',
        isValid: false,
      },
    },
    false
  );

  const onSubmitHandler = (e) => {
    e.preventDefault();
    if (loginMode) {
      const user = {
        email: formState.inputs.email.value,
        password: formState.inputs.password.value,
      };
      login(user);
    } else {
      const newUser = {
        name: formState.inputs.name.value,
        email: formState.inputs.email.value,
        password: formState.inputs.email.value,
      };
      signup(newUser);
    }
  };

  const modeHandler = () => {
    if (!loginMode) {
      setFormData(
        {
          ...formState.inputs,
          name: undefined,
        },
        formState.inputs.email.isValid && formState.inputs.password.isValid
      );
    } else {
      setFormData(
        {
          name: {
            value: '',
            isValid: false,
          },
          ...formState.inputs,
        },
        false
      );
    }
    setLoginMode((prevMode) => !prevMode);
  };

  return (
    <div>
      <h2>Log In</h2>
      <form onSubmit={onSubmitHandler}>
        {!loginMode && (
          <Input
            id="name"
            type="text"
            label="Name"
            validators={[VALIDATOR_REQUIRE()]}
            errorMessage="Please enter your name"
            onInput={inputHandler}
          />
        )}
        <Input
          id="email"
          type="email"
          label="Email"
          validators={[VALIDATOR_EMAIL()]}
          errorMessage="Please provide a valid e-mail address"
          onInput={inputHandler}
        />
        <Input
          id="password"
          type="password"
          label="Password"
          validators={[VALIDATOR_MINLENGTH(6)]}
          errorMessage="Password must be at least 6 characters"
          onInput={inputHandler}
        />
        <Button type="submit" disabled={!formState.isFormValid}>
          {loginMode ? 'Log In' : 'Sign Up'}
        </Button>
        <Button type="button" onClick={modeHandler}>
          {loginMode ? 'Sign Up' : 'Log In'}
        </Button>
      </form>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  login: (data) => dispatch(login(data)),
  signup: (data) => dispatch(signup(data)),
});

export default connect(null, mapDispatchToProps)(Account);
