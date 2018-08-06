import * as React from 'react';
import './style.scss';
import LocaleSelect from '../LocaleSelect';
// import { changeLocale } from '../../actions/language';

export class Header extends React.Component {
  render() {
    return (
      <header>
        <div className="header">
        header
        <LocaleSelect />
        </div>
      </header>
    );
  }
}
