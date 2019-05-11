import React, { Component } from 'react'

export default class CommentForm extends Component {
    render() {
        return (
            <div>
                <form className={'Form'}>
                    <label>  Comment:
                        <input type='text' name='comment' value={this.props.values['comment']} onChange={this.props.onChange} />
                    </label>
                    <button onClick={this.props.onSubmit} type='submit' value="Submit">Create Comment</button>
                </form>
            </div>
        )
    }
}