import { DEFAULT_LOCALE } from '../i18n';
import { CHANGE_LOCALE } from '../constant/languageConstant';
import { LanguageInterface } from '../containers/LanguageProvider';

export const initialState = {
  locale: DEFAULT_LOCALE,
  messages: '',
};

export default function languageReducer(state: LanguageInterface = initialState, action) {
  switch (action.type) {
    case CHANGE_LOCALE:
      const newState = Object.assign({}, state, { locale: action.payload });
      return newState;
    default:
      return state;
  }
}
