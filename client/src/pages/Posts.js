import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { fetchPosts } from '../redux/actions/dataActions';
import PostsList from '../components/posts/PostsList';
import Spinner from '../components/ui/Spinner';

import { NotFound } from '../styles/sharedStyles';

const Posts = ({ posts, fetchPosts }) => {
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
});

const mapDispatchToProps = (dispatch) => ({
  fetchPosts: () => dispatch(fetchPosts()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Posts);
