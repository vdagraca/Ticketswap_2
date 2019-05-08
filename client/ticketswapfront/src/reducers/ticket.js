
import { TICKET_DETAILS } from '../actions/tickets'

export default (state = [], action) => {
    switch (action.type) {

        case TICKET_DETAILS:
            return action.ticket
        default:
            return state
    }
}