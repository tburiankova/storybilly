import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import PostCard from './PostCard';

const PostsList = ({ posts, loading, error }) => {
  if (loading) {
    return <p>Getting posts...</p>;
  }

  if (error) {
    return <p>There has been an error, please try again later...</p>;
  }

  return (
    <ul>
      {posts.map((post) => (
        <PostCard key={post._id} post={post} />
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
