import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './EventTickets.css'

export default class EventTickets extends Component {

    renderTicketList(ticket) {
        return <li className='ListItem'
            key={ticket.id}>
            <Link to={`/events/${ticket.eventId}/tickets/${ticket.id}`} className="ListLinks">
                Name:{ticket.userName} <br />
                Description:{ticket.description} <br />
                Price:€{ticket.price}</Link>
        </li>
    }

    render() {

        const { tickets } = this.props
        return (
            <div className="ticket-list">
                <h2>Tickets</h2>
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

