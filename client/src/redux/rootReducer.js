import { combineReducers } from 'redux';

import dataReducer from './reducers/dataReducer';
import authReducer from './reducers/authReducer';
import messageReducer from './reducers/messageReducer';

const rootReducer = combineReducers({
  data: dataReducer,
  auth: authReducer,
  message: messageReducer,
});

export default rootReducer;
