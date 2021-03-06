import * as React from 'react';
import './style.scss';
import { RouteComponentProps, Route, Switch } from 'react-router-dom';
import Contracts from '../Contracts';
import Library from '../Library';
import Clients from '../Clients';
import Inbox from '../Inbox';
import Account from '../Account';
import { Header, SideBar, Footer } from '../../components';

export namespace App {
  export interface Props extends RouteComponentProps<void> {

  }
}

export class App extends React.Component<App.Props> {
  render() {

    return (
      <div className="normal">
        <Header />
        <SideBar />
        <div className="content">
          <Switch>
            <Route path="/contracts" component={Contracts} />
            <Route path="/clients" component={Clients} />
            <Route path="/library" component={Library} />
            <Route path="/inbox" component={Inbox} />
            <Route path="/account" component={Account} />
          </Switch>
        </div>
        <Footer />
      </div>
    );
  }
}
