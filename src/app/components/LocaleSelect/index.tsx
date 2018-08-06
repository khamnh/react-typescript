import * as React from 'react';
// import { DropdownList } from 'react-widgets';
// import { appLocales } from '../../i18n';
import { createStructuredSelector } from 'reselect';
import { makeSelectLocale } from '../../selectors/language';
import { changeLocale } from '../../actions/language';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

export interface LocaleSelectState {
  locale?: any;
  onLocaleChange?: any;
}

class LocaleSelect extends React.Component<LocaleSelectState> {
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

const mapStateToProps = createStructuredSelector({
  locale: makeSelectLocale(),
});

const mapDispatchToProps = dispatch => ({
  onLocaleChange: bindActionCreators(changeLocale, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(LocaleSelect);
