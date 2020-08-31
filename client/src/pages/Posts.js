import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { fetchPosts } from '../redux/actions/dataActions';
import PostsList from '../components/posts/PostsList';
import Spinner from '../components/ui/Spinner';

import { NotFound } from '../styles/sharedStyles';

const Posts = ({ posts, error, fetchPosts }) => {
  useEffect(() => {
    if (!posts) {
      fetchPosts();
    }
  }, []);

  if (!posts) {
    return <Spinner center />;
  }

  if (posts.length === 0) {
    return (
      <NotFound>
        <p>No posts found...</p>
      </NotFound>
    );
  }

  if (error) {
    return (
      <NotFound>
        <p>Something went wrong, please try again later...</p>
      </NotFound>
    );
  }

  return (
    <div>
      <PostsList posts={posts} />
    </div>
  );
};

Posts.propTypes = {
  posts: PropTypes.array,
  fetchPosts: PropTypes.func,
};

const mapStateToProps = (state) => ({
  posts: state.data.posts,
  error: state.data.error,
});

const mapDispatchToProps = (dispatch) => ({
  fetchPosts: () => dispatch(fetchPosts()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Posts);
