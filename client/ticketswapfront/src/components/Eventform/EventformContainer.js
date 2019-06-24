import React, { Component } from 'react'
import EventForm from './Eventform'
import { connect } from 'react-redux';
import { createEvent } from '../../actions/events'

export class EventFormContainer extends Component {
    state = {
        name: '',
        description: '',
        picture: '',
        startdate: '',
        enddate: '',
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

        this.setState({
            name: '',
            description: '',
            picture: '',
            startdate: '',
            userName: this.props.user.firstName,
            enddate: ''
        })
        this.props.createEvent(this.state)
    }


    render() {
        if (this.props.user) {
            return (

                <div>
                    <EventForm
                        onSubmit={this.onSubmit}
                        onChange={this.onChange}
                        values={this.state} />
                </div>
            )
        } else {
            return null
        }
    }
}

const mapStateToProps = (state, props) => ({
    user: state.currentUser
})

export default connect(mapStateToProps, { createEvent })(EventFormContainer)

//