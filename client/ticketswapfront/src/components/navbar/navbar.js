import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux';
import './navbar.css';


class navbar extends Component {
    render() {
        return (
            <div>
                <div className='navbar'>
                    <div className='logcontainer'>
                        <Link style={{ textDecoration: 'none', color: 'white', margin: '3px' }} to={`/login`} className="Loginbutton">Login</Link>
                        <Link style={{ textDecoration: 'none', color: 'white', margin: '3px' }} to={`/logout`} className="Logoutbutton">Logout</Link>
                    </div>
                    <div className='title'>Ticketswap
                </div>
                    <div className='signupcontainer'>
                        <Link className='signupbutton' style={{ textDecoration: 'none', color: 'white' }} to={`/signup`} className="Signupbutton">Sign up</Link>
                    </div>

                </div>
                {
                    this.props.user &&
                    <div className='username'>
                        {this.props.user.firstName} {this.props.user.lastName}
                    </div>
                }
            </div >


        )
    }
}

const mapStateToProps = function (state) {
    return {
        user: state.currentUser
    }
}

export default connect(mapStateToProps)(navbar)
