import { EVENT_FETCHED } from '../actions/events'

export default (state = [], action) => {
    switch (action.type) {

        case EVENT_FETCHED:
            return action.event

        default:
            return state
    }
}