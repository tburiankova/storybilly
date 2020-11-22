import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import { selectUserPosts } from '../redux/selectors';
import { fetchPosts } from '../redux/actions/dataActions';

import PostsList from '../components/posts/PostsList';
import Spinner from '../components/ui/Spinner';

import { NotFound } from '../styles/sharedStyles';
import UserInfo from '../components/users/UserInfo';

const UserPosts = ({ posts, userPosts, fetchPosts, loading }) => {
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
        <p>No posts found...</p>
      </NotFound>
    );
  }

  return (
    <>
      <UserInfo user={userPosts[0].author} />
      <PostsList posts={userPosts} userPosts />
    </>
  );
};

const mapStateToProps = (state, ownProps) => ({
  posts: state.data.posts,
  userPosts: selectUserPosts(ownProps.match.params.userId)(state),
  loading: state.data.loading,
});

const mapDispatchToProps = (dispatch) => ({
  fetchPosts: () => dispatch(fetchPosts()),
});

export default connect(mapStateToProps, mapDispatchToProps)(UserPosts);
