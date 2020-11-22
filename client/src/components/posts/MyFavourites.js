import React, { useEffect } from 'react';

import { connect } from 'react-redux';
import { selectFollowed } from '../../redux/selectors';
import { fetchPosts } from '../../redux/actions/dataActions';

import Spinner from '../ui/Spinner';
import PostsList from './PostsList';

import {
  Container,
  NotFound,
  Flexbox,
  Label,
  StyledLink,
} from '../../styles/sharedStyles';

const MyFavourites = ({ user, posts, loading, followedPosts, fetchPosts }) => {
  useEffect(() => {
    if (!posts) {
      fetchPosts();
    }
  }, [posts, fetchPosts]);

  if (loading || !posts) {
    return <Spinner center />;
  }

  if (user.following.length === 0) {
    return (
      <NotFound>
        <Flexbox center column>
          <p>You're not following anyone yet!</p>
          <StyledLink small="true" to="/users">
            Find someone to follow
          </StyledLink>
        </Flexbox>
      </NotFound>
    );
  }

  if (followedPosts.length === 0) {
    return (
      <NotFound>
        <Flexbox center column>
          <p>Users you're following haven't posted any stories yet...</p>
          <StyledLink small="true" to="/posts">
            Explore other stories
          </StyledLink>
        </Flexbox>
      </NotFound>
    );
  }

  return (
    <Container full centerCol>
      <Label>Latest from your favourites</Label>
      <PostsList posts={followedPosts} />
    </Container>
  );
};

const mapStateToProps = (state) => ({
  user: state.auth.user,
  posts: state.data.posts,
  loading: state.data.loading,
  followedPosts: selectFollowed(state.auth.user.following)(state),
});

const mapDispatchToProps = (dispatch) => ({
  fetchPosts: () => dispatch(fetchPosts()),
});

export default connect(mapStateToProps, mapDispatchToProps)(MyFavourites);
