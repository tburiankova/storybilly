const INITIAL_STATE = {
  isLoggedIn: false,
  user: null,
  isLoading: false,
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
      };
    case 'SET_LOADING':
      return {
        ...state,
        isLoading: true,
      };
    case 'UNSET_LOADING':
      return {
        ...state,
        isLoading: false,
      };
    default:
      return state;
  }
};
