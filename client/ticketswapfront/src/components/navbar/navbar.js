import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux';


class navbar extends Component {
    render() {
        return (

            <div>
                Ticketswap
                <Link to={`/login`} className="Loginbutton">Login</Link>
                <Link to={`/logout`} className="Logoutbutton">Logout</Link>
                <Link to={`/signup`} className="Signupbutton">Sign up</Link>
                <div />

                {this.props.user &&
                    <div>
                        {this.props.user.firstName}{this.props.user.lastName}
                    </div>}

            </div>


        )
    }
}

const mapStateToProps = function (state) {
    return {
        user: state.currentUser
    }
}

export default connect(mapStateToProps)(navbar)
