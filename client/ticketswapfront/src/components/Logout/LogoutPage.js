import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { logout } from '../../actions/users'
import { Redirect } from 'react-router-dom'

class LogoutPage extends PureComponent {
	componentWillMount() {
		this.props.logout()
	}

	render() {
		// if (!this.props.authenticated) return (
		// 	<Redirect to="/events" />
		// )

		return (
			<div>
				<h1>Logging out...</h1>
				<Redirect to="/events" />
			</div>
		)
	}
}

const mapStateToProps = state => ({
	authenticated: state.currentUser !== null
})

export default connect(mapStateToProps, { logout })(LogoutPage)
