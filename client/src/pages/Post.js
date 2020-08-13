import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import { fetchPosts } from '../redux/actions';
import { selectPost } from '../redux/selectors';

import Spinner from '../components/ui/Spinner';

const Post = ({ posts, post, loading, fetchPosts }) => {
  useEffect(() => {
    if (posts.length === 0) {
      fetchPosts();
    }
  }, []);

  if (loading || posts.length === 0) {
    return <Spinner />;
  }

  if (!post) {
    return <p>No post found...</p>;
  }

  return <div>{post.title}</div>;
};

const mapStateToProps = (state, ownProps) => ({
  posts: state.data.posts,
  post: selectPost(ownProps.match.params.postId)(state),
  loading: state.data.loading,
});

const mapDispatchToProps = (dispatch) => ({
  fetchPosts: () => dispatch(fetchPosts()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Post);
