import React, { Component } from 'react'

export default class TicketDetails extends Component {


    render() {
        const { ticket } = this.props

        return (
            <div>
                <li>Description:{ticket.description}</li>
                <br />
                <img className="image" style={{ width: "300px" }} src={ticket.picture} alt={ticket.name} />
                <br /> <br />
                <li>Price:{ticket.price}</li>
                <button onClick={this.props.goBack}>Go back</button>
                <button onClick={this.props.onEdit}>Edit</button>
            </div >
        )
    }
}
