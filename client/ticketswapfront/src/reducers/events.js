import { EVENTS_FETCHED, EVENT_CREATED } from '../actions/events'

export default (state = [], action) => {
    switch (action.type) {

        case EVENTS_FETCHED:
            return action.events
        case EVENT_CREATED:
            return [...state, action.event]
        default:
            return state
    }
}