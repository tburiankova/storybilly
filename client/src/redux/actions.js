import axios from 'axios';

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

// export const login = () => ({ type: 'LOGIN' });
export const signup = (data) => {
  return async (dispatch) => {
    try {
      const response = await axios.post(
        `${process.env.REACT_APP_BACKEND_URL}/users/signup`,
        data
      );
      dispatch({ type: 'LOGIN' });
    } catch (err) {
      console.log(err.response.data.message);
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
    } catch (err) {
      console.log(err.response.data.message);
    }
  };
};

export const logout = () => ({ type: 'LOGOUT' });
