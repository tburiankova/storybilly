import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import { selectUserPosts } from '../redux/selectors';
import { fetchPosts } from '../redux/actions';
import PostsList from '../components/posts/PostsList';

const UserPosts = ({ posts, userPosts, fetchPosts }) => {
  useEffect(() => {
    if (posts.length === 0) {
      fetchPosts();
    }
  }, []);

  return (
    <div>
      <PostsList posts={userPosts} />
    </div>
  );
};

const mapStateToProps = (state, ownProps) => ({
  posts: state.data.posts,
  userPosts: selectUserPosts(ownProps.match.params.userId)(state),
});

const mapDispatchToProps = (dispatch) => ({
  fetchPosts: () => dispatch(fetchPosts()),
});

export default connect(mapStateToProps, mapDispatchToProps)(UserPosts);
