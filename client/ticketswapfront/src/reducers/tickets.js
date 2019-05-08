
import { TICKETS_FETCHED, CREATE_TICKET } from '../actions/events'

export default (state = [], action) => {
    switch (action.type) {

        case TICKETS_FETCHED:
            return action.tickets
        case CREATE_TICKET:
            return [...state, action.ticket]
        default:
            return state
    }
}