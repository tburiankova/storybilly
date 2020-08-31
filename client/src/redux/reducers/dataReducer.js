const INITIAL_STATE = {
  users: null,
  posts: null,
  loading: false,
  error: false,
  followsLoading: false,
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

    case 'SAVE_NEW_POST':
      const newPost = { ...action.payload.post, author: action.payload.user };

      return {
        ...state,
        loading: false,
        posts: [newPost, ...state.posts],
        users: state.users
          ? state.users.map((user) => {
              if (user._id === action.payload.user._id) {
                return {
                  ...user,
                  posts: [action.payload.post._id, ...user.posts],
                };
              } else {
                return user;
              }
            })
          : null,
      };

    case 'UPDATE_POST':
      return {
        ...state,
        loading: false,
        posts: state.posts
          ? state.posts.map((post) => {
              if (post._id === action.payload._id) {
                return {
                  ...post,
                  title: action.payload.title,
                  content: action.payload.content,
                  image: action.payload.image,
                };
              } else {
                return post;
              }
            })
          : null,
      };

    case 'DELETE_POST':
      return {
        ...state,
        loading: false,
        posts: state.posts
          ? state.posts.filter((post) => post._id !== action.payload._id)
          : null,
        users: state.users
          ? state.users.map((user) => {
              if (user._id === action.payload.author) {
                return {
                  ...user,
                  posts: user.posts.filter(
                    (post) => post !== action.payload._id
                  ),
                };
              } else {
                return user;
              }
            })
          : null,
      };

    case 'SET_FOLLOWS_LOADING':
      return {
        ...state,
        followsLoading: true,
      };

    case 'FOLLOW':
      return {
        ...state,
        followsLoading: false,
        users: state.users
          ? state.users.map((user) => {
              if (user._id === action.payload.userToFollow) {
                return {
                  ...user,
                  followers: [...user.followers, action.payload.userFollowing],
                };
              } else if (user._id === action.payload.userFollowing) {
                return {
                  ...user,
                  following: [...user.following, action.payload.userToFollow],
                };
              } else {
                return user;
              }
            })
          : null,
      };

    case 'UNFOLLOW':
      return {
        ...state,
        followsLoading: false,
        users: state.users
          ? state.users.map((user) => {
              if (user._id === action.payload.userToUnfollow) {
                return {
                  ...user,
                  followers: user.followers.filter(
                    (user) => user !== action.payload.userUnfollowing
                  ),
                };
              } else if (user._id === action.payload.userUnfollowing) {
                return {
                  ...user,
                  following: user.following.filter(
                    (user) => user !== action.payload.userToUnfollow
                  ),
                };
              } else {
                return user;
              }
            })
          : null,
      };
    default:
      return state;
  }
};

export default dataReducer;
