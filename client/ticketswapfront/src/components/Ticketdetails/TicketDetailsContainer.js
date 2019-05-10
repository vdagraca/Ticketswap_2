import React, { Component } from 'react'
import { connect } from 'react-redux'
import TicketDetails from './TicketDetails'
import TicketForm from '../Ticketform/TicketForm'
import { loadDetails, updateTicket } from '../../actions/tickets'

export class TicketDetailsContainer extends Component {
    state = {
        editMode: false,
        formValues: {},
        fraude: 0
    }

    componentDidMount() {
        console.log('match params', this.props.match.params)
        const id = this.props.match.params.id
        const eventId = this.props.match.params.eventId
        this.props.loadDetails(eventId, id)
        this.fraudeCalculation()
    }

    goBack = () => {
        this.props.history.push(`/events`)
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
    }

    onChange = (ticket) => {
        this.setState({
            formValues: {
                ...this.state.formValues,
                [ticket.target.name]: ticket.target.value
            }
        })
    }

    fraudeCalculation = () => {
        
        
        const tickets = this.props.tickets
        const ticket = this.props.ticket
        const comments = this.props.comments
        let fraudeRisk = this.state.fraude
        const ticketPriceArray = tickets.map(ticket => { return ticket.price })
        const ticketUserIdArray = tickets.map(ticket => { return ticket.userId })

        Math.min(5, fraudeRisk)
        Math.max(95, fraudeRisk)

        const userId = (arr) => {
            let countUserId = 0
            for (let i = 0; i < arr.length; i++) {
                if (ticket.userId === arr[i]) {
                    countUserId++
                }
            }
            return countUserId
        }
        const userIdMatch = userId(ticketUserIdArray)

        const sum = ticketPriceArray.reduce(function (accumulator, currentValue) {
            return accumulator + currentValue;
        }, 0);
        const average = sum / ticketPriceArray.length
        const percentageCheaper = ticket.price / average
        const percentageExpensive = ticket.price / average - 1
        console.log('percentageExpensive', percentageExpensive)

        if (comments.length > 2) {
            fraudeRisk += 5
        }
        if (userIdMatch === 1) {
            fraudeRisk += 10
        }
        if (ticket.price < average) {
            // console.log('frauderisk', fraudeRisk + percentageCheaper)
            fraudeRisk += percentageCheaper
        } else if (ticket.price > average) {
            fraudeRisk -= Math.max(10, percentageExpensive)
        }

        this.setState({
            fraude: fraudeRisk
        })
    }

    render() {


        return (

            <div>
                <TicketDetails
                    ticket={this.props.ticket}
                    onEdit={this.editTicket}
                    goBack={this.goBack}
                    fraude={this.state.fraude}
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
    tickets: state.tickets,
    comments: state.comments
})


export default connect(mapStateToProps, { loadDetails, updateTicket })(TicketDetailsContainer)
