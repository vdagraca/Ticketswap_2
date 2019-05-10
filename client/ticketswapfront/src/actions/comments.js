import request from 'superagent'
import { baseUrl } from '../constants'

export const COMMENTS_FETCHED = 'COMMENTS_FETCHED'
export const CREATE_COMMENT = 'CREATE_COMMENT'

const commentsFetched = comments => ({
    type: COMMENTS_FETCHED,
    comments
})

export const loadComments = (eventId, id) => (dispatch) => {
    console.log('loadcomments action')
    request(`${baseUrl}/events/${eventId}/tickets/${id}`)
        .then(response => {
            // console.log('response', response.body)
            dispatch(commentsFetched(response.body.comments))
        })
        .catch(console.error)
}

const ticketCommentSuccess = comment => ({
    type: CREATE_COMMENT,
    comment
})

export const createComment = (eventId, id, data) => (dispatch, getState) => {
    const state = getState()

    request
        .post(`${baseUrl}/events/${eventId}/tickets/${id}`)
        .set('Authorization', `Bearer ${state.currentUser.jwt}`)
        .send(data)
        .then(response => {
            dispatch(ticketCommentSuccess(response.body))
        })
        .catch(console.error)
}
