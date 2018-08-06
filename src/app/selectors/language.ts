import { createSelector } from 'reselect';

const selectLanguage = (state) => {
  return state.language;
};

export const makeSelectLocale = () => createSelector(
    selectLanguage,
    languageState => languageState.locale,
);
