import request from 'superagent'
import { baseUrl } from '../constants'

export const COMMENTS_FETCHED = 'COMMENTS'

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