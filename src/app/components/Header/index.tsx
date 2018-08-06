import * as React from 'react';
import './style.scss';
import LocaleSelectContainer from '../../containers/LocaleSelectContainer';
// import { changeLocale } from '../../actions/language';

export class Header extends React.Component {
  render() {
    return (
      <header>
        <div className="header">
        header
        <LocaleSelectContainer />
        </div>
      </header>
    );
  }
}
