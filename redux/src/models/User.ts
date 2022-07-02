/* eslint-disable no-unused-vars */
export type User = {
  id: number
  name: string
  email: string
}

export enum UserActionsTypes {
  FETCH_USERS = 'FETCH_USERS',
  FETCH_USERS_SUCCESS = 'FETCH_USERS_SUCCESS',
  FETCH_USERS_ERROR = 'FETCH_USERS_ERROR'
}

type FetchAction = {
  type: UserActionsTypes.FETCH_USERS
}

type FetchSuccessAction = {
  type: UserActionsTypes.FETCH_USERS_SUCCESS
  payload: User[]
}

type FetchErrorAction = {
  type: UserActionsTypes.FETCH_USERS_ERROR
  payload: string
}

export type UserAction = FetchAction | FetchSuccessAction | FetchErrorAction
