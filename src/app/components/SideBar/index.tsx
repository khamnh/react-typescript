import * as React from 'react';
import { Link } from 'react-router-dom';
import { FormattedMessage } from 'react-intl';
import messages from './messages';
import './style.scss';

export class SideBar extends React.Component {
  render(): React.ReactNode {
    return (
        <div className="sidebar">
            <ul className="menu">
                <li><Link to="/contracts"><FormattedMessage {...messages.contracts} /></Link></li>
                <li><Link to="/clients"><FormattedMessage {...messages.clients} /></Link></li>
                <li><Link to="/library"><FormattedMessage {...messages.library} /></Link></li>
                <li><Link to="/inbox"><FormattedMessage {...messages.inbox} /></Link></li>
                <li><Link to="/account"><FormattedMessage {...messages.account} /></Link></li>
            </ul>
        </div>
    );
  }
}
