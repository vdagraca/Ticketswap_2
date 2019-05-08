import request from 'superagent'

export const CREATE_TICKET = 'CREATE_TICKET'

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