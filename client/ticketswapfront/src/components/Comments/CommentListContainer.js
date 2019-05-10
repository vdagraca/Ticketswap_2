import React, { Component } from 'react'
import CommentList from './CommentList';
import { connect } from 'react-redux'
import { loadComments } from '../../actions/comments'
import { CommentFormContainer } from '../CommentForm/CommentFormContainer'


export class CommentlistContainer extends Component {
    state = { comments: null }

    componentDidMount() {
        console.log('match params', this.props.match.params)
        // const id = this.props.match.params.id
        const eventId = this.props.match.params.eventId
        const id = this.props.match.params.id
        console.log('eventid', eventId, 'id', id)
        this.props.loadComments(eventId, id)
    }

    render() {

        return (
            <div>
                <CommentList
                    comments={this.props.comments}
                />
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    comments: state.comments,
})

export default connect(mapStateToProps, { loadComments })(CommentlistContainer)
