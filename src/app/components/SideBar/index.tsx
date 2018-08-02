import * as React from 'react';
import { Link } from 'react-router-dom';
import * as style from './style.css';

export class SideBar extends React.Component {
    render(): React.ReactNode {
        return (
            <div className={style.sidebar}>
                <ul className={style.menu}>
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

