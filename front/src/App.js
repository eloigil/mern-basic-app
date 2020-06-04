import React from 'react';
import './App.css';
import ItemModal from './components/ItemModal';
import ItemsLIst from './components/ItemsList';

import { Provider } from 'react-redux'
import store from './store'

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <h1>Hello world!</h1>

        <ItemModal />
        <ItemsLIst />
      </div>
    </Provider>
  );
}

export default App;
