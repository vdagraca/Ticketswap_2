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
        const eventId = this.props.match.params.eventid
        this.props.loadTickets(eventId)
    }


    render() {
        console.log('ticket in container', this.props.tickets)
        return (
            <div>
                {!this.state.editMode &&
                    <EventTickets
                        tickets={this.props.tickets}
                        goBack={this.goBack}
                    />}
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    tickets: state.tickets,
})


export default connect(mapStateToProps, { loadTickets })(EventTicketsContainer)
