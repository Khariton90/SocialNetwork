import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import store from './redux/reduxStore';
export let rerenderEntireThree = (state) => {
  ReactDOM.render(
    <React.StrictMode>
      <App state={state}  dispatch={store.dispatch.bind(store)} store={store} dispatch={store.dispatch}/>
    </React.StrictMode>,
    document.getElementById('root')
  );
}
rerenderEntireThree(store.getState());
store.subscribe(rerenderEntireThree);

reportWebVitals();
