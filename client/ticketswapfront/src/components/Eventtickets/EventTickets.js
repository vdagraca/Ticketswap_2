import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class EventTickets extends Component {

    renderTicketList(ticket) {
        console.log('ticket eventid', ticket.eventId)
        return <li
            key={ticket.id}>
            <Link to={`/events/${ticket.eventId}/tickets/${ticket.id}`} className="ListItem">
                {ticket.description}
                {ticket.price}</Link>
        </li>
    }

    render() {

        const { tickets } = this.props
        console.log('tickets in EventTickets', tickets)
        return (
            <div className="ticket-list">
                {tickets === null && 'Loading...'}
                {tickets !== null &&
                    <ul className={'List'}>
                        {tickets.map(this.renderTicketList)}
                    </ul>
                }
            </div>
        )
    }
}

