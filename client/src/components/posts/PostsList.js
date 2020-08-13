import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import PostCard from './PostCard';
import Spinner from '../ui/Spinner';

const PostsList = ({ posts, loading, error, userPosts }) => {
  if (loading) {
    return <Spinner />;
  }

  if (error) {
    return <p>There has been an error, please try again later...</p>;
  }

  return (
    <ul>
      {posts.map((post) => (
        <PostCard key={post._id} post={post} userPosts={userPosts} />
      ))}
    </ul>
  );
};

PostsList.propTypes = {
  loading: PropTypes.bool,
  error: PropTypes.bool,
};

const mapStateToProps = (state) => ({
  loading: state.data.loading,
  error: state.data.error,
});

export default connect(mapStateToProps)(PostsList);
