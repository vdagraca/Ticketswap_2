import React, { Component } from 'react'
import { connect } from 'react-redux'
import EventTickets from './EventTickets'
import { loadTickets } from '../../actions/events'

export class EventTicketsContainer extends Component {
    state = {
        editMode: false,
        formValues: {}
    }

    componentDidMount() {
        this.props.loadTickets(Number(this.props.match.params.id))
    }

    render() {
        console.log('ticket in container', this.props.tickets)
        console.log('events in eventticket', this.props.events)
        return (
            <div>
                {!this.state.editMode &&
                    <EventTickets
                        tickets={this.props.tickets}
                    />}
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    tickets: state.tickets,
    events: state.events
})


export default connect(mapStateToProps, { loadTickets })(EventTicketsContainer)
