import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class navbar extends Component {
    render() {
        return (
            <div>
                Ticketswap
                <Link to={`/login`} className="Loginbutton">Login</Link>
                <Link to={`/logout`} className="Loginbutton">Logout</Link>
                <button>Sign up</button>
            </div>

        )
    }
}
