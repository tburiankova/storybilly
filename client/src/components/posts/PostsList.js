import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import PostCard from './PostCard';
import Spinner from '../ui/Spinner';

import { NotFound } from '../../styles/sharedStyles';
import { List } from './PostsList.styles';

const PostsList = ({ posts, loading, error, userPosts }) => {
  if (loading) {
    return <Spinner center />;
  }

  if (error) {
    return (
      <NotFound>
        <p>There has been an error, please try again later...</p>
      </NotFound>
    );
  }

  return (
    <List>
      {posts.map((post) => (
        <PostCard key={post._id} post={post} userPosts={userPosts} />
      ))}
    </List>
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
