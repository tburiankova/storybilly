import React from 'react';
import { connect } from 'react-redux';

import UserInfo from './UserInfo';
import MyPosts from '../posts/MyPosts';
import MyFavourites from '../posts/MyFavourites';

const Account = ({ user }) => {
  return (
    <>
      <UserInfo user={user} own />
      <MyFavourites />
      <MyPosts />
    </>
  );
};

const mapStateToProps = (state) => ({
  user: state.auth.user,
});

export default connect(mapStateToProps)(Account);
