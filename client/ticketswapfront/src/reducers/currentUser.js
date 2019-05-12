import { USER_LOGIN_SUCCESS, USER_LOGOUT } from '../actions/users'
import { localStorageJwtKey, localStorageUserId, localStoragefirstName, localStoragelastName } from '../constants'

let initialState = null
// try {
//   const jwt = localStorage.getItem(localStorageJwtKey)
//   const userId = localStorage.getItem(localStorageUserId)
//   const firstName = localStorage.getItem(localStoragefirstName)
//   const lastName = localStorage.getItem(localStoragelastName)
//   if (jwt) {
//     initialState = { jwt, userId, firstName, lastName }
//   }
// }
// catch (e) {
//   console.log(`Error retrieving data from local storage`, e)
// }

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
