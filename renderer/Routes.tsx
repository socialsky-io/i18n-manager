import * as React from 'react';
import { Provider } from 'react-redux';
import { createBrowserHistory } from 'history';
import { ConnectedRouter } from 'connected-react-router/immutable';
import {
  Switch,
  Route,
} from 'react-router-dom';
import { hot } from 'react-hot-loader';

import createStore from './config/redux';

import { HomeContainer, FolderContainer } from './folder';


const history = createBrowserHistory();
const store = createStore(history);

const Routes: React.SFC = () => (
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <Switch>
        <Route path="/" exact component={HomeContainer} />
        <Route path="/folder" component={FolderContainer} />
      </Switch>
    </ConnectedRouter>
  </Provider>
);

export default hot(module)(Routes);
