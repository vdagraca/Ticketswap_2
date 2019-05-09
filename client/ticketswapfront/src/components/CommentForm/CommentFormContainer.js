import React, { Component } from 'react'
import CommentForm from './CommentForm'
import { connect } from 'react-redux';
import { createComment } from '../../actions/comments'

export class CommentFormContainer extends Component {
    state = {
        author: '',
        comment: '',
        ticketId: this.props.match.params.id
    }

    onChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    onSubmit = (comment) => {
        comment.preventDefault()
        // const ticketId = this.props.ticket.id

        this.setState({
            author: '',
            comment: '',
            // ticketId: this.props.ticket.id
        })

        const eventid = this.props.eventid
        const id = this.props.id
        // console.log('ticketId', ticketId)
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

const mapStateToProps = (state) => ({
    ticket: state.ticket,
})

export default connect(mapStateToProps, { createComment })(CommentFormContainer)