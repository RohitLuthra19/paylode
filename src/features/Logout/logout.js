// @flow

import { deleteToken } from '../../common/utils';

const Logout = (props) => {
  deleteToken()
  props.history.push('/login');
  return null;
}

export default Logout;