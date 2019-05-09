import request from 'superagent'
import { baseUrl } from '../constants'
import { logout } from './users'
import { isExpired } from '../jwt'


export const EVENTS_FETCHED = 'EVENTS_FETCHED'
export const TICKETS_FETCHED = 'TICKETS_FETCHED'
export const CREATE_EVENT = 'CREATE_EVENT'


const eventsFetched = events => ({
    type: EVENTS_FETCHED,
    events
})

export const loadEvents = () => (dispatch) => {

    request(`${baseUrl}/events`)
        .then(response => {
            // console.log('response', response.body)
            dispatch(eventsFetched(response.body.events))
        })
        .catch(console.error)
}

const fetchTickets = tickets => ({
    type: TICKETS_FETCHED,
    tickets
})

export const loadTickets = (id) => (dispatch, getState) => {

    // if (getState().events) return

    request(`${baseUrl}/events/${id}`)
        .then(response => {
            console.log('tickets action', response.body)
            dispatch(fetchTickets(response.body.tickets))
        })
        .catch(console.error)
}

const eventCreatedSuccess = event => ({
    type: CREATE_EVENT,
    event
})

export const createEvent = (data) => (dispatch, getState) => {
    const state = getState()
    // const jwt = state.currentUser.jwt

    // (console.log('token?', jwt))
    request
        .post(`${baseUrl}/events`)
        .set('Authorization', `Bearer ${state.currentUser.jwt}`)
        .send(data)
        .then(response => {
            dispatch(eventCreatedSuccess(response.body))
        })
        .catch(console.error)
}

