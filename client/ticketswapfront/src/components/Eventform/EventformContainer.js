import React, { Component } from 'react'
import EventForm from './EventForm'
import { connect } from 'react-redux';
import { createEvent } from '../../actions/events'

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

    onSubmit = (event) => {
        event.preventDefault()

        this.setState({
            name: '',
            description: '',
            picture: '',
            startdate: '',
            enddate: ''
        })
        // if (this.props.authenticated) {
        this.props.createEvent(this.state)
        // }
    }


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

// const mapStateToProps = (state, props) => ({
//     authenticated: state.currentUser !== null,
//     userId: state.currentUser && userId(state.currentUser.jwt),
// })

export default connect(null, { createEvent })(EventFormContainer)

