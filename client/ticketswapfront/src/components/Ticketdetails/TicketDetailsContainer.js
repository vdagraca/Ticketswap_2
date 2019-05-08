import React, { Component } from 'react'
import { connect } from 'react-redux'
import TicketDetails from './TicketDetails'
// import ProductForm from './ProductForm'
import { loadDetails } from '../../actions/tickets'

export class TicketDetailsContainer extends Component {
    state = {
        editMode: false,
        formValues: {}
    }

    componentDidMount() {
        const id = this.props.match.params.id
        const eventId = this.props.match.params.eventId
        this.props.loadDetails(eventId, id)

    }

    goBack = () => {
        this.props.history.push('/events')
    }

    // editProduct = () => {

    //     const { product } = this.props
    //     this.setState({
    //         editMode: true,
    //         formValues: {
    //             title: product.title,
    //             description: product.description,
    //             picture: product.picture,
    //             price: product.price,
    //             email: product.email,
    //             phonenumber: product.phonenumber
    //         }
    //     }
    //     )
    // }

    // onSubmit = (product) => {
    //     console.log('onsubmit')
    //     product.preventDefault()
    //     this.setState({
    //         editMode: false
    //     })
    //     this.props.updateProduct(this.props.product.id, this.state.formValues)
    // }

    // onChange = (product) => {
    //     // update the formValues property with the new data from the input field
    //     this.setState({
    //         formValues: {
    //             ...this.state.formValues,
    //             [product.target.name]: product.target.value
    //         }
    //     })
    // }

    render() {
        console.log('ticket in details', this.props.ticket)
        return (
            <div>
                {/* {!this.state.editMode && */}

                <TicketDetails
                    ticket={this.props.ticket}
                    onEdit={this.editProduct}
                    goBack={this.goBack}
                />

                {/* }
                {this.state.editMode &&
                    <ProductForm
                        onSubmit={this.onSubmit}
                        onChange={this.onChange}
                        values={this.state.formValues}
                    />
                } */}
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    ticket: state.ticket
})


export default connect(mapStateToProps, { loadDetails })(TicketDetailsContainer)
