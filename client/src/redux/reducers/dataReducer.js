const INITIAL_STATE = {
  users: [
    {
      name: 'Jane',
      id: 1,
      image: 'https://randomuser.me/api/portraits/women/36.jpg',
      posts: 3,
    },
    {
      name: 'John',
      id: 2,
      image: 'https://randomuser.me/api/portraits/men/82.jpg',
      posts: 2,
    },
  ],
  posts: [],
  loading: false,
  error: false,
  message: 'Some message',
  showMessage: true,
};

const dataReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'FETCH_POSTS':
      return {
        ...state,
        posts: action.payload,
        loading: false,
      };
    case 'SET_LOADING':
      return {
        ...state,
        loading: true,
      };
    case 'SET_ERROR':
      return {
        ...state,
        loading: false,
        error: true,
      };
    case 'SET_MESSAGE':
      return {
        ...state,
        message: action.payload,
      };
    case 'SHOW_MESSAGE':
      return {
        ...state,
        showMessage: true,
      };
    case 'HIDE_MESSAGE':
      return {
        ...state,
        showMessage: false,
      };
    default:
      return state;
  }
};

export default dataReducer;
