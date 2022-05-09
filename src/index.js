import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import store from  "./store";
import * as actions from "./actions/actions"
import { bindActionCreators } from 'redux';

const root = ReactDOM.createRoot(document.getElementById('root'));
const {dispatch} = store;
const {isLoaded, getToken} = bindActionCreators(actions, dispatch);

root.render(<Provider store={store}>
  <App />
</Provider>);


export {isLoaded, getToken}