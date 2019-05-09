import React, { Component } from 'react'
import { connect } from 'react-redux'
import TicketDetails from './TicketDetails'
import TicketForm from '../Ticketform/TicketForm'
import { loadDetails, updateTicket } from '../../actions/tickets'

export class TicketDetailsContainer extends Component {
    state = {
        editMode: false,
        formValues: {}
    }

    componentDidMount() {
        console.log('match params', this.props.match.params)
        const id = this.props.match.params.id
        const eventId = this.props.match.params.eventId
        this.props.loadDetails(eventId, id)
    }

    goBack = () => {
        this.props.history.push('/events')
    }

    editTicket = () => {

        const { ticket } = this.props
        this.setState({
            editMode: true,
            formValues: {
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
        console.log('tickt', this.props.ticket)
        return (
            <div>

                <TicketDetails
                    ticket={this.props.ticket}
                    onEdit={this.editTicket}
                    goBack={this.goBack}
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
})


export default connect(mapStateToProps, { loadDetails, updateTicket })(TicketDetailsContainer)
