import { EVENTS_FETCHED, CREATE_EVENT } from '../actions/events'

export default (state = [], action) => {
    switch (action.type) {

        case EVENTS_FETCHED:
            return action.events
        case CREATE_EVENT:
            return [...state, action.event]
        default:
            return state
    }
}