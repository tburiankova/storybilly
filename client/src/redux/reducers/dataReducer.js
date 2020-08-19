const INITIAL_STATE = {
  users: [],
  posts: [],
  loading: false,
  error: false,
};

const dataReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'FETCH_POSTS':
      return {
        ...state,
        posts: action.payload,
        loading: false,
      };
    case 'FETCH_USERS':
      return {
        ...state,
        users: action.payload,
        loading: false,
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
    case 'SET_ERROR':
      return {
        ...state,
        loading: false,
        error: true,
      };
    default:
      return state;
  }
};

export default dataReducer;
