import React, { Component } from 'react'
import TicketForm from './TicketForm'
import { connect } from 'react-redux';
// import { createTicket } from '../../actions/events'

export class TicketFormContainer extends Component {
    state = {
        picture: '',
        price: '',
        description: ''
    }

    onChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    // onSubmit = (event) => {
    //     event.preventDefault()

    //     this.setState({
    //         picture: '',
    //         price: '',
    //         description: ''
    //     })
    //     this.props.createTicket(this.state)
    // }

    render() {

        return (

            <div>
                <TicketForm
                    onSubmit={this.onSubmit}
                    onChange={this.onChange}
                    values={this.state} />
            </div>
        )
    }
}

export default connect(null
    // , { createTicket }
)(TicketFormContainer)