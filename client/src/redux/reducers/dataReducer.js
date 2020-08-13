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
    default:
      return state;
  }
};

export default dataReducer;
