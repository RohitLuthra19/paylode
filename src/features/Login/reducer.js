import * as types from './types';
import initialState from './initialState';

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case types.UPDATE_USER:
      return state.setIn(['user'], action.user);
      
    case types.LOGIN_API_CALL_REQUEST:
      return state.set(['fetching'], true)
        .set(['error', false]);
    case types.LOGIN_API_CALL_SUCCESS:
      return state.setIn(['fetching'], false)
        .set(['error', false])
        .setIn(['user', 'isLoggedIn'], action.isLoggedIn);
    case types.LOGIN_API_CALL_FAILURE:
      return state.set(['fetching'], false)
        .set(['error', action.error]);
        
    default:
      return state;
  }
}

// ACTION CREATORS
export const loginRequest = (user, history) => ({ type: types.LOGIN_API_CALL_REQUEST, user, history })
export const updateUser = (user) => ({ type: types.UPDATE_USER, user })

export default reducer;