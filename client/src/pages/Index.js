import React, { useState } from 'react';

import { connect } from 'react-redux';

import {
  VALIDATOR_EMAIL,
  VALIDATOR_MINLENGTH,
  VALIDATOR_REQUIRE,
} from '../utils/validators';
import { useForm } from '../hooks/useForm';
import { signup, login } from '../redux/actions/authActions';
import { fetchUsers } from '../redux/actions/dataActions';

import Button from '../components/forms/Button';
import Input from '../components/forms/Input';
import ImageUpload from '../components/forms/ImageUpload';
import Spinner from '../components/ui/Spinner';

import {
  Cta,
  Heading,
  Text,
  ButtonWrapper,
  Switch,
  SwitchButton,
  SwitchText,
} from './Index.styles';

const Index = ({ signup, login, fetchUsers, loading }) => {
  const [loginMode, setLoginMode] = useState(false);

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
      const formData = new FormData();
      formData.append('name', formState.inputs.name.value);
      formData.append('email', formState.inputs.email.value);
      formData.append('password', formState.inputs.password.value);
      formData.append('image', formState.inputs.image.value);
      signup(formData);
    }
  };

  const modeHandler = () => {
    if (!loginMode) {
      setFormData(
        {
          ...formState.inputs,
          name: undefined,
          image: undefined,
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
          image: {
            value: null,
            isValid: true,
          },
          ...formState.inputs,
        },
        false
      );
    }
    setLoginMode((prevMode) => !prevMode);
  };

  return (
    <Cta>
      <Heading>Tired of impersonal content?</Heading>
      <Text>
        Here at Storybilly, we all like a good read. Join us today and share
        your favourite stories!
      </Text>
      {loading && <Spinner center />}
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
        {!loginMode && <ImageUpload id="image" onInput={inputHandler} />}
        <ButtonWrapper>
          <Button type="submit" disabled={!formState.isFormValid} size="medium">
            {loginMode ? 'Log In' : 'Sign Up'}
          </Button>
        </ButtonWrapper>
        <Switch>
          <SwitchText>
            {loginMode
              ? `Don't have an account yet?`
              : 'Already have an account?'}
          </SwitchText>
          <SwitchButton type="button" onClick={modeHandler}>
            {loginMode ? 'Sign Up' : 'Log In'}
          </SwitchButton>
        </Switch>
      </form>
    </Cta>
  );
};

const mapStateToProps = (state) => ({
  loading: state.auth.loading,
});

const mapDispatchToProps = (dispatch) => ({
  signup: (data) => dispatch(signup(data)),
  login: (data) => dispatch(login(data)),
  fetchUsers: () => dispatch(fetchUsers()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Index);
