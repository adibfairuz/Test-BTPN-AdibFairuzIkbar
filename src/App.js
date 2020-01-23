import React from 'react';
import logo from './logo.svg';
import './App.scss';
import { Provider } from 'react-redux';
import {store} from './store/store'
import Contacts from './screens/Contacts';
import RouteApp from './screens';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <RouteApp />
      </div>
    </Provider>
  );
}

export default App;
