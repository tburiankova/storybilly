import React, { useEffect } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import { useHistory } from 'react-router-dom';

import { fetchPosts } from '../redux/actions/dataActions';
import { showFlashMessage } from '../redux/actions/messageActions';
import { selectPost } from '../redux/selectors';
import { VALIDATOR_REQUIRE, VALIDATOR_MINLENGTH } from '../utils/validators';

import { useForm } from '../hooks/useForm';
import Spinner from '../components/ui/Spinner';
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
  showMessage,
}) => {
  const history = useHistory();

  useEffect(() => {
    if (!posts) {
      fetchPosts();
    }
  }, []);

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

    try {
      const response = await axios.patch(
        `${process.env.REACT_APP_BACKEND_URL}/posts/${post._id}`,
        formData,
        { headers }
      );
      fetchPosts();
      showMessage(response.data.message);
      history.push('/posts');
    } catch (err) {
      showMessage(err.response.data.message);
    }
  };

  const deletePostHandler = async () => {
    const headers = { Authorization: `Bearer ${user.token}` };
    try {
      const response = await axios.delete(
        `${process.env.REACT_APP_BACKEND_URL}/posts/${post._id}`,
        { headers }
      );
      fetchPosts();
      showMessage(response.data.message);
      history.push('/posts');
    } catch (err) {
      showMessage(err.response.data.message);
    }
  };

  return (
    <Container>
      <h1>Update Your Story</h1>
      <Flexbox center>
        <StyledLink as="button" onClick={() => alert('hey!')} small>
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
              validators={[VALIDATOR_REQUIRE(), VALIDATOR_MINLENGTH(10)]}
              errorMessage="A story must have at least 10 characters"
              onInput={inputHandler}
              value={post.content}
              valid={true}
            />
            <ImageUpload id="image" onInput={inputHandler} />
            <Button
              type="submit"
              disabled={!formState.isFormValid}
              size="medium"
            >
              Update Story
            </Button>
          </form>
          {user._id === post.author._id && (
            <Button
              type="button"
              onClick={deletePostHandler}
              size="medium"
              danger
            >
              Delete Story
            </Button>
          )}
        </>
      )}
    </Container>
  );
};

const mapStateToProps = (state, ownProps) => ({
  posts: state.data.posts,
  post: selectPost(ownProps.match.params.postId)(state),
  loading: state.data.loading,
  user: state.auth.user,
});

const mapDispatchToProps = (dispatch) => ({
  fetchPosts: () => dispatch(fetchPosts()),
  showMessage: (message) => dispatch(showFlashMessage(message)),
});

export default connect(mapStateToProps, mapDispatchToProps)(UpdatePost);
