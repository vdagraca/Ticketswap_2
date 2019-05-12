import request from 'superagent'
import { baseUrl } from '../constants'

export const EVENTS_FETCHED = 'EVENTS_FETCHED'
export const CREATE_EVENT = 'CREATE_EVENT'
export const EVENT_FETCHED = 'EVENT_FETCHED'

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

const fetchEvent = event => ({
    type: EVENT_FETCHED,
    event
})

export const loadEvent = (id) => (dispatch) => {

    request(`${baseUrl}/events/${id}`)
        .then(response => {
            console.log('event with fraude2', response.body)
            dispatch(fetchEvent(response.body))
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

