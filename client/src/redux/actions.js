import axios from 'axios';

export const fetchPosts = () => {
  return async (dispatch) => {
    try {
      dispatch({ type: 'SET_LOADING' });
      const response = await axios.get('http://localhost:5000/api/posts');
      dispatch({ type: 'FETCH_POSTS', payload: response.data.data });
    } catch (err) {
      console.log(err);
      dispatch({ type: 'SET_ERROR' });
    }
  };
};

export const login = () => ({ type: 'LOGIN' });

export const logout = () => ({ type: 'LOGOUT' });
