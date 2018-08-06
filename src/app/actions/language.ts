import { CHANGE_LOCALE } from '../constant/languageConstant';

export function changeLocale(languageLocale: string) {
  return (dispatch) => {
    dispatch({
      type: CHANGE_LOCALE,
      payload: languageLocale,
    });
  };
}
