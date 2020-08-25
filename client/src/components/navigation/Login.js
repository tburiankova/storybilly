import React from 'react';
import { connect } from 'react-redux';

import { useForm } from '../../hooks/useForm';
import { login } from '../../redux/actions/authActions';
import { VALIDATOR_EMAIL, VALIDATOR_MINLENGTH } from '../../utils/validators';
import Input from '../forms/Input';
import Button from '../forms/Button';
import Spinner from '../ui/Spinner';

const Login = ({ login, loading }) => {
  const [formState, inputHandler] = useForm(
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

    const user = {
      email: formState.inputs.email.value,
      password: formState.inputs.password.value,
    };
    login(user);
  };

  return (
    <form onSubmit={onSubmitHandler}>
      <Input
        id="email"
        type="email"
        placeholder="Email"
        validators={[VALIDATOR_EMAIL()]}
        errorMessage="Please provide a valid e-mail address"
        onInput={inputHandler}
        size="small"
      />
      <Input
        id="password"
        type="password"
        placeholder="Password"
        validators={[VALIDATOR_MINLENGTH(6)]}
        errorMessage="Password must be at least 6 characters"
        onInput={inputHandler}
        size="small"
      />
      {loading && <Spinner small center />}
      <Button type="submit" disabled={!formState.isFormValid} size="small">
        Log In
      </Button>
    </form>
  );
};

const mapStateToProps = (state) => ({
  loading: state.auth.loading,
});

const mapDispatchToProps = (dispatch) => ({
  login: (data) => dispatch(login(data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);
