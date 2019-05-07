import React, { Component } from 'react'

export default class EventTickets extends Component {

    renderTicketList(ticket) {
        return <li
            key={ticket.id}>
            {ticket.description}
            {ticket.price}
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

