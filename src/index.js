import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import store from './redux/reduxStore';
import StoreContext from './StoreContext';
export let rerenderEntireThree = () => {
  ReactDOM.render(
    <React.StrictMode>
      <StoreContext.Provider value={store}>
      <App/>
      </StoreContext.Provider>
    </React.StrictMode>,
    document.getElementById('root')
  );
}
rerenderEntireThree();
store.subscribe(rerenderEntireThree);

reportWebVitals();
