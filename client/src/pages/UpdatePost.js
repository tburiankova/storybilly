import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { useHistory } from 'react-router-dom';

import { VALIDATOR_REQUIRE, VALIDATOR_MINLENGTH } from '../utils/validators';
import { useForm } from '../hooks/useForm';
import { updatePost, deletePost } from '../redux/actions/dataActions';
import { selectPost } from '../redux/selectors';

import Spinner from '../components/ui/Spinner';
import Modal from '../components/ui/Modal';
import Input from '../components/forms/Input';
import Button from '../components/forms/Button';
import ImageUpload from '../components/forms/ImageUpload';

import { Container, Flexbox, StyledLink } from '../styles/sharedStyles';

const UpdatePost = ({
  posts,
  post,
  user,
  loading,
  fetchPosts,
  updatePost,
  deletePost,
}) => {
  const history = useHistory();
  const [showModal, setShowModal] = useState(false);
  const [showCheatsheet, setShowCheatsheet] = useState(false);

  useEffect(() => {
    if (!posts) {
      fetchPosts();
    }
  }, [posts, fetchPosts]);

  const [formState, inputHandler, setFormData] = useForm(
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
        value: '',
        isValid: false,
      },
    },
    false
  );

  useEffect(() => {
    if (post) {
      setFormData(
        {
          title: {
            value: post.title,
            isValid: true,
          },
          content: {
            value: post.content,
            isValid: true,
          },
          image: {
            value: post.image,
            isValid: true,
          },
        },
        true
      );
    }
  }, [setFormData, post]);

  if (loading || !posts) {
    return <Spinner />;
  }

  if (!post) {
    return <p>No post found...</p>;
  }

  const updatePostHandler = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append('title', formState.inputs.title.value);
    formData.append('content', formState.inputs.content.value);
    formData.append('image', formState.inputs.image.value);

    const headers = { Authorization: `Bearer ${user.token}` };

    updatePost(formData, headers, post._id);
    history.push('/posts');
  };

  const deletePostHandler = async () => {
    const headers = { Authorization: `Bearer ${user.token}` };
    deletePost(headers, post._id);
    history.push('/posts');
  };

  const openModal = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  const openCheatsheet = () => {
    setShowCheatsheet(true);
  };

  const closeCheatsheet = () => {
    setShowCheatsheet(false);
  };

  return (
    <>
      <Modal
        showModal={showModal}
        confirm
        heading="Are you sure?"
        message="Do you really want to delete this post?"
        closeModal={closeModal}
        confirmModal={deletePostHandler}
      />
      <Modal
        heading="Markdown Cheatsheet"
        message="How to write in markdown?"
        cheatsheet
        closeModal={closeCheatsheet}
        showModal={showCheatsheet}
      />
      <Container>
        <h1>Update Your Story</h1>
        <Flexbox center>
          <StyledLink as="button" onClick={openCheatsheet} small>
            Markdown cheatsheet
          </StyledLink>
        </Flexbox>
        {post && (
          <>
            <form onSubmit={updatePostHandler}>
              <Input
                id="title"
                label="Title"
                validators={[VALIDATOR_REQUIRE()]}
                errorMessage="Please enter a valid title"
                onInput={inputHandler}
                value={post.title}
                valid={true}
              />
              <Input
                id="content"
                inputType="textarea"
                label="Content"
                validators={[VALIDATOR_REQUIRE(), VALIDATOR_MINLENGTH(1500)]}
                errorMessage="A story must have at least 1500 characters"
                onInput={inputHandler}
                value={post.content}
                valid={true}
              />
              <ImageUpload id="image" onInput={inputHandler} />
              <Button
                type="submit"
                disabled={!formState.isFormValid || loading}
                size="medium"
                center
              >
                Update Story
              </Button>
            </form>
            {user._id === post.author._id && (
              <Button type="button" onClick={openModal} size="medium" danger>
                Delete Story
              </Button>
            )}
          </>
        )}
      </Container>
    </>
  );
};

const mapStateToProps = (state, ownProps) => ({
  posts: state.data.posts,
  post: selectPost(ownProps.match.params.postId)(state),
  loading: state.data.loading,
  user: state.auth.user,
});

const mapDispatchToProps = (dispatch) => ({
  updatePost: (formData, headers, postId) =>
    dispatch(updatePost(formData, headers, postId)),
  deletePost: (headers, postId) => dispatch(deletePost(headers, postId)),
});

export default connect(mapStateToProps, mapDispatchToProps)(UpdatePost);
