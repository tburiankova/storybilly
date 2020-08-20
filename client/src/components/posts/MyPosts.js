import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import { fetchPosts } from '../../redux/actions/dataActions';
import { selectUserPosts } from '../../redux/selectors';

import PostsList from './PostsList';
import Spinner from '../ui/Spinner';

const MyPosts = ({ posts, loading, userPosts, fetchPosts }) => {
  useEffect(() => {
    if (posts.length === 0) {
      fetchPosts();
    }
  }, []);

  if (loading) {
    return <Spinner />;
  }

  if (userPosts.length === 0) {
    return <p>No posts found...</p>;
  }

  return (
    <div>
      <PostsList posts={userPosts} />
    </div>
  );
};

const mapStateToProps = (state) => ({
  posts: state.data.posts,
  loading: state.data.loading,
  userPosts: selectUserPosts(state.auth.user._id)(state),
});

const mapDispatchToProps = (dispatch) => ({
  fetchPosts: () => dispatch(fetchPosts()),
});

export default connect(mapStateToProps, mapDispatchToProps)(MyPosts);
