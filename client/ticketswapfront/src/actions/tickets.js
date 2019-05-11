import request from 'superagent'
import { baseUrl } from '../constants'

export const TICKETS_FETCHED = 'TICKETS_FETCHED'
export const CREATE_TICKET = 'CREATE_TICKET'
export const TICKET_DETAILS = 'TICKET_DETAILS'
export const EDIT_TICKET = 'EDIT_TICKET'
export const TICKET_FRAUDE = 'TICKET_FRAUDE'
export const TICKET_USER = 'TICKET_USER '

const fetchTickets = tickets => ({
    type: TICKETS_FETCHED,
    tickets
})

export const loadTickets = (id) => (dispatch, state) => {

    request(`${baseUrl}/events/${id}`)
        .then(response => {
            dispatch(fetchTickets(response.body.tickets))
        })
        .catch(console.error)
}

const ticketCreatedSuccess = ticket => ({
    type: CREATE_TICKET,
    ticket
})

export const createTicket = (id, data) => (dispatch, getState) => {
    const state = getState()
    request
        .post(`${baseUrl}/events/${id}`)
        .set('Authorization', `Bearer ${state.currentUser.jwt}`)
        .send(data)
        .then(response => {
            dispatch(ticketCreatedSuccess(response.body))
        })
        .catch(console.error)
}

const ticketDetailsFetched = (ticket) => ({
    type: TICKET_DETAILS,
    ticket
})


export const loadDetails = (eventId, id) => dispatch => {
    console.log('loaddetails action')
    request
        .get(`${baseUrl}/events/${eventId}/tickets/${id}`)
        .then(response => {
            console.log('ticktdetails action', response.body.ticket)
            dispatch(ticketDetailsFetched(response.body.ticket))
        })
        .catch(console.error)
}

const fraudeFetched = (fraude) => ({
    type: TICKET_FRAUDE,
    fraude
})

export const loadFraude = (eventId, id) => dispatch => {
    console.log('fraude action')
    request
        .get(`${baseUrl}/events/${eventId}/tickets/${id}`)
        .then(response => {
            dispatch(fraudeFetched(response.body.fraude))
        })
        .catch(console.error)
}

const editTicketAction = (ticket) => ({
    type: EDIT_TICKET,
    ticket
})

export const updateTicket = (eventId, id, data) => (dispatch, getState) => {
    const state = getState()
    request
        .put(`${baseUrl}/events/${eventId}/tickets/${id}`)
        .set('Authorization', `Bearer ${state.currentUser.jwt}`)
        .send(data)
        .then(response => dispatch(editTicketAction(response.body)))
        .catch(console.error)
}

const fetchTicketUser = (ticketUser) => ({
    type: TICKET_USER,
    ticketUser
})

export const loadTicketUser = (eventId, id) => dispatch => {
    request
        .get(`${baseUrl}/events/${eventId}/tickets/${id}`)
        .then(response => {
            dispatch(fetchTicketUser(response.body.ticket.user))
        })
        .catch(console.error)
}