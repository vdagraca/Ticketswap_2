import React, { Component } from 'react'

export default class EventForm extends Component {
    render() {
        return (
            <div>
                <form className={'Form'}>
                    <label>Name:
                        <input type='text' name='name' value={this.props.values['name']} onChange={this.props.onChange} />
                    </label>
                    <label>Description:
                        <input type='text' name='description' value={this.props.values['description']} onChange={this.props.onChange} />
                    </label>
                    <label>Picture:
                        <input type='text' name='picture' value={this.props.values['picture']} onChange={this.props.onChange} />
                    </label>
                    <label>Startdate:
                        <input type='text' name='startdate' value={this.props.values['startdate']} onChange={this.props.onChange} />
                    </label>
                    <label>Enddate:
                        <input type='text' name='enddate' value={this.props.values['enddate']} onChange={this.props.onChange} />
                    </label>
                    <button onClick={this.props.onSubmit} type='submit' value="Submit">Create Event</button>
                </form>
            </div>
        )
    }
}