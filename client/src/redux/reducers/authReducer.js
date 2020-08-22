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
        user: {
          ...action.payload,
          token: JSON.parse(localStorage.getItem('storybilly')).token,
        },
      };
    case 'SET_LOADING':
      return {
        ...state,
        loading: true,
      };
    case 'UNSET_LOADING':
      return {
        ...state,
        loading: false,
      };
    default:
      return state;
  }
};
