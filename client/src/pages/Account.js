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
import MyPosts from '../components/posts/MyPosts';

const Account = ({ login, signup, isLoggedIn, user, loading }) => {
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

  if (isLoggedIn) {
    return (
      <div>
        <div>Welcome, {user.name}!</div>
        <img
          src={`${process.env.REACT_APP_BASE_BACKEND_URL}/${user.image}`}
          alt={user.name}
        />
        <MyPosts />
      </div>
    );
  } else {
    return (
      <div>
        <h2>{loginMode ? 'Log In' : 'Sign Up'}</h2>
        {loading && <Spinner />}
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
          <Button type="submit" disabled={!formState.isFormValid}>
            {loginMode ? 'Log In' : 'Sign Up'}
          </Button>
          <Button type="button" onClick={modeHandler}>
            {loginMode ? 'Sign Up' : 'Log In'}
          </Button>
        </form>
      </div>
    );
  }
};

const mapStateToProps = (state) => ({
  isLoggedIn: state.auth.isLoggedIn,
  user: state.auth.user,
  loading: state.auth.loading,
});

const mapDispatchToProps = (dispatch) => ({
  login: (data) => dispatch(login(data)),
  signup: (data) => dispatch(signup(data)),
  fetchUsers: () => dispatch(fetchUsers()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Account);
