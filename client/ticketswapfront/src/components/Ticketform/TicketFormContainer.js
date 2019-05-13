import React, { Component } from 'react'
import TicketForm from './TicketForm'
import { connect } from 'react-redux';
import { createTicket } from '../../actions/tickets'
import './TicketForm.css'

export class TicketFormContainer extends Component {

    state = {
        picture: '',
        price: '',
        description: '',
        userName: null,
        eventId: null,
        userId: null
    }

    onChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value,
            userId: this.props.user.userId,
            userName: this.props.user.firstName,
            eventId: this.props.event.id,
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
                eventId: this.props.event.id,
                userId: this.props.user.userId
            })
            const eventId = this.props.event.id
            this.props.createTicket(eventId, this.state)
        } else { return null }
    }

    render() {
        if (this.props.user) {
            return (

                <div className='ticket-form'>
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