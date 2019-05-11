import React, { Component } from 'react'
import CommentForm from './CommentForm'
import { connect } from 'react-redux';
import { createComment } from '../../actions/comments'

export class CommentFormContainer extends Component {
    state = {
        comment: '',
        ticketId: this.props.ticket.id,
        userName: null,
        userId: null
    }

    onChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value,
            userId: this.props.user.userId,
            userName: this.props.user.firstName,
        })
    }

    onSubmit = (comment) => {
        comment.preventDefault()
        // const ticketId = this.props.ticket.id

        this.setState({
            comment: '',
            userId: this.props.user.userId,
            userName: this.props.user.firstName,
            // ticketId: this.props.ticket.id
        })

        const eventid = this.props.eventid
        const id = this.props.id
        // console.log('ticketId', ticketId)
        this.props.createComment(eventid, id, this.state)
    }

    render() {
        if (this.props.user) {
            return (

                <div>
                    <CommentForm
                        onSubmit={this.onSubmit}
                        onChange={this.onChange}
                        values={this.state} />
                </div>
            )
        } else {
            return null
        }
    }
}

const mapStateToProps = (state) => ({
    ticket: state.ticket,
    user: state.currentUser
})

export default connect(mapStateToProps, { createComment })(CommentFormContainer)