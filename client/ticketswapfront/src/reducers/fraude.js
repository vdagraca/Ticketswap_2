
import { TICKET_FRAUDE } from '../actions/tickets'

export default (state = [], action) => {
    switch (action.type) {

        case TICKET_FRAUDE:
            return action.fraude
        default:
            return state
    }
}