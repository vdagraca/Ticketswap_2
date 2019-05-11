import React, { Component } from 'react'
import TicketForm from './TicketForm'
import { connect } from 'react-redux';
import { createTicket } from '../../actions/tickets'

export class TicketFormContainer extends Component {

    state = {
        picture: '',
        name: '',
        price: '',
        description: '',
        eventId: this.props.match.params.eventid,
        userId: null
    }

    onChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value,
            userId: this.props.user.userId
        })
    }

    onSubmit = (event) => {
        event.preventDefault()
        if (this.props.user) {
            this.setState({
                picture: '',
                name: '',
                price: '',
                description: '',
                userId: this.props.user.userId
            })
            const eventid = this.props.match.params.eventid
            console.log('eventid', eventid)
            this.props.createTicket(eventid, this.state)
        } else { return null }
    }
    goBack = () => {
        this.props.history.push('/events')
    }

    render() {
        if (this.props.user) {
            return (

                <div>
                    <TicketForm
                        onSubmit={this.onSubmit}
                        onChange={this.onChange}
                        values={this.state} />
                    <button onClick={this.goBack}>Go back</button>

                </div>
            )
        } else {
            return null
        }
    }
}

const mapStateToProps = (state) => ({
    user: state.currentUser
})

export default connect(mapStateToProps, { createTicket })(TicketFormContainer)