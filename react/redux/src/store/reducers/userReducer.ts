import { User, UserAction, UserActionsTypes } from '@src/models/User'

const initialState = {
  users: [] as User[],
  isLoading: false,
  error: ''
}

export const userReducer = (state = initialState, action: UserAction): typeof initialState => {
  switch (action.type) {
    case UserActionsTypes.FETCH_USERS:
      return { ...state, isLoading: true, error: '' }
    case UserActionsTypes.FETCH_USERS_ERROR:
      return { ...state, isLoading: false, error: action.payload }
    case UserActionsTypes.FETCH_USERS_SUCCESS:
      return { ...state, isLoading: false, error: '', users: action.payload }
    default:
      return state
  }
}
