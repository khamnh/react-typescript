import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'react-router-redux';
import { createBrowserHistory } from 'history';
import { configureStore } from './app/store';
import { App } from './app';
import LanguageProvider from './app/containers/LanguageProvider';
import { translationMessages } from './app/i18n';

// prepare store
const history = createBrowserHistory();
const store = configureStore(history);
// const MOUNT_NODE = document.getElementById('root');
const render = (messages) => {
  ReactDOM.render(
    <Provider store={store}>
      <LanguageProvider messages={messages}>
        <ConnectedRouter history={history}>
          <App />
        </ConnectedRouter>
      </LanguageProvider>
    </Provider>,
    document.getElementById('root'),
  );
};

if (module.hot) {
  // Hot reloadable React components and translation json files
  // modules.hot.accept does not accept dynamic dependencies,
  // have to be constants at compile-time
  module.hot.accept(['./app/i18n', './app/containers/App'], () => {
    ReactDOM.unmountComponentAtNode(document.getElementById('root') as HTMLElement);
    render(translationMessages);
  });
}

declare global {
  interface Window { Intl: any; }
}

if (!window.Intl) {
  new Promise((resolve) => {
    resolve(import('intl'));
  })
    .then(() =>
      Promise.all([
        import('intl/locale-data/jsonp/en.js'),
        import('intl/locale-data/jsonp/de.js'),
      ]),
    )
    .then(() => render(translationMessages))
    .catch((err) => {
      throw err;
    });
} else {
  render(translationMessages);
}
