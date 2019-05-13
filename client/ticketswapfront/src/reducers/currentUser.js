import { USER_LOGIN_SUCCESS, USER_LOGOUT } from '../actions/users'
import { localStorageJwtKey, localStorageUserId, localStoragefirstName, localStoragelastName } from '../constants'

let initialState = null

export default function (state = initialState, { type, payload }) {
  console.log('payload', payload)
  switch (type) {
    case USER_LOGIN_SUCCESS:
      return payload

    case USER_LOGOUT:
      return null

    default:
      return state
  }
}
