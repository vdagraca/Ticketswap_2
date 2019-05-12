import React, { Component } from 'react'
import './TicketDetails.css';


export default class TicketDetails extends Component {

    render() {
        const { ticket, fraude, currentUser, event } = this.props
        let className = () => {
            if (fraude === 5) {
                return 'green'
            } else if (fraude >= 5 && fraude <= 10) {
                return 'yellow'
            } else if (fraude > 10) {
                return 'red'
            }
        }

        return (

            <div>
                <h1>Ticket from {ticket.userName}</h1>
                <h2 className={className()}>Risk:{fraude}%</h2>
                <h2>{event.name}</h2>
                <li>Description:{ticket.description}</li>
                <br />
                <img className="image" style={{ width: "300px" }} src={ticket.picture} alt={ticket.name} />
                <br /> <br />
                <li>Price:{ticket.price}</li>

                {currentUser &&
                    ticket.userId === currentUser.userId &&
                    <button onClick={this.props.onEdit}>Edit</button>
                }
            </div >

        )
    }
}
