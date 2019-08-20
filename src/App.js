// @flow

import React from 'react';
import { connect } from "react-redux";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import SideNav from './components/SideNav/SideNav';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';

import Login from './features/Login/login';
import Dashboard from './features/Dashboard/dashboard';
import BuyingMoment from './features/BuyingMoment/buyingmoment';
import Logout from './features/Logout/logout';
import './App.scss';


const App = (props) => {
  return (
    <Router>
      <Switch>
        <Route path='/' exact={true} component={Login}/>
        <Route path="/login" exact={true} component={Login}/>

        <MainApp {...props}/>
      </Switch>
    </Router>
  );
}

const MainApp = (props) => (
  <div className="wrapper">
     <SideNav/>
     <div id="content">
        <Switch>
          <PrivateRoute authenticated={props.user.isLoggedIn} path="/dashboard" exact={true} component={Dashboard} />
          <PrivateRoute authenticated={props.user.isLoggedIn} path="/buying-moment" exact={true} component={BuyingMoment} />
          <PrivateRoute authenticated={props.user.isLoggedIn} path="/logout" exact={true} component={Logout}/>
        </Switch>
      </div>
 </div>
);


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

export default connect(mapStateToProps)(App);
