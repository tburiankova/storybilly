import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import { fetchPosts } from '../redux/actions/dataActions';
import { selectPost } from '../redux/selectors';
import { VALIDATOR_REQUIRE, VALIDATOR_MINLENGTH } from '../utils/validators';

import { useForm } from '../hooks/useForm';
import Spinner from '../components/ui/Spinner';
import Input from '../components/forms/Input';
import Button from '../components/forms/Button';

const UpdatePost = ({ posts, post, loading, fetchPosts }) => {
  useEffect(() => {
    if (posts.length === 0) {
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

  if (loading || posts.length === 0) {
    return <Spinner />;
  }

  if (!post) {
    return <p>No post found...</p>;
  }

  const updatePostHandler = (e) => {
    e.preventDefault();
    // TODO: send to backend
    console.log(formState.inputs);
  };

  const deletePostHandler = () => {
    // TODO: delete in DB
    console.log('Deleting', post._id);
  };

  return (
    <div>
      {/* // TODO: fix conditional rendering */}
      {formState.inputs.title.value && (
        <>
          <form onSubmit={updatePostHandler}>
            <Input
              id="title"
              label="Title"
              validators={[VALIDATOR_REQUIRE()]}
              errorMessage="Please enter a valid title"
              onInput={inputHandler}
              value={formState.inputs.title.value}
              valid={formState.inputs.title.isValid}
            />
            <Input
              id="content"
              inputType="textarea"
              label="Content"
              validators={[VALIDATOR_REQUIRE(), VALIDATOR_MINLENGTH(10)]}
              errorMessage="A story must have at least 10 characters"
              onInput={inputHandler}
              value={formState.inputs.content.value}
              valid={formState.inputs.content.isValid}
            />
            <Input
              id="image"
              label="Image"
              validators={[]}
              onInput={inputHandler}
              value={formState.inputs.image.value}
              valid
            />
            <Button type="submit" disabled={!formState.isFormValid}>
              Update Story
            </Button>
          </form>
          <Button onClick={deletePostHandler}>Delete Story</Button>
        </>
      )}
    </div>
  );
};

const mapStateToProps = (state, ownProps) => ({
  posts: state.data.posts,
  post: selectPost(ownProps.match.params.postId)(state),
  loading: state.data.loading,
});

const mapDispatchToProps = (dispatch) => ({
  fetchPosts: () => dispatch(fetchPosts()),
});

export default connect(mapStateToProps, mapDispatchToProps)(UpdatePost);
