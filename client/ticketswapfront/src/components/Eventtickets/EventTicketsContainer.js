import React, { Component } from 'react'
import { connect } from 'react-redux'
import EventTickets from './EventTickets'
import TicketFormContainer from '../Ticketform/TicketFormContainer'
import { loadTickets } from '../../actions/tickets'
import { loadEvent } from '../../actions/events'

export class EventTicketsContainer extends Component {

    state = {
        formValues: {}
    }

    componentDidMount() {
        const eventId = this.props.match.params.eventid
        this.props.loadTickets(eventId)
        this.props.loadEvent(eventId)
    }
    goBack = () => {
        this.props.history.push(`/events`)
    }

    render() {

        const { event } = this.props
        return (
            <div>
                <h1>{event.name}</h1>

                <EventTickets
                    tickets={this.props.tickets}
                    goBack={this.goBack}
                />
                <TicketFormContainer />
                <button onClick={this.goBack}>Go back</button>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    tickets: state.tickets,
    ticketUser: state.ticketUser,
    event: state.event
})


export default connect(mapStateToProps, { loadTickets, loadEvent })(EventTicketsContainer)
