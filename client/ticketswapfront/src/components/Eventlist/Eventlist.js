import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './Eventlist.css'


export default class Eventlist extends Component {



    renderEventList(event) {

        return <li className='Event-List'
            key={event.id}
        >
            <Link to={`/events/${event.id}`} className="listItem" >
                <img className="image" src={event.picture} alt={event.name} />
                <br />
                {event.name}
                <br />
                Date:{event.startdate}
                <br /><br />
            </Link>
        </li>
    }

    render() {
        const { events } = this.props
        return (
            <div className="Events">
                <h1>Events</h1>
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
