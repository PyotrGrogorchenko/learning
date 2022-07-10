import { UserActionsTypes, UserAction } from '@src/models/User'
import axios from 'axios'
import { Dispatch } from 'redux'

export const fetchUsers = () => {
  return async (dispatch: Dispatch<UserAction>) => {
    try {
      dispatch({
        type: UserActionsTypes.FETCH_USERS
      })
      const res = await axios.get('https://jsonplaceholder.typicode.com/users')
      dispatch({
        type: UserActionsTypes.FETCH_USERS_SUCCESS,
        payload: res.data
      })
    } catch (e) {
      dispatch({
        type: UserActionsTypes.FETCH_USERS_ERROR,
        payload: 'Loading error!' })
    }
  }
}
