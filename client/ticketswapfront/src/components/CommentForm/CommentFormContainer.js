import React, { Component } from 'react'
import CommentForm from './CommentForm'
import { connect } from 'react-redux';
import { createComment } from '../../actions/comments'

export class CommentFormContainer extends Component {
    state = {
        author: '',
        comment: '',
        eventId: this.props.eventid
        // userId: this.props.user.id
    }

    onChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    onSubmit = (comment) => {
        comment.preventDefault()

        this.setState({
            author: '',
            comment: ''
        })
        const eventid = this.props.eventid
        const id = this.props.id
        console.log('eventid', eventid)
        this.props.createComment(eventid, id, this.state)
    }

    render() {

        return (

            <div>
                <CommentForm
                    onSubmit={this.onSubmit}
                    onChange={this.onChange}
                    values={this.state} />
            </div>
        )
    }
}

export default connect(null, { createComment })(CommentFormContainer)