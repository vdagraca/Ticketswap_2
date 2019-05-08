import request from 'superagent'

export const EVENTS_FETCHED = 'EVENTS_FETCHED'
export const TICKETS_FETCHED = 'TICKETS_FETCHED'

const baseUrl = 'http://localhost:4000'

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

