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
                <h1>{event.name}</h1>
                <div className='ticket'>
                    <div className='ticketInfo'>
                        <h2>Ticket from {ticket.userName}</h2>
                        <h2 className={className()}>Risk:{fraude}%</h2>
                        <h3>Description:{ticket.description}</h3>
                        <h3>€ {ticket.price}</h3>
                    </div>
                    <div>
                        <img
                            className="ticketImage"
                            style={{ width: "300px" }}
                            src={ticket.picture} alt={ticket.name} />
                    </div>
                </div>




                {currentUser &&
                    ticket.userId === currentUser.userId &&
                    <button onClick={this.props.onEdit}>Edit</button>
                }
            </div >

        )
    }
}
