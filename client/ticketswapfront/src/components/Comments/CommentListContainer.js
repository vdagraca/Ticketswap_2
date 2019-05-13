import React, { Component } from 'react'
import CommentList from './CommentList';
import { connect } from 'react-redux'
import { loadComments } from '../../actions/comments'


export class CommentlistContainer extends Component {
    state = { comments: null }

    componentDidMount() {
        const eventId = this.props.match.params.eventId
        const id = this.props.match.params.id
        this.props.loadComments(eventId, id)
    }
    goBack = () => {
        const eventId = this.props.event.id
        this.props.history.push(`/events/${eventId}`)
    }

    render() {

        return (
            <div>
                <CommentList
                    comments={this.props.comments}
                />
                <button onClick={this.goBack}>Go back</button>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    comments: state.comments,
    event: state.event
})

export default connect(mapStateToProps, { loadComments })(CommentlistContainer)
