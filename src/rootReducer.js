import { combineReducers } from 'redux';

import login from './features/Login/reducer';

const rootReducer = combineReducers({
  login,
});

export default rootReducer;