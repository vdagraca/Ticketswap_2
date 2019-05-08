import request from 'superagent'

export const CREATE_TICKET = 'CREATE_TICKET'
export const TICKET_DETAILS = 'TICKET_DETAILS'

const baseUrl = 'http://localhost:4000'

const ticketCreatedSuccess = ticket => ({
    type: CREATE_TICKET,
    ticket
})

export const createTicket = (id, data) => (dispatch) => {
    (console.log('creatticket'))
    request
        .post(`${baseUrl}/events/${id}`)
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

export const loadDetails = (eventId, Id) => dispatch => {
    console.log('loaddetails action')
    request
        .get(`${baseUrl}/events/${eventId}/tickets/${Id}`)
        .then(response => {
            dispatch(ticketDetailsFetched(response.body))
        })
        .catch(console.error)
}