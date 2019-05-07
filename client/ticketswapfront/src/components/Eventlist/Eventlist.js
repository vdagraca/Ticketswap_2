import React, { Component } from 'react'
import { Link } from 'react-router-dom'


export default class Eventlist extends Component {
    renderEventList(event) {
        return <li key={event.name}><Link to={`/events/${event.id}`} className="ListItem">{event.name} </Link>
            <img src={event.picture} /></li>
    }

    render() {
        const { events } = this.props
        console.log('events', events)
        return (
            <div className="event-list">
                <h1>Event List</h1>
                {events === null && 'Loading...'}
                {events !== null &&
                    <ul className={'List'}>
                        {events.map(this.renderEventList)}
                    </ul>
                }
            </div>
        )
    }
}
