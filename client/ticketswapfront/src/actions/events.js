import request from 'superagent'

export const EVENTS_FETCHED = 'EVENTS_FETCHED'

const baseUrl = 'http://localhost:4000'
console.log(baseUrl)
const eventsFetched = events => ({
    type: EVENTS_FETCHED,
    events
})

export const loadEvents = () => (dispatch, getState) => {
    // when the state already contains products, we don't fetch them again
    // if (getState().events) return

    console.log('hello')
    // a GET /products request
    request(`${baseUrl}/events`)
        .then(response => {
            console.log('response', response.body)

            // dispatch an PRODUCTS_FETCHED action that contains the events
            dispatch(eventsFetched(response.body.events))
        })
        .catch(console.error)
}