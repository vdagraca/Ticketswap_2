import React, { Component } from 'react'
import Eventlist from './Eventlist';
import { connect } from 'react-redux'
import { loadEvents } from '../../actions/events'


export class EventlistContainer extends Component {
    state = { events: null }

    componentDidMount() {
        this.props.loadEvents()
    }

    render() {
        return (
            <div>
                <Eventlist
                    events={this.props.events}
                />
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    events: state.events,
})

export default connect(mapStateToProps, { loadEvents })(EventlistContainer)
