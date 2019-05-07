import React from 'react';
import { Provider } from 'react-redux'
import store from './store'
import Navbar from './components/navbar/navbar'
import EventlistContainer from './components/Eventlist/EventlistContainer'

import './App.css';

function App() {
  return (
    <Provider store={store} >
      <Navbar />
      <div className="App">
        <h1>Events</h1>
        <EventlistContainer />
      </div>
    </Provider>
  );
}

export default App;
