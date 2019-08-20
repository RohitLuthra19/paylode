// @flow

import * as React from 'react';
import './dashboard.scss';

type Props = {
}


export class Dashboard extends React.PureComponent<Props> {

  render() {
    return (
      <div className="container-fluid">
        <h1 className="header">Dashboard</h1>
      </div>
    )
  }
}



export default Dashboard;