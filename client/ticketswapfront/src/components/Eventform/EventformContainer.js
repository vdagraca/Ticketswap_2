import React, { Component } from 'react'
import EventForm from './EventForm'
import { connect } from 'react-redux';
// import { createEvent } from '../../actions/events'

export class EventFormContainer extends Component {
    state = {
        name: '',
        description: '',
        picture: '',
        startdate: '',
        enddate: '',
    }

    onChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    // onSubmit = (event) => {
    //     event.preventDefault()

    //     this.setState({
    //         title: '',
    //         description: '',
    //         picture: '',
    //         price: '',
    //         email: '',
    //         phonenumber: ''

    //     })
    //     this.props.createEvent(this.state)
    // }

    render() {

        return (

            <div>
                <EventForm
                    onSubmit={this.onSubmit}
                    onChange={this.onChange}
                    values={this.state} />
            </div>
        )
    }
}

export default connect(null)(EventFormContainer)
