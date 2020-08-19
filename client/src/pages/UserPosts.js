import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import { selectUserPosts } from '../redux/selectors';
import { fetchPosts } from '../redux/actions/dataActions';

import PostsList from '../components/posts/PostsList';
import Spinner from '../components/ui/Spinner';

const UserPosts = ({ posts, userPosts, fetchPosts, loading }) => {
  useEffect(() => {
    if (posts.length === 0) {
      fetchPosts();
    }
  }, []);

  if (loading) {
    return <Spinner />;
  }

  if (!userPosts) {
    return <p>No posts found...</p>;
  }

  return (
    <div>
      <PostsList posts={userPosts} userPosts />
    </div>
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
