// @flow

import * as React from "react";
import { connect } from "react-redux";
import { Form, Button, Container } from 'react-bootstrap';

import "./login.scss";
import { updateUser, loginRequest } from './reducer';
import { cloneDeep } from '../../common/utils';

type Props = {};

export class Login extends React.PureComponent<Props> {
  handleSubmit = event => {
    event.preventDefault();
    const { user, loginRequest, history } = this.props;
    delete user.isLoggedIn;
    loginRequest(user, history);
  }

  render() {
    const { user } = this.props;

    return (
      <Container className="login-container">
        <Form className="form-wrapper">
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control 
              type="email"
              name="email"
              placeholder="Enter email"
              value={user.email}
              onChange={this.onLoginFieldsInput}/>
          </Form.Group>

          <Form.Group controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control 
              type="password" 
              name="password"
              placeholder="Password" 
              value={user.password}
              onChange={this.onLoginFieldsInput}/>
          </Form.Group>

          <Button variant="primary" type="submit" onClick={this.handleSubmit}>
            LOG IN
          </Button>
        </Form>
      </Container>
    );
  }


  ///////////////////////////////////////////////////////////////////////
  //  EVENT HANDLERS
  ///////////////////////////////////////////////////////////////////////
  onLoginFieldsInput = (e: SyntheticEvent<any>) => {
    const clonedUser = cloneDeep(this.props.user);
    const { name, value} = e.currentTarget;
    clonedUser[name] = value;
    this.props.updateUser(clonedUser);
  }
}


///////////////////////////////////////////////////////////////////////
//  REDUX CONNECTION
///////////////////////////////////////////////////////////////////////
function mapStateToProps(state) {
  const { login } = state;
  const loginToJS = login.toJS();

  return {
    user: loginToJS.user,
  };
}

// don't need mapDispatchToProps b/c we are using action creators
export default connect(
  mapStateToProps,
  {
    updateUser,
    loginRequest,
  }
)(Login);

