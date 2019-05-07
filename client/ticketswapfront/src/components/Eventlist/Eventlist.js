import React, { Component } from 'react'
import { Link } from 'react-router-dom'


export default class Eventlist extends Component {
    renderEventList(event) {
        return <li
            key={event.name} style={{ display: "inline-block", margin: "20px" }}
        >
            <Link to={`/events/${event.id}`} className="ListItem">
                <img className="image" style={{ width: "300px" }} src={event.picture} alt={event.name} />
                <br />
                {event.name}
                Date:{event.startdate}
                <br /><br />
            </Link>
        </li>
    }

    render() {
        const { events } = this.props
        console.log('events', events)
        return (
            <div className="event-list">
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
