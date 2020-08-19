export const showFlashMessage = (message) => {
  return (dispatch, state) => {
    dispatch({ type: 'SET_MESSAGE', payload: message });
    dispatch({ type: 'SHOW_MESSAGE' });

    setTimeout(() => {
      if (state().message.showMessage) {
        dispatch({ type: 'HIDE_MESSAGE' });
      }
    }, 5000);
  };
};

export const hideFlashMessage = () => ({
  type: 'HIDE_MESSAGE',
});
