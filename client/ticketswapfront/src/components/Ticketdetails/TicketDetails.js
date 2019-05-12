import React, { Component } from 'react'

export default class TicketDetails extends Component {


    render() {
        const { ticket, fraude, currentUser } = this.props

        return (
            <div>
                <h1>Ticket from {ticket.userName}</h1>
                <h2>Risk:{fraude}%</h2>
                <li>Description:{ticket.description}</li>
                <br />
                <img className="image" style={{ width: "300px" }} src={ticket.picture} alt={ticket.name} />
                <br /> <br />
                <li>Price:{ticket.price}</li>
                {/* <button onClick={this.props.goBack}>Go back</button> */}

                {currentUser &&
                    ticket.userId === currentUser.userId &&
                    <button onClick={this.props.onEdit}>Edit</button>
                }
            </div >


        )
    }
}
