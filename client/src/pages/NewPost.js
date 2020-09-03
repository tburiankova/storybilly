import React, { useState } from 'react';
import { connect } from 'react-redux';
import { useHistory } from 'react-router-dom';

import { VALIDATOR_REQUIRE, VALIDATOR_MINLENGTH } from '../utils/validators';
import { useForm } from '../hooks/useForm';
import { saveNewPost } from '../redux/actions/dataActions';

import Input from '../components/forms/Input';
import Button from '../components/forms/Button';
import ImageUpload from '../components/forms/ImageUpload';
import Modal from '../components/ui/Modal';

import { Container, Flexbox, StyledLink } from '../styles/sharedStyles';

const NewPost = ({ user, loading, saveNewPost }) => {
  const [showModal, setShowModal] = useState(false);
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
        isValid: true,
      },
    },
    false
  );

  const history = useHistory();

  const onSubmitHandler = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append('title', formState.inputs.title.value);
    formData.append('content', formState.inputs.content.value);
    formData.append('image', formState.inputs.image.value);

    const headers = { Authorization: `Bearer ${user.token}` };

    saveNewPost(formData, headers);

    history.push('/posts');
  };

  const openModal = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <>
      <Modal
        heading="Markdown Cheatsheet"
        message="How to write in markdown?"
        cheatsheet
        closeModal={closeModal}
        showModal={showModal}
      />
      <Container>
        <h1>Create a New Story</h1>
        <Flexbox center>
          <StyledLink as="button" onClick={openModal} small>
            Markdown cheatsheet
          </StyledLink>
        </Flexbox>
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
            validators={[VALIDATOR_REQUIRE(), VALIDATOR_MINLENGTH(1500)]}
            errorMessage="A story must have at least 1500 characters"
            onInput={inputHandler}
          />
          <ImageUpload
            id="image"
            onInput={inputHandler}
            errorMessage="Please select an image"
          />
          <Button
            type="submit"
            disabled={!formState.isFormValid || loading}
            size="medium"
            center
          >
            Post Story
          </Button>
        </form>
      </Container>
    </>
  );
};

const mapStateToProps = (state) => ({
  user: state.auth.user,
  loading: state.data.loading,
});

const mapDispatchToProps = (dispatch) => ({
  saveNewPost: (formData, headers) => dispatch(saveNewPost(formData, headers)),
});

export default connect(mapStateToProps, mapDispatchToProps)(NewPost);
