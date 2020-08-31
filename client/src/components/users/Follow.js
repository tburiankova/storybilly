import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';

import { follow, unfollow } from '../../redux/actions/dataActions';

import { StyledLink } from '../../styles/sharedStyles';

const Follow = ({ userId, user, isLoggedIn, follow, unfollow, loading }) => {
  const [followMode, setFollowMode] = useState(true);

  useEffect(() => {
    if (isLoggedIn && user.following.includes(userId)) {
      setFollowMode(false);
    }
  }, [isLoggedIn]);

  const onClickHandler = async () => {
    const headers = { Authorization: `Bearer ${user.token}` };

    if (followMode) {
      follow(headers, userId, user._id);
      setFollowMode(false);
    } else {
      unfollow(headers, userId, user._id);
      setFollowMode(true);
    }
  };

  return (
    <>
      <StyledLink
        as="button"
        small
        onClick={onClickHandler}
        disabled={!isLoggedIn || userId === user._id || loading}
      >
        {followMode ? 'Follow' : 'Unfollow'}
      </StyledLink>
    </>
  );
};

const mapStateToProps = (state) => ({
  isLoggedIn: state.auth.isLoggedIn,
  user: state.auth.user,
  loading: state.data.followsLoading,
});

const mapDispatchToProps = (dispatch) => ({
  follow: (headers, userToFollow, userFollowing) =>
    dispatch(follow(headers, userToFollow, userFollowing)),
  unfollow: (headers, userToUnfollow, userUnfollowing) =>
    dispatch(unfollow(headers, userToUnfollow, userUnfollowing)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Follow);
