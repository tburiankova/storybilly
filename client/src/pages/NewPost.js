import React from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import { useHistory } from 'react-router-dom';

import Input from '../components/forms/Input';
import Button from '../components/forms/Button';
import { VALIDATOR_REQUIRE, VALIDATOR_MINLENGTH } from '../utils/validators';
import { useForm } from '../hooks/useForm';
import { showFlashMessage } from '../redux/actions/messageActions';
import { fetchPosts, fetchUsers } from '../redux/actions/dataActions';

const NewPost = ({ user, showMessage, fetchPosts, fetchUsers }) => {
  const [formState, inputHandler] = useForm(
    {
      title: {
        value: '',
        isValid: false,
      },
      content: {
        value: '',
        isValid: false,
      },
      image: {
        value: null,
        isValid: false,
      },
    },
    false
  );

  const history = useHistory();

  const onSubmitHandler = async (e) => {
    e.preventDefault();

    const newPost = {
      title: formState.inputs.title.value,
      content: formState.inputs.content.value,
      image: formState.inputs.image.value,
      author: user._id,
    };

    try {
      const response = await axios.post(
        `${process.env.REACT_APP_BACKEND_URL}/posts`,
        newPost
      );
      fetchPosts();
      fetchUsers();
      showMessage(response.data.message);
      history.push('/posts');
    } catch (err) {
      console.log(err);
      showMessage(err.response.data.message);
    }
  };

  return (
    <div>
      <form onSubmit={onSubmitHandler}>
        <Input
          id="title"
          label="Title"
          validators={[VALIDATOR_REQUIRE()]}
          errorMessage="Please enter a valid title"
          onInput={inputHandler}
        />
        <Input
          inputType="textarea"
          id="content"
          label="Your story"
          validators={[VALIDATOR_REQUIRE(), VALIDATOR_MINLENGTH(10)]}
          errorMessage="A story must have at least 10 characters"
          onInput={inputHandler}
        />
        <Input
          id="image"
          label="Image"
          onInput={inputHandler}
          validators={[]}
          valid
        />
        <Button type="submit" disabled={!formState.isFormValid}>
          Post Story
        </Button>
      </form>
    </div>
  );
};

const mapStateToProps = (state) => ({
  user: state.auth.user,
});

const mapDispatchToProps = (dispatch) => ({
  showMessage: (message) => dispatch(showFlashMessage(message)),
  fetchPosts: () => dispatch(fetchPosts()),
  fetchUsers: () => dispatch(fetchUsers()),
});

export default connect(mapStateToProps, mapDispatchToProps)(NewPost);
