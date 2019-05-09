import { COMMENTS_FETCHED } from '../actions/comments'
// import { CREATE_COMMENT } from '../actions/comments'

export default (state = [], action) => {
    switch (action.type) {

        case COMMENTS_FETCHED:
            return action.comments
        // case CREATE_COMMENT:
        //     return [...state, action.comment]
        default:
            return state
    }
}
