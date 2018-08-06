import * as React from 'react';
// import { DropdownList } from 'react-widgets';
// import { appLocales } from '../../i18n';
export interface LocaleSelectState {
  locale?: any;
  onLocaleChange?: any;
}

export class LocaleSelect extends React.Component<LocaleSelectState> {
  handleChange = (evt) => {
    this.props.onLocaleChange(evt.target.value);
  }
  render() {
    return (
      <select onChange={this.handleChange} defaultValue={this.props.locale}>
        <option value="en">en</option>
        <option value="fr">fr</option>
      </select>
    );
  }
}
