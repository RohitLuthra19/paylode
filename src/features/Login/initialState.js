import { fromJS } from 'immutable';

const initialState = fromJS({
  fetching: false,
  error: false,
  user: {
    email: '',
    password: '',
    isLoggedIn: false,
  },
});

export default initialState;
