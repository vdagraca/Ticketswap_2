import { combineReducers } from 'redux'
import events from './events'
import tickets from './tickets'
import ticket from './ticket'
import comments from './comments'
import users from './users'
import login from './login'
import currentUser from './currentUser'
import signup from './signup'
import fraude from './fraude'


export default combineReducers({
    events,
    tickets,
    ticket,
    comments,
    users,
    login,
    currentUser,
    signup,
    fraude
})
