import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { logout } from '../../actions/users'
import { Redirect } from 'react-router-dom'

class LogoutPage extends PureComponent {
	componentWillMount() {
		this.props.logout()
	}

	render() {
		return (
			<div>
				<Redirect to="/events" />
			</div>
		)
	}
}

const mapStateToProps = state => ({
	authenticated: state.currentUser !== null
})

export default connect(mapStateToProps, { logout })(LogoutPage)
