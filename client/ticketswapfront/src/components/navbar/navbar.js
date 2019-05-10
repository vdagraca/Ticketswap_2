import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class navbar extends Component {
    render() {
        return (
            <div>
                Ticketswap
                <Link to={`/login`} className="Loginbutton">Login</Link>
                <Link to={`/logout`} className="Logoutbutton">Logout</Link>
                <Link to={`/signup`} className="Signupbutton">Sign up</Link>
            </div>

        )
    }
}
