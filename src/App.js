import React from 'react';

import { Provider } from 'react-redux';
import store from './store';

import Gateway from './gateway';

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <Gateway />
      </Provider>
    );
  }
}
