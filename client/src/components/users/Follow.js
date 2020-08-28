import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';

import { loadUser } from '../../redux/actions/authActions';
import { showFlashMessage } from '../../redux/actions/messageActions';

import { StyledLink } from '../../styles/sharedStyles';

const Follow = ({ userId, user, isLoggedIn, loadUser, showMessage }) => {
  const [state, setState] = useState({ follow: true, followers: [] });

  useEffect(() => {
    if (user.following.includes(userId)) {
      setState({ ...state, follow: false });
    }
  }, []);

  const onClickHandler = async () => {
    const headers = { Authorization: `Bearer ${user.token}` };

    if (state.follow) {
      const response = await axios.patch(
        `${process.env.REACT_APP_BACKEND_URL}/follows/follow/${userId}`,
        { data: null },
        { headers }
      );
      setState({ ...state, follow: false });
      loadUser(user.token);
      showMessage(response.data.message);
    } else {
      const response = await axios.patch(
        `${process.env.REACT_APP_BACKEND_URL}/follows/unfollow/${userId}`,
        { data: null },
        { headers }
      );
      setState({ ...state, follow: true });
      loadUser(user.token);
      showMessage(response.data.message);
    }
  };

  return (
    <>
      <StyledLink
        as="button"
        small
        onClick={onClickHandler}
        disabled={!isLoggedIn || userId === user._id}
      >
        {state.follow ? 'Follow' : 'Unfollow'}
      </StyledLink>
    </>
  );
};

const mapStateToProps = (state) => ({
  isLoggedIn: state.auth.isLoggedIn,
  user: state.auth.user,
});

const mapDispatchToProps = (dispatch) => ({
  loadUser: (token) => dispatch(loadUser(token)),
  showMessage: (message) => dispatch(showFlashMessage(message)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Follow);
