import React, { Component } from 'react'
import { connect } from 'react-redux'
import TicketDetails from './TicketDetails'
import TicketForm from '../Ticketform/TicketForm'
import { loadDetails, updateTicket, loadFraude } from '../../actions/tickets'

export class TicketDetailsContainer extends Component {
    state = {
        editMode: false,
        formValues: {},
    }

    componentDidMount() {
        const id = this.props.match.params.id
        const eventId = this.props.event.id
        this.props.loadDetails(eventId, id)
        this.props.loadFraude(eventId, id)

    }

    editTicket = () => {

        const { ticket } = this.props
        this.setState({
            editMode: true,
            formValues: {
                name: ticket.name,
                picture: ticket.picture,
                price: ticket.price,
                description: ticket.description
            }
        }
        )

    }

    onSubmit = (tickt) => {
        const { updateTicket, ticket } = this.props

        tickt.preventDefault()

        this.setState({
            editMode: false
        })
        updateTicket(ticket.eventId, ticket.id, this.state.formValues)
        const id = this.props.match.params.id
        const eventId = this.props.event.id
        // setTimeout(this.props.loadDetails(id, eventId), 500)
        // setTimeout(this.props.loadFraude(id, eventId), 1000)
        this.props.loadFraude(eventId, id)

    }


    onChange = (ticket) => {
        this.setState({
            formValues: {
                ...this.state.formValues,
                [ticket.target.name]: ticket.target.value
            }
        })
    }

    render() {

        return (

            <div>
                <TicketDetails
                    ticket={this.props.ticket}
                    onEdit={this.editTicket}
                    fraude={this.props.fraude}
                    currentUser={this.props.currentUser}
                    event={this.props.event}
                />

                {this.state.editMode &&
                    <TicketForm
                        onSubmit={this.onSubmit}
                        onChange={this.onChange}
                        values={this.state.formValues}
                    />
                }

            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    ticket: state.ticket,
    event: state.event,
    fraude: state.fraude,
    comments: state.comments,
    currentUser: state.currentUser
})


export default connect(mapStateToProps, { loadDetails, updateTicket, loadFraude })(TicketDetailsContainer)
