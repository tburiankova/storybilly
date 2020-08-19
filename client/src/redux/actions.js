// import axios from 'axios';

// export const fetchPosts = () => {
//   return async (dispatch) => {
//     try {
//       dispatch({ type: 'SET_LOADING' });
//       const response = await axios.get(
//         `${process.env.REACT_APP_BACKEND_URL}/posts`
//       );
//       dispatch({ type: 'FETCH_POSTS', payload: response.data.posts });
//     } catch (err) {
//       console.log(err);
//       dispatch({ type: 'SET_ERROR' });
//     }
//   };
// };
