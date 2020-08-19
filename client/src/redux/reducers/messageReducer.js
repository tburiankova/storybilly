const INITIAL_STATE = {
  message: '',
  showMessage: false,
};

const messageReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
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

export default messageReducer;
