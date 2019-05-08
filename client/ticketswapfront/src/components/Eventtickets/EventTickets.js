import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class EventTickets extends Component {

    renderTicketList(ticket) {
        return <li
            key={ticket.id}>
            <Link to={`/events/1/tickets/${ticket.id}`} className="ListItem">
                {ticket.description}
                {ticket.price}</Link>
        </li>
    }

    render() {
        // const eventId = this.props.match.params.eventId
        // console.log('eventId', eventId)
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

