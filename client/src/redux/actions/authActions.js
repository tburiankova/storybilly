import axios from 'axios';

import { showFlashMessage } from './messageActions';

export const signup = (data) => {
  return async (dispatch) => {
    try {
      dispatch({ type: 'SET_LOADING' });
      const response = await axios.post(
        `${process.env.REACT_APP_BACKEND_URL}/users/signup`,
        data
      );
      dispatch({ type: 'LOGIN', payload: response.data.user });

      localStorage.setItem(
        'storybilly',
        JSON.stringify({
          userId: response.data.user._id,
          token: response.data.user.token,
        })
      );

      dispatch(showFlashMessage(response.data.message));
    } catch (err) {
      dispatch(showFlashMessage(err.response.data.message));
    } finally {
      dispatch({ type: 'UNSET_LOADING' });
    }
  };
};

export const login = (data) => {
  return async (dispatch) => {
    try {
      dispatch({ type: 'SET_LOADING' });
      const response = await axios.post(
        `${process.env.REACT_APP_BACKEND_URL}/users/login`,
        data
      );
      dispatch({ type: 'LOGIN', payload: response.data.user });

      // 3 days
      const tokenExpiration = new Date(new Date().getTime() + 259200000);

      localStorage.setItem(
        'storybilly',
        JSON.stringify({
          userId: response.data.user._id,
          token: response.data.user.token,
          expiration: tokenExpiration.toISOString(),
        })
      );
      dispatch(showFlashMessage(response.data.message));
    } catch (err) {
      dispatch(showFlashMessage(err.response.data.message));
      console.log(err);
    } finally {
      dispatch({ type: 'UNSET_LOADING' });
    }
  };
};

export const logout = () => {
  return (dispatch) => {
    dispatch({ type: 'LOGOUT' });
    localStorage.removeItem('storybilly');
    dispatch(showFlashMessage('Logout successful'));
  };
};

export const loadUser = (token) => {
  return async (dispatch) => {
    const headers = { Authorization: `Bearer ${token}` };
    try {
      dispatch({ type: 'SET_LOADING' });

      const response = await axios.get(
        `${process.env.REACT_APP_BACKEND_URL}/users/user`,
        { headers }
      );

      dispatch({ type: 'LOAD_USER', payload: response.data.user });
    } catch (err) {
      console.log(err);
    } finally {
      dispatch({ type: 'UNSET_LOADING' });
    }
  };
};
