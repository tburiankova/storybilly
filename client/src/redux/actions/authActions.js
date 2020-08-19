import axios from 'axios';

import { showFlashMessage } from './messageActions';

export const signup = (data) => {
  return async (dispatch) => {
    try {
      const response = await axios.post(
        `${process.env.REACT_APP_BACKEND_URL}/users/signup`,
        data
      );
      dispatch({ type: 'LOGIN' });
      dispatch(showFlashMessage(response.data.message));
    } catch (err) {
      dispatch(showFlashMessage(err.response.data.message));
    }
  };
};

export const login = (data) => {
  return async (dispatch) => {
    try {
      const response = await axios.post(
        `${process.env.REACT_APP_BACKEND_URL}/users/login`,
        data
      );
      dispatch({ type: 'LOGIN' });
      dispatch(showFlashMessage(response.data.message));
    } catch (err) {
      dispatch(showFlashMessage(err.response.data.message));
    }
  };
};

export const logout = () => {
  return (dispatch) => {
    dispatch({ type: 'LOGOUT' });
    dispatch(showFlashMessage('Logout successful'));
  };
};
