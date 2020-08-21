import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { fetchPosts } from '../redux/actions/dataActions';
import { selectPost } from '../redux/selectors';

import Spinner from '../components/ui/Spinner';

const Post = ({ posts, post, loading, fetchPosts, isLoggedIn, user }) => {
  useEffect(() => {
    if (!posts) {
      fetchPosts();
    }
  }, []);

  if (loading || !posts) {
    return <Spinner />;
  }

  if (!post) {
    return <p>No post found...</p>;
  }

  return (
    <>
      <h1>{post.title}</h1>
      {post.image && (
        <img
          src={`${process.env.REACT_APP_BASE_BACKEND_URL}/${post.image}`}
          alt={post.title}
        />
      )}
      <p>{post.content}</p>
      {isLoggedIn && user._id === post.author && (
        <Link to={`update/${post._id}`}>Manage Post</Link>
      )}
    </>
  );
};

const mapStateToProps = (state, ownProps) => ({
  posts: state.data.posts,
  post: selectPost(ownProps.match.params.postId)(state),
  loading: state.data.loading,
  isLoggedIn: state.auth.isLoggedIn,
  user: state.auth.user,
});

const mapDispatchToProps = (dispatch) => ({
  fetchPosts: () => dispatch(fetchPosts()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Post);
