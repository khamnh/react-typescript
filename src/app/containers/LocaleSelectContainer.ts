import { createStructuredSelector } from 'reselect';
import { makeSelectLocale } from '../selectors/language';
import { changeLocale } from '../actions/language';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { LocaleSelect } from '../components/LocaleSelect';

const mapStateToProps = createStructuredSelector({
  locale: makeSelectLocale(),
});

const mapDispatchToProps = dispatch => ({
  onLocaleChange: bindActionCreators(changeLocale, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(LocaleSelect);
