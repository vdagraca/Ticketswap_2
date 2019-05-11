import { TICKET_USER } from '../actions/tickets'

export default (state = [], action) => {
    switch (action.type) {

        case TICKET_USER:
            return action.ticketUser
        default:
            return state
    }
}