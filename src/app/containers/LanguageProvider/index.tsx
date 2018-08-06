import * as React from 'react';
import { IntlProvider } from 'react-intl';
import { createSelector } from 'reselect';
import { makeSelectLocale } from '../../selectors/language';
import { connect } from 'react-redux';

export interface LanguageInterface {
  locale: string;
  messages: any;
}

class LanguageProvider extends React.PureComponent<LanguageInterface> {
  render() {
    return (
      <IntlProvider
      locale={this.props.locale}
      key={this.props.locale}
      messages={this.props.messages[this.props.locale]}>
        {React.Children.only(this.props.children)}
      </IntlProvider>
    );
  }
}

const mapStateToProps = createSelector(
  makeSelectLocale(),
  locale => ({ locale }),
);

export default connect(mapStateToProps)(LanguageProvider);
