import React, { Component } from 'react'
import TicketForm from './TicketForm'
import { connect } from 'react-redux';
import { createTicket } from '../../actions/tickets'

export class TicketFormContainer extends Component {

    state = {
        picture: '',
        price: '',
        description: '',
        userName: null,
        eventId: this.props.event.id,
        userId: null
    }

    onChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value,
            userId: this.props.user.userId,
            userName: this.props.user.firstName,
        })
    }

    onSubmit = (event) => {
        event.preventDefault()
        if (this.props.user) {
            this.setState({
                picture: '',
                price: '',
                description: '',
                userName: this.props.user.firstName,
                userId: this.props.user.userId
            })
            const eventid = this.props.event.id
            this.props.createTicket(eventid, this.state)
        } else { return null }
    }

    render() {

        if (this.props.user) {
            return (

                <div>
                    <TicketForm
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
    user: state.currentUser,
    event: state.event,

})

export default connect(mapStateToProps, { createTicket })(TicketFormContainer)