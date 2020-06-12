import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { Route, BrowserRouter } from 'react-router-dom';
import User from './containers/user';
import RootReducer from './reducers/index'
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import axios from 'axios';
import ReduxPromise from 'redux-promise';

// initial state
let initialState = {
  user: {
    isLoggedIn: false
  }
};

axios.defaults.headers.post['Content-Type'] = 'application/json';
axios.defaults.headers.patch['Content-Type'] = 'application/json';

const store = applyMiddleware(ReduxPromise)(createStore);

const routing = (

  <Provider store={store(RootReducer, initialState)}>
    <BrowserRouter>
      <Route exact path="/user" component={User} />
      <Route exact path="/" component={App} />
    </BrowserRouter>
  </Provider>
)

ReactDOM.render(
  routing,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
