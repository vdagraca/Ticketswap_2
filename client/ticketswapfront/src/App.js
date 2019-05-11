import React from 'react';
import { Provider } from 'react-redux'
import store from './store'
import { Route, Redirect } from 'react-router-dom'
import Navbar from './components/navbar/navbar'
import EventlistContainer from './components/Eventlist/EventlistContainer'
import EventTicketsContainer from './components/Eventtickets/EventTicketsContainer'
import EventFormContainer from './components/Eventform/EventFormContainer'
import TicketDetailsContainer from './components/Ticketdetails/TicketDetailsContainer'
import CommentListContainer from './components/Comments/CommentListContainer';
import CommentFormContainer from './components/CommentForm/CommentFormContainer';
import LoginFormContainer from './components/Login/LoginFormContainer';
import LogoutPage from './components/Logout/LogoutPage'
import SignupPage from './components/signup/SignupPage'
import './App.css';


function App() {
  return (
    <Provider store={store} >
      <Navbar />
      <div className="App">
        <Route path="/events" exact component={EventlistContainer} />
        <Route path="/events/:eventid" exact component={EventTicketsContainer} />
        <Route path="/events" exact component={EventFormContainer} />
        <Route path="/events/:eventid/tickets/:id" exact component={TicketDetailsContainer} />
        <Route path="/events/:eventid/tickets/:id" exact component={CommentListContainer} />
        <Route path="/events/:eventid/tickets/:id" exact component={CommentFormContainer} />
        <Route path="/login" exact component={LoginFormContainer} />
        <Route path="/logout" exact component={LogoutPage} />
        <Route path="/signup" exact component={SignupPage} />
        <Route exact path="/" render={() => <Redirect to="/events" />} />
      </div>
    </Provider>
  );
}

export default App;
