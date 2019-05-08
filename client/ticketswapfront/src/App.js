import React from 'react';
import { Provider } from 'react-redux'
import store from './store'
import { Route } from 'react-router-dom'
import Navbar from './components/navbar/navbar'
import EventlistContainer from './components/Eventlist/EventlistContainer'
import EventTicketsContainer from './components/Eventtickets/EventTicketsContainer'
import EventFormContainer from './components/Eventform/EventFormContainer'
import TicketFormContainer from './components/Ticketform/TicketFormContainer'
import TicketDetailsContainer from './components/Ticketdetails/TicketDetailsContainer'

import './App.css';

function App() {
  return (
    <Provider store={store} >
      <Navbar />
      <div className="App">
        <h1>Events</h1>
        <Route path="/events" exact component={EventlistContainer} />
        <Route path="/events/:id" component={EventTicketsContainer} />
        <Route path="/events" exact component={EventFormContainer} />
        <Route path="/events/:id" exact component={TicketFormContainer} />
        <Route path="/events/:id/tickets/:id" exact component={TicketDetailsContainer} />
      </div>
    </Provider>
  );
}

export default App;
