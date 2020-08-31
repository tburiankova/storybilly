const INITIAL_STATE = {
  isLoggedIn: false,
  user: null,
  loading: false,
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'LOGIN':
      return {
        ...state,
        isLoggedIn: true,
        user: action.payload,
        loading: false,
      };
    case 'LOGOUT':
      return {
        ...state,
        isLoggedIn: false,
        user: null,
      };
    case 'LOAD_USER':
      return {
        ...state,
        isLoggedIn: true,
        loading: false,
        user: {
          ...action.payload,
          token: JSON.parse(localStorage.getItem('storybilly')).token,
        },
      };
    case 'SET_LOADING_USER':
      return {
        ...state,
        loading: true,
      };
    case 'UNSET_LOADING_USER':
      return {
        ...state,
        loading: false,
      };
    case 'FOLLOW':
      return {
        ...state,
        user: {
          ...state.user,
          following: [...state.user.following, action.payload.userToFollow],
        },
      };
    case 'UNFOLLOW':
      return {
        ...state,
        user: {
          ...state.user,
          following: state.user.following.filter(
            (user) => user !== action.payload.userToUnfollow
          ),
        },
      };
    default:
      return state;
  }
};
