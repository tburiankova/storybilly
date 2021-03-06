import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import { fetchPosts } from '../../redux/actions/dataActions';
import { selectUserPosts } from '../../redux/selectors';

import PostsList from './PostsList';
import Spinner from '../ui/Spinner';

import { Container, NotFound, Label } from '../../styles/sharedStyles';

const MyPosts = ({ posts, loading, userPosts, fetchPosts }) => {
  useEffect(() => {
    if (!posts) {
      fetchPosts();
    }
  }, [posts, fetchPosts]);

  if (loading || !posts) {
    return <Spinner center />;
  }

  if (userPosts.length === 0) {
    return (
      <NotFound>
        <p>You haven't written any stories yet!</p>
      </NotFound>
    );
  }

  return (
    <Container full trans centerCol>
      <Label>Your posts</Label>
      <PostsList posts={userPosts} own />
    </Container>
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
