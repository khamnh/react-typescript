import * as React from 'react';
import { Link } from 'react-router-dom';
import './style.scss';

export class SideBar extends React.Component {
    render(): React.ReactNode {
        return (
            <div className='sidebar'>
                <ul className='menu'>
                    <li><Link to='/contracts'>Contracts</Link></li>
                    <li><Link to='/clients'>Clients</Link></li>
                    <li><Link to='/library'>Library</Link></li>
                    <li><Link to='/inbox'>Inbox</Link></li>
                    <li><Link to='/account'>Account</Link></li>
                </ul>
            </div>
        );
    }
}

