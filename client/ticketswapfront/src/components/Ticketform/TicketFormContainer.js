import React, { Component } from 'react'
import TicketForm from './TicketForm'
import { connect } from 'react-redux';
import { createTicket } from '../../actions/tickets'

export class TicketFormContainer extends Component {
    state = {
        picture: '',
        price: '',
        description: '',
        eventId: this.props.match.params.eventid
    }

    onChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    onSubmit = (event) => {
        event.preventDefault()

        this.setState({
            picture: '',
            price: '',
            description: ''
        })
        const eventid = this.props.match.params.eventid
        console.log('eventid', eventid)
        this.props.createTicket(eventid, this.state)
    }

    render() {

        return (

            <div>
                <TicketForm
                    onSubmit={this.onSubmit}
                    onChange={this.onChange}
                    values={this.state} />
            </div>
        )
    }
}

export default connect(null, { createTicket })(TicketFormContainer)