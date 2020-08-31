import axios from 'axios';
import { showFlashMessage } from './messageActions';

export const fetchPosts = () => {
  return async (dispatch) => {
    try {
      dispatch({ type: 'SET_LOADING' });
      const response = await axios.get(
        `${process.env.REACT_APP_BACKEND_URL}/posts`
      );
      dispatch({ type: 'FETCH_POSTS', payload: response.data.posts });
    } catch (err) {
      console.log(err);
      dispatch({ type: 'SET_ERROR' });
    }
  };
};

export const fetchUsers = () => {
  return async (dispatch) => {
    try {
      dispatch({ type: 'SET_LOADING' });
      const response = await axios.get(
        `${process.env.REACT_APP_BACKEND_URL}/users`
      );
      dispatch({ type: 'FETCH_USERS', payload: response.data.users });
    } catch (err) {
      console.log(err);
      dispatch({ type: 'SET_ERROR' });
    }
  };
};

export const saveNewPost = (formData, headers) => {
  return async (dispatch) => {
    try {
      dispatch({ type: 'SET_LOADING' });
      const response = await axios.post(
        `${process.env.REACT_APP_BACKEND_URL}/posts`,
        formData,
        { headers }
      );
      dispatch({ type: 'SAVE_NEW_POST', payload: response.data });
      dispatch(showFlashMessage(response.data.message));
    } catch (err) {
      dispatch(showFlashMessage(err.response.data.message));
      dispatch({ type: 'UNSET_LOADING' });
    }
  };
};

export const updatePost = (formData, headers, postId) => {
  return async (dispatch) => {
    try {
      dispatch({ type: 'SET_LOADING' });
      const response = await axios.patch(
        `${process.env.REACT_APP_BACKEND_URL}/posts/${postId}`,
        formData,
        { headers }
      );
      dispatch({ type: 'UPDATE_POST', payload: response.data.post });
      dispatch(showFlashMessage(response.data.message));
    } catch (err) {
      dispatch(showFlashMessage(err.response.data.message));
      dispatch({ type: 'UNSET_LOADING' });
    }
  };
};

export const deletePost = (headers, postId) => {
  return async (dispatch) => {
    try {
      dispatch({ type: 'SET_LOADING' });
      const response = await axios.delete(
        `${process.env.REACT_APP_BACKEND_URL}/posts/${postId}`,
        { headers }
      );
      dispatch({ type: 'DELETE_POST', payload: response.data.post });
      dispatch(showFlashMessage(response.data.message));
    } catch (err) {
      dispatch(showFlashMessage(err.response.data.message));
      dispatch({ type: 'UNSET_LOADING' });
    }
  };
};

export const follow = (headers, userToFollow, userFollowing) => {
  return async (dispatch) => {
    try {
      dispatch({ type: 'SET_FOLLOWS_LOADING' });
      const response = await axios.patch(
        `${process.env.REACT_APP_BACKEND_URL}/follows/follow/${userToFollow}`,
        { data: null },
        { headers }
      );
      dispatch(showFlashMessage(response.data.message));
      dispatch({ type: 'FOLLOW', payload: { userToFollow, userFollowing } });
    } catch (err) {
      dispatch(showFlashMessage(err.response.data.message));
    }
  };
};

export const unfollow = (headers, userToUnfollow, userUnfollowing) => {
  return async (dispatch) => {
    try {
      dispatch({ type: 'SET_FOLLOWS_LOADING' });
      const response = await axios.patch(
        `${process.env.REACT_APP_BACKEND_URL}/follows/unfollow/${userToUnfollow}`,
        { data: null },
        { headers }
      );
      dispatch(showFlashMessage(response.data.message));
      dispatch({
        type: 'UNFOLLOW',
        payload: { userToUnfollow, userUnfollowing },
      });
    } catch (err) {
      dispatch(showFlashMessage(err.response.data.message));
    }
  };
};
