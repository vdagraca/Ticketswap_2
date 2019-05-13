import React, { Component } from 'react'

export default class TicketForm extends Component {
    render() {
        return (
            <div>
                <form className={'ticket-form'}>
                    <label>Picture
                        <input type='text' name='picture' value={this.props.values['picture']} onChange={this.props.onChange} />
                    </label>
                    <label>Price
                        <input type='text' name='price' value={this.props.values['price']} onChange={this.props.onChange} />
                    </label>
                    <label>Description
                        <input type='text' name='description' value={this.props.values['description']} onChange={this.props.onChange} />
                    </label>
                    <button onClick={this.props.onSubmit} type='submit' value="Submit">Create Ticket</button>
                </form>
            </div>
        )
    }
}