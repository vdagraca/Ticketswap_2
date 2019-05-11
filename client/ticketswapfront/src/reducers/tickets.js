
import { TICKETS_FETCHED } from '../actions/tickets'
import { CREATE_TICKET } from '../actions/tickets'

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