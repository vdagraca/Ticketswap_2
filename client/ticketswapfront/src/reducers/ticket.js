
import { TICKET_DETAILS, EDIT_TICKET } from '../actions/tickets'

export default (state = [], action) => {
    switch (action.type) {

        case TICKET_DETAILS:
            return action.ticket
        case EDIT_TICKET:
            return action.ticket
        default:
            return state
    }
}