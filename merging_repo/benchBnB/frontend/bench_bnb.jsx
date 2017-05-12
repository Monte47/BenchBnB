import React from 'react';
import ReactDOM from 'react-dom';
import { login } from './actions/session_actions';
import configureStore from './store/store';
import Root from './components/root';


document.addEventListener('DOMContentLoaded', ()=>{
  const store = configureStore();
  window.store = store;
  window.login = login;
  const root = document.getElementById('root');
  ReactDOM.render(<Root store={ store }/>, root);
});